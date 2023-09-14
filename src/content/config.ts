import { defineCollection, z } from "astro:content";
import { commonDataObjectSchema } from "./projects/commonData";
const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    id: commonDataObjectSchema.keyof(),
    description: z.string().min(1).max(1000),
    disclamer: z.string().min(1).max(128).optional(),
  }),
});

export const collections = {
  projects: projectCollection,
};
