import { z } from "astro:content";

export const commonDataSchema = z.object({
  title: z.string().min(1).max(128),
  image: z.string().min(1).max(128),
  repoLink: z.string().url(),
  websiteLink: z.string().url().optional(),
  demoLink: z.string().url().optional(),
  tags: z.array(z.string().min(1).max(64)).min(1).max(10),
  order: z.number(),
});

export const commonDataObjectSchema = z.object({
  unispace: commonDataSchema,
  sandro: commonDataSchema,
  ebase: commonDataSchema,
  octopus: commonDataSchema,
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
  sandro: {
    title: "Sandro's books",
    image: "/images/sandro-laptop.webp",
    repoLink: "https://github.com/etherbits/react-Web-edition-of-Sandro-s-book",
    websiteLink: "https://quiet-brioche-e9ce8b.netlify.app/",
    tags: ["React", "Javascript", "SASS", "Framer Motion", "React Router"],
    order: 1,
  },
  ebase: {
    title: "EBase",
    image: "/images/ebase-laptop.webp",
    repoLink: "https://github.com/etherbits/ebase",
    demoLink: "https://www.youtube.com/watch?v=yp5Uso8klBg",
    tags: ["React", "Typescript", "NextJS", "SASS", "PostgreSQL", "Prisma"],
    order: 2,
  },
  octopus: {
    title: "Octopus",
    image: "/images/octopus-laptop.webp",
    repoLink: "https://github.com/etherbits/octopus",
    tags: ["Tauri", "React", "Typescript", "Zustand", "Tailwind", "Rust"],
    order: 3,
  },
};

const result = commonDataObjectSchema.safeParse(commonData);

if (!result.success) {
  console.error("\x1b[31m", "zod common data error: ", result.error.message);
}
