import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get('url');

  // 记录请求信息用于调试
  console.log('Image proxy request for:', imageUrl);

  if (!imageUrl) {
    return NextResponse.json({ error: 'Missing image URL' }, { status: 400 });
  }

  try {
    // 验证URL是否为合法的HTTP/HTTPS URL
    const url = new URL(imageUrl);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      return NextResponse.json({ error: 'Invalid protocol' }, { status: 400 });
    }

    // 获取图片
    const response = await fetch(imageUrl, {
      headers: {
        // 设置User-Agent以避免某些站点的防盗链机制
        'User-Agent': 'Mozilla/5.0 (compatible; ImageProxy/1.0)'
      },
      // 设置超时时间
      signal: AbortSignal.timeout(10000) // 10秒超时
    });

    console.log('Image fetch response status:', response.status);

    if (!response.ok) {
      return NextResponse.json({ error: `Failed to fetch image: ${response.status} ${response.statusText}` }, { status: 500 });
    }

    // 获取响应的content-type
    const contentType = response.headers.get('content-type') || 'image/jpeg';
    
    // 记录content-type用于调试
    console.log('Image content-type:', contentType);
    
    // 返回图片数据
    const arrayBuffer = await response.arrayBuffer();
    return new NextResponse(arrayBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable' // 缓存1年
      }
    });
  } catch (error) {
    console.error('Error proxying image:', error);
    return NextResponse.json({ error: `Error proxying image: ${error.message}` }, { status: 500 });
  }
}