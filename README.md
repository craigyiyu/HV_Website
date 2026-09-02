# Hypervelocity 官网（静态站）

深色编辑器风单页官网，灵感来自 [classy.md](https://classy.md) 的"活的 Markdown 编辑器"创意，结合 [pen.dev](https://www.pen.dev) 的设计 token 方法。纯静态 HTML/CSS/JS，零构建、零依赖（字体走 Google Fonts CDN）。

## 文件结构

```
hypervelocity-site/
├── index.html      # 页面结构（六大板块 + data-i18n 双语标注）
├── styles.css      # 深色主题 + classy.md 蓝主色 + AI 协作者光标样式
├── script.js       # 中英双语切换 + 类型机打字 + AI 光标（全部原生 JS）
├── content/        # 可编辑内容（中英分离，Pages CMS 编辑的就是这些文件）
│   ├── site.json   #   站点信息：标题/SEO/导航/打字机词表
│   ├── hero.json   #   首屏
│   ├── services.json   # 服务与交付模式
│   ├── industries.json # 行业
│   ├── cases.json  #   成功案例
│   ├── about.json  #   关于我们
│   ├── contact.json    # 联系
│   └── footer.json #   页脚
├── .pages.yml      # Pages CMS 配置（定义可编辑字段）
├── privacy.html    # 隐私政策（公司主体：HyperVelocity Technology Limited）
├── legal.html      # 公司法律信息页（供 SumSub 等 due diligence 使用）
├── tools/export-content.js  # 从 script.js 重新导出 content/*.json 的维护脚本
├── logo.png        # 图形标
├── wordmark.png    # 字标
├── favicon.png / favicon.ico  # Tab 图标
├── og.png          # 分享图
└── README.md       # 本文件
```

## 内容编辑（Pages CMS）

网站文案已抽到 `content/*.json`（中英分离），站点加载时会自动读取这些文件渲染（内置词典兜底，离线也能显示）。

**编辑方式（免费托管版）**：
1. 打开 **https://app.pagescms.org**
2. 用 GitHub 账号登录（授权 Pages CMS 访问 `HV_Website` 仓库）
3. 选择仓库 → 左侧出现 8 个板块（站点信息 / 首屏 / 服务 / 行业 / 案例 / 关于 / 联系 / 页脚）
4. 每个板块内是 **English / 中文** 两组表单，改完点保存，自动提交到 GitHub
5. 网站部署端拉取最新代码即可生效（或配置自动部署）

> 说明：`.pages.yml` 定义了可编辑字段；含 AI 高亮标签的字段（首屏 lede、关于 philosophy）支持粘贴 HTML 高亮标记。类型机词表在"站点信息 → typing"里编辑。

## 本地预览

直接双击 `index.html` 即可，或起个静态服务器：

```bash
cd hypervelocity-site
python3 -m http.server 8080
# 打开 http://localhost:8080
```

## 部署

静态站可部署到任意托管：

- **Netlify / Vercel**：直接把本文件夹拖进去即可
- **GitHub Pages**：推到仓库 `gh-pages` 分支
- **自有服务器**：把整个文件夹放到 web 根目录，域名指向 hypervelocity.hk

> 注意：`favicon.svg` 的引用路径是 `/favicon.svg`（绝对路径），放在子路径部署时改成 `favicon.svg`。

## 已实现功能

- **中英双语**：右上角切换，默认跟随浏览器语言，选择记忆在 localStorage
- **类型机打字**：Hero 里 "We build: `AI rostering` ▍" 循环输入 6 个服务词，尊重系统"减弱动态效果"设置；已修复多循环并发导致的闪屏问题
- **AI 协作者光标**：Hero / 案例 / 关于段落里的关键词有彩色选区 + 远端光标，hover 显示 "Claude Code / Codex / Cursor" 标签 —— 复刻 classy.md 的多人协作幻觉
- **Markdown 编辑器观感**：标题 `#`/`##` 前缀、`**` 粗体标记、`- ` 列表、页脚 `---` 分隔线，正文 JetBrains Mono 等宽字体
- **交付模式展开**：点击 Project-based 或 ODC 任一卡片，两侧同时展开完整描述（完整项目团队、弹性规模、ODC 弹性补位等）
- **服务线布局**：AI 应用开发为通栏旗舰卡，下方三个小卡（小程序 / APP / 官网内容运营），SMS 为通栏横条
- **联系邮箱**：联系方式只保留 `mailto:info@hypervelocity.hk` 邮箱链接（按需求已移除表单，无需后端）

## 上线前待办（TODO）

1. ~~**确认联系邮箱**~~ ✅ 已确认：`info@hypervelocity.hk`（原 hi@，已全局替换）
2. ~~**CEO 卡片姓名**~~ ✅ 已填入：Craig Yu（Co-founder & CEO）
3. ~~**表单后端**~~ ❌ 已按需求移除联系表单，仅保留邮箱链接，无需后端
4. **Eason Chen 背景**：CTO 卡片目前是占位简介，等 Craig 提供真实背景后替换
5. **Hero 主文案**：首屏 lede 那句等待 Craig 提供重写后的文案（要求突出 AI application / mini program 并减少 "apps" 重复），拿到后再替换
6. ~~**公司 Logo**~~ ✅ 已收到 logo.png 并接入：header 显示真实 logo、favicon.png（图形标方形裁切）、og.png（1200×630 分享图）
7. **隐私/服务条款**：已按需求从页脚移除（不再需要）
8. **OG 社交图**：✅ 已生成 `og.png`（1200×630，深色底 + logo + 标语），meta 已引用
9. **法律信息**：✅ 已加 privacy.html / legal.html（公司：HyperVelocity Technology Limited，注册地址：RM 37, 6/F, Draco Industrial Building, 46 Lai Yip Street, Kwun Tong, Kowloon, HK）+ 首页联系区地址 + 页脚链接。待办：如有香港 CR 注册号可补充到 legal.html
10. **正式上线 URL**：SumSub due diligence 需要"可访问的官网"。建议开启 GitHub Pages（Settings → Pages → Deploy from branch → main → /root），得到 https://craigyiyu.github.io/HV_Website/（privacy 在 /privacy.html），或由团队部署 hypervelocity.hk
11. **字体自托管（可选）**：当前用 Google Fonts CDN，正式环境或国内访问建议把 Inter / JetBrains Mono 的 woff2 下载到本地
12. **SEO**：上线后提交 sitemap 到 Google Search Console；如需覆盖"综合度假村 AI 排班"等关键词可再加独立落地页

## 定制指南

- 改文案：`script.js` 顶部的 `I18N` 对象（en / zh 两个词典），或 `index.html` 里的默认英文
- 改颜色：`styles.css` 顶部 `:root` 变量（`--link` 是主色，`--presence-*` 是 AI 光标三色）
- 增删板块：改 `index.html` 的 `<section>`，并在两个词典里加对应 key
