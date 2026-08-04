/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'picsum.photos', 'source.unsplash.com'],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'spc.smme.edu.pk' }],
        destination: 'https://piston-cup.vercel.app/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
