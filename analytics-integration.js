/**
 * Vercel Web Analytics Integration
 * 
 * This file demonstrates how to integrate Vercel Analytics
 * into different types of JavaScript applications.
 */

// For HTML/Vanilla JS projects
// Import and inject analytics
import { inject } from '@vercel/analytics';

// Initialize analytics
inject({
  mode: 'production', // Use 'auto' to detect automatically, or 'production'/'development'
  // beforeSend: (event) => {
  //   // Optional: Filter or modify events before sending
  //   return event;
  // }
});

// For framework-specific implementations, see the appropriate guides:
// 
// Next.js (App Router):
// import { Analytics } from '@vercel/analytics/next';
// Add <Analytics /> component to app/layout.tsx
//
// Next.js (Pages Router):
// import { Analytics } from '@vercel/analytics/next';
// Add <Analytics /> component to pages/_app.tsx
//
// React:
// import { Analytics } from '@vercel/analytics/react';
// Add <Analytics /> component to your App component
//
// Vue:
// import { inject } from '@vercel/analytics';
// inject();
//
// SvelteKit:
// import { injectAnalytics } from '@vercel/analytics/sveltekit';
// injectAnalytics({ mode: import.meta.env.MODE });
