import { getCollection } from "astro:content";
import { ui, defaultLang, type TranslationKey } from "./ui";
import { commonData } from "../content/projects/commonData";

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

export async function getProjects(lang: keyof typeof ui) {
  const projects = await getCollection("projects", (project) =>
    project.slug.startsWith(lang),
  );

  const mergedProjects = projects.map(project => ({ ...project.data, ...commonData[project.data.id] }))
  mergedProjects.sort((a, b)=>b.order-a.order)
  return mergedProjects
}
