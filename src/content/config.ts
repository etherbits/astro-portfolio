import { defineCollection, z } from "astro:content";
import { commonDataObjectSchema } from "../projectData/commonData";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    id: commonDataObjectSchema.keyof(),
    description: z.string().min(1).max(1000),
    disclamer: z.string().min(1).max(128).optional(),
  }),
});

const journeyCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1).max(128),
    content: z.string().min(1).max(1000),
    date: z.string().min(1).max(32),
  }),
});

export const collections = {
  projects: projectCollection,
  journeys: journeyCollection,
};
