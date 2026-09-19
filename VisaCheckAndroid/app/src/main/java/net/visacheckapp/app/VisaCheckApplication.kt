package net.visacheckapp.app

import android.app.Application
import android.webkit.WebView
import androidx.webkit.WebViewCompat

/**
 * Pre-warms the WebView Chromium engine before MainActivity is even created.
 *
 * Android's WebView is powered by the Chromium renderer. On a cold app launch,
 * instantiating the FIRST WebView takes ~1-2 seconds because:
 *   1. The Chromium shared library must be loaded into memory.
 *   2. GPU process / render process must be spawned.
 *   3. V8 JavaScript engine must be initialised.
 *
 * By calling WebView.setWebContentsDebuggingEnabled() and creating a
 * throwaway WebView in Application.onCreate() (which runs in the background
 * before any Activity), the engine is ready the moment MainActivity loads.
 *
 * This is the same technique used by apps like Instagram, Twitter, and AliExpress
 * to eliminate WebView cold-start lag.
 */
class VisaCheckApplication : Application() {

    override fun onCreate() {
        super.onCreate()
        prewarmWebView()
    }

    private fun prewarmWebView() {
        // Run on a background thread so Application.onCreate() returns instantly
        Thread {
            try {
                // This triggers Chromium library load + V8 init on background thread.
                // By the time the user sees MainActivity, it's already warm.
                WebView.setWebContentsDebuggingEnabled(false)

                // Creating a WebView instance forces the engine to initialise.
                // We don't attach it to any window — it's just a warm-up.
                val warmup = WebView(applicationContext)
                warmup.destroy() // Immediately free view resources; engine stays warm
            } catch (_: Exception) {
                // If pre-warm fails, app still works — just falls back to normal load time
            }
        }.also {
            it.name = "WebView-Prewarm"
            it.isDaemon = true
            it.priority = Thread.MAX_PRIORITY
            it.start()
        }
    }
}
