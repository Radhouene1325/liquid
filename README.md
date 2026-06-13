# Liquid Theme - Hydrogen + Oxygen Storefront

Modern Shopify storefront built with:
- **Oxygen**: Shopify's edge computing platform (deployment)
- **Hydrogen**: React-based framework for building Shopify storefronts
- **Remix**: Modern full-stack web framework

## Project Structure

```
├── components/        # Reusable React components
├── hooks/             # Custom React hooks
├── routes/            # Remix routes
├── utils/             # Utility functions
├── root.tsx           # Root layout
├── hydrogen.config.ts # Hydrogen configuration
├── remix.config.js    # Remix configuration
├── wrangler.toml      # Oxygen (Cloudflare Workers) config
└── tsconfig.json      # TypeScript configuration
```

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- Shopify CLI
- Shopify storefront access credentials

### Installation

```bash
npm install
```

### Environment Setup

Copy `.env.example` to `.env.local` and fill in your Shopify credentials:

```bash
cp .env.example .env.local
```

### Development

```bash
npm run dev
```

The storefront will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Deploy to Oxygen

```bash
npm run deploy
```

## Features

✅ **React-based UI** - Modern component architecture
✅ **Remix Framework** - Server-side rendering & routing
✅ **Hydrogen SDK** - Shopify-optimized utilities
✅ **Oxygen Edge Runtime** - Fast global deployment
✅ **TypeScript** - Full type safety
✅ **Tailwind CSS** - Utility-first styling
✅ **GraphQL API** - Direct Shopify Storefront API integration

## Routes

- `/` - Home page
- `/products` - Products listing
- `/collections` - Collections listing
- `/cart` - Shopping cart

## Documentation

- [Hydrogen Docs](https://hydrogen.shopify.dev)
- [Oxygen Docs](https://shopify.dev/docs/custom-storefronts/oxygen)
- [Remix Docs](https://remix.run)
- [Shopify Storefront API](https://shopify.dev/docs/api/storefront)

## License

MIT
