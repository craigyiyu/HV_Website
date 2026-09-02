/* ============================================================
   HyperVelocity — script.js
   Bilingual (EN/ZH) toggle · typewriter · AI-agent presence carets
   ============================================================ */

(function () {
  "use strict";

  /* ---------- copy ---------- */

  var I18N = {
    en: {
      title: "HyperVelocity — Your AI-first technology & talent partner",
      "meta.desc":
        "HyperVelocity helps enterprises scale IT capacity and accelerate AI transformation — AI applications, WeChat mini-programs, apps, and dedicated teams, delivered project-based or as an offshore development center (ODC).",
      "nav.services": "Services",
      "nav.industries": "Industries",
      "nav.cases": "Cases",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.cta": "Contact us",
      "lang.toggle": "中文",
      "hero.badge": "AI-first technology services",
      "hero.title": "Your AI-first technology & talent partner",
      "hero.lede":
        'We give enterprises the IT resources they need to move faster through AI transformation — and we don\'t stop at building your <span class="agent-word" data-agent="claude">AI applications</span> and <span class="agent-word" data-agent="codex">mini-programs</span>. Our <span class="agent-word" data-agent="cursor">dedicated teams</span> help you navigate a new way of working.',
      "hero.typelabel": "We build:",
      "typing.words": [
        "AI rostering",
        "intelligent booking",
        "engineering optimization",
        "mini-programs & apps",
        "SMS infrastructure",
        "content operations",
      ],
      "hero.cta1": "Contact us",
      "hero.cta2": "Explore services",
      "services.title": "Services",
      "services.intro": "Two delivery models, one AI-first team.",
      "services.mode1.title": "Project-based",
      "services.mode1.summary": "A complete project team — design, product, engineering, QA — scaled to your project.",
      "services.mode1.detail":
        "We assemble a full project team for you — from designer to product manager, front-end and back-end engineers, and QA — and scale it according to your project's needs and timeline so every milestone gets met. You get a clear development roadmap, backed by a team that supports you end to end, including technology solutioning.",
      "services.mode1.b1": "Full project team: design, PM, engineering & QA",
      "services.mode1.b2": "Team scales with project needs & timeline",
      "services.mode1.b3": "Clear roadmap, technical solutioning included",
      "services.mode2.title": "ODC — Offshore Development Center",
      "services.mode2.summary": "A dedicated remote team that works like your own — without the HR overhead.",
      "services.mode2.detail":
        "We staff it with proven talent and recruit as your needs grow. You don't handle any complex HR management — we do. You join the daily stand-ups and use your own task management system, and the team works alongside yours like your employees. It's scalable by design: if people change, we backfill. Stability and quality assurance are guaranteed — with clear, well-written documentation as a standing requirement.",
      "services.mode2.b1": "Scalable — backfill whenever people change",
      "services.mode2.b2": "Stability & QA guaranteed",
      "services.mode2.b3": "Clear documentation, always",
      "services.mode.more": "Click either delivery model — both expand together.",
      "services.lines.title": "Service lines",
      "services.s1.title": "AI Application Development",
      "services.s1.body":
        "Our flagship line. We take AI from idea to production inside your real business processes — rostering, customer service, booking, engineering optimization. Every delivery includes design, product management, architecture, and QA, and we work in both Chinese and international markets.",
      "services.s2.title": "WeChat Mini-Programs",
      "services.s2.body":
        "Built for the China market: reach WeChat's ecosystem, from design to launch.",
      "services.s3.title": "Mobile Apps",
      "services.s3.body": "iOS & Android applications, engineered with an AI-first workflow.",
      "services.s4.title": "Website Content Operations",
      "services.s4.body":
        "Content operations for your official website — in Chinese and English — run by an AI-assisted team.",
      "services.s5.title": "SMS Services",
      "services.s5.body":
        "Overseas companies can't send messages to their clients in China. We handle local SMS delivery — and we have solutions for global customers too: verification codes, alerts, and campaign services.",
      "industries.title": "Industries",
      "industries.intro": "Where AI meets real operations.",
      "industries.i1.title": "Integrated Resorts",
      "industries.i1.b1": "Membership",
      "industries.i1.b2": "Operation",
      "industries.i1.b3": "Booking",
      "industries.i1.b4": "Internal Process",
      "industries.i2.title": "Manufacturing",
      "industries.i2.b1": "AI-assisted process",
      "industries.i2.b2": "High accuracy",
      "industries.i2.b3": "Less time, lower cost",
      "industries.i4.title": "Healthcare",
      "industries.i4.b1": "AI Imaging",
      "industries.i4.b2": "Medical Tourism",
      "cases.title": "Case studies",
      "cases.intro": "Real deployments, real numbers.",
      "cases.f.bg": "Background",
      "cases.f.did": "What we did",
      "cases.f.out": "Outcomes",
      "cases.c1.title": "AI-powered rostering",
      "cases.c1.bg":
        "Manual scheduling for a large workforce was slow and error-prone — constantly fighting labor regulations and rarely reflecting what employees actually wanted.",
      "cases.c1.did":
        "We built an AI rostering system that automatically balances employee preferences with labor regulations, producing compliant schedules in minutes.",
      "cases.c1.out":
        "Manual scheduling workload cut by <strong class=\"metric\">80–90%</strong>, with better fairness and compliance.",
      "cases.c1.o1": "Compliant with labor regulations",
      "cases.c1.o2": "Employee preferences honored",
      "cases.c2.title": "Conversational booking & customer service",
      "cases.c2.bg":
        "Customer service teams worked across scattered systems, re-entering booking details by hand — limiting how much they could handle and slowing sales.",
      "cases.c2.did":
        "We unified the systems and used AI to extract booking details directly from customer conversations, completing reservations in real time.",
      "cases.c2.out":
        "Less headcount needed, far higher service capacity, faster responses — and higher sales.",
      "cases.c2.o1": "Bookings completed inside the conversation",
      "cases.c2.o2": "Higher service capacity with less headcount",
      "cases.c2.o3": "Faster responses, higher sales",
      "cases.c3.title": "AI-assisted design optimization",
      "cases.c3.bg":
        "Pharmaceutical and semiconductor facilities need clean-room layouts — precise, compliant, and expensive to produce by hand.",
      "cases.c3.did":
        "We built an AI-assisted design tool that generates optimized clean-room layouts quickly.",
      "cases.c3.out":
        "Lower design cost and compressed timelines, without compromising compliance.",
      "cases.c3.o1": "Clean rooms for pharma & semiconductor",
      "cases.c3.o2": "AI-generated optimized layouts",
      "cases.c3.o3": "Lower cost, faster delivery",
      "about.title": "About",
      "about.philosophy":
        '<em class="agent-word" data-agent="codex">AI-first</em>: every engagement starts with the question — <em>"how should AI change this process?"</em> — then we engineer it.',
      "about.f1.role": "Co-founder & CEO",
      "about.f1.bio":
        "Previously built ColourData with the founding team — a technology company successfully acquired by a Korean enterprise.",
      "about.f3.role": "Co-founder & CTO",
      "about.f3.bio":
        "Deep expertise in massive-scale data and Hadoop-based distributed systems — building solutions from the technology side.",
      "contact.title": "Contact",
      "contact.intro": "Tell us about your AI transformation. We reply within one business day.",
      "contact.addressLabel": "Registered office",
      "contact.address": "RM 37, 6/F, Draco Industrial Building, 46 Lai Yip Street, Kwun Tong, Kowloon, Hong Kong",
      "footer.rights": "All rights reserved.",
      "footer.privacy": "Privacy Policy",
      "footer.legal": "Legal",
      "footer.contact": "Get in touch",
      "footer.hiring": "We're hiring AI-first engineers — say hello.",
    },

    zh: {
      title: "HyperVelocity — 您的 AI 优先技术与人才伙伴",
      "meta.desc":
        "HyperVelocity 帮助企业扩充 IT 人力与技术资源、加速 AI 转型——提供 AI 应用、微信小程序、APP 与专属团队，支持项目制或离岸开发中心（ODC）两种交付模式。",
      "nav.services": "服务",
      "nav.industries": "行业",
      "nav.cases": "案例",
      "nav.about": "关于我们",
      "nav.contact": "联系我们",
      "nav.cta": "联系我们",
      "lang.toggle": "EN",
      "hero.badge": "AI 优先的技术服务",
      "hero.title": "您的 AI 优先技术与人才伙伴",
      "hero.lede":
        '我们为企业提供 AI 转型所需的技术资源，加速前进——我们不止于构建你的 <span class="agent-word" data-agent="claude">AI 应用</span>与<span class="agent-word" data-agent="codex">小程序</span>，更有<span class="agent-word" data-agent="cursor">专属团队</span>陪你探索全新的工作方式。',
      "hero.typelabel": "我们构建：",
      "typing.words": [
        "AI 智能排班",
        "智能预订系统",
        "工程优化",
        "小程序与 APP",
        "短信基础设施",
        "内容运营",
      ],
      "hero.cta1": "联系我们",
      "hero.cta2": "查看服务",
      "services.title": "服务",
      "services.intro": "两种交付模式，一支 AI 优先的团队。",
      "services.mode1.title": "项目制",
      "services.mode1.summary": "一支完整的项目团队——设计、产品、研发、测试——按你的项目配置。",
      "services.mode1.detail":
        "我们会为客户组建一支完整的项目团队——从设计师、产品经理，到前端、后端工程师与测试——并根据项目需求与时间规划动态调整团队规模，确保每一个里程碑如期达成。客户拥有清晰的发展路径，背后是一支全流程支持的团队，连技术解决方案我们也会一并提供。",
      "services.mode1.b1": "完整项目团队：设计 / 产品 / 前后端 / 测试",
      "services.mode1.b2": "团队按项目需求与工期弹性配置",
      "services.mode1.b3": "清晰的路线图，含技术方案支持",
      "services.mode2.title": "ODC — 离岸开发中心",
      "services.mode2.summary": "一支专属远程团队，像你自己的团队一样工作——无需人力管理负担。",
      "services.mode2.detail":
        "我们用现成人才组建团队，需要时帮你招聘补位。客户不需要任何复杂的人力管理——这些都由我们完成。你可以参加每日站会、使用你自己的任务管理系统，团队就像你的员工一样与你协作。按需弹性伸缩：人员变动时我们及时补上。稳定性与质量保障有承诺——文档始终清晰规范，这是我们的硬性要求。",
      "services.mode2.b1": "弹性伸缩——人员变动即补位",
      "services.mode2.b2": "稳定性与质量保障",
      "services.mode2.b3": "文档始终清晰规范",
      "services.mode.more": "点击任一交付模式，两侧会一起展开。",
      "services.lines.title": "服务线",
      "services.s1.title": "AI 应用开发",
      "services.s1.body":
        "我们的旗舰服务线。我们把 AI 从想法带到生产，嵌入你真实的业务流程——排班、客服、预订、工程优化。每次交付都包含设计、产品管理、架构与测试，覆盖中国市场与国际市场。",
      "services.s2.title": "微信小程序开发",
      "services.s2.body": "面向中国市场：从设计到上线，触达微信生态。",
      "services.s3.title": "APP 开发",
      "services.s3.body": "iOS 与 Android 应用，以 AI 优先的工作流交付。",
      "services.s4.title": "官网内容运营",
      "services.s4.body": "中英文官网的内容运营，由 AI 辅助团队执行。",
      "services.s5.title": "短信服务",
      "services.s5.body":
        "海外公司无法向在中国的客户发送短信。我们负责本地短信送达——同时也提供面向全球客户的方案：验证码、提醒通知与营销活动服务。",
      "industries.title": "行业",
      "industries.intro": "AI 与真实运营交汇之处。",
      "industries.i1.title": "综合度假村",
      "industries.i1.b1": "会员体系",
      "industries.i1.b2": "运营",
      "industries.i1.b3": "预订",
      "industries.i1.b4": "内部流程",
      "industries.i2.title": "制造业",
      "industries.i2.b1": "AI 辅助流程",
      "industries.i2.b2": "高准确率",
      "industries.i2.b3": "更省时间、更低成本",
      "industries.i4.title": "医疗健康",
      "industries.i4.b1": "AI 影像",
      "industries.i4.b2": "医疗旅游",
      "cases.title": "成功案例",
      "cases.intro": "真实落地，真实数字。",
      "cases.f.bg": "背景",
      "cases.f.did": "我们做了什么",
      "cases.f.out": "成果",
      "cases.c1.title": "AI 智能排班",
      "cases.c1.bg":
        "为大规模员工手动排班既慢又容易出错——既要不断满足劳动法规，又很难照顾员工的实际诉求。",
      "cases.c1.did":
        "我们构建了一套 AI 排班系统，自动平衡员工诉求与劳动法规，几分钟内生成合规排班表。",
      "cases.c1.out":
        "人工排班工作量降低 <strong class=\"metric\">80–90%</strong>，公平性与合规性同步提升。",
      "cases.c1.o1": "符合劳动法规",
      "cases.c1.o2": "兼顾员工诉求",
      "cases.c2.title": "对话式预订与客服",
      "cases.c2.bg":
        "客服团队在多个割裂的系统中工作，预订信息需要手动重复录入——承接能力受限，销售也因此变慢。",
      "cases.c2.did":
        "我们整合了所有系统，用 AI 直接从客服对话中提炼预订信息，实时完成预订。",
      "cases.c2.out": "更少的人力投入、更高的承接能力、更快的响应——以及更高的销量。",
      "cases.c2.o1": "在对话内直接完成预订",
      "cases.c2.o2": "更少人力，更高承接能力",
      "cases.c2.o3": "响应更快，销量更高",
      "cases.c3.title": "AI 辅助设计优化",
      "cases.c3.bg":
        "药企与半导体行业需要洁净室（Clean Room）设计——精确、合规，而手工制作既慢又贵。",
      "cases.c3.did":
        "我们打造了一款 AI 辅助设计工具，快速生成优化的洁净室排版方案。",
      "cases.c3.out": "更低的成本、更短的周期，同时不牺牲合规性。",
      "cases.c3.o1": "药企与半导体的洁净室设计",
      "cases.c3.o2": "AI 生成优化排版",
      "cases.c3.o3": "更低的成本，更快的交付",
      "about.title": "关于我们",
      "about.philosophy":
        '<em class="agent-word" data-agent="codex">AI 优先</em>：每一个项目都从同一个问题开始——"AI 应该如何改变这个流程？"——然后我们把它落地。',
      "about.f1.role": "联合创始人 & CEO",
      "about.f1.bio": "与创始团队共同创立 ColourData——一家被韩国企业成功收购的技术公司。",
      "about.f3.role": "联合创始人 & CTO",
      "about.f3.bio": "深耕海量数据与 Hadoop 分布式系统——从技术视角为企业构建解决方案。",
      "contact.title": "联系我们",
      "contact.intro": "告诉我们你的 AI 转型计划，我们会在一个工作日内回复。",
      "contact.addressLabel": "注册地址",
      "contact.address": "RM 37, 6/F, Draco Industrial Building, 46 Lai Yip Street, Kwun Tong, Kowloon, Hong Kong",
      "footer.rights": "保留所有权利。",
      "footer.privacy": "隐私政策",
      "footer.legal": "法律信息",
      "footer.contact": "联系",
      "footer.hiring": "我们正在招聘 AI 优先的工程师——欢迎联系。",
    },
  };

  var AGENTS = {
    claude: { label: "Claude Code", color: "pink" },
    codex: { label: "Codex", color: "emerald" },
    cursor: { label: "Cursor", color: "amber" },
  };

  var STORAGE_KEY = "hv-lang";
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- language ---------- */

  function detectLanguage() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "zh") return saved;
    } catch (e) { /* storage unavailable */ }
    return (navigator.language || "en").toLowerCase().indexOf("zh") === 0 ? "zh" : "en";
  }

  var currentLang = detectLanguage();

  function applyLanguage(lang) {
    currentLang = lang;
    var dict = I18N[lang];
    if (!dict) return;

    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = dict.title;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", dict["meta.desc"]);

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key] !== undefined) nodes[i].textContent = dict[key];
    }

    var htmlNodes = document.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < htmlNodes.length; j++) {
      var hKey = htmlNodes[j].getAttribute("data-i18n-html");
      if (dict[hKey] !== undefined) htmlNodes[j].innerHTML = dict[hKey];
    }

    var toggle = document.getElementById("lang-toggle");
    if (toggle) toggle.textContent = dict["lang.toggle"];

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }

    initAgents();
    initTypewriter();
  }

  /* ---------- AI agent presence carets ---------- */

  function createCaret(agentKey) {
    var meta = AGENTS[agentKey] || AGENTS.claude;
    var caret = document.createElement("span");
    caret.className = "agent-caret";
    caret.setAttribute("data-agent", agentKey);
    caret.setAttribute("aria-hidden", "true");

    var dot = document.createElement("span");
    dot.className = "agent-caret-dot";
    dot.setAttribute("aria-hidden", "true");

    var label = document.createElement("span");
    label.className = "agent-caret-label";
    label.textContent = meta.label;

    caret.append("\u2060", dot, "\u2060", label, "\u2060");
    return caret;
  }

  function initAgents() {
    var words = document.querySelectorAll(".agent-word");
    for (var i = 0; i < words.length; i++) {
      var el = words[i];
      var agent = el.getAttribute("data-agent") || "claude";
      var next = el.nextElementSibling;
      if (next && next.classList.contains("agent-caret") && next.getAttribute("data-agent") === agent) {
        continue;
      }
      el.after(createCaret(agent));
    }
  }

  /* ---------- typewriter (flicker-safe: one loop at a time) ---------- */

  var typingEl = document.getElementById("typing");
  var typingToken = 0;

  function initTypewriter() {
    if (!typingEl) return;
    var words = I18N[currentLang]["typing.words"] || [];
    if (!words.length) return;

    if (reducedMotion) {
      typingEl.textContent = words[0];
      return;
    }

    var token = ++typingToken; // invalidates any previous loop
    var sleep = function (ms) {
      return new Promise(function (resolve) { window.setTimeout(resolve, ms); });
    };

    (async function typeLoop() {
      var index = 0;
      while (true) {
        if (token !== typingToken) return;
        var word = words[index % words.length];
        for (var n = 1; n <= word.length; n++) {
          if (token !== typingToken) return;
          typingEl.textContent = word.slice(0, n);
          await sleep(70);
        }
        if (token !== typingToken) return;
        await sleep(2200);
        if (token !== typingToken) return;
        typingEl.textContent = "\u200b"; // zero-width space: caret stays put, no flash
        await sleep(300);
        index++;
      }
    })();
  }

  /* ---------- mode cards (click any card → expand both) ---------- */

  function initModeCards() {
    var cards = Array.prototype.slice.call(document.querySelectorAll(".mode-card"));

    function setAll(open) {
      for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var head = card.querySelector(".mode-card-head");
        var detail = card.querySelector(".mode-detail");
        if (!head || !detail) continue;
        detail.hidden = !open;
        head.setAttribute("aria-expanded", open ? "true" : "false");
        card.classList.toggle("is-open", open);
      }
    }

    function toggleAll() {
      var anyClosed = cards.some(function (c) {
        var d = c.querySelector(".mode-detail");
        return d && d.hidden;
      });
      setAll(anyClosed); // if any card is closed → open all; if all open → close all
    }

    for (var i = 0; i < cards.length; i++) {
      var head = cards[i].querySelector(".mode-card-head");
      if (!head) continue;
      head.addEventListener("click", toggleAll);
      head.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleAll();
        }
      });
    }
  }

  /* ---------- header scroll + mobile menu ---------- */

  var header = document.getElementById("site-header");
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 0);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var menuToggle = document.getElementById("menu-toggle");
  var nav = document.getElementById("site-nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- language toggle ---------- */

  var langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", function () {
      applyLanguage(currentLang === "en" ? "zh" : "en");
    });
  }

  /* ---------- content loading (editable via Pages CMS) ---------- */

  var CONTENT_FILES = [
    { file: "content/site.json", prefix: "" },
    { file: "content/hero.json", prefix: "hero." },
    { file: "content/services.json", prefix: "services." },
    { file: "content/industries.json", prefix: "industries." },
    { file: "content/cases.json", prefix: "cases." },
    { file: "content/about.json", prefix: "about." },
    { file: "content/contact.json", prefix: "contact." },
    { file: "content/footer.json", prefix: "footer." }
  ];

  function flattenContent(obj, prefix) {
    var out = {};
    Object.keys(obj).forEach(function (k) {
      var v = obj[k];
      if (v && typeof v === "object" && !Array.isArray(v)) {
        Object.assign(out, flattenContent(v, prefix + k + "."));
      } else {
        out[prefix + k] = v;
      }
    });
    return out;
  }

  function loadContent() {
    Promise.all(CONTENT_FILES.map(function (cfg) {
      return fetch(cfg.file)
        .then(function (r) { return r.ok ? r.json() : null; })
        .catch(function () { return null; });
    })).then(function (results) {
      var loaded = false;
      CONTENT_FILES.forEach(function (cfg, i) {
        var data = results[i];
        if (!data) return;
        ["en", "zh"].forEach(function (lang) {
          if (data[lang]) {
            Object.assign(I18N[lang], flattenContent(data[lang], cfg.prefix));
            loaded = true;
          }
        });
      });
      if (loaded) applyLanguage(currentLang);
    });
  }

  /* ---------- boot ---------- */

  applyLanguage(currentLang);
  initModeCards();
  loadContent();
})();
