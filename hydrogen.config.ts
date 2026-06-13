import { defineConfig } from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    storeDomain: process.env.VITE_SHOP_ID || '',
    storefrontToken: process.env.VITE_STOREFRONT_API_TOKEN || '',
    storefrontApiVersion: '2024-01',
  },
  routes: [
    {
      path: '/',
      component: 'routes/index',
    },
    {
      path: '/products/:handle',
      component: 'routes/products/$handle',
    },
    {
      path: '/collections/:handle',
      component: 'routes/collections/$handle',
    },
    {
      path: '/cart',
      component: 'routes/cart',
    },
  ],
});
