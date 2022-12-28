/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,

  experimental: {
    appDir: true,
  },

  images: {
    domains: [
      'upload.wikimedia.org',
      'drive.google.com'
    ],
  },
}