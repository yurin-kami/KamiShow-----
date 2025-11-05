import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>
        <header>
          <nav>
            <Link href="/">首页</Link>
            <Link href="/posts">文章</Link>
            <Link href="/tags">标签</Link>
            <Link href="/search">搜索</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2023 KAMISHOW!!!!</p>
        </footer>
      </body>
    </html>
  );
}