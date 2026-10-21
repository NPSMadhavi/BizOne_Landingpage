import { useEffect, useRef } from "react";
import "./HeroBackground.css";

const vertexSource = `
  attribute vec2 aPosition;
  varying vec2 vUv;
  void main() {
    vUv = aPosition * 0.5 + 0.5;
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`;

const fragmentSource = `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;

  float radial(vec2 point, vec2 center, vec2 radius, float plateau) {
    return 1.0 - smoothstep(plateau, 1.0, length((point - center) / radius));
  }

  void main() {
    vec2 uv = vec2(vUv.x, 1.0 - vUv.y);
    float t = uTime * 1.04719755;

    // Warp the entire color field, so the pastel colors flow with the folds.
    vec2 flow = uv;
    flow.x += 0.28 * sin(uv.y * 4.2 + t)
            + 0.10 * sin(uv.x * 3.6 - uv.y * 2.4 - t);
    flow.y += 0.18 * cos(uv.x * 4.0 - t)
            + 0.08 * sin(uv.y * 5.0 + t);

    // The same five colors and gradient centers as the original hero.
    vec3 blue = vec3(206.0, 228.0, 248.0) / 255.0;
    vec3 lightBlue = vec3(216.0, 234.0, 251.0) / 255.0;
    vec3 pearl = vec3(242.0, 247.0, 251.0) / 255.0;
    vec3 pink = vec3(255.0, 219.0, 215.0) / 255.0;
    vec3 peach = vec3(255.0, 232.0, 185.0) / 255.0;
    vec3 color = blue;
    color = mix(color, pearl, radial(flow, vec2(0.5, 0.0), vec2(0.566, 1.0), 0.155));
    color = mix(color, lightBlue, radial(flow, vec2(0.0981, 0.6517), vec2(0.3142, 0.6081), 0.0));
    color = mix(color, pink, radial(flow, vec2(1.0, 0.2823), vec2(0.6727, 1.0486), 0.0));
    color = mix(color, peach, radial(flow, vec2(1.0, 1.0), vec2(0.638, 0.9945), 0.0));

    // Broad diagonal folds travel continuously, with soft highlights and valleys.
    float fold = uv.x * 4.6 - uv.y * 3.1
               + 0.85 * sin(uv.y * 4.0 + t)
               + 0.45 * cos(uv.x * 4.5 - t) - t;
    float crest = pow(0.5 + 0.5 * sin(fold), 3.0);
    float valley = pow(0.5 + 0.5 * sin(fold + 1.5), 5.0);
    float coolSide = 1.0 - smoothstep(0.30, 0.85, uv.x);
    color = mix(color, mix(blue, pink, uv.x), valley * 0.60);
    color = mix(color, pearl, crest * (0.42 + coolSide * 0.12));

    // Stationary, sub-pixel grain prevents banding without shimmering.
    float grain = fract(sin(dot(floor(uv * uResolution), vec2(12.9898, 78.233))) * 43758.5453);
    color += (grain - 0.5) / 255.0;
    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function HeroBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const gl = canvas.getContext("webgl", { alpha: false, antialias: false, depth: false });
    // The original CSS gradient remains visible if WebGL is unavailable.
    if (!gl) return;

    const shaders = [];
    const compile = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      shaders.push(shader);
      return shader;
    };
    const program = gl.createProgram();
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSource));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentSource));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      shaders.forEach(shader => gl.deleteShader(shader));
      gl.deleteProgram(program);
      return;
    }

    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    const timeUniform = gl.getUniformLocation(program, "uTime");
    const resolutionUniform = gl.getUniformLocation(program, "uResolution");
    let frame = 0;
    let previousTime = 0;
    let elapsed = 0;
    let visible = true;
    let contextLost = false;
    let ready = false;

    const draw = () => {
      if (contextLost) return;
      gl.uniform1f(timeUniform, elapsed);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      if (!ready) {
        canvas.classList.add("hero-background__canvas--ready");
        ready = true;
      }
    };
    const resize = () => {
      // This soft backdrop needs no more than 1440 pixels across on any screen.
      const scale = Math.min(window.devicePixelRatio || 1, 1440 / canvas.clientWidth, 1.5);
      canvas.width = Math.max(1, Math.round(canvas.clientWidth * scale));
      canvas.height = Math.max(1, Math.round(canvas.clientHeight * scale));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolutionUniform, canvas.width, canvas.height);
      draw();
    };
    const tick = now => {
      if (previousTime) elapsed += Math.min((now - previousTime) / 1000, 0.05);
      previousTime = now;
      draw();
      frame = requestAnimationFrame(tick);
    };
    const updatePlayback = () => {
      cancelAnimationFrame(frame);
      previousTime = 0;
      if (visible && !document.hidden && !preference.matches && !contextLost) {
        frame = requestAnimationFrame(tick);
      }
    };
    const onContextLost = () => {
      contextLost = true;
      canvas.classList.remove("hero-background__canvas--ready");
      updatePlayback();
    };
    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updatePlayback();
    });
    resizeObserver.observe(canvas);
    intersectionObserver.observe(canvas);
    document.addEventListener("visibilitychange", updatePlayback);
    preference.addEventListener("change", updatePlayback);
    canvas.addEventListener("webglcontextlost", onContextLost);
    resize();
    updatePlayback();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
      preference.removeEventListener("change", updatePlayback);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      canvas.classList.remove("hero-background__canvas--ready");
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      shaders.forEach(shader => gl.deleteShader(shader));
    };
  }, []);

  return (
    <div className="hero-background" aria-hidden="true">
      <canvas ref={canvasRef} className="hero-background__canvas" />
    </div>
  );
}
