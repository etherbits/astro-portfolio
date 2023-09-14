import { z } from "astro:content";

export const commonDataSchema = z.object({
  unispace: z.object({
    title: z.string().min(1).max(128),
    image: z.string().min(1).max(128),
    repoLink: z.string().url(),
    websiteLink: z.string().url().optional(),
    demoLink: z.string().url().optional(),
    tags: z.array(z.string().min(1).max(64)).min(1).max(10),
    order: z.number(),
  }),
});

export const commonData = {
  unispace: {
    title: "UniSpace",
    image: "/images/unispace-laptop.webp",
    repoLink: "https://github.com/etherbits/Unilab-Internal-System",
    websiteLink: "https://tiny-pegasus-d8c812.netlify.app",
    tags: [
      "React",
      "Javascript",
      "Styled Components",
      "Zod",
      "Python",
      "Flask",
    ],
    order: 0,
  },
}

const result = commonDataSchema.safeParse(commonData);

if (!result.success) {
  console.error("\x1b[31m", "zod common data error: ", result.error.message);
}
