import Link from 'next/link';
import { getAllPosts } from '../../lib/posts';

export default async function PostsPage() {
  const posts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'tags', 'content']);

  // 从文章内容中提取第一张图片作为缩略图
  const postsWithThumbnails = posts.map(post => {
    let thumbnail = '/images/default-thumbnail.jpg'; // 默认缩略图
    
    // 尝试从文章内容中提取第一张图片
    if (post.content) {
      const imageMatch = post.content.match(/!\[.*?\]\((.*?)\)/);
      if (imageMatch && imageMatch[1]) {
        // 检查是否是相对路径（相对于public目录）
        if (imageMatch[1].startsWith('/')) {
          thumbnail = imageMatch[1];
        } else if (imageMatch[1].startsWith('http')) {
          // 外部图片链接
          thumbnail = imageMatch[1];
        } else {
          // 相对于public目录的路径
          thumbnail = '/' + imageMatch[1];
        }
      }
    }
    
    return {
      ...post,
      thumbnail
    };
  });

  return (
    <div>
      <h1>所有文章</h1>
      <ul>
        {postsWithThumbnails.map((post) => (
          <li key={post.slug}>
            <div className="content">
              <Link href={`/posts/${post.slug}`}>
                <h2>{post.title}</h2>
              </Link>
              <p>日期: {post.date}</p>
              {post.excerpt && <p>{post.excerpt}</p>}
              {post.tags && (
                <div>
                  标签: 
                  {post.tags.map((tag) => (
                    <span key={tag}>
                      <Link href={`/tags/${tag}`}>{tag}</Link> 
                    </span>
                  ))}
                </div>
              )}
            </div>
            <img 
              src={post.thumbnail} 
              alt={`${post.title} 缩略图`} 
              className="thumbnail"
              onError={(e) => {
                // 如果图片加载失败，显示默认图片
                if (e.target.src !== window.location.origin + '/images/default-thumbnail.jpg') {
                  e.target.src = '/images/default-thumbnail.jpg';
                }
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}