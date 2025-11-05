import Link from 'next/link';
import { getAllPosts } from '../../lib/posts';

export default async function PostsPage() {
  const posts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'tags']);

  return (
    <div>
      <h1>所有文章</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
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
          </li>
        ))}
      </ul>
    </div>
  );
}