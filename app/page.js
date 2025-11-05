import Link from 'next/link';
import { getAllPosts } from '../lib/posts';

export default async function Home() {
  const posts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'tags']);

  return (
    <div>
      <h1>欢迎来到KAMISHOW!!!!!</h1>
      <p>这是你的博客首页。</p>
      
      <h2>最新文章</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <h3>{post.title}</h3>
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
          </li>
        ))}
      </ul>
    </div>
  );
}