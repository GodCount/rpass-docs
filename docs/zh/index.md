---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
    name: "Rpass"
    text: 开源的密码管理器
    tagline: Rpass 旨在提供安全、便捷的密码存储和管理解决方案。Rpass 都能帮助你轻松管理各种账户的登录信息，生成强密码，并确保你的数据安全无忧。
    actions:
        - theme: brand
          text: 快速开始
          link: /guide/what-is-rpass
        - theme: alt
          text: Google Play
          link: https://play.google.com/store/apps/details?id=com.godcount.rpass
        - theme: alt
          text: Github
          link: https://github.com/GodCount/rpass-flutter.git
    image:
        src: /rpass.svg
        alt: Rpass

features:
    - icon: "🧩"
      title: 创建第一个密码库
      details: 通过简单引导快速创建个人密码库，安全保存登录信息、账户凭证和私密数据。
      link: /guide/creating-your-first-vault
    - icon: "⚡"
      title: 自动填充
      details: 在浏览器和应用中智能识别登录表单，一键填充账号与密码，减少重复输入。
      link: /guide/auto-fill
    - icon: "🌐"
      title: 局域网填充服务
      details: 在局域网环境中发现设备并提供安全填充服务，提升团队内登录体验。
      link: /guide/local-network-fill-service
    - icon: "🔄"
      title: WebDAV 同步
      details: 支持通过 WebDAV 存储与同步密码库，实现跨设备备份与协作。
      link: /guide/webdav-sync
---
