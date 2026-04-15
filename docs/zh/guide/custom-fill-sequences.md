# 自定义填充序列

自定义填充序列的格式、支持的特殊键、快捷键、KDBX 字段变量等内容。
这是 KeePass Auto-Type 的简化版实现。


## 1. 填充序列基础

填充序列是一串文本和特殊指令的组合，用于模拟键盘输入，实现如登录表单自动填写等功能。序列可包含：
- 普通文本
- 特殊按键（如 \{TAB\}、\{ENTER\} 等）
- 快捷键组合（如 ^a、%b、+c）
- KDBX 字段变量（如 \{UserName\}、\{Password\}）


## 2. 支持的特殊按键

可用的特殊按键如下（区分大小写，需用大括号包裹）：

| 键名         | 说明           |
|--------------|----------------|
| \{TAB\}        | Tab键          |
| \{ENTER\}      | 回车键         |
| \{UP\}         | 上方向键       |
| \{DOWN\}       | 下方向键       |
| \{LEFT\}       | 左方向键       |
| \{RIGHT\}      | 右方向键       |
| \{INSERT\}     | Insert键       |
| \{DELETE\}     | Delete键       |
| \{HOME\}       | Home键         |
| \{END\}        | End键          |
| \{PGUP\}       | PageUp键       |
| \{PGDN\}       | PageDown键     |
| \{SPACE\}      | 空格键         |
| \{BACKSPACE\}  | 退格键         |
| \{ESC\}        | Esc键          |
| \{WIN\}        | Win键          |
| \{F1\}~\{F16\}   | 功能键         |
| \{NUMPAD0\}~\{NUMPAD9\} | 小键盘数字 |



## 3. 快捷键组合

快捷键使用如下符号表示：
- ^ 表示 Ctrl
- % 表示 Alt
- + 表示 Shift

例如：
- ^a 代表 Ctrl+A
- %b 代表 Alt+B
- +c 代表 Shift+C
- ^%+d 代表 Ctrl+Alt+Shift+D

> 快捷键格式：最多 3 个修饰符 + 1 个字母或数字。


## 4. KDBX 字段变量

用于插入条目中的字段内容，格式为大括号包裹字段名：

| 变量名         | 说明           |
|----------------|----------------|
| \{Title\}        | 标题           |
| \{URL\}          | 网址           |
| \{UserName\}     | 用户名         |
| \{Email\}        | 邮箱           |
| \{Password\}     | 密码           |
| \{OTPAuth\}      | 动态口令       |
| \{Notes\}        | 备注           |
| \{S:xxx\}        | 自定义字段     |

示例：
- \{UserName\}
- \{Password\}
- \{S:CustomField\}


## 5. 填充序列示例


```text
{UserName}{TAB}{Password}{ENTER}
```

含义：输入用户名，按 Tab，输入密码，按回车。


```text
^a{BACKSPACE}myemail@example.com{TAB}{Password}{ENTER}
```

含义：Ctrl+A 全选，退格清空，输入邮箱，Tab，输入密码，回车。


## 6. 参考
- [KeePass Auto-Type 文档](https://keepass.info/help/base/autotype.html)
