import path from 'path';
import fs from 'fs';
import { defineConfig, type Plugin } from 'vite';

// Helper to find all HTML files for MPA build
function getAllHtmlFiles(dir: string, fileList: Record<string, string> = {}): Record<string, string> {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === 'dist' || file === '.git' || file === 'src' || file === 'public') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllHtmlFiles(fullPath, fileList);
    } else if (file.endsWith('.html')) {
      const relative = path.relative(__dirname, fullPath);
      const name = relative.replace(/\\/g, '/').replace(/\.html$/, '');
      fileList[name] = fullPath;
    }
  }
  return fileList;
}

// Plugin to guarantee proper MIME types for static vanilla assets
function staticVanillaAssetPlugin(): Plugin {
  return {
    name: 'static-vanilla-assets',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0];
        if (url && url.endsWith('.css')) {
          let filePath = path.join(__dirname, 'public', url);
          if (!fs.existsSync(filePath)) {
            filePath = path.join(__dirname, url);
          }
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            res.setHeader('Content-Type', 'text/css; charset=utf-8');
            res.setHeader('Cache-Control', 'no-cache');
            return fs.createReadStream(filePath).pipe(res);
          }
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  const htmlInputs = getAllHtmlFiles(__dirname);

  return {
    plugins: [staticVanillaAssetPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: htmlInputs,
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
