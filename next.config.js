/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    MONGODB_URI:
      "mongodb+srv://ecommerce:flip215272@ecommerce.fccpr22.mongodb.net",
    APP_ENV: "development",
  },
};

module.exports = nextConfig;
