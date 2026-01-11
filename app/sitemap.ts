import { MetadataRoute } from 'next';
import { books } from '@/data/books';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alarveliyeedu.com';
  const lastModified = new Date();

  // Base routes for both languages
  const baseRoutes = [
    '',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add Tamil (root) base routes
  baseRoutes.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: route === '' ? 1 : 0.8,
    });
  });

  // Add English base routes
  baseRoutes.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}/en${route}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: route === '' ? 0.9 : 0.7,
    });
  });

  // Add Book routes for both languages
  books.forEach((book) => {
    // Tamil book route
    sitemapEntries.push({
      url: `${baseUrl}/books/${book.id}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    });

    // English book route
    sitemapEntries.push({
      url: `${baseUrl}/en/books/${book.id}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  return sitemapEntries;
}
