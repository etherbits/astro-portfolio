import { z } from "astro:content";
import UnispaceImg from "../assets/images/unispace-laptop.webp";
import SandroImg from "../assets/images/sandro-laptop.webp";
import EBaseImg from "../assets/images/ebase-laptop.webp";
import OctopusImg from "../assets/images/octopus-laptop.webp";
import NeoTbilisiImg from "../assets/images/neoTbilisiMock.webp";
import BuildEaseImg from "../assets/images/buildEaseMock.webp";
import EElectionsImg from "../assets/images/eElectionsMock.webp";
import FieldDictImg from "../assets/images/fieldDictMock.webp";

export const commonDataSchema = z.object({
  title: z.string().min(1).max(128),
  image: z.object({}),
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
  neoTbilisi: commonDataSchema,
  buildEase: commonDataSchema,
  eElections: commonDataSchema,
  fieldDictionary: commonDataSchema,
});

export const commonData = {
  unispace: {
    title: "UniSpace",
    image: UnispaceImg,
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
  neoTbilisi: {
    title: "Neo Tbilisi",
    image: NeoTbilisiImg,
    repoLink: "https://github.com/temurchichua/NeoTbilisiLanding",
    websiteLink: "https://neotbilisi.ge/",
    tags: ["NextJS", "React", "Typescript", "Tailwind", "Python", "Flask"],
    order: 1,
  },
  ebase: {
    title: "EBase",
    image: EBaseImg,
    repoLink: "https://github.com/etherbits/ebase",
    demoLink: "https://www.youtube.com/watch?v=yp5Uso8klBg",
    tags: ["React", "Typescript", "NextJS", "SASS", "PostgreSQL", "Prisma"],
    order: 2,
  },
  octopus: {
    title: "Octopus",
    image: OctopusImg,
    repoLink: "https://github.com/etherbits/octopus",
    tags: ["Tauri", "React", "Typescript", "Zustand", "Tailwind", "Rust"],
    order: 3,
  },
  buildEase: {
    title: "Build-Ease",
    image: BuildEaseImg,
    repoLink: "https://github.com/etherbits/build-ease",
    websiteLink: "https://www.buildease.co/en",
    tags: ["NextJS", "React", "Typescript", "Tailwind", "Turso", "SQLite"],
    order: 4,
  },
  sandro: {
    title: "Sandro's books",
    image: SandroImg,
    repoLink: "https://github.com/etherbits/react-Web-edition-of-Sandro-s-book",
    websiteLink: "https://quiet-brioche-e9ce8b.netlify.app/",
    tags: ["React", "Javascript", "SASS", "Framer Motion", "React Router"],
    order: 5,
  },
  eElections: {
    title: "E-Elections 2024 Georgia",
    image: EElectionsImg,
    repoLink: "https://github.com/etherbits/e-elections",
    websiteLink: "https://e-elections.pages.dev/en/",
    tags: ["Astro", "Typescript", "CSS", "I18", "GSAP"],
    order: 6,
  },
  fieldDictionary: {
    title: "Field Dictionary",
    image: FieldDictImg,
    repoLink: "https://github.com/etherbits/field-dictionary-front",
    websiteLink: "https://field-dictionary-front.pages.dev/",
    tags: ["HTML", "CSS", "Javascript", "Python", "Flask"],
    order: 7,
  },
};

const result = commonDataObjectSchema.safeParse(commonData);

if (!result.success) {
  console.error("\x1b[31m", "zod common data error: ", result.error.message);
}
