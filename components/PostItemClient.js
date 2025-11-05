'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PostItemClient({ post }) {
  const [imgSrc, setImgSrc] = useState('');
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    // 使用Intersection Observer实现真正的懒加载
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setImgSrc(post.thumbnail);
          observer.disconnect();
        }
      });
    }, {
      rootMargin: '50px' // 提前50px开始加载
    });

    // 观察当前组件
    const component = document.getElementById(`post-${post.slug}`);
    if (component) {
      observer.observe(component);
    }

    return () => {
      observer.disconnect();
    };
  }, [post.thumbnail, post.slug]);

  return (
    <li id={`post-${post.slug}`}>
      <div className="content">
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
      </div>
      {imgSrc && (
        <img 
          src={imgError ? '/images/default-thumbnail.jpg' : imgSrc}
          alt={`${post.title} 缩略图`} 
          className="thumbnail"
          style={{
            opacity: imgLoaded ? 1 : 0.5,
            transition: 'opacity 0.3s ease-in-out',
            width: '100px',
            height: '100px',
            objectFit: 'cover'
          }}
          onLoad={() => setImgLoaded(true)}
          onError={() => {
            // 如果已经是默认图片还出错，就隐藏它
            if (imgSrc !== '/images/default-thumbnail.jpg') {
              setImgError(true);
            }
          }}
          loading="lazy"
          decoding="async"
        />
      )}
    </li>
  );
}