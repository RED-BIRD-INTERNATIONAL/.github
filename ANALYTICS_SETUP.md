# Vercel Web Analytics Setup

This repository has been configured with Vercel Web Analytics to track visitor data and page views.

## What Was Installed

- **Package**: `@vercel/analytics` (v2.0.1)
- **Configuration Files**:
  - `vercel.json` - Vercel deployment configuration with analytics enabled
  - `analytics-setup.html` - Example HTML page with analytics integration
  - `analytics-integration.js` - JavaScript integration examples for various frameworks
  - `package.json` - Updated with @vercel/analytics dependency

## How to Deploy

### Option 1: Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy the project**:
   ```bash
   vercel
   ```

4. **Enable Analytics in Vercel Dashboard**:
   - Go to your project in the Vercel dashboard
   - Navigate to the "Analytics" tab
   - Click "Enable Web Analytics"
   - Analytics will automatically start tracking after the next deployment

### Option 2: Use with Existing Framework

If you're integrating this into an existing application (Next.js, React, Vue, etc.), follow these framework-specific instructions:

#### Next.js (App Router)
```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

#### Next.js (Pages Router)
```typescript
// pages/_app.tsx
import { Analytics } from '@vercel/analytics/next';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
```

#### React
```jsx
// App.jsx or App.tsx
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div>
      {/* Your app content */}
      <Analytics />
    </div>
  );
}

export default App;
```

#### Vue
```javascript
// main.js or App.vue
import { inject } from '@vercel/analytics';

inject({
  mode: 'production'
});
```

#### SvelteKit
```typescript
// src/routes/+layout.ts
import { injectAnalytics } from '@vercel/analytics/sveltekit';

injectAnalytics({
  mode: import.meta.env.MODE === 'production' ? 'production' : 'development'
});
```

#### HTML/Vanilla JavaScript
```html
<script type="module">
  import { inject } from 'https://esm.sh/@vercel/analytics';
  inject();
</script>
```

## Verifying Analytics Are Working

After deployment:

1. Visit your deployed site
2. Open browser Developer Tools (F12)
3. Go to the Network tab
4. Look for requests to `/_vercel/insights/*` or similar
5. Check the Vercel dashboard Analytics tab to see data (may take a few minutes to appear)

## Configuration Options

You can customize analytics behavior:

```javascript
import { inject } from '@vercel/analytics';

inject({
  mode: 'production', // 'auto' | 'production' | 'development'
  beforeSend: (event) => {
    // Filter or modify events before sending
    // Return null to prevent sending
    return event;
  }
});
```

## Privacy & Compliance

Vercel Web Analytics:
- Does NOT use cookies
- Does NOT track users across sites
- Is GDPR, CCPA, and PECR compliant
- Collects minimal data (page views, referrers, device type)
- Does NOT collect personal information

Learn more: https://vercel.com/docs/analytics/privacy-policy

## Resources

- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [Quickstart Guide](https://vercel.com/docs/analytics/quickstart)
- [Package on npm](https://www.npmjs.com/package/@vercel/analytics)

## Next Steps

1. Deploy this repository to Vercel
2. Enable Web Analytics in the Vercel dashboard
3. Customize the `analytics-setup.html` page with your content
4. Add custom events (Pro/Enterprise plans) for advanced tracking
5. Set up data filters and redaction if needed
