import { getPostBySlug, convertMarkdownToHtml } from '../../../lib/posts';
import Image from 'next/image';

export default async function Post({ params }) {
  // 等待params Promise解析
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug, [
    'title',
    'date',
    'slug',
    'content',
    'excerpt',
    'tags',
  ]);
  
  const content = await convertMarkdownToHtml(post.content || '');

  return (
    <article>
      <h1>{post.title}</h1>
      <p>发布日期: {post.date}</p>
      {post.tags && (
        <div>
          标签: 
          {post.tags.map((tag) => (
            <span key={tag}>
              <a href={`/tags/${tag}`}>{tag}</a> 
            </span>
          ))}
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}

export async function generateMetadata({ params }) {
  // 等待params Promise解析
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug, ['title', 'excerpt']);
  
  return {
    title: `${post.title} - KAMISHOW!!!!!`,
    description: post.excerpt || post.title,
  };
}