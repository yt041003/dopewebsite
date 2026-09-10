import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() { return [
    {source:'/:path*',has:[{type:'host',value:'www.twynzo.com'}],destination:'https://twynzo.com/:path*',permanent:true},
    {source:'/:path*',has:[{type:'host',value:'dopewebsite-lilac.vercel.app'}],destination:'https://twynzo.com/:path*',permanent:true},
    {source:'/',destination:'/zh-hant',permanent:true},
  ]; },
  async headers() { return [{source:'/api/:path*',headers:[{key:'X-Robots-Tag',value:'noindex, nofollow'}]},{source:'/(.*)',headers:[{key:'X-Content-Type-Options',value:'nosniff'},{key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},...(process.env.VERCEL_ENV==='preview'?[{key:'X-Robots-Tag',value:'noindex, nofollow'}]:[])]}]; },
};

export default nextConfig;
