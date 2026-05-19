import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["en", "fr", "ar"],
    defaultLocale: "en",
    pathnames: {
        "/": "/",
        "/projects": {
            fr: "/projets",
            ar: "/المشاريع",
        },
    },
});
