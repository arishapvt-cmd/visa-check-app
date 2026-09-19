package net.visacheckapp.app

import android.annotation.SuppressLint
import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import android.content.Intent
import android.graphics.Color
import android.graphics.Typeface
import android.net.Uri
import android.os.Bundle
import android.view.Gravity
import android.view.View
import android.view.ViewGroup
import android.webkit.*
import android.widget.*
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat

class PortalActivity : AppCompatActivity() {

    private lateinit var portalWebView: WebView
    private lateinit var progressBar: ProgressBar
    private lateinit var titleView: TextView
    private lateinit var subtitleView: TextView

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Edge-to-edge styling
        WindowCompat.setDecorFitsSystemWindows(window, false)
        window.statusBarColor = Color.parseColor("#020C1F")
        window.navigationBarColor = Color.parseColor("#020817")

        // Ensure status bar icons & navigation bar icons are white on dark bars
        val insetsController = WindowCompat.getInsetsController(window, window.decorView)
        insetsController.isAppearanceLightStatusBars = false
        insetsController.isAppearanceLightNavigationBars = false

        val targetUrl = intent.getStringExtra("url") ?: "https://google.com"
        val visaTitle = intent.getStringExtra("title") ?: "ভিসা স্ট্যাটাস যাচাই"
        val countryName = intent.getStringExtra("countryName") ?: "সরকারি পোর্টাল"
        val rawGuideTitle = intent.getStringExtra("guideTitle")?.takeIf { it.isNotBlank() }
        val rawGuideSubtitle = intent.getStringExtra("guideSubtitle")?.takeIf { it.isNotBlank() }
        val guideTitle = rawGuideTitle ?: "$countryName $visaTitle চেক করার সঠিক নিয়ম ও পোর্টাল গাইড"
        val guideSubtitle = rawGuideSubtitle ?: "পাসপোর্ট ও আবেদন নম্বর দিয়ে মাত্র ২ মিনিটে লাইভ ভেরিফিকেশনের পূর্ণাঙ্গ পদ্ধতি"
        val passportNo = intent.getStringExtra("passportNo")?.trim() ?: ""
        val appNo = intent.getStringExtra("appNo")?.trim() ?: ""

        // Auto-copy passport number to Android system clipboard if present
        if (passportNo.isNotEmpty()) {
            try {
                val clipboard = getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
                val clip = ClipData.newPlainText("Passport Number", passportNo)
                clipboard.setPrimaryClip(clip)
                Toast.makeText(this, "📋 পাসপোর্ট নম্বর ক্লিপবোর্ডে কপি হয়েছে: $passportNo", Toast.LENGTH_SHORT).show()
            } catch (_: Exception) {}
        }

