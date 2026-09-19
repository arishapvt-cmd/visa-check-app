package net.visacheckapp.app

import android.annotation.SuppressLint
import android.content.Intent
import android.graphics.Bitmap
import android.graphics.Color
import android.net.Uri
import android.os.Bundle
import android.view.View
import android.view.WindowManager
import android.webkit.*
import android.widget.FrameLayout
import android.widget.ProgressBar
import androidx.appcompat.app.AppCompatActivity
import androidx.core.splashscreen.SplashScreen.Companion.installSplashScreen
import androidx.core.view.WindowCompat
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout
import java.io.ByteArrayInputStream

class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView
    private lateinit var progressBar: ProgressBar
    private lateinit var swipeRefresh: SwipeRefreshLayout

    private val ASSET_DOMAIN = "appassets.androidplatform.net"
    private val APP_URL = "https://$ASSET_DOMAIN/"

    // Keep splash on screen until WebView content is ready
    private var webViewReady = false

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {

        // ── SplashScreen API: must be called BEFORE super.onCreate() ───────
        // This keeps the OS splash screen visible until we call setKeepOnScreenCondition(false)
        val splashScreen = installSplashScreen()
        splashScreen.setKeepOnScreenCondition { !webViewReady }

        super.onCreate(savedInstanceState)

        // ── Full-screen edge-to-edge ──────────────────────────────────────
        WindowCompat.setDecorFitsSystemWindows(window, false)
        window.statusBarColor = Color.TRANSPARENT
        window.navigationBarColor = Color.TRANSPARENT

        // Initialize system bar icons (defaults to dark theme / light icons)
        val insetsController = WindowCompat.getInsetsController(window, window.decorView)
        insetsController.isAppearanceLightStatusBars = false
        insetsController.isAppearanceLightNavigationBars = false

        // ── Layout ────────────────────────────────────────────────────────
        val rootLayout = FrameLayout(this).apply {
            setBackgroundColor(Color.parseColor("#020817"))
        }

        swipeRefresh = SwipeRefreshLayout(this).apply {
            setColorSchemeColors(
                Color.parseColor("#0ea5e9"),
                Color.parseColor("#6366f1")
            )
            setProgressBackgroundColorSchemeColor(Color.parseColor("#0d1526"))
        }

        webView = WebView(this).apply {
            setBackgroundColor(Color.parseColor("#020817"))
        }

        progressBar = ProgressBar(this, null, android.R.attr.progressBarStyleHorizontal).apply {
            layoutParams = FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT, 6
            ).also { it.topMargin = 0 }
            max = 100
            progressTintList = android.content.res.ColorStateList.valueOf(
                Color.parseColor("#0ea5e9")
            )
            visibility = View.GONE
        }

        swipeRefresh.addView(webView)
        rootLayout.addView(swipeRefresh, FrameLayout.LayoutParams(
            FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT
        ))
        rootLayout.addView(progressBar)
        setContentView(rootLayout)

        swipeRefresh.setOnRefreshListener { webView.reload() }

        setupWebView()
        val targetUrl = intent?.getStringExtra("url") ?: APP_URL
        webView.loadUrl(targetUrl)

        // ── Hardware / System Back Button handling for Next.js SPA ──────
        onBackPressedDispatcher.addCallback(this, object : androidx.activity.OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                if (webView.canGoBack()) {
                    webView.goBack()
                } else {
                    webView.evaluateJavascript(
                        "(function(){ if (window.location.pathname !== '/' && window.location.pathname !== '') { window.history.back(); return true; } return false; })()"
                    ) { result ->
                        if (result != "true") {
                            isEnabled = false
                            onBackPressedDispatcher.onBackPressed()
                            isEnabled = true
                        }
                    }
                }
            }
        })
    }

    // ─────────────────────────────────────────────────────────────────────
    //  ASSET SERVING — gzip-first, with Cache-Control headers
    // ─────────────────────────────────────────────────────────────────────
    private fun serveAsset(path: String): WebResourceResponse? {
        val remappedPath = path.replace("/_next/", "/next_files/")
        val clean = remappedPath.trimStart('/')

        val assetPath = when {
            clean.isEmpty()                               -> "out/index.html"
            clean == "index.html"                        -> "out/index.html"
            clean.endsWith("/")                          -> "out/${clean}index.html"
            !clean.substringAfterLast('/').contains('.') -> "out/$clean/index.html"
            else                                         -> "out/$clean"
        }

        val mime = when {
            assetPath.endsWith(".html")  -> "text/html"
            assetPath.endsWith(".js")    -> "application/javascript"
            assetPath.endsWith(".css")   -> "text/css"
            assetPath.endsWith(".png")   -> "image/png"
            assetPath.endsWith(".jpg") ||
            assetPath.endsWith(".jpeg")  -> "image/jpeg"
            assetPath.endsWith(".svg")   -> "image/svg+xml"
            assetPath.endsWith(".ico")   -> "image/x-icon"
            assetPath.endsWith(".woff2") -> "font/woff2"
            assetPath.endsWith(".woff")  -> "font/woff"
            assetPath.endsWith(".json")  -> "application/json"
            assetPath.endsWith(".webp")  -> "image/webp"
            else                         -> "application/octet-stream"
        }

        val cacheHeaders = mapOf(
            "Cache-Control" to "public, max-age=31536000, immutable",
            "Access-Control-Allow-Origin" to "*"
        )

        // ── Serve from assets with long-lived cache headers ───────────────
        return try {
            val stream = assets.open(assetPath)
            WebResourceResponse(mime, "UTF-8", 200, "OK", cacheHeaders, stream)
        } catch (_: Exception) {
            null
        }
    }

    @SuppressLint("SetJavaScriptEnabled")
    private fun setupWebView() {
        webView.settings.apply {
            javaScriptEnabled = true
            domStorageEnabled = true
            databaseEnabled = true
            allowFileAccess = false
            allowContentAccess = false
            loadWithOverviewMode = true
            useWideViewPort = true
            setSupportZoom(false)
            builtInZoomControls = false
            displayZoomControls = false
            mixedContentMode = WebSettings.MIXED_CONTENT_NEVER_ALLOW
            // LOAD_DEFAULT: use HTTP cache for previously loaded resources
            cacheMode = WebSettings.LOAD_DEFAULT
            @Suppress("DEPRECATION")
            setRenderPriority(WebSettings.RenderPriority.HIGH)
            userAgentString = "VisaCheckApp/1.0 Android $userAgentString"
            mediaPlaybackRequiresUserGesture = false
            offscreenPreRaster = true
        }

        // GPU-accelerated rendering layer
        webView.setLayerType(View.LAYER_TYPE_HARDWARE, null)

        // ── Register native bridge — JS calls window.AndroidBridge.xxx() ─
        webView.addJavascriptInterface(AndroidBridge(this), "AndroidBridge")

        webView.webViewClient = object : WebViewClient() {

            override fun shouldInterceptRequest(
                view: WebView?,
                request: WebResourceRequest
            ): WebResourceResponse? {
                if (request.url.host != ASSET_DOMAIN) return null
                return serveAsset(request.url.path ?: "/")
            }

            override fun shouldOverrideUrlLoading(
                view: WebView?,
                request: WebResourceRequest?
            ): Boolean {
                val url = request?.url?.toString() ?: return false
                return if (url.contains(ASSET_DOMAIN)) {
                    false
                } else {
                    try { startActivity(Intent(Intent.ACTION_VIEW, Uri.parse(url))) }
                    catch (_: Exception) {}
                    true
                }
            }

            override fun onPageStarted(view: WebView?, url: String?, favicon: Bitmap?) {
                super.onPageStarted(view, url, favicon)
                // Only show progress bar on sub-page navigations (not initial load)
                if (webViewReady) {
                    progressBar.visibility = View.VISIBLE
                    progressBar.progress = 10
                }
            }

            override fun onPageFinished(view: WebView?, url: String?) {
                super.onPageFinished(view, url)

                progressBar.progress = 100
                progressBar.postDelayed({ progressBar.visibility = View.GONE }, 300)
                swipeRefresh.isRefreshing = false

                // Signal SplashScreen to dismiss — app is ready!
                if (!webViewReady) {
                    webViewReady = true
                }

                // Mobile UX polish: disable tap highlight + callout
                view?.evaluateJavascript("""
                    (function(){
                        var s=document.createElement('style');
                        s.textContent='body{-webkit-tap-highlight-color:transparent;}'+
                            '*{-webkit-touch-callout:none;user-select:none;}'+
                            'input,textarea{user-select:text!important;}';
                        document.head.appendChild(s);
                    })();
                """.trimIndent(), null)
            }

            override fun onReceivedError(
                view: WebView?,
                request: WebResourceRequest?,
                error: WebResourceError?
            ) {
                if (request?.isForMainFrame == true) {
                    if (!webViewReady) webViewReady = true  // Dismiss splash even on error
                    view?.postDelayed({ view.loadUrl(APP_URL) }, 800)
                }
            }
        }

        WebView.setWebContentsDebuggingEnabled(true)

        webView.webChromeClient = object : WebChromeClient() {
            override fun onProgressChanged(view: WebView?, newProgress: Int) {
                progressBar.progress = newProgress
                if (newProgress == 100) {
                    progressBar.postDelayed({ progressBar.visibility = View.GONE }, 300)
                }
            }
            override fun onConsoleMessage(m: ConsoleMessage?): Boolean {
                if (m != null) {
                    android.util.Log.d("VisaCheckJS", "[${m.messageLevel()}] ${m.message()} (${m.sourceId()}:${m.lineNumber()})")
                }
                return true
            }
        }
    }

    override fun onBackPressed() {
        if (webView.canGoBack()) webView.goBack()
        else super.onBackPressed()
    }

    override fun onNewIntent(intent: Intent?) {
        super.onNewIntent(intent)
        setIntent(intent)
        val targetUrl = intent?.getStringExtra("url")
        if (!targetUrl.isNullOrEmpty()) {
            webView.loadUrl(targetUrl)
        }
    }

    override fun onResume()  { super.onResume();  webView.onResume() }
    override fun onPause()   { super.onPause();   webView.onPause() }
    override fun onDestroy() { webView.destroy(); super.onDestroy() }
}
