/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.addthis.com https://addthis.com; child-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.addthis.com https://addthis.com; object-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.addthis.com https://addthis.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.addthis.com https://addthis.com; img-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.addthis.com https://addthis.com;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
