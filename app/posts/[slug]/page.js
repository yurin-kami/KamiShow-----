import { getPostBySlug, convertMarkdownToHtml, extractHeaders } from '../../../lib/posts';

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
  const headers = extractHeaders(post.content || '');

  return (
    <div style={{ position: 'relative' }}>
      <article className="article-content">
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
      
      {/* 大纲 */}
      {headers.length > 0 && (
        <div className="toc">
          <h3>目录</h3>
          <ul>
            {headers.map((header, index) => (
              <li key={index} className={`toc-h${header.level}`}>
                <a href={`#${header.id}`}>{header.text}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
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