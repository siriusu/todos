import reactSinglePageApp from './index.html';

Bun.serve({
  routes: {
    '/': reactSinglePageApp,
  },
});
