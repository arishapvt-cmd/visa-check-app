"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface DraggableBackButtonProps {
  href?: string;
}

export default function DraggableBackButton({ href }: DraggableBackButtonProps) {
  const router = useRouter();
  const { isDark } = useTheme();

  /* ── Initial position: bottom-left, above Android nav bar ─────── */
  const [pos, setPos] = useState({ x: 16, y: 600 }); // SSR safe fallback
  const [isDragging, setIsDragging] = useState(false);
  const [isIdle, setIsIdle] = useState(false);       // fades to 40% opacity when idle

  /* Compute  /* Set position based on actual window height after mount */
  useEffect(() => {
    const place = () => {
      const vh = window.innerHeight;
      setPos({ x: 16, y: Math.max(320, vh - 160) });
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, []);

  /* Idle fade after 4s of no interaction → semi-transparent but still visible */
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wakeUp = useCallback(() => {
    setIsIdle(false);
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => setIsIdle(true), 4000);
  }, []);
  useEffect(() => { wakeUp(); return () => { if (idleTimer.current) clearTimeout(idleTimer.current); }; }, [wakeUp]);

  /* ── Drag internals ───────────────────────────────────────────── */
  const btnRef      = useRef<HTMLDivElement>(null);
  const dragging    = useRef(false);
  const hasMoved    = useRef(false);
  const anchor      = useRef({ cx: 0, cy: 0, px: 0, py: 0 });
  const rafId       = useRef<number | null>(null);

  const clamp = useCallback((nx: number, ny: number) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    return {
      x: Math.max(0, Math.min(vw - 56, nx)),
      y: Math.max(64, Math.min(vh - 136, ny)),
    };
  }, []);

  /* TOUCH */
  const onTouchStart = useCallback((e: TouchEvent) => {
    const t = e.touches[0];
    anchor.current = { cx: t.clientX, cy: t.clientY, px: pos.x, py: pos.y };
    dragging.current = true;
    hasMoved.current = false;
    setIsDragging(true);
    wakeUp();
  }, [pos, wakeUp]);

  const onTouchMove = useCallback((e: TouchEvent) => {
    if (!dragging.current) return;
    e.preventDefault();
    const t = e.touches[0];
    const dx = t.clientX - anchor.current.cx;
    const dy = t.clientY - anchor.current.cy;
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) hasMoved.current = true;
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() =>
      setPos(clamp(anchor.current.px + dx, anchor.current.py + dy))
    );
  }, [clamp]);

  const onTouchEnd = useCallback(() => {
    dragging.current = false;
    setIsDragging(false);
    wakeUp();
    if (!hasMoved.current) {
      if (href) router.push(href);
      else router.back();
    }
  }, [href, router, wakeUp]);

  /* MOUSE (desktop preview) */
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    anchor.current = { cx: e.clientX, cy: e.clientY, px: pos.x, py: pos.y };
    dragging.current = true;
    hasMoved.current = false;
    setIsDragging(true);
    wakeUp();

    const onMove = (ev: MouseEvent) => {
      if (!dragging.current) return;
      const dx = ev.clientX - anchor.current.cx;
      const dy = ev.clientY - anchor.current.cy;
      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) hasMoved.current = true;
      setPos(clamp(anchor.current.px + dx, anchor.current.py + dy));
    };
    const onUp = () => {
      dragging.current = false;
      setIsDragging(false);
      wakeUp();
      if (!hasMoved.current) {
        if (href) router.push(href);
        else router.back();
      }
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  }, [pos, clamp, href, router, wakeUp]);

  /* Attach touch listeners (passive: false so we can preventDefault) */
  useEffect(() => {
    const el = btnRef.current;
    if (!el) return;
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove",  onTouchMove,  { passive: false });
    el.addEventListener("touchend",   onTouchEnd,   { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove",  onTouchMove);
      el.removeEventListener("touchend",   onTouchEnd);
    };
  }, [onTouchStart, onTouchMove, onTouchEnd]);

  /* ── Render ─────────────────────────────────────────────────── */
  return (
    <div
      ref={btnRef}
      onMouseDown={onMouseDown}
      style={{
        position:       "fixed",
        left:           pos.x,
        top:            pos.y,
        zIndex:         1000,
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "center",
        gap:            "4px",
        cursor:         isDragging ? "grabbing" : "grab",
        userSelect:     "none",
        touchAction:    "none",
        transition:     isDragging ? "none" : "opacity 0.4s ease",
        opacity:        isDragging ? 1 : isIdle ? 0.65 : 1,
      }}
    >
      {/* Circle button */}
      <div
        style={{
          width:          56,
          height:         56,
          borderRadius:   "50%",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          transform:      isDragging ? "scale(1.14)" : "scale(1)",
          transition:     isDragging ? "none" : "transform 0.15s, box-shadow 0.2s",
          background:     isDark
            ? "linear-gradient(135deg,#1e3a5f 0%,#0c1a2e 100%)"
            : "linear-gradient(135deg,#ffffff 0%,#dbeafe 100%)",
          border:         isDark
            ? "2.5px solid rgba(14,165,233,0.70)"
            : "2.5px solid rgba(14,165,233,0.60)",
          boxShadow:      isDragging
            ? isDark
              ? "0 14px 36px rgba(0,0,0,0.75), 0 0 22px rgba(14,165,233,0.45)"
              : "0 12px 28px rgba(0,0,0,0.22), 0 0 18px rgba(14,165,233,0.35)"
            : isDark
              ? "0 6px 20px rgba(0,0,0,0.60), 0 0 14px rgba(14,165,233,0.30)"
              : "0 6px 16px rgba(0,0,0,0.16), 0 0 12px rgba(14,165,233,0.22)",
          position:       "relative",
        }}
      >
        {/* Inner decorative ring */}
        <div
          style={{
            position:     "absolute",
            inset:        3,
            borderRadius: "50%",
            border:       isDark
              ? "1px solid rgba(14,165,233,0.20)"
              : "1px solid rgba(14,165,233,0.16)",
            pointerEvents: "none",
          }}
        />
        <ArrowLeft
          style={{
            width:         24,
            height:        24,
            color:         isDark ? "#38bdf8" : "#0369a1",
            strokeWidth:   2.5,
            flexShrink:    0,
            pointerEvents: "none",
          }}
        />
        {/* Spinning dashed ring while dragging */}
        {isDragging && (
          <div
            style={{
              position:     "absolute",
              inset:        -7,
              borderRadius: "50%",
              border:       "2px dashed rgba(14,165,233,0.55)",
              pointerEvents:"none",
              animation:    "spin 2.5s linear infinite",
            }}
          />
        )}
      </div>

      {/* Label under the button */}
      <span
        style={{
          fontSize:     "9px",
          fontWeight:   700,
          letterSpacing:"0.04em",
          color:        isDark ? "rgba(148,163,184,0.85)" : "rgba(71,85,105,0.85)",
          fontFamily:   "'Plus Jakarta Sans', sans-serif",
          pointerEvents:"none",
          whiteSpace:   "nowrap",
          textTransform:"uppercase",
        }}
      >
        BACK
      </span>
    </div>
  );
}
