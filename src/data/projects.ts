import { z } from 'astro/zod';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const safeLink = z.string().url().refine(value => value.startsWith('https://'), 'Use an HTTPS URL');
const schema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  order: z.number(), title: z.string().min(1), subtitle: z.string(),
  category: z.string().min(1).refine(value => value !== 'all', 'all is reserved for the category filter'), year: z.string(),
  cover: z.enum(['form', 'orbit', 'play']).default('form'),
  image: z.string().regex(/^\/images\/[a-zA-Z0-9_/-]+\.(?:png|jpg|jpeg|webp|avif|svg)$/).optional(),
  tags: z.array(z.string()), summary: z.string(), role: z.string(), period: z.string(),
  sample: z.boolean().default(false), draft: z.boolean().default(false),
  demo: safeLink.optional(), repository: safeLink.optional(),
  sections: z.array(z.object({ title: z.string(), body: z.string() })).min(1),
});
const files = import.meta.glob('./projects/*.json', { eager: true, import: 'default' });
const all = Object.entries(files).map(([path, data]) => {
  const result = schema.safeParse(data);
  if (!result.success) throw new Error(`Invalid project ${path}: ${result.error.message}`);
  if (result.data.image && !existsSync(resolve('public', result.data.image.slice(1)))) {
    throw new Error(`Missing project image in ${path}: ${result.data.image}`);
  }
  return result.data;
});
if (new Set(all.map(p => p.slug)).size !== all.length) throw new Error('Project slugs must be unique');
export const projects = all.filter(p => !p.draft).sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug));
export type Project = z.infer<typeof schema>;