        // ── Root Vertical Layout ─────────────────────────────────────────
        val rootLayout = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            setBackgroundColor(Color.parseColor("#020817"))
            layoutParams = ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
            )
        }

        // ── Top Navigation Bar (Status bar insets + sticky header) ────────
        val topBar = LinearLayout(this).apply {
            orientation = LinearLayout.HORIZONTAL
            gravity = Gravity.CENTER_VERTICAL
            setBackgroundColor(Color.parseColor("#020C1F"))
            setPadding(dpToPx(12), dpToPx(38), dpToPx(12), dpToPx(10))
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
            )
        }

        ViewCompat.setOnApplyWindowInsetsListener(topBar) { v, insets ->
            val statusInset = insets.getInsets(WindowInsetsCompat.Type.statusBars()).top
            v.setPadding(dpToPx(12), statusInset + dpToPx(6), dpToPx(12), dpToPx(8))
            insets
        }

        // Back Button
        val backBtn = TextView(this).apply {
            text = "‹"
            textSize = 32f
            setTextColor(Color.WHITE)
            setTypeface(null, Typeface.BOLD)
            gravity = Gravity.CENTER
            setPadding(dpToPx(8), 0, dpToPx(12), 0)
            setOnClickListener {
                finish()
            }
        }
        topBar.addView(backBtn)

        // Title + Subtitle Container
        val textContainer = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            layoutParams = LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1f)
        }

        titleView = TextView(this).apply {
            text = visaTitle
            textSize = 15f
            setTextColor(Color.WHITE)
            setTypeface(null, Typeface.BOLD)
            maxLines = 1
            ellipsize = android.text.TextUtils.TruncateAt.END
        }
        textContainer.addView(titleView)

        subtitleView = TextView(this).apply {
            text = "$countryName · 🔒 অফিসিয়াল সরকারি পোর্টাল"
            textSize = 11f
            setTextColor(Color.parseColor("#10B981")) // Emerald green
            maxLines = 1
            ellipsize = android.text.TextUtils.TruncateAt.END
        }
        textContainer.addView(subtitleView)
        topBar.addView(textContainer)

        // Reload Button
        val reloadBtn = TextView(this).apply {
            text = "↻"
            textSize = 22f
            setTextColor(Color.parseColor("#94A3B8"))
            gravity = Gravity.CENTER
            setPadding(dpToPx(8), 0, dpToPx(8), 0)
            setOnClickListener {
                portalWebView.reload()
            }
        }
        topBar.addView(reloadBtn)

        // External Browser Button (for users wanting to download PDF/print via Chrome)
        val extBtn = TextView(this).apply {
            text = "↗"
            textSize = 20f
            setTextColor(Color.parseColor("#38BDF8"))
            gravity = Gravity.CENTER
            setPadding(dpToPx(6), 0, dpToPx(8), 0)
            setOnClickListener {
                try {
                    val currentUrl = portalWebView.url ?: targetUrl
                    val intent = android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse(currentUrl)).apply {
                        addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK)
                    }
                    startActivity(intent)
                } catch (_: Exception) {}
            }
        }
        topBar.addView(extBtn)

        // Close Button
        val closeBtn = TextView(this).apply {
            text = "✕"
            textSize = 16f
            setTextColor(Color.parseColor("#EF4444"))
            setTypeface(null, Typeface.BOLD)
            gravity = Gravity.CENTER
            setPadding(dpToPx(8), 0, dpToPx(4), 0)
            setOnClickListener {
                finish()
            }
        }
        topBar.addView(closeBtn)

        rootLayout.addView(topBar)

        // ── Loading Progress Bar ──────────────────────────────────────────
        progressBar = ProgressBar(this, null, android.R.attr.progressBarStyleHorizontal).apply {
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                dpToPx(3)
            )
            max = 100
            progress = 15
        }
        rootLayout.addView(progressBar)

        // ── Helpful Bangla Guidance Strip ────────────────────────────────
        val banner = LinearLayout(this).apply {
            orientation = LinearLayout.HORIZONTAL
            gravity = Gravity.CENTER_VERTICAL
            setBackgroundColor(Color.parseColor("#091E42"))
            setPadding(dpToPx(14), dpToPx(8), dpToPx(14), dpToPx(8))
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
            )
        }

        val tipIcon = TextView(this).apply {
            text = "💡"
            textSize = 13f
            setPadding(0, 0, dpToPx(8), 0)
        }
        banner.addView(tipIcon)

        val tipText = TextView(this).apply {
            text = "এখানে পাসপোর্ট ও আবেদন নম্বর প্রদান করে ক্যাপচা পূরণ করুন এবং সরাসরি লাইভ স্ট্যাটাস দেখুন।"
            textSize = 11.5f
            setTextColor(Color.parseColor("#93C5FD"))
            layoutParams = LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1f)
        }
        banner.addView(tipText)

        rootLayout.addView(banner)

        // ── 1-Click Quick-Paste Action Toolstrip ─────────────────────────
        if (passportNo.isNotEmpty() || appNo.isNotEmpty()) {
            val quickPasteStrip = LinearLayout(this).apply {
                orientation = LinearLayout.HORIZONTAL
                gravity = Gravity.CENTER_VERTICAL
                setBackgroundColor(Color.parseColor("#061A3A"))
                setPadding(dpToPx(12), dpToPx(6), dpToPx(12), dpToPx(6))
                layoutParams = LinearLayout.LayoutParams(
                    LinearLayout.LayoutParams.MATCH_PARENT,
                    LinearLayout.LayoutParams.WRAP_CONTENT
                )
            }

            val pasteLabel = TextView(this).apply {
                text = "⚡ কুইক-পেস্ট:"
                textSize = 11f
                setTextColor(Color.parseColor("#38BDF8"))
                setTypeface(null, Typeface.BOLD)
                setPadding(0, 0, dpToPx(8), 0)
            }
            quickPasteStrip.addView(pasteLabel)

            if (passportNo.isNotEmpty()) {
                val passportPill = TextView(this).apply {
                    text = "📋 পাসপোর্ট [$passportNo]"
                    textSize = 11f
                    setTextColor(Color.WHITE)
                    setTypeface(null, Typeface.BOLD)
                    setPadding(dpToPx(10), dpToPx(4), dpToPx(10), dpToPx(4))
                    background = android.graphics.drawable.GradientDrawable().apply {
                        cornerRadius = dpToPx(12).toFloat()
                        setColor(Color.parseColor("#0284C7"))
                    }
                    isClickable = true
                    isFocusable = true
                    setOnClickListener {
                        copyAndInjectValue(passportNo, "পাসপোর্ট নম্বর")
                    }
                }
                val lp = LinearLayout.LayoutParams(LinearLayout.LayoutParams.WRAP_CONTENT, LinearLayout.LayoutParams.WRAP_CONTENT).apply {
                    setMargins(0, 0, dpToPx(8), 0)
                }
                quickPasteStrip.addView(passportPill, lp)
            }

            if (appNo.isNotEmpty()) {
                val appPill = TextView(this).apply {
                    text = "📋 আবেদন নং [$appNo]"
                    textSize = 11f
                    setTextColor(Color.WHITE)
                    setTypeface(null, Typeface.BOLD)
                    setPadding(dpToPx(10), dpToPx(4), dpToPx(10), dpToPx(4))
                    background = android.graphics.drawable.GradientDrawable().apply {
                        cornerRadius = dpToPx(12).toFloat()
                        setColor(Color.parseColor("#2563EB"))
                    }
                    isClickable = true
                    isFocusable = true
                    setOnClickListener {
                        copyAndInjectValue(appNo, "আবেদন নম্বর")
                    }
                }
                quickPasteStrip.addView(appPill)
            }

            rootLayout.addView(quickPasteStrip)
        }

        // ── Content Container (Holds WebView + Floating Guide Card) ───────
        val contentContainer = FrameLayout(this).apply {
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                0,
                1f
            )
        }

        // ── Portal WebView ────────────────────────────────────────────────
        portalWebView = WebView(this).apply {
            layoutParams = FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.MATCH_PARENT
            )
            setBackgroundColor(Color.parseColor("#FFFFFF"))
        }

        portalWebView.settings.apply {
            javaScriptEnabled = true
            domStorageEnabled = true
            databaseEnabled = true
            allowFileAccess = true
            allowContentAccess = true
            useWideViewPort = true
            loadWithOverviewMode = true
            setSupportZoom(true)
            builtInZoomControls = true
            displayZoomControls = false
            mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
            cacheMode = WebSettings.LOAD_DEFAULT
            setSupportMultipleWindows(false)
            javaScriptCanOpenWindowsAutomatically = true
            userAgentString = "Mozilla/5.0 (Linux; Android 14; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36"
        }

        // Accept third party cookies for official session tokens & CAPTCHAs
        CookieManager.getInstance().apply {
            setAcceptCookie(true)
            setAcceptThirdPartyCookies(portalWebView, true)
        }

        portalWebView.webChromeClient = object : WebChromeClient() {
            override fun onProgressChanged(view: WebView?, newProgress: Int) {
                progressBar.progress = newProgress
                if (newProgress >= 100) {
                    progressBar.visibility = View.GONE
                } else {
                    progressBar.visibility = View.VISIBLE
                }
            }
        }

        portalWebView.webViewClient = object : WebViewClient() {
            override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
                val url = request?.url?.toString() ?: return false
                // Block Bahrain NotAllowed.html duplicate-tab redirect
                if (url.contains("NotAllowed.html")) {
                    return true
                }
                if (url.startsWith("http://") || url.startsWith("https://")) {
                    return false
                }
                return try {
                    val intent = android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse(url)).apply {
                        addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK)
                    }
                    startActivity(intent)
                    true
                } catch (_: Exception) {
                    true
                }
            }

            override fun onReceivedSslError(view: WebView?, handler: SslErrorHandler?, error: android.net.http.SslError?) {
                // Official government websites often have intermediate certificates or local CAs
                handler?.proceed()
            }

            override fun onPageStarted(view: WebView?, url: String?, favicon: android.graphics.Bitmap?) {
                super.onPageStarted(view, url, favicon)
                findViewById<View>(999888)?.visibility = View.GONE
                progressBar.visibility = View.VISIBLE
                // Inject duplicate tab bypass early for Bahrain evisa
                if (url?.contains("evisa.gov.bh") == true) {
                    view?.evaluateJavascript("""
                        (function() {
                            window.IsDuplicate = function() { return false; };
                            var _origOpen = window.open;
                            window.open = function(u, t) {
                                if (u && u.indexOf('NotAllowed.html') !== -1) return null;
                                return _origOpen ? _origOpen.apply(this, arguments) : null;
                            };
                        })();
                    """.trimIndent(), null)
                }
            }

            override fun onPageFinished(view: WebView?, url: String?) {
                super.onPageFinished(view, url)
                progressBar.visibility = View.GONE

                // Safe bottom padding for web content so floating card never obstructs submit buttons
                view?.evaluateJavascript("""
                    (function() {
                        try {
                            var style = document.createElement('style');
                            style.innerHTML = 'body { padding-bottom: 120px !important; }';
                            document.head.appendChild(style);
                        } catch(e) {}
                    })();
                """.trimIndent(), null)

                // 1. Oman: Auto-fit viewport and mobile-responsive layout for Track Application
                if (url?.contains("evisa.rop.gov.om") == true) {
                    view?.evaluateJavascript("""
                        (function() {
                            var meta = document.querySelector('meta[name="viewport"]');
                            if (!meta) {
                                meta = document.createElement('meta');
                                meta.name = 'viewport';
                                document.head.appendChild(meta);
                            }
                            meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=2.5, user-scalable=yes';

                            var style = document.getElementById('oman-responsive-style');
                            if (!style) {
                                style = document.createElement('style');
                                style.id = 'oman-responsive-style';
                                document.head.appendChild(style);
                            }
                            style.innerHTML = `
                                * {
                                    box-sizing: border-box !important;
                                }
                                html, body {
                                    max-width: 100vw !important;
                                    overflow-x: hidden !important;
                                    margin: 0 !important;
                                    padding: 0 !important;
                                    width: 100% !important;
                                    background: #ffffff !important;
                                }
                                #wrapper, #content, .container, .main-container, .track-form-div, .trackTable, .aui-form {
                                    max-width: 100% !important;
                                    width: 100% !important;
                                    box-sizing: border-box !important;
                                    padding-left: 8px !important;
                                    padding-right: 8px !important;
                                    margin-left: 0 !important;
                                    margin-right: 0 !important;
                                }
                                .tableRow {
                                    display: flex !important;
                                    flex-direction: column !important;
                                    width: 100% !important;
                                    margin-bottom: 8px !important;
                                }
                                .tableCell, .tableInnerCell, .tableCellButton, .tableInnerCellButton {
                                    display: block !important;
                                    width: 100% !important;
                                    max-width: 100% !important;
                                    box-sizing: border-box !important;
                                    padding: 2px 0 !important;
                                }
                                #track_captcha {
                                    display: block !important;
                                    position: relative !important;
                                    width: 100% !important;
                                    max-width: 100% !important;
                                    margin: 8px 0 !important;
                                    padding: 0 !important;
                                }
                                .taglib-captcha {
                                    display: block !important;
                                    width: 100% !important;
                                    margin: 0 !important;
                                    padding: 0 !important;
                                }
                                img.captcha, img[alt*="Text to Identify"], .taglib-captcha img.captcha {
                                    display: inline-block !important;
                                    max-width: 160px !important;
                                    width: auto !important;
                                    height: auto !important;
                                    margin: 6px 0 !important;
                                    vertical-align: middle !important;
                                }
                                #trackcaptcha_refresh, .captcha-reload, a.captcha-reload {
                                    display: inline-block !important;
                                    margin: 6px 0 6px 12px !important;
                                    vertical-align: middle !important;
                                    position: static !important;
                                }
                                #trackcaptcha_refresh img, .trackcaptcha_refresh {
                                    display: inline-block !important;
                                    width: 28px !important;
                                    height: 28px !important;
                                    margin: 0 !important;
                                }
                                input[type="text"], select, .aui-field-input {
                                    width: 100% !important;
                                    max-width: 100% !important;
                                    height: 44px !important;
                                    font-size: 16px !important;
                                    box-sizing: border-box !important;
                                    padding: 6px 12px !important;
                                    border: 1.5px solid #CBD5E1 !important;
                                    border-radius: 8px !important;
                                }
                                .tableCellButton input, button[type="submit"], input[type="submit"] {
                                    width: 100% !important;
                                    height: 48px !important;
                                    font-size: 16px !important;
                                    font-weight: bold !important;
                                    background: #0284C7 !important;
                                    color: #ffffff !important;
                                    border: none !important;
                                    border-radius: 8px !important;
                                    margin-top: 8px !important;
                                }
                            `;
                        })();
                    """.trimIndent(), null)
                }

                // 2. India: Auto-scale and center StatusEnquiry form full-width
                if (url?.contains("indianvisaonline.gov.in") == true) {
                    view?.evaluateJavascript("""
                        (function() {
                            var meta = document.querySelector('meta[name="viewport"]');
                            if (!meta) {
                                meta = document.createElement('meta');
                                meta.name = 'viewport';
                                document.head.appendChild(meta);
                            }
                            meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=3.0, user-scalable=yes';

                            var style = document.getElementById('india-responsive-style');
                            if (!style) {
                                style = document.createElement('style');
                                style.id = 'india-responsive-style';
                                document.head.appendChild(style);
                            }
                            style.innerHTML = `
                                * {
                                    box-sizing: border-box !important;
                                }
                                html, body {
                                    width: 100% !important;
                                    max-width: 100vw !important;
                                    overflow-x: hidden !important;
                                    margin: 0 !important;
                                    padding: 0 !important;
                                    background: #ffffff !important;
                                }
                                .wrapper, .container, .form_container, form {
                                    width: 100% !important;
                                    max-width: 100% !important;
                                    min-width: 0 !important;
                                    margin: 0 auto !important;
                                    padding: 8px !important;
                                    box-sizing: border-box !important;
                                }
                                .row {
                                    display: flex !important;
                                    flex-direction: column !important;
                                    width: 100% !important;
                                    margin: 0 0 10px 0 !important;
                                    padding: 0 !important;
                                }
                                .col-1, .col-2, .col-3 {
                                    width: 100% !important;
                                    max-width: 100% !important;
                                    float: none !important;
                                    display: block !important;
                                    padding: 2px 0 !important;
                                    box-sizing: border-box !important;
                                }
                                .col-1 {
                                    font-size: 15px !important;
                                    font-weight: 700 !important;
                                    color: #1E293B !important;
                                    text-align: left !important;
                                }
                                .col-2 input[type="text"], input[type="text"] {
                                    width: 100% !important;
                                    max-width: 100% !important;
                                    height: 44px !important;
                                    font-size: 16px !important;
                                    border-radius: 8px !important;
                                    border: 1.5px solid #CBD5E1 !important;
                                    padding: 6px 12px !important;
                                    box-sizing: border-box !important;
                                    margin: 4px 0 !important;
                                }
                                .col-3 {
                                    font-size: 12px !important;
                                    color: #64748B !important;
                                    text-align: left !important;
                                }
                                .btn-group, .button-div {
                                    display: flex !important;
                                    flex-direction: column !important;
                                    width: 100% !important;
                                    gap: 8px !important;
                                }
                                input[type="submit"], input[type="button"], button, .button-div input {
                                    width: 100% !important;
                                    height: 46px !important;
                                    font-size: 16px !important;
                                    font-weight: bold !important;
                                    border-radius: 8px !important;
                                    margin: 4px 0 !important;
                                }
                                img[src*="captcha"], img[src*="Captcha"], .captcha_img {
                                    max-width: 180px !important;
                                    height: auto !important;
                                    display: inline-block !important;
                                }
                                body > div, body > table, form {
                                    zoom: 1.0 !important;
                                }
                            `;
                        })();
                    """.trimIndent(), null)
                }

                // 3. USA CEAC: Auto-scale to fill full mobile width
                if (url?.contains("ceac.state.gov") == true) {
                    view?.evaluateJavascript("""
                        (function() {
                            var meta = document.querySelector('meta[name="viewport"]');
                            if (!meta) {
                                meta = document.createElement('meta');
                                meta.name = 'viewport';
                                document.head.appendChild(meta);
                            }
                            meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=3.0, user-scalable=yes';

                            var style = document.getElementById('usa-responsive-style');
                            if (!style) {
                                style = document.createElement('style');
                                style.id = 'usa-responsive-style';
                                document.head.appendChild(style);
                            }
                            style.innerHTML = `
                                * {
                                    box-sizing: border-box !important;
                                }
                                html, body {
                                    width: 100% !important;
                                    max-width: 100vw !important;
                                    overflow-x: hidden !important;
                                    margin: 0 !important;
                                    padding: 0 !important;
                                    background: #ffffff !important;
                                }
                                #ctl00_pnlMenu, #nav, #nav-main {
                                    display: none !important;
                                }
                                #container, #branding, #branding-logo, table, tbody, tr, td, form, div, fieldset, #content_no_nav, #content-main {
                                    width: 100% !important;
                                    max-width: 100% !important;
                                    min-width: 0 !important;
                                    box-sizing: border-box !important;
                                }
                                #container {
                                    padding: 8px !important;
                                    margin: 0 auto !important;
                                }
                                #branding, #branding-logo {
                                    display: flex !important;
                                    flex-wrap: wrap !important;
                                    align-items: center !important;
                                }
                                #branding img, #branding-logo img {
                                    max-width: 100% !important;
                                    height: auto !important;
                                }
                                input[type="text"], select {
                                    width: 100% !important;
                                    max-width: 100% !important;
                                    height: 44px !important;
                                    font-size: 16px !important;
                                    box-sizing: border-box !important;
                                    padding: 6px 12px !important;
                                    border-radius: 8px !important;
                                    border: 1.5px solid #CBD5E1 !important;
                                    margin: 4px 0 !important;
                                }
                                input[type="submit"] {
                                    width: 100% !important;
                                    height: 48px !important;
                                    font-size: 16px !important;
                                    font-weight: bold !important;
                                    background: #990000 !important;
                                    color: #ffffff !important;
                                    border: none !important;
                                    border-radius: 8px !important;
                                    margin-top: 10px !important;
                                }
                                body {
                                    zoom: 1.0 !important;
                                }
                            `;
                        })();
                    """.trimIndent(), null)
                }

                // 4. India StatusEnquiry redirect handler (auto-click if landed on index)
                if (url?.contains("indianvisaonline.gov.in/visa/index.html") == true && targetUrl.contains("StatusEnquiry")) {
                    view?.evaluateJavascript("""
                        (function() {
                            var el = document.querySelector('a[href*="StatusEnquiry"]') || 
                                     Array.from(document.querySelectorAll('a')).find(function(a) {
                                         return (a.textContent || '').includes('Status Enquiry') || (a.textContent || '').includes('Visa Status');
                                     });
                            if (el) { el.click(); }
                        })();
                    """.trimIndent(), null)
                }

                // 5. Singapore ICA SAVE: Auto-click Enquire Application Status
                if (url?.contains("eservices.ica.gov.sg/esvclandingpage/save") == true) {
                    view?.evaluateJavascript("""
                        (function() {
                            var enq = document.getElementById('select-enq') || document.querySelector('img[alt*="Enquire Application Status"]');
                            if (enq) { enq.click(); }
                        })();
                    """.trimIndent(), null)
                }

                // 6. Canada: Auto-agree terms and submit to direct Identification Form
                if (url?.contains("services3.cic.gc.ca/ecas/security.do") == true) {
                    view?.evaluateJavascript("""
                        (function() {
                            var agree = document.getElementById('agree') || document.querySelector('input[name="securityInd"]');
                            if (agree && !agree.checked) {
                                agree.checked = true;
                                var btn = document.querySelector('input[name="_target1"]') || document.querySelector('input[value="Continue"]');
                                if (btn) { btn.click(); }
                            }
                        })();
                    """.trimIndent(), null)
                }

                // 7. Bahrain eVisa: Auto bypass duplicate tab detection & keep window active
                if (url?.contains("evisa.gov.bh") == true) {
                    view?.evaluateJavascript("""
                        (function() {
                            window.IsDuplicate = function() { return false; };
                            var notAllowed = document.querySelector('a[href*="NotAllowed.html"]');
                            if (notAllowed) { notAllowed.remove(); }
                        })();
                    """.trimIndent(), null)
                }

                // 8. Singapore MOM: dismiss tour if open
                if (url?.contains("mom.gov.sg") == true) {
                    view?.evaluateJavascript("""
                        (function() {
                            var skip = Array.from(document.querySelectorAll('button, a')).find(function(b) {
                                return (b.textContent || '').trim().toLowerCase() === 'skip';
                            });
                            if (skip) { skip.click(); }
                        })();
                    """.trimIndent(), null)
                }

                // 9. VFS Global: Auto-redirect to direct tracking input form if landed on info page
                if (url?.contains("vfsglobal.com") == true && url.contains("track-application")) {
                    view?.evaluateJavascript("""
                        (function() {
                            var trackLink = Array.from(document.querySelectorAll('a')).find(function(a) {
                                var text = (a.textContent || '').toLowerCase();
                                return text.includes('track your visa application status online') || text.includes('track online');
                            });
                            if (trackLink && trackLink.href) {
                                window.location.href = trackLink.href;
                            }
                        })();
                    """.trimIndent(), null)
                }
            }

            override fun onReceivedError(view: WebView?, request: WebResourceRequest?, error: WebResourceError?) {
                super.onReceivedError(view, request, error)
                if (request?.isForMainFrame == true) {
                    findViewById<View>(999888)?.visibility = View.VISIBLE
                    progressBar.visibility = View.GONE
                }
            }
        }

        // ── Floating Premium Guide Card (matching Image 4 blue box location) ─
        val guideCard = LinearLayout(this).apply {
            orientation = LinearLayout.HORIZONTAL
            gravity = Gravity.CENTER_VERTICAL
            elevation = dpToPx(12).toFloat()
            setPadding(dpToPx(12), dpToPx(9), dpToPx(10), dpToPx(9))

            // Premium dark glassmorphism gradient with electric sky-blue border
            background = android.graphics.drawable.GradientDrawable(
                android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT,
                intArrayOf(Color.parseColor("#091E42"), Color.parseColor("#0F2756"), Color.parseColor("#091E42"))
            ).apply {
                cornerRadius = dpToPx(16).toFloat()
                setStroke(dpToPx(1.5f), Color.parseColor("#2563EB"))
            }

            layoutParams = FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.WRAP_CONTENT,
                Gravity.BOTTOM
            ).apply {
                setMargins(dpToPx(12), 0, dpToPx(12), dpToPx(56))
            }
        }

        // Left Icon badge
        val cardIconBox = FrameLayout(this).apply {
            background = android.graphics.drawable.GradientDrawable().apply {
                shape = android.graphics.drawable.GradientDrawable.OVAL
                setColor(Color.parseColor("#1D4ED8"))
            }
            layoutParams = LinearLayout.LayoutParams(dpToPx(36), dpToPx(36)).apply {
                marginEnd = dpToPx(10)
            }
        }
        val cardIcon = TextView(this).apply {
            text = "📘"
            textSize = 17f
            gravity = Gravity.CENTER
            layoutParams = FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.MATCH_PARENT
            )
        }
        cardIconBox.addView(cardIcon)
        guideCard.addView(cardIconBox)

        // Center Content Container (Title + Subtitle)
        val cardContent = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            layoutParams = LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1f).apply {
                marginEnd = dpToPx(8)
            }
        }

        val cardBadge = TextView(this).apply {
            text = "🔍 অফিসিয়াল গাইড ও চেকিং নিয়ম"
            textSize = 9.5f
            setTextColor(Color.parseColor("#38BDF8"))
            setTypeface(null, Typeface.BOLD)
        }
        cardContent.addView(cardBadge)

        val cardTitle = TextView(this).apply {
            text = guideTitle
            textSize = 12f
            setTextColor(Color.WHITE)
            setTypeface(null, Typeface.BOLD)
            maxLines = 2
            ellipsize = android.text.TextUtils.TruncateAt.END
        }
        cardContent.addView(cardTitle)

        val cardSubtitle = TextView(this).apply {
            text = guideSubtitle
            textSize = 10f
            setTextColor(Color.parseColor("#93C5FD"))
            maxLines = 1
            ellipsize = android.text.TextUtils.TruncateAt.END
        }
        cardContent.addView(cardSubtitle)
        guideCard.addView(cardContent)

        // Right side: Action Button & Close
        val rightActionBox = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            gravity = Gravity.CENTER_HORIZONTAL
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.WRAP_CONTENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
            )
        }

        // Dismiss / Close Button
        val dismissBtn = TextView(this).apply {
            text = "✕"
            textSize = 13f
            setTextColor(Color.parseColor("#94A3B8"))
            setPadding(dpToPx(4), dpToPx(0), dpToPx(4), dpToPx(2))
            gravity = Gravity.CENTER
        }
        rightActionBox.addView(dismissBtn)

        // Action CTA
        val ctaBtn = TextView(this).apply {
            text = "পড়ুন ›"
            textSize = 10.5f
            setTextColor(Color.WHITE)
            setTypeface(null, Typeface.BOLD)
            setPadding(dpToPx(8), dpToPx(3), dpToPx(8), dpToPx(3))
            background = android.graphics.drawable.GradientDrawable().apply {
                cornerRadius = dpToPx(10).toFloat()
                setColor(Color.parseColor("#2563EB"))
            }
        }
        rightActionBox.addView(ctaBtn)
        guideCard.addView(rightActionBox)

        // Small floating bubble to re-open if dismissed
        val guideBubble = FrameLayout(this).apply {
            visibility = View.GONE
            background = android.graphics.drawable.GradientDrawable().apply {
                cornerRadius = dpToPx(18).toFloat()
                setColor(Color.parseColor("#0F2756"))
                setStroke(dpToPx(1.5f), Color.parseColor("#38BDF8"))
            }
            elevation = dpToPx(8).toFloat()
            setPadding(dpToPx(10), dpToPx(6), dpToPx(12), dpToPx(6))
            layoutParams = FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.WRAP_CONTENT,
                FrameLayout.LayoutParams.WRAP_CONTENT,
                Gravity.BOTTOM or Gravity.END
            ).apply {
                setMargins(0, 0, dpToPx(12), dpToPx(56))
            }
        }
        val bubbleText = TextView(this).apply {
            text = "📘 গাইড দেখুন"
            textSize = 11f
            setTextColor(Color.WHITE)
            setTypeface(null, Typeface.BOLD)
        }
        guideBubble.addView(bubbleText)

        // Dismiss action
        dismissBtn.setOnClickListener {
            guideCard.visibility = View.GONE
            guideBubble.visibility = View.VISIBLE
        }

        // Click bubble to reopen
        guideBubble.setOnClickListener {
            guideBubble.visibility = View.GONE
            guideCard.visibility = View.VISIBLE
        }

        // Click guide card action
        val onGuideClick = View.OnClickListener {
            Toast.makeText(this, "📘 শীঘ্রই \"$guideTitle\" এর পূর্ণাঙ্গ গাইড আর্টিকেল যুক্ত হচ্ছে!", Toast.LENGTH_SHORT).show()
        }
        guideCard.setOnClickListener(onGuideClick)
        cardContent.setOnClickListener(onGuideClick)
        ctaBtn.setOnClickListener(onGuideClick)

        contentContainer.addView(portalWebView)
        contentContainer.addView(guideCard)
        contentContainer.addView(guideBubble)

        (guideCard.layoutParams as? FrameLayout.LayoutParams)?.let { lp ->
            lp.bottomMargin = dpToPx(12)
            guideCard.layoutParams = lp
        }
        (guideBubble.layoutParams as? FrameLayout.LayoutParams)?.let { lp ->
            lp.bottomMargin = dpToPx(12)
            guideBubble.layoutParams = lp
        }

        // ── Graceful Bengali Error Fallback View ────────────────────────
        val errorOverlay = LinearLayout(this).apply {
            id = 999888
            orientation = LinearLayout.VERTICAL
            gravity = Gravity.CENTER
            setBackgroundColor(Color.parseColor("#020C1F"))
            setPadding(dpToPx(24), dpToPx(32), dpToPx(24), dpToPx(32))
            visibility = View.GONE
            layoutParams = FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.MATCH_PARENT
            )
        }

        val errIcon = TextView(this).apply {
            text = "⚠️"
            textSize = 42f
            gravity = Gravity.CENTER
        }
        errorOverlay.addView(errIcon)

        val errTitle = TextView(this).apply {
            text = "সরকারি সার্ভার সাময়িক ধীরগতি বা সংযোগ সমস্যা"
            textSize = 17f
            setTextColor(Color.WHITE)
            setTypeface(null, Typeface.BOLD)
            gravity = Gravity.CENTER
            setPadding(0, dpToPx(12), 0, dpToPx(6))
        }
        errorOverlay.addView(errTitle)

        val errDesc = TextView(this).apply {
            text = "সরকারি সার্ভার থেকে সাড়া পেতে দেরি হচ্ছে। এটি সাময়িক কারিগরি ধীরগতি হতে পারে। আপনি পুনরায় চেষ্টা করতে পারেন বা সরাসরি ক্রোম ব্রাউজারে সাইটটি দেখতে পারেন।"
            textSize = 12.5f
            setTextColor(Color.parseColor("#94A3B8"))
            gravity = Gravity.CENTER
            setPadding(0, 0, 0, dpToPx(24))
        }
        errorOverlay.addView(errDesc)

        val btnRow = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            gravity = Gravity.CENTER
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
            )
        }

        val retryBtn = Button(this).apply {
            text = "↻ পুনরায় চেষ্টা করুন"
            setTextColor(Color.WHITE)
            textSize = 14f
            setTypeface(null, Typeface.BOLD)
            background = android.graphics.drawable.GradientDrawable().apply {
                cornerRadius = dpToPx(14).toFloat()
                setColor(Color.parseColor("#0284C7"))
            }
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                dpToPx(48)
            ).apply {
                setMargins(0, 0, 0, dpToPx(10))
            }
            setOnClickListener {
                errorOverlay.visibility = View.GONE
                progressBar.visibility = View.VISIBLE
                portalWebView.reload()
            }
        }
        btnRow.addView(retryBtn)

        val openChromeBtn = Button(this).apply {
            text = "🌐 ক্রোম ব্রাউজারে খুলুন"
            setTextColor(Color.parseColor("#38BDF8"))
            textSize = 14f
            setTypeface(null, Typeface.BOLD)
            background = android.graphics.drawable.GradientDrawable().apply {
                cornerRadius = dpToPx(14).toFloat()
                setColor(Color.parseColor("#0F2756"))
                setStroke(dpToPx(1.5f), Color.parseColor("#38BDF8"))
            }
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                dpToPx(48)
            ).apply {
                setMargins(0, 0, 0, dpToPx(10))
            }
            setOnClickListener {
                try {
                    val cur = portalWebView.url ?: targetUrl
                    val i = Intent(Intent.ACTION_VIEW, Uri.parse(cur)).apply {
                        addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                    }
                    startActivity(i)
                } catch (_: Exception) {}
            }
        }
        btnRow.addView(openChromeBtn)

        val exitBtn = TextView(this).apply {
            text = "‹ মূল অ্যাপে ফিরে যান"
            textSize = 13f
            setTextColor(Color.parseColor("#94A3B8"))
            gravity = Gravity.CENTER
            setPadding(dpToPx(12), dpToPx(10), dpToPx(12), dpToPx(10))
            setOnClickListener { finish() }
        }
        btnRow.addView(exitBtn)

        errorOverlay.addView(btnRow)
        contentContainer.addView(errorOverlay)

        // ── Sticky Bottom Navigation Bar (Matches App's Footer) ───────────
        val bottomBar = LinearLayout(this).apply {
            orientation = LinearLayout.HORIZONTAL
            gravity = Gravity.CENTER_VERTICAL
            setBackgroundColor(Color.parseColor("#020C1F"))
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
            )
        }

        // Action 1: Back to App
        bottomBar.addView(createBottomNavItem("‹", "অ্যাপে ফিরুন") { finish() })

        // Action 2: Reload
        bottomBar.addView(createBottomNavItem("↻", "রিলোড") { portalWebView.reload() })

        // Action 3: Chrome / External Browser
        bottomBar.addView(createBottomNavItem("↗", "ব্রাউজার") {
            try {
                val cur = portalWebView.url ?: targetUrl
                val i = android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse(cur)).apply {
                    addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK)
                }
                startActivity(i)
            } catch (_: Exception) {}
        })

        // Action 4: Share
        bottomBar.addView(createBottomNavItem("🔗", "শেয়ার") {
            try {
                val cur = portalWebView.url ?: targetUrl
                val shareIntent = android.content.Intent(android.content.Intent.ACTION_SEND).apply {
                    type = "text/plain"
                    putExtra(android.content.Intent.EXTRA_SUBJECT, "$countryName $visaTitle")
                    putExtra(android.content.Intent.EXTRA_TEXT, "$countryName $visaTitle অফিশিয়াল পোর্টাল:\n$cur")
                    addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK)
                }
                startActivity(android.content.Intent.createChooser(shareIntent, "পোর্টাল লিঙ্ক শেয়ার করুন"))
            } catch (_: Exception) {}
        })

        ViewCompat.setOnApplyWindowInsetsListener(bottomBar) { v, insets ->
            val navInset = insets.getInsets(WindowInsetsCompat.Type.navigationBars()).bottom
            v.setPadding(dpToPx(6), dpToPx(8), dpToPx(6), navInset + dpToPx(6))
            insets
        }

        rootLayout.addView(contentContainer)
        rootLayout.addView(bottomBar)
        setContentView(rootLayout)

        // Load the official government portal
        portalWebView.loadUrl(targetUrl)
    }

    private var lastBackPressTime: Long = 0

    @Deprecated("Deprecated in Java")
    override fun onBackPressed() {
        val now = System.currentTimeMillis()
        if (now - lastBackPressTime < 2000) {
            finish()
            return
        }
        if (::portalWebView.isInitialized && portalWebView.canGoBack()) {
            val history = portalWebView.copyBackForwardList()
            if (history.currentIndex <= 1) {
                finish()
            } else {
                lastBackPressTime = now
                portalWebView.goBack()
            }
        } else {
            super.onBackPressed()
        }
    }

    private fun copyAndInjectValue(value: String, label: String) {
        try {
            val clipboard = getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
            val clip = ClipData.newPlainText(label, value)
            clipboard.setPrimaryClip(clip)
        } catch (_: Exception) {}

        val escaped = value.replace("\\", "\\\\").replace("\"", "\\\"").replace("'", "\\'")
        portalWebView.evaluateJavascript("""
            (function() {
                var val = "$escaped";
                var el = document.activeElement;
                if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) {
                    el.value = val;
                    el.dispatchEvent(new Event('input', { bubbles: true }));
                    el.dispatchEvent(new Event('change', { bubbles: true }));
                    return true;
                }
                var inputs = document.querySelectorAll('input[type="text"], input:not([type]), input[type="search"]');
                for (var i = 0; i < inputs.length; i++) {
                    var inp = inputs[i];
                    if (inp.offsetParent !== null && !inp.disabled && !inp.readOnly) {
                        inp.value = val;
                        inp.focus();
                        inp.dispatchEvent(new Event('input', { bubbles: true }));
                        inp.dispatchEvent(new Event('change', { bubbles: true }));
                        return true;
                    }
                }
                return false;
            })();
        """.trimIndent()) {
            Toast.makeText(this, "✅ $label পেস্ট করা হয়েছে!", Toast.LENGTH_SHORT).show()
        }
    }

    private fun createBottomNavItem(iconText: String, labelText: String, onClick: () -> Unit): LinearLayout {
        return LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            gravity = Gravity.CENTER
            layoutParams = LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1f)
            setPadding(dpToPx(4), dpToPx(6), dpToPx(4), dpToPx(6))
            isClickable = true
            isFocusable = true
            setOnClickListener { onClick() }

            val icon = TextView(context).apply {
                text = iconText
                textSize = 18f
                setTextColor(Color.parseColor("#38BDF8"))
                gravity = Gravity.CENTER
            }
            addView(icon)

            val label = TextView(context).apply {
                text = labelText
                textSize = 10.5f
                setTextColor(Color.parseColor("#94A3B8"))
                gravity = Gravity.CENTER
                setTypeface(null, Typeface.BOLD)
            }
            addView(label)
        }
    }

    private fun dpToPx(dp: Int): Int {
        return (dp * resources.displayMetrics.density).toInt()
    }

    private fun dpToPx(dp: Float): Int {
        return (dp * resources.displayMetrics.density).toInt()
    }
}
