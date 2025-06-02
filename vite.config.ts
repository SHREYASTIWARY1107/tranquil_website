import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    headers: {
      'Content-Type': 'text/plain'
    },
    middleware: [
      (req, res, next) => {
        if (req.url?.startsWith('/.well-known/')) {
          res.setHeader('Content-Type', 'text/plain');
        }
        next();
      }
    ]
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true,
    sourcemap: mode === 'development',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.includes('.well-known')) {
            return '[name].[ext]';
          }
          return 'assets/[name].[ext]';
        },
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js',
      }
    }
  },
  plugins: [
    react(),
    {
      name: 'handle-well-known',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.startsWith('/.well-known/')) {
            res.setHeader('Content-Type', 'text/plain');
          }
          next();
        });
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  publicDir: 'public',
}));
