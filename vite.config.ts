import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import type { Connect } from 'vite';
import type { ServerResponse, IncomingMessage } from 'http';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    port: 3000,
    strictPort: true,
    open: true,
    cors: true,
    middleware: [
      (req: IncomingMessage, res: ServerResponse, next: Connect.NextFunction) => {
        if (req.url === '/.well-known/apple-developer-merchantid-domain-association') {
          const filePath = path.join(__dirname, 'public/.well-known/apple-developer-merchantid-domain-association');
          try {
            const content = fs.readFileSync(filePath, 'utf-8');
            res.setHeader('Content-Type', 'text/plain');
            res.end(content);
            return;
          } catch (error) {
            console.error('Error reading verification file:', error);
          }
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
    {
      name: 'handle-well-known',
      configureServer(server) {
        server.middlewares.use((req: IncomingMessage, res: ServerResponse, next: Connect.NextFunction) => {
          if (req.url === '/.well-known/apple-developer-merchantid-domain-association') {
            const filePath = path.join(__dirname, 'public/.well-known/apple-developer-merchantid-domain-association');
            try {
              const content = fs.readFileSync(filePath, 'utf-8');
              res.setHeader('Content-Type', 'text/plain');
              res.end(content);
              return;
            } catch (error) {
              console.error('Error reading verification file:', error);
            }
          }
          next();
        });
      }
    },
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  publicDir: 'public',
}));
