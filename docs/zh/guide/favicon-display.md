# Favicon 显示

Rpass 可以显示网站的 favicon，帮助识别条目。

## 启用 Favicon

1. 设置: 其他 > 更多设置 > 显示网站图标。

| 服务       | 请求方式                                                   |
| :--       | :--                                                        |
| 直接下载    |  http://$domain/faviocn.ico                               |
| Cravatar   | https://cn.cravatar.com/favicon/api/index.php?url=$domain |
| Duckduckgo | https://icons.duckduckgo.com/ip3/$domain.ico              |
| Google     | https://www.google.com/s2/favicons?domain=$domain&sz=32   |

> 国内建议使用 Cravatar 无需代理即可访问



## 如何工作

- 通过 URL 的域名，获取 favicon。
- 存储在本地缓存中。


## 提示

- 需要网络连接下载。
- **注意**：自定义图标优先级最高，其次才是 Favicon。
- 在 **显示网站图标** 弹窗中可以清除图标缓存。
- 如果开启后，可以在密码查看页，长按图标来单独切换来源下载。
