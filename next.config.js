/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io','raw.githubusercontent.com'],
  }
}

module.exports = nextConfig
