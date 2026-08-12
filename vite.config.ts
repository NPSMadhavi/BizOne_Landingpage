import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const port = 5173;

const isBuild =
  process.env.NODE_ENV === "production" ||
  process.argv.includes("build");

const basePath = "/";

export default defineConfig({
  base: basePath,

  plugins: [
    react(),
    tailwindcss(),

    ...(process.env.NODE_ENV !== "production"
      ? [runtimeErrorOverlay()]
      : []),

    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),

          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(
        import.meta.dirname,
        "attached_assets",
      ),
    },

    dedupe: ["react", "react-dom"],
  },

  build: {
    outDir: path.resolve(
      import.meta.dirname,
      "dist/public",
    ),

    emptyOutDir: true,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("node_modules/jspdf") ||
            id.includes("node_modules/jspdf-autotable")
          ) {
            return "pdf-vendor";
          }

          if (
            id.includes("node_modules/react-hook-form") ||
            id.includes("node_modules/@hookform") ||
            id.includes("node_modules/zod")
          ) {
            return "forms-vendor";
          }

          if (
            id.includes("node_modules/@radix-ui") ||
            id.includes("node_modules/lucide-react")
          ) {
            return "ui-vendor";
          }

          if (
            id.includes("node_modules/react") ||
            id.includes("node_modules/@tanstack")
          ) {
            return "react-vendor";
          }
        },
      },
    },
  },

  server: {
    port: 5173,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,

    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },

  preview: {
    port: 5173,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});