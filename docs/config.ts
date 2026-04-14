import { defineAdditionalConfig, type DefaultTheme } from "vitepress";

export default defineAdditionalConfig({
    description:
        "Rpass 是一款开源的密码管理器，旨在提供安全、便捷的密码存储和管理解决方案。Rpass 都能帮助你轻松管理各种账户的登录信息，生成强密码，并确保你的数据安全无忧。",

    themeConfig: {
        nav: nav(),

        search: { options: searchOptions() },

        sidebar: {
            "/guide/": { base: "/guide/", items: sidebarGuide() },
            "/blog/": { base: "/blog/", items: sidebarBlog() },
            "/connect/": { base: "/connect/", items: sidebarConnect() },
        },

        editLink: {
            pattern: "https://github.com/godcount/rpass-docs/edit/main/docs/:path",
            text: "在 GitHub 上编辑此页面",
        },

        footer: {
            message: "基于 MIT 许可发布",
            copyright: "版权所有 © 2026-至今 God Count",
        },

        docFooter: {
            prev: "上一页",
            next: "下一页",
        },

        outline: {
            label: "页面导航",
        },

        lastUpdated: {
            text: "最后更新于",
        },

        notFound: {
            title: "页面未找到",
            quote: "但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。",
            linkLabel: "前往首页",
            linkText: "带我回首页",
        },

        langMenuLabel: "多语言",
        returnToTopLabel: "回到顶部",
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "主题",
        lightModeSwitchTitle: "切换到浅色模式",
        darkModeSwitchTitle: "切换到深色模式",
        skipToContentLabel: "跳转到内容",
    },
});

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: "指南",
            link: "/guide/what-is-rpass",
            activeMatch: "/guide/",
        },
        {
            text: "博客",
            link: "/blog/new",
            activeMatch: "/blog/",
        },
        {
            text: "联系我们",
            link: "/connect/connect",
            activeMatch: "/connect/",
        },
    ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "简介",
            collapsed: false,
            link: "what-is-rpass",
        },
        {
            text: "快速入门",
            collapsed: false,
            items: [
                { text: "安装与注册", link: "installation" },
                { text: "创建第一个密码库", link: "creating-your-first-vault" },
                { text: "导入已有密码", link: "importing-existing-passwords" },
            ],
        },
        {
            text: "安全与隐私",
            collapsed: false,
            items: [
                {
                    text: "主密码设置与密码策略",
                    link: "master-password-setup-and-password-policies",
                },
                { text: "备份与恢复", link: "backup-and-restore" },
            ],
        },
        {
            text: "核心功能",
            collapsed: false,
            items: [
                { text: "添加与管理密码", link: "adding-and-managing-passwords" },
                { text: "双因素认证（2FA）", link: "two-factor-authentication" },
                { text: "自动填充", link: "auto-fill" },
                { text: "密码生成器", link: "password-generator" },
                { text: "标签与分组", link: "tags-and-groups" },
                { text: "搜索与快速访问", link: "search-and-quick-access" },
                { text: "回收站", link: "recycle-bin" },
                { text: "Favicon 显示", link: "favicon-display" },
                { text: "启动聚焦", link: "focus-on-startup" },
                { text: "快捷键", link: "keyboard-shortcuts" },
            ],
        },
        {
            text: "高级功能",
            collapsed: false,
            items: [
                { text: "WebDAV 同步", link: "webdav-sync" },
                { text: "局域网填充服务", link: "local-network-fill-service" },
                { text: "自定义字段", link: "custom-fields" },
                { text: "附件支持", link: "attachment-support" },
                { text: "密码克隆", link: "password-cloning" },
            ],
        },
    ];
}

function sidebarBlog(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "最新公告",
            link: "new",
        },
        {
            text: "常见问题",
            items: [
                { text: "FAQ", link: "faq" },
                { text: "浏览器迁移", link: "migration-browser" },
            ],
        },
    ];
}

function sidebarConnect(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "联系我们",
            link: "connect",
        },
        {
            text: "赞助&支持",
            link: "sponsors",
        },
    ];
}

function searchOptions(): Partial<DefaultTheme.AlgoliaSearchOptions> {
    return {
        translations: {
            button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索",
            },
            modal: {
                searchBox: {
                    clearButtonTitle: "清除",
                    clearButtonAriaLabel: "清除查询",
                    closeButtonText: "关闭",
                    closeButtonAriaLabel: "关闭",
                    placeholderText: "搜索文档或向 AI 提问",
                    placeholderTextAskAi: "再问一个问题...",
                    placeholderTextAskAiStreaming: "正在回答...",
                    searchInputLabel: "搜索",
                    backToKeywordSearchButtonText: "返回关键词搜索",
                    backToKeywordSearchButtonAriaLabel: "返回关键词搜索",
                    newConversationPlaceholder: "提问",
                    conversationHistoryTitle: "我的对话历史",
                    startNewConversationText: "开始新的对话",
                    viewConversationHistoryText: "对话历史",
                    threadDepthErrorPlaceholder: "对话已达上限",
                },
                newConversation: {
                    newConversationTitle: "我今天能帮你什么？",
                    newConversationDescription:
                        "我会搜索你的文档，快速帮你找到设置指南、功能细节和故障排除提示。",
                },
                footer: {
                    selectText: "选择",
                    submitQuestionText: "提交问题",
                    selectKeyAriaLabel: "回车键",
                    navigateText: "导航",
                    navigateUpKeyAriaLabel: "向上箭头",
                    navigateDownKeyAriaLabel: "向下箭头",
                    closeText: "关闭",
                    backToSearchText: "返回搜索",
                    closeKeyAriaLabel: "Esc 键",
                    poweredByText: "由…提供支持",
                },
                errorScreen: {
                    titleText: "无法获取结果",
                    helpText: "你可能需要检查网络连接。",
                },
                startScreen: {
                    recentSearchesTitle: "最近",
                    noRecentSearchesText: "暂无最近搜索",
                    saveRecentSearchButtonTitle: "保存此搜索",
                    removeRecentSearchButtonTitle: "从历史记录中移除此搜索",
                    favoriteSearchesTitle: "收藏",
                    removeFavoriteSearchButtonTitle: "从收藏中移除此搜索",
                    recentConversationsTitle: "最近对话",
                    removeRecentConversationButtonTitle: "从历史记录中移除此对话",
                },
                noResultsScreen: {
                    noResultsText: "未找到相关结果",
                    suggestedQueryText: "尝试搜索",
                    reportMissingResultsText: "认为此查询应该有结果？",
                    reportMissingResultsLinkText: "告诉我们。",
                },
                resultsScreen: {
                    askAiPlaceholder: "询问 AI：",
                    noResultsAskAiPlaceholder: "文档里没找到？让 Ask AI 帮忙：",
                },
                askAiScreen: {
                    disclaimerText: "回答由 AI 生成，可能会出错。请核实。",
                    relatedSourcesText: "相关来源",
                    thinkingText: "思考中...",
                    copyButtonText: "复制",
                    copyButtonCopiedText: "已复制！",
                    copyButtonTitle: "复制",
                    likeButtonTitle: "喜欢",
                    dislikeButtonTitle: "不喜欢",
                    thanksForFeedbackText: "感谢你的反馈！",
                    preToolCallText: "搜索中...",
                    duringToolCallText: "搜索中...",
                    afterToolCallText: "已搜索",
                    stoppedStreamingText: "你已停止此回复",
                    errorTitleText: "聊天错误",
                    threadDepthExceededMessage: "为保持回答准确，此对话已关闭。",
                    startNewConversationButtonText: "开始新的对话",
                },
            },
        },
    };
}
