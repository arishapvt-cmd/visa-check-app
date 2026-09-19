package net.visacheckapp.app

import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import android.net.Uri
import android.webkit.JavascriptInterface
import android.widget.Toast
import org.json.JSONArray

/**
 * JavaScript ↔ Android Native Bridge
 *
 * Exposes native Android capabilities to the WebView JS layer.
 * Called from JS as: window.AndroidBridge.methodName(args)
 *
 * Features:
 *  - shareContent()    → Native Android share sheet
 *  - saveFavorite()    → Persist favorite country to SharedPreferences
 *  - removeFavorite()  → Remove favorite
 *  - getFavorites()    → Return JSON array of saved favorites
 *  - isFavorite()      → Check if a country is saved
 *  - hapticFeedback()  → Native vibration feedback
 */
class AndroidBridge(private val context: Context) {

    private val prefs: SharedPreferences =
        context.getSharedPreferences("visa_app_prefs", Context.MODE_PRIVATE)

    // ── Share ──────────────────────────────────────────────────────────────

    @JavascriptInterface
    fun shareContent(title: String, text: String) {
        val intent = Intent(Intent.ACTION_SEND).apply {
            type = "text/plain"
            putExtra(Intent.EXTRA_SUBJECT, title)
            putExtra(Intent.EXTRA_TEXT, text)
        }
        val chooser = Intent.createChooser(intent, "শেয়ার করুন")
        chooser.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        context.startActivity(chooser)
    }

    // ── External Browser ──────────────────────────────────────────────────

    @JavascriptInterface
    fun openExternalUrl(url: String) {
        try {
            val intent = Intent(Intent.ACTION_VIEW, Uri.parse(url)).apply {
                addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
            }
            context.startActivity(intent)
        } catch (_: Exception) {}
    }

    // ── In-App Official Government Portal ─────────────────────────────────

    @JavascriptInterface
    fun openGovPortal(url: String, title: String, countryName: String) {
        openGovPortalWithGuide(url, title, countryName, "", "")
    }

    @JavascriptInterface
    fun openGovPortalWithGuide(url: String, title: String, countryName: String, guideTitle: String, guideSubtitle: String) {
        openGovPortalWithData(url, title, countryName, guideTitle, guideSubtitle, "", "")
    }

    @JavascriptInterface
    fun openGovPortalWithData(
        url: String,
        title: String,
        countryName: String,
        guideTitle: String,
        guideSubtitle: String,
        passportNo: String,
        appNo: String
    ) {
        try {
            val intent = Intent(context, PortalActivity::class.java).apply {
                putExtra("url", url)
                putExtra("title", title)
                putExtra("countryName", countryName)
                putExtra("guideTitle", guideTitle)
                putExtra("guideSubtitle", guideSubtitle)
                putExtra("passportNo", passportNo)
                putExtra("appNo", appNo)
                addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
            }
            context.startActivity(intent)
        } catch (_: Exception) {
            openExternalUrl(url)
        }
    }

    @JavascriptInterface
    fun copyToClipboard(label: String, text: String) {
        try {
            val clipboard = context.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
            val clip = ClipData.newPlainText(label, text)
            clipboard.setPrimaryClip(clip)
            Toast.makeText(context, "$label কপি হয়েছে: $text", Toast.LENGTH_SHORT).show()
        } catch (_: Exception) {}
    }

    // ── Favorites / Wishlist ───────────────────────────────────────────────

    @JavascriptInterface
    fun saveFavorite(countryId: String) {
        val current = getFavoriteSet()
        current.add(countryId)
        prefs.edit().putStringSet("favorites", current).apply()
    }

    @JavascriptInterface
    fun removeFavorite(countryId: String) {
        val current = getFavoriteSet()
        current.remove(countryId)
        prefs.edit().putStringSet("favorites", current).apply()
    }

    @JavascriptInterface
    fun isFavorite(countryId: String): Boolean {
        return getFavoriteSet().contains(countryId)
    }

    @JavascriptInterface
    fun getFavorites(): String {
        val arr = JSONArray()
        getFavoriteSet().forEach { arr.put(it) }
        return arr.toString()
    }

    // ── Haptic feedback ───────────────────────────────────────────────────

    @JavascriptInterface
    fun hapticFeedback() {
        try {
            val vibrator = context.getSystemService(Context.VIBRATOR_SERVICE)
                    as android.os.Vibrator
            @Suppress("DEPRECATION")
            vibrator.vibrate(40)
        } catch (_: Exception) {}
    }

    // ── System Bars Theme Sync (Light / Dark mode icons) ──────────────────

    @JavascriptInterface
    fun setSystemBarsTheme(isDark: Boolean) {
        if (context is android.app.Activity) {
            context.runOnUiThread {
                val window = context.window
                val controller = androidx.core.view.WindowCompat.getInsetsController(window, window.decorView)
                controller.isAppearanceLightStatusBars = !isDark
                controller.isAppearanceLightNavigationBars = !isDark
            }
        }
    }

    // ── App info ──────────────────────────────────────────────────────────

    @JavascriptInterface
    fun getAppVersion(): String = "1.0.0"

    @JavascriptInterface
    fun isAndroidApp(): Boolean = true

    // ── Helpers ───────────────────────────────────────────────────────────

    private fun getFavoriteSet(): MutableSet<String> =
        (prefs.getStringSet("favorites", emptySet()) ?: emptySet()).toMutableSet()
}
