import { useContext } from 'react';

export function useStorefront() {
  const shopDomain = import.meta.env.VITE_SHOP_ID;
  const accessToken = import.meta.env.VITE_STOREFRONT_API_TOKEN;

  if (!shopDomain || !accessToken) {
    throw new Error('Missing Shopify credentials in environment');
  }

  return {
    shopDomain,
    accessToken,
  };
}

export async function fetchFromStorefront<T>(query: string, variables = {}) {
  const shopDomain = import.meta.env.VITE_SHOP_ID;
  const accessToken = import.meta.env.VITE_STOREFRONT_API_TOKEN;

  const response = await fetch(`https://${shopDomain}/api/2024-01/graphql.json`, {
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token': accessToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error(`Storefront API error: ${response.statusText}`);
  }

  const data: { data: T } = await response.json();
  return data.data;
}
