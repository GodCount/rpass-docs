# 安装与注册

本指南将帮助你下载、安装 Rpass 并完成初始注册。

## 系统要求

- Windows 10 或更高版本
- macOS 10.15 或更高版本
- Linux (Ubuntu 18.04+)
- 至少 100MB 可用磁盘空间

## 下载 Rpass

1. 访问 [Rpass 官方网站](https://rpass.example.com) 或 GitHub 发布页面。
2. 下载适合你操作系统的安装包。
    - Windows: .exe 或 .msi
    - macOS: .dmg
    - Linux: .deb 或 .rpm

## 安装步骤

### Windows

1. 双击下载的安装文件。
2. 按照安装向导的提示进行安装。
3. 选择安装位置（默认即可）。
4. 完成后，启动 Rpass。

### macOS

1. 打开下载的 .dmg 文件。
2. 将 Rpass 图标拖拽到 Applications 文件夹。
3. 从 Applications 启动 Rpass。

### Linux

1. 使用包管理器安装：
    ```bash
    sudo dpkg -i rpass.deb  # 对于 .deb
    # 或
    sudo rpm -i rpass.rpm   # 对于 .rpm
    ```
2. 启动 Rpass。

## 注册账户

1. 首次启动 Rpass 时，选择 "创建新账户"。
2. 输入你的邮箱地址（可选，用于恢复）。
3. 设置主密码：这是一个强密码，用于加密你的密码库。
    - 至少 12 个字符
    - 包含大写、小写、数字和符号
4. 确认主密码。
5. 创建你的第一个密码库。

## 登录

后续登录时，输入主密码即可访问你的密码库。

如果忘记主密码，由于本地加密，无法恢复。请妥善保管。
