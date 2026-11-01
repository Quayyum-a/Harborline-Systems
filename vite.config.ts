import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';

const root = process.cwd();
const prerenderedRoutes: Record<string, string> = {
  '/agencies': '/agencies/index.html',
  '/businesses': '/businesses/index.html',
  '/services': '/services/index.html',
  '/how-it-works': '/how-it-works/index.html',
  '/about': '/about/index.html',
  '/guides/white-label-software-development': '/guides/white-label-software-development/index.html',
  '/guides/choosing-a-software-development-partner': '/guides/choosing-a-software-development-partner/index.html',
};

const exactPageRoutes: Plugin = {
  name: 'harborline-exact-prerendered-pages',
  configureServer(server) {
    server.middlewares.use((request, _response, next) => {
      if (request.url) {
        const url = new URL(request.url, 'http://vite.local');
        const htmlFile = prerenderedRoutes[url.pathname];
        if (htmlFile) request.url = `${htmlFile}${url.search}`;
      }
      next();
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use((request, _response, next) => {
      if (request.url) {
        const url = new URL(request.url, 'http://vite.local');
        const htmlFile = prerenderedRoutes[url.pathname];
        if (htmlFile) request.url = `${htmlFile}${url.search}`;
      }
      next();
    });
  },
};

export default defineConfig({
  plugins: [exactPageRoutes],
  server: { allowedHosts: ['3000-ijaamjqfzsip8373xctrh-936b7224.us5.manus.computer'] },
  preview: { allowedHosts: ['3000-ijaamjqfzsip8373xctrh-936b7224.us5.manus.computer'] },
  build: {
    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        agencies: resolve(root, 'agencies/index.html'),
        businesses: resolve(root, 'businesses/index.html'),
        services: resolve(root, 'services/index.html'),
        howItWorks: resolve(root, 'how-it-works/index.html'),
        about: resolve(root, 'about/index.html'),
        guideWhiteLabel: resolve(root, 'guides/white-label-software-development/index.html'),
        guidePartner: resolve(root, 'guides/choosing-a-software-development-partner/index.html'),
      },
    },
  },
});
