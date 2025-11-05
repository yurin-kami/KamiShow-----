import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export function getPostSlugs() {
  // 检查目录是否存在
  if (!fs.existsSync(postsDirectory)) {
    console.warn(`Posts directory does not exist: ${postsDirectory}`);
    return [];
  }
  
  const files = fs.readdirSync(postsDirectory);
  // 只返回.md文件
  return files.filter(file => path.extname(file) === '.md');
}

export function getPostBySlug(slug, fields) {
  // 确保slug是字符串
  if (!slug || typeof slug !== 'string') {
    console.error(`Invalid slug: ${slug}`);
    throw new Error(`Invalid slug: ${slug}`);
  }
  
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  
  // 检查文件是否存在
  if (!fs.existsSync(fullPath)) {
    console.error(`Post not found: ${fullPath}`);
    throw new Error(`Post not found: ${fullPath}`);
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // 确保只返回请求的字段
  fields.forEach((field) => {
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

export function getAllPosts(fields) {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => {
      try {
        return getPostBySlug(slug, fields);
      } catch (error) {
        console.error(`Error processing post ${slug}:`, error);
        return null;
      }
    })
    .filter(post => post !== null)  // 过滤掉无效的帖子
    .sort((post1, post2) => (post1 && post2 ? (post1.date > post2.date ? -1 : 1) : 0));
}

export function getAllTags() {
  const posts = getAllPosts(['tags']);
  const tags = new Set();
  
  posts.forEach(post => {
    if (post && post.tags && Array.isArray(post.tags)) {
      post.tags.forEach(tag => tags.add(tag));
    }
  });
  
  return Array.from(tags);
}

export async function convertMarkdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown);

  // 获取HTML内容
  let html = result.toString();
  
  // 为图片添加样式，限制最大宽度和高度
  html = html.replace(
    /<img([^>]*?)src="([^"]*?)"([^>]*?)alt="([^"]*?)"([^>]*?)>/g,
    '<img$1src="$2"$3alt="$4"$5 style="max-width: 100%; height: auto; display: block; margin: 1rem auto;">'
  );
  
  return html;
}