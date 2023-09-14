import { getCollection } from "astro:content";
import { ui, defaultLang, type TranslationKey } from "./ui";
import { commonData } from "../content/projects/commonData";
import type { ZodIssue } from "astro/zod";
import type { languages } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return null;
}

export function generateTranslator(lang: keyof typeof ui) {
  return function t(key: TranslationKey) {
    return ui[lang]?.[key] || ui[defaultLang][key];
  };
}

export function translateZodErrors(
  issues: ZodIssue[],
  lang: keyof typeof languages,
) {
  if (lang === "en") return;

  issues.map((issue) => {
    switch (issue.code) {
      case "too_small":
        issue.message = `ველში საჭიროა მინიმუმ ${issue.minimum} ასო`;
        break;
      case "too_big":
        issue.message = `ველში საჭიროა მაქსიმუმ ${issue.maximum} ასო`;
        break;
      default:
        issue.message = "ველში შეიყვანეთ ვალიდური მონაცემი";
    }
  });
}

export async function getProjects(lang: keyof typeof ui) {
  const projects = await getCollection("projects", (project) =>
    project.slug.startsWith(lang),
  );

  const mergedProjects = projects.map((project) => ({
    ...project.data,
    ...commonData[project.data.id],
  }));

  mergedProjects.sort((a, b) => a.order - b.order);

  return mergedProjects;
}
