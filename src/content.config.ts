import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const teachings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/teachings' }),
  schema: z.object({
    title: z.string(),
    language: z.string().default('si'),
    speaker: z.string(),
    category: z.string(),
    series: z.string(),
    order: z.number().int().positive(),
    lessonGroup: z.string().optional(),
    groupOrder: z.number().int().positive().optional(),
    menuParent: z.string().optional(),
    menuLabel: z.string().optional(),
    originalUrl: z.string().url(),
    audioUrl: z.string().url().optional(),
    videoUrl: z.string().url().optional(),
    youtubeId: z.string().regex(/^[\w-]{11}$/).optional(),
    draft: z.boolean().default(false),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    language: z.enum(['si', 'en']).default('si'),
    order: z.number().int().positive(),
    pdfUrl: z.string().url(),
    viewUrl: z.string().url().optional(),
    originalUrl: z.string().url(),
    credit: z.string().optional(),
    audio: z.array(z.object({ title: z.string(), audioUrl: z.string().url() })).default([]),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    language: z.string().default('si'),
    imageUrl: z.string().optional(),
    imageAlt: z.string().optional(),
    credit: z.string().optional(),
    originalUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
  schema: z.object({
    title: z.string(),
    language: z.string().default('si'),
    originalUrl: z.string().url(),
    images: z.array(z.object({
      src: z.string(),
      thumbnail: z.string(),
      width: z.number().positive(),
      height: z.number().positive(),
      alt: z.string().min(1),
      originalUrl: z.string().url(),
    })),
    draft: z.boolean().default(false),
  }),
});

export const collections = { teachings, books, pages, gallery };
