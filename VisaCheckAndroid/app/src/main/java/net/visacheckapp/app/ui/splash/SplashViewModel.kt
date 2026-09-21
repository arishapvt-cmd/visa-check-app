package net.visacheckapp.app.ui.splash

import android.content.Context
import android.provider.Settings
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import kotlinx.coroutines.withTimeoutOrNull
import kotlinx.coroutines.delay

enum class SplashPhase {
    PHASE_2_PLAIN_HOLD,     // Static plain icon on white background
    PHASE_3_BRANDED_FADE,   // Cross-fade to branded navy background & wordmark
    PHASE_4_DOT_LOADER,     // Circular wave 5-dot loader active
    PHASE_5_FOOTER_STATIC   // Loader fades out, version/footer fades in, then complete
}

class SplashViewModel : ViewModel() {

    private val _currentPhase = MutableStateFlow(SplashPhase.PHASE_2_PLAIN_HOLD)
    val currentPhase: StateFlow<SplashPhase> = _currentPhase.asStateFlow()

    private val _isCompleted = MutableStateFlow(false)
    val isCompleted: StateFlow<Boolean> = _isCompleted.asStateFlow()

    /**
     * Executes the strict 5-phase sequence with guaranteed minimum timing,
     * maximum timeout bounds, crash-safety, and accessibility support.
     */
    fun startSequence(
        context: Context,
        isInitReady: () -> Boolean
    ) {
        viewModelScope.launch {
            try {
                // Check if user has "Remove animations" / reduced motion enabled
                val reducedMotion = isReducedMotionEnabled(context)
                if (reducedMotion) {
                    _currentPhase.value = SplashPhase.PHASE_5_FOOTER_STATIC
                    delay(500)
                    _isCompleted.value = true
                    return@launch
                }

                // ── PHASE 2: Plain Logo Hold (~1150ms hold on white) ──
                _currentPhase.value = SplashPhase.PHASE_2_PLAIN_HOLD
                delay(1150)

                // ── PHASE 3: Cross-fade to Branded Splash (~400ms transition) ──
                _currentPhase.value = SplashPhase.PHASE_3_BRANDED_FADE
                delay(400)

                // ── PHASE 4: Circular Dot Loader (min 600ms, max 4000ms timeout) ──
                _currentPhase.value = SplashPhase.PHASE_4_DOT_LOADER
                val phase4StartTime = System.currentTimeMillis()

                withTimeoutOrNull(4000L) {
                    // Poll or wait for initialization readiness
                    while (!isInitReady()) {
                        delay(50)
                    }
                }

                // Guarantee minimum 600ms display time for Phase 4
                val elapsed = System.currentTimeMillis() - phase4StartTime
                if (elapsed < 600L) {
                    delay(600L - elapsed)
                }

                // ── PHASE 5: Footer Fade-in & Hold (~350ms static state) ──
                _currentPhase.value = SplashPhase.PHASE_5_FOOTER_STATIC
                delay(350)

                // Mark sequence completed — ready to navigate/dismiss
                _isCompleted.value = true

            } catch (e: Throwable) {
                // Mandatory crash safety: if ANYTHING fails, dismiss immediately
                android.util.Log.e("SplashViewModel", "Splash sequence error fallback: ${e.message}", e)
                _isCompleted.value = true
            }
        }
    }

    private fun isReducedMotionEnabled(context: Context): Boolean {
        return try {
            val durationScale = Settings.Global.getFloat(
                context.contentResolver,
                Settings.Global.ANIMATOR_DURATION_SCALE,
                1.0f
            )
            val transitionScale = Settings.Global.getFloat(
                context.contentResolver,
                Settings.Global.TRANSITION_ANIMATION_SCALE,
                1.0f
            )
            durationScale == 0f || transitionScale == 0f
        } catch (_: Throwable) {
            false
        }
    }
}
