#!/bin/bash
# post-build-rename.sh
# Renames _next/ to next_files/ in the out/ directory
# and updates all HTML/JS/CSS references accordingly.

set -e

OUT_DIR="$(cd "$(dirname "$0")/.." && pwd)/out"

if [ ! -d "$OUT_DIR/_next" ]; then
  echo "❌ No _next folder found in $OUT_DIR"
  exit 1
fi

echo "📁 Renaming _next → next_files..."
rm -rf "$OUT_DIR/next_files"
mv "$OUT_DIR/_next" "$OUT_DIR/next_files"

echo "🔍 Updating references in HTML/JS/JSON files..."
find "$OUT_DIR" -type f \( -name "*.html" -o -name "*.js" -o -name "*.json" -o -name "*.txt" \) | while read -r file; do
  if grep -q "/_next/" "$file" 2>/dev/null; then
    sed -i '' 's|/_next/|/next_files/|g' "$file"
  fi
done

echo "✅ Done! _next → next_files rename complete."
ls "$OUT_DIR/next_files/static/chunks/"*.css 2>/dev/null | head -3
