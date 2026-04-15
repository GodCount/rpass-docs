// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { inject } from "@vercel/analytics";
import "./style.css";
import MyLayout from "./MyLayout.vue";

export default {
    extends: DefaultTheme,
    Layout: MyLayout,
    enhanceApp({ app, router, siteData }) {
        // Initialize Vercel Analytics
        if (typeof window !== "undefined") {
            inject();
        }
    },
} satisfies Theme;
