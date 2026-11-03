"use client";

import { useEffect, useRef } from "react";

type TrailPoint = { x: number; y: number };
type Spark = { x: number; y: number; vx: number; vy: number; life: number; size: number };

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!canvas || !context || !finePointer.matches || reduceMotion.matches) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let frame = 0;
    let visible = false;
    let previousPointer: TrailPoint | null = null;
    let pointer: TrailPoint = { x: width / 2, y: height / 2 };
    const trail: TrailPoint[] = Array.from({ length: 11 }, () => ({ ...pointer }));
    const sparks: Spark[] = [];
    const site = canvas.closest<HTMLElement>(".site");

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const scale = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas!.width = Math.round(width * scale);
      canvas!.height = Math.round(height * scale);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      context!.setTransform(scale, 0, 0, scale, 0, 0);
    }

    function drawTrail() {
      for (let index = 0; index < trail.length; index++) {
        const target = index === 0 ? pointer : trail[index - 1];
        const ease = index === 0 ? 0.38 : 0.25;
        trail[index].x += (target.x - trail[index].x) * ease;
        trail[index].y += (target.y - trail[index].y) * ease;
      }

      const tail = trail[trail.length - 1];
      const gradient = context!.createLinearGradient(pointer.x, pointer.y, tail.x, tail.y);
      gradient.addColorStop(0, "rgba(255, 139, 114, 0.72)");
      gradient.addColorStop(0.48, "rgba(232, 203, 148, 0.3)");
      gradient.addColorStop(1, "rgba(141, 106, 221, 0.02)");

      context!.beginPath();
      context!.moveTo(pointer.x, pointer.y);
      for (let index = 0; index < trail.length - 1; index++) {
        const midpointX = (trail[index].x + trail[index + 1].x) / 2;
        const midpointY = (trail[index].y + trail[index + 1].y) / 2;
        context!.quadraticCurveTo(trail[index].x, trail[index].y, midpointX, midpointY);
      }
      context!.lineTo(tail.x, tail.y);
      context!.lineCap = "round";
      context!.lineJoin = "round";
      context!.lineWidth = 5;
      context!.strokeStyle = gradient;
      context!.shadowColor = "rgba(255, 139, 114, 0.38)";
      context!.shadowBlur = 18;
      context!.globalAlpha = visible ? 1 : 0.28;
      context!.stroke();
      context!.shadowBlur = 0;
      context!.globalAlpha = 1;

      const glow = context!.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 82);
      glow.addColorStop(0, visible ? "rgba(255, 139, 114, 0.13)" : "rgba(255, 139, 114, 0)");
      glow.addColorStop(1, "rgba(255, 139, 114, 0)");
      context!.fillStyle = glow;
      context!.beginPath();
      context!.arc(pointer.x, pointer.y, 82, 0, Math.PI * 2);
      context!.fill();
    }

    function drawSparks() {
      for (let index = sparks.length - 1; index >= 0; index--) {
        const spark = sparks[index];
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.vx *= 0.965;
        spark.vy *= 0.965;
        spark.life -= 1;
        if (spark.life <= 0) {
          sparks.splice(index, 1);
          continue;
        }

        context!.globalAlpha = Math.min(1, spark.life / 20);
        context!.fillStyle = index % 3 === 0 ? "#e8cb94" : "#ff9a80";
        context!.shadowColor = context!.fillStyle as string;
        context!.shadowBlur = 9;
        context!.beginPath();
        context!.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
        context!.fill();
      }
      context!.globalAlpha = 1;
      context!.shadowBlur = 0;
    }

    function animate() {
      context!.clearRect(0, 0, width, height);
      drawTrail();
      drawSparks();

      const tail = trail[trail.length - 1];
      const settled = Math.hypot(tail.x - pointer.x, tail.y - pointer.y) < 1.5;
      if (settled && sparks.length === 0) {
        frame = 0;
        return;
      }
      frame = window.requestAnimationFrame(animate);
    }

    function wake() {
      if (!frame) frame = window.requestAnimationFrame(animate);
    }

    function onPointerMove(event: PointerEvent) {
      if (event.pointerType === "touch") return;
      const next = { x: event.clientX, y: event.clientY };
      document.documentElement.style.setProperty("--mx", `${next.x}px`);
      document.documentElement.style.setProperty("--my", `${next.y}px`);
      site?.style.setProperty("--mx", `${next.x}px`);
      site?.style.setProperty("--my", `${next.y}px`);
      visible = true;

      if (previousPointer) {
        const distance = Math.hypot(next.x - previousPointer.x, next.y - previousPointer.y);
        const count = Math.min(8, Math.floor(distance / 13));
        for (let index = 0; index < count; index++) {
          if (sparks.length >= 28) break;
          const progress = (index + 1) / (count + 1);
          sparks.push({
            x: previousPointer.x + (next.x - previousPointer.x) * progress,
            y: previousPointer.y + (next.y - previousPointer.y) * progress,
            vx: (Math.random() - 0.5) * 1.1,
            vy: (Math.random() - 0.5) * 1.1,
            life: 18 + Math.random() * 18,
            size: 0.8 + Math.random() * 1.7,
          });
        }
      } else {
        trail.forEach((point) => {
          point.x = next.x;
          point.y = next.y;
        });
      }

      pointer = next;
      previousPointer = next;
      wake();
    }

    function onPointerLeave() {
      visible = false;
      wake();
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("blur", onPointerLeave);
    document.documentElement.addEventListener("mouseleave", onPointerLeave);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("blur", onPointerLeave);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursorTrailCanvas" aria-hidden="true" />;
}
