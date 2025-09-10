/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable import/prefer-default-export */
// src/app/api/news-sitemap.xml/route.ts

const STRAPI_URL = 'https://api.rankkit.in';
const STRAPI_TOKEN = process.env.STRAPI_TOKEN || ''; // optional if public
const MAX_ITEMS = 100; // cap how many URLs you include
const PAGE_SIZE = 100; // how many per Strapi page

type StrapiItem = {
  id: number;
  slug?: string;
  updatedAt?: string;
  createdAt?: string;
};
type StrapiResp = { data: StrapiItem[] };

function getBaseUrl(req: Request) {
  const env = 'https://api.rankkit.in';
  if (env) return env.replace(/\/+$/, '');
  const host = req.headers.get('x-forwarded-host') || req.headers.get('host') || 'localhost:3000';
  const proto = req.headers.get('x-forwarded-proto') || 'http';
  return `${proto}://${host}`;
}

function buildUrlset(baseUrl: string, paths: { path: string; lastmod?: string }[]) {
  const now = new Date().toISOString();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    ({ path, lastmod }) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>always</changefreq>
    <priority>0.7</priority>
    <lastmod>${lastmod || now}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>`;
  return body;
}

async function fetchArticleSlugs(limit: number): Promise<{ path: string; lastmod?: string }[]> {
  const out: { path: string; lastmod?: string }[] = [];
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (STRAPI_TOKEN) headers.Authorization = `Bearer ${STRAPI_TOKEN}`;

  let page = 1;
  while (out.length < limit) {
    const qs = new URLSearchParams({
      'fields[0]': 'slug',
      'fields[1]': 'updatedAt',
      'fields[2]': 'createdAt',
      'pagination[page]': String(page),
      'pagination[pageSize]': String(PAGE_SIZE),
      sort: 'createdAt:desc',
      // add 'publicationState': 'live' if you use drafts
    }).toString();

    const resp = await fetch(`${STRAPI_URL}/api/articles?${qs}`, { headers, cache: 'no-store' });
    if (!resp.ok) throw new Error(`Strapi error ${resp.status}`);
    const json = (await resp.json()) as StrapiResp;

    const batch = json.data ?? [];
    if (batch.length === 0) break;

    console.log(batch[0].slug);
    for (const item of batch) {
      const slug = item?.slug;
      if (!slug) continue;
      const lastmod = item?.updatedAt || item?.createdAt;
      out.push({ path: `/articles/post/${slug}`, lastmod });
      if (out.length >= limit) break;
    }

    if (batch.length < PAGE_SIZE) break; // no more pages
    page += 1;
  }

  return out;
}

export async function GET(req: Request) {
  try {
    const baseUrl = getBaseUrl(req);
    const items = await fetchArticleSlugs(MAX_ITEMS);
    const xml = buildUrlset(baseUrl, items);

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600',
      },
    });
  } catch (err) {
    // Return a plain 500; browsers show “This page isn’t working” for 500s
    const msg = err instanceof Error ? err.message : 'unknown';
    return new Response(`Failed to generate news sitemap: ${msg}`, { status: 500 });
  }
}
