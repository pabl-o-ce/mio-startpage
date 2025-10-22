<script lang="ts">
  import { onMount } from 'svelte';
  import { cn } from '$lib/utils/cn';

  export let className: string | undefined = undefined;
  export let stars = 10000;
  export let maxRadius = 400;
  export let speed = 0.02;

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let animationId: number;

  // Galaxy parameters
  let eratio = 0.8;  // ellipse ratio
  let etwist = 0.07; // twisting factor

  // Star data
  let angle: number[] = [];
  let radius: number[] = [];
  let z: number[] = [];

  let WW: number, HH: number;
  let cx: number, cy: number;
  let pts = Date.now();

  // Helper functions
  function gauss(x: number): number {
    return Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI);
  }

  function randomGauss(): number {
    let x = 0, y = 0, r: number, c: number;
    do {
      x = Math.random() * 2 - 1;
      y = Math.random() * 2 - 1;
      r = x * x + y * y;
    } while (r === 0 || r > 1);
    c = Math.sqrt(-2 * Math.log(r) / r);
    return x * c;
  }

  function initCanvas() {
    WW = canvas.width;
    HH = canvas.height;
    cx = WW / 2;
    cy = HH / 1.7;
  }

  function initStars() {
    angle = [];
    radius = [];
    z = [];

    for (let i = 0; i < stars; i++) {
      angle[i] = Math.random() * 2 * Math.PI;
      radius[i] = Math.abs(randomGauss()) * maxRadius * 0.6;
      z[i] = Math.abs(randomGauss() * gauss(radius[i] / maxRadius * 5.0) * maxRadius * 0.04);
    }
  }

  function resizeCanvas() {
    if (!canvas) return;

    WW = window.innerWidth;
    HH = window.innerHeight;
    canvas.width = WW;
    canvas.height = HH;

    cx = WW / 2;
    cy = HH / 1.7;

    if (!ctx) {
      ctx = canvas.getContext('2d')!;
    }
  }

  function draw() {
    if (!ctx) return;

    // Motion blur effect - fade the canvas slightly
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.fillRect(0, 0, WW, HH);

    // Calculate time delta
    const ts = Date.now();
    const dt = ts - pts;
    pts = ts;
    const fps = 1000 / dt;
    const speedMul = speed / fps;

    // Draw stars
    for (let i = 0; i < stars; i++) {
      const r = radius[i];
      const a = angle[i] + speedMul * (maxRadius / r) * 3;
      angle[i] = a;

      const x = r * Math.sin(a);
      const y = r * eratio * Math.cos(a);
      const b = r * etwist;
      const s = Math.sin(b);
      const c = Math.cos(b);
      const xx = cx + s * x + c * y;
      const yy = cy + (c * x - s * y) / 3 - z[i] * 20 + cy * 0.2;

      // Distance from center (normalized)
      const distFromCenter = r / maxRadius;

      // Color gradient: light blue (center) -> cyan (mid) -> deep blue (outer)
      let red, green, blue;

      if (distFromCenter < 0.3) {
        // Center: light blue/white-ish blue
        const t = distFromCenter / 0.3;
        red = Math.floor(200 + (180 - 200) * t);
        green = Math.floor(230 + (220 - 230) * t);
        blue = 255;
      } else if (distFromCenter < 0.6) {
        // Mid: bright cyan
        const t = (distFromCenter - 0.3) / 0.3;
        red = Math.floor(180 - (180 - 100) * t);
        green = Math.floor(220 - (220 - 180) * t);
        blue = 255;
      } else {
        // Outer: deep blue
        const t = (distFromCenter - 0.6) / 0.4;
        red = Math.floor(100 - (100 - 40) * t);
        green = Math.floor(180 - (180 - 80) * t);
        blue = Math.floor(255 - (255 - 150) * t);
      }

      // Brightness based on distance (brighter at center)
      const brightness = 1.0 - distFromCenter * 0.4;
      red = Math.floor(red * brightness);
      green = Math.floor(green * brightness);
      blue = Math.floor(blue * brightness);

      ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, 0.6)`;

      // Larger, brighter stars in the bulge
      if (z[i] > 0.2) {
        if (z[i] > 9.0) {
          ctx.beginPath();
          ctx.arc(xx, yy, 4, 0, 2 * Math.PI);
          ctx.fill();
          // Add extra glow for brightest stars
          ctx.fillStyle = `rgba(255, 255, 255, 0.8)`;
          ctx.beginPath();
          ctx.arc(xx, yy, 2, 0, 2 * Math.PI);
          ctx.fill();
        }
      }

      ctx.fillRect(xx - 1.5, yy - 1.5, 3, 3);
    }

    animationId = requestAnimationFrame(draw);
  }

  onMount(() => {
    resizeCanvas();
    initCanvas();
    initStars();

    // Start animation
    draw();

    // Handle window resize
    const handleResize = () => {
      resizeCanvas();
      initCanvas();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<canvas
  bind:this={canvas}
  class={cn('fixed inset-0 w-full h-full', className)}
  style="background: #000000; z-index: 0;"
></canvas>
