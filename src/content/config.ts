import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().optional(),
      draft: z.boolean().default(true),
      pubDate: z.date(),
      projectUrl: z.string().url(),
    }),
});

const templatesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      draft: z.boolean().default(true),
      pubDate: z.date(),
      previewUrl: z.string().url(),
      cover: image(),
      coverAlt: z.string(),
    }),
});

export const collections = {
  projects: projectsCollection,
  templates: templatesCollection,
};
