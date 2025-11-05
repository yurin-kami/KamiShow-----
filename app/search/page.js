import Search from '../../components/Search';
import { getAllPosts } from '../../lib/posts';

export default async function SearchPage() {
  const posts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'tags']);

  return (
    <div>
      <h1>搜索</h1>
      <Search posts={posts} />
    </div>
  );
}