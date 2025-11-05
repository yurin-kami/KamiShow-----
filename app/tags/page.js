import Link from 'next/link';
import { getAllTags } from '../../lib/posts';

export default async function TagsPage() {
  const tags = getAllTags();

  return (
    <div>
      <h1>标签</h1>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>
            <Link href={`/tags/${tag}`}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}