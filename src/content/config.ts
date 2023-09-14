import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1).max(128),
    description: z.string().min(1).max(1000),
    image: z.string().min(1),
    repoLink: z.string().url(),
    websiteLink: z.string().url().optional(),
    demoLink: z.string().url().optional(),
    disclamer: z.string().min(1).max(128).optional(),
    tags: z.array(z.string().min(1).max(32)).min(5).max(10),
  }),
});

export const collections = {
  projects: projectCollection,
};
