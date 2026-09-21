package net.visacheckapp.app.ui.splash

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.LinearEasing
import androidx.compose.animation.core.RepeatMode
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.rememberInfiniteTransition
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel
import net.visacheckapp.app.BuildConfig
import net.visacheckapp.app.R
import kotlin.math.PI
import kotlin.math.cos
import kotlin.math.roundToInt
import kotlin.math.sin

private val BrandNavy = Color(0xFF090D1A)
private val BrandGold = Color(0xFFD9B15C)
private val BrandAmber = Color(0xFFF5A623)
private val TextWhite = Color(0xFFF1EAD9)
private val TextMuted = Color(0xFFA0AEC0)

@Composable
fun SplashScreen(
    isInitReady: () -> Boolean,
    onAnimationComplete: () -> Unit,
    modifier: Modifier = Modifier,
    viewModel: SplashViewModel = viewModel()
) {
    val context = LocalContext.current
    val phase by viewModel.currentPhase.collectAsState()
    val isCompleted by viewModel.isCompleted.collectAsState()

    // Kick off the sequence on first composition with crash safety
    LaunchedEffect(Unit) {
        try {
            viewModel.startSequence(context, isInitReady)
        } catch (e: Throwable) {
            android.util.Log.e("SplashScreen", "Launch error fallback: ${e.message}", e)
            onAnimationComplete()
        }
    }

    // Dismiss callback when sequence completes
    LaunchedEffect(isCompleted) {
        if (isCompleted) {
            onAnimationComplete()
        }
    }

    // ── Phase 3: Animate background color from White to Brand Navy ──
    val animatedBgColor by animateColorAsState(
        targetValue = if (phase == SplashPhase.PHASE_2_PLAIN_HOLD) Color.White else BrandNavy,
        animationSpec = tween(durationMillis = 400, easing = FastOutSlowInEasing),
        label = "splashBgColor"
    )

    Box(
        modifier = modifier
            .fillMaxSize()
            .background(animatedBgColor),
        contentAlignment = Alignment.Center
    ) {
        // ── Center Content: Logo + Wordmark + Loader ──
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center,
            modifier = Modifier.padding(horizontal = 24.dp)
        ) {
            // App Logo Icon (centered, launcher icon size ~96dp)
            Image(
                painter = painterResource(id = R.drawable.visa_check_logo),
                contentDescription = "Visa Check App Logo",
                modifier = Modifier.size(96.dp)
            )

            Spacer(modifier = Modifier.height(18.dp))

            // ── Phase 3+: Branded Wordmark ──
            AnimatedVisibility(
                visible = phase != SplashPhase.PHASE_2_PLAIN_HOLD,
                enter = fadeIn(animationSpec = tween(400)),
                exit = fadeOut()
            ) {
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    Text(
                        text = "ভিসা চেক করার অ্যাপ",
                        fontSize = 22.sp,
                        fontWeight = FontWeight.Bold,
                        color = TextWhite,
                        textAlign = TextAlign.Center
                    )
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(
                        text = "বাংলাদেশি পাসপোর্টধারীদের জন্য",
                        fontSize = 12.sp,
                        fontWeight = FontWeight.Medium,
                        color = TextMuted,
                        textAlign = TextAlign.Center
                    )
                }
            }

            Spacer(modifier = Modifier.height(32.dp))

            // ── Phase 4: Circular 5-Dot Wave Loader ──
            AnimatedVisibility(
                visible = phase == SplashPhase.PHASE_4_DOT_LOADER,
                enter = fadeIn(animationSpec = tween(300)),
                exit = fadeOut(animationSpec = tween(250))
            ) {
                CircularDotWaveLoader()
            }
        }

        // ── Phase 5: Footer Fade-in (Version + Copyright) ──
        AnimatedVisibility(
            visible = phase == SplashPhase.PHASE_5_FOOTER_STATIC,
            enter = fadeIn(animationSpec = tween(300)),
            exit = fadeOut(),
            modifier = Modifier
                .align(Alignment.BottomCenter)
                .padding(bottom = 36.dp)
        ) {
            Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                modifier = Modifier.fillMaxWidth()
            ) {
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.Center
                ) {
                    Image(
                        painter = painterResource(id = R.drawable.visa_check_logo),
                        contentDescription = null,
                        modifier = Modifier.size(16.dp)
                    )
                    Text(
                        text = "  VisaCheckApp",
                        fontSize = 12.sp,
                        fontWeight = FontWeight.SemiBold,
                        color = BrandGold
                    )
                }
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = "App Version: ${BuildConfig.VERSION_NAME}",
                    fontSize = 11.sp,
                    color = TextMuted
                )
                Spacer(modifier = Modifier.height(2.dp))
                Text(
                    text = "© ২০২৬ সর্বস্বত্ব সংরক্ষিত (visacheckapp.net)",
                    fontSize = 11.sp,
                    color = TextMuted
                )
            }
        }
    }
}

/**
 * Phase 4 Circular "Wave" Loader:
 * 5 dots arranged in a circle of radius ~22dp, each dot pulsing/scaling in sequence.
 * Alternates between gold (#D9B15C) and amber (#F5A623).
 */
@Composable
private fun CircularDotWaveLoader(
    modifier: Modifier = Modifier,
    radiusDp: Float = 22f,
    dotCount: Int = 5
) {
    val infiniteTransition = rememberInfiniteTransition(label = "dotWaveTransition")
    val waveProgress by infiniteTransition.animateFloat(
        initialValue = 0f,
        targetValue = 1f,
        animationSpec = infiniteRepeatable(
            animation = tween(durationMillis = 850, easing = LinearEasing),
            repeatMode = RepeatMode.Restart
        ),
        label = "waveProgress"
    )

    Box(
        modifier = modifier.size((radiusDp * 2 + 20).dp),
        contentAlignment = Alignment.Center
    ) {
        for (i in 0 until dotCount) {
            val angleRad = (i.toFloat() / dotCount.toFloat()) * (2f * PI.toFloat())
            val phaseOffset = i.toFloat() / dotCount.toFloat()
            val dotWave = sin((waveProgress - phaseOffset) * 2f * PI.toFloat())
            val scale = 0.55f + 0.45f * ((dotWave + 1f) / 2f)
            val alpha = 0.40f + 0.60f * ((dotWave + 1f) / 2f)

            val xOffset = (radiusDp * cos(angleRad)).roundToInt()
            val yOffset = (radiusDp * sin(angleRad)).roundToInt()

            val dotColor = if (i % 2 == 0) BrandGold else BrandAmber

            Box(
                modifier = Modifier
                    .offset { IntOffset(xOffset, yOffset) }
                    .size(8.dp)
                    .scale(scale)
                    .clip(CircleShape)
                    .background(dotColor.copy(alpha = alpha))
            )
        }
    }
}
