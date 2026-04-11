## Mugnee IT Website (Next.js)

Production domain: `https://mugneeit.com`

## Local Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open `http://localhost:3000` in your browser.

## Production Environment

Create `.env.local` (or set env vars in hosting panel):

```env
NEXT_PUBLIC_SITE_URL=https://mugneeit.com
```

## Build and Run (Production)

```bash
npm run build
npm run start
```

## Domain Setup Checklist

1. Point domain DNS to your hosting provider.
2. Set `NEXT_PUBLIC_SITE_URL=https://mugneeit.com`.
3. Deploy latest code.
4. Verify canonical/OG URLs use `https://mugneeit.com`.
5. Test key routes:
   ` / `
   ` /services `
   ` /blog `
   ` /blog/admin `
   ` /schedule-consultation `
6. Submit sitemap (if configured) in Google Search Console.

## Notes

- Blog auto-publish (from `/blog/admin`) writes to runtime JSON file.
- On serverless hosting, file-write persistence may not be guaranteed.
- For long-term publishing, use a CMS (Sanity/Strapi/WordPress headless).
