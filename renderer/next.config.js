/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  distDir:
    process.env.NODE_ENV === 'production' ? '../application_build' : '.next',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  webpack: config => {
    return config
  }
}
