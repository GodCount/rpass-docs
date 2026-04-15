import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "docs",
    title: "Rpass",
    lang: "zh",

    cleanUrls: true,
    rewrites: {
        "zh/:rest*": ":rest*",
    },

    head: [
        ["link", { rel: "icon", type: "image/svg+xml", href: "/rpass.svg" }],
        ["link", { rel: "icon", type: "image/png", href: "/favicon.png" }],
    ],

    themeConfig: {
        logo: "/rpass.svg",
        socialLinks: [{ icon: "github", link: "https://github.com/GodCount/rpass-flutter.git" }],
        search: {
            provider: "local",
        },
    },
    locales: {
        root: {
            label: "简体中文",
            lang: "zh",
        },
        // en: {
        //     label: "English",
        //     lang: "en",
        // },
    },

    vite: {
        server: {
            host: "0.0.0.0"
        }
    }
});
