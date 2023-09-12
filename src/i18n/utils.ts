import { ui, defaultLang, type TranslationKey } from "./ui";

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
