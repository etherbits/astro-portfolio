import { defineMiddleware } from "astro:middleware";
import { getLangFromUrl } from "./i18n/utils";
import { defaultLang } from "./i18n/ui";

export const onRequest = defineMiddleware(
  async ({ locals, request, cookies, redirect }, next) => {
    if (request.method !== "GET") return next();

    const url = new URL(request.url);

    const urlLocale = getLangFromUrl(url);
    let locale = null;

    if (!urlLocale) {
      if (!cookies.has("locale")) {
        cookies.set("locale", defaultLang, { path: "/" });
      }

      locale = cookies.get("locale")!.value;
      return redirect(`/${locale}${url.pathname}`);
    } else {
      locale = urlLocale;
      cookies.set("locale", locale, { path: "/" });
    }

    locals.locale = locale;

    return next();
  },
);
