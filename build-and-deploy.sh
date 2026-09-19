#!/bin/bash
# ======================================================
# VisaCheckApp - Build & Deploy Script
# Usage: ./build-and-deploy.sh [debug|release]
# ======================================================

set -e

BUILD_TYPE="${1:-debug}"
WORKSPACE="/Volumes/My All Impotent File/Visa Check App"
NEXTJS_DIR="$WORKSPACE/visacheckapp"
ANDROID_DIR="$WORKSPACE/VisaCheckAndroid"
ASSETS_DIR="$ANDROID_DIR/app/src/main/assets/out"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo " 🚀 VisaCheckApp Build Script - $BUILD_TYPE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Step 1: Build Next.js
echo "📦 Step 1: Building Next.js..."
cd "$NEXTJS_DIR"
npm run build
echo "✅ Next.js build complete"

# Step 2: Copy assets
echo "📋 Step 2: Copying assets..."
rm -rf "$ASSETS_DIR"
mkdir -p "$ASSETS_DIR"
rsync -a --exclude='_next' "$NEXTJS_DIR/out/" "$ASSETS_DIR/"

# CRITICAL FIX: _next → next_files
mkdir -p "$ASSETS_DIR/next_files"
cp -r "$NEXTJS_DIR/out/_next/." "$ASSETS_DIR/next_files/"
CHUNKS=$(ls "$ASSETS_DIR/next_files/static/chunks/" 2>/dev/null | wc -l | tr -d ' ')
echo "✅ Assets copied ($CHUNKS JS chunks in next_files)"

# Step 3: Build Android
cd "$ANDROID_DIR"
export JAVA_HOME="/Users/azad/Library/Java/JavaVirtualMachines/temurin-17.0.20.1/Contents/Home"
export ANDROID_HOME="/Users/azad/Library/Android/sdk"

if [ "$BUILD_TYPE" = "release" ]; then
    echo "🔐 Step 3: Building Release Bundle (.aab)..."
    ./gradlew bundleRelease --no-daemon
    echo "✅ .aab: $ANDROID_DIR/app/build/outputs/bundle/release/app-release.aab"
else
    echo "🔨 Step 3: Building Debug APK..."
    ./gradlew assembleDebug --no-daemon
    ADB="$ANDROID_HOME/platform-tools/adb"
    DEVICE=$($ADB devices | grep -v "List" | grep "device$" | awk '{print $1}' | head -1)
    if [ -n "$DEVICE" ]; then
        $ADB install -r "$ANDROID_DIR/app/build/outputs/apk/debug/app-debug.apk"
        $ADB shell am force-stop net.visacheckapp.app
        sleep 0.5
        $ADB shell am start -n net.visacheckapp.app/.MainActivity
        echo "✅ Installed & launched on $DEVICE"
    fi
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo " ✨ Done!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
