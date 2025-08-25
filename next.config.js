/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['podalnanocosmeticos.com.br'],
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_ENV: process.env.NODE_ENV || 'development',
    NEXT_PUBLIC_API_URL: process.env.NODE_ENV === 'production' 
      ? 'https://api.podologia-profissional.com.br' 
      : 'https://api-dev.podologia-profissional.com.br',
    NEXT_PUBLIC_WHATSAPP: '5511967381029',
    NEXT_PUBLIC_SITE_NAME: 'Podologia Profissional - Em Formação'
  },
}

module.exports = nextConfig
