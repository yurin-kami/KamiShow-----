module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.js [app-rsc] (ecmascript)"));
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs) <export default as minpath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minpath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
}),
"[externals]/node:process [external] (node:process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}),
"[externals]/node:process [external] (node:process, cjs) <export default as minproc>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minproc",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs) <export fileURLToPath as urlToPath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "urlToPath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[project]/lib/posts.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertMarkdownToHtml",
    ()=>convertMarkdownToHtml,
    "extractHeaders",
    ()=>extractHeaders,
    "getAllPosts",
    ()=>getAllPosts,
    "getAllTags",
    ()=>getAllTags,
    "getPostBySlug",
    ()=>getPostBySlug,
    "getPostSlugs",
    ()=>getPostSlugs
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gray-matter/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unified$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/unified/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$parse$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-parse/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$rehype$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-rehype/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$stringify$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rehype-stringify/lib/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const postsDirectory = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'content', 'posts');
function getPostSlugs() {
    // 检查目录是否存在
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(postsDirectory)) {
        console.warn(`Posts directory does not exist: ${postsDirectory}`);
        return [];
    }
    const files = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(postsDirectory);
    // 只返回.md文件
    return files.filter((file)=>__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].extname(file) === '.md');
}
function getPostBySlug(slug, fields) {
    // 确保slug是字符串
    if (!slug || typeof slug !== 'string') {
        console.error(`Invalid slug: ${slug}`);
        throw new Error(`Invalid slug: ${slug}`);
    }
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(postsDirectory, `${realSlug}.md`);
    // 检查文件是否存在
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(fullPath)) {
        console.error(`Post not found: ${fullPath}`);
        throw new Error(`Post not found: ${fullPath}`);
    }
    const fileContents = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(fullPath, 'utf8');
    const { data, content } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(fileContents);
    const items = {};
    // 确保只返回请求的字段
    fields.forEach((field)=>{
        if (field === 'slug') {
            items[field] = realSlug;
        }
        if (field === 'content') {
            items[field] = content;
        }
        if (data[field] !== undefined) {
            items[field] = data[field];
        }
    });
    return items;
}
function getAllPosts(fields) {
    const slugs = getPostSlugs();
    return slugs.map((slug)=>{
        try {
            return getPostBySlug(slug, fields);
        } catch (error) {
            console.error(`Error processing post ${slug}:`, error);
            return null;
        }
    }).filter((post)=>post !== null) // 过滤掉无效的帖子
    .sort((post1, post2)=>post1 && post2 ? post1.date > post2.date ? -1 : 1 : 0);
}
function getAllTags() {
    const posts = getAllPosts([
        'tags'
    ]);
    const tags = new Set();
    posts.forEach((post)=>{
        if (post && post.tags && Array.isArray(post.tags)) {
            post.tags.forEach((tag)=>tags.add(tag));
        }
    });
    return Array.from(tags);
}
function extractHeaders(markdown) {
    const headers = [];
    const lines = markdown.split('\n');
    lines.forEach((line)=>{
        const h1Match = line.match(/^# (.+)/);
        const h2Match = line.match(/^## (.+)/);
        const h3Match = line.match(/^### (.+)/);
        if (h1Match) {
            headers.push({
                level: 1,
                text: h1Match[1],
                id: h1Match[1].toLowerCase().replace(/\s+/g, '-').replace(/[\w\-]+/g, '')
            });
        } else if (h2Match) {
            headers.push({
                level: 2,
                text: h2Match[1],
                id: h2Match[1].toLowerCase().replace(/\s+/g, '-').replace(/[\w\-]+/g, '')
            });
        } else if (h3Match) {
            headers.push({
                level: 3,
                text: h3Match[1],
                id: h3Match[1].toLowerCase().replace(/\s+/g, '-').replace(/[\w\-]+/g, '')
            });
        }
    });
    return headers;
}
async function convertMarkdownToHtml(markdown) {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unified$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unified"])().use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$parse$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$rehype$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$stringify$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).process(markdown);
    // 获取HTML内容
    let html = result.toString();
    // 为标题添加id属性，用于大纲导航
    html = html.replace(/<h1>(.*?)<\/h1>/g, (match, content)=>{
        const id = content.toLowerCase().replace(/\s+/g, '-').replace(/[\w\-]+/g, '');
        return `<h1 id="${id}">${content}</h1>`;
    });
    html = html.replace(/<h2>(.*?)<\/h2>/g, (match, content)=>{
        const id = content.toLowerCase().replace(/\s+/g, '-').replace(/[\w\-]+/g, '');
        return `<h2 id="${id}">${content}</h2>`;
    });
    html = html.replace(/<h3>(.*?)<\/h3>/g, (match, content)=>{
        const id = content.toLowerCase().replace(/\s+/g, '-').replace(/[\w\-]+/g, '');
        return `<h3 id="${id}">${content}</h3>`;
    });
    // 为图片添加样式，限制最大宽度和高度，并处理远程图片
    html = html.replace(/<img([^>]*?)src="([^"]*?)"([^>]*?)alt="([^"]*?)"([^>]*?)>/g, (match, prefix, src, middle, alt, suffix)=>{
        // 如果是远程图片，使用Next.js Image组件
        if (src.startsWith('http://') || src.startsWith('https://')) {
            // 移除现有的width和height属性，因为我们会设置自己的样式
            let cleanPrefix = prefix.replace(/width="[^"]*"/g, '').replace(/height="[^"]*"/g, '');
            let cleanMiddle = middle.replace(/width="[^"]*"/g, '').replace(/height="[^"]*"/g, '');
            let cleanSuffix = suffix.replace(/width="[^"]*"/g, '').replace(/height="[^"]*"/g, '');
            // 移除可能存在的class属性，因为我们会在外层容器添加样式
            cleanPrefix = cleanPrefix.replace(/class="[^"]*"/g, '');
            cleanMiddle = cleanMiddle.replace(/class="[^"]*"/g, '');
            cleanSuffix = cleanSuffix.replace(/class="[^"]*"/g, '');
            // 返回带有onError处理的img标签
            return `<img${cleanPrefix}src="${src}"${cleanMiddle}alt="${alt}"${cleanSuffix} style="max-width: 100%; height: auto; display: block; margin: 1rem auto;" onload="this.onerror=null;" onerror="this.style.display='none';">`;
        } else {
            // 本地图片保持原样
            return `<img${prefix}src="${src}"${middle}alt="${alt}"${suffix} style="max-width: 100%; height: auto; display: block; margin: 1rem auto;">`;
        }
    });
    return html;
}
}),
"[project]/app/posts/[slug]/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Post,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/posts.js [app-rsc] (ecmascript)");
;
;
async function Post({ params }) {
    // 等待params Promise解析
    const resolvedParams = await params;
    const post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPostBySlug"])(resolvedParams.slug, [
        'title',
        'date',
        'slug',
        'content',
        'excerpt',
        'tags'
    ]);
    const content = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertMarkdownToHtml"])(post.content || '');
    const headers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractHeaders"])(post.content || '');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "article-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: post.title
                    }, void 0, false, {
                        fileName: "[project]/app/posts/[slug]/page.js",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "发布日期: ",
                            post.date
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/posts/[slug]/page.js",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    post.tags && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "标签:",
                            post.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `/tags/${tag}`,
                                        children: tag
                                    }, void 0, false, {
                                        fileName: "[project]/app/posts/[slug]/page.js",
                                        lineNumber: 28,
                                        columnNumber: 17
                                    }, this)
                                }, tag, false, {
                                    fileName: "[project]/app/posts/[slug]/page.js",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/posts/[slug]/page.js",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        dangerouslySetInnerHTML: {
                            __html: content
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/posts/[slug]/page.js",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/posts/[slug]/page.js",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            headers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "toc",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "目录"
                    }, void 0, false, {
                        fileName: "[project]/app/posts/[slug]/page.js",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: headers.map((header, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: `toc-h${header.level}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `#${header.id}`,
                                    children: header.text
                                }, void 0, false, {
                                    fileName: "[project]/app/posts/[slug]/page.js",
                                    lineNumber: 43,
                                    columnNumber: 17
                                }, this)
                            }, index, false, {
                                fileName: "[project]/app/posts/[slug]/page.js",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/posts/[slug]/page.js",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/posts/[slug]/page.js",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/posts/[slug]/page.js",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
async function generateMetadata({ params }) {
    // 等待params Promise解析
    const resolvedParams = await params;
    const post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPostBySlug"])(resolvedParams.slug, [
        'title',
        'excerpt'
    ]);
    return {
        title: `${post.title} - KAMISHOW!!!!!`,
        description: post.excerpt || post.title
    };
}
}),
"[project]/app/posts/[slug]/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/posts/[slug]/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__abe56ea9._.js.map