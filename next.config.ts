import type { NextConfig } from "next";
require('dotenv').config();
const nextConfig: NextConfig = {
  /* config options here */
};
// next.config.js
module.exports = {
  experimental: {
    appDir: true, // This must be true to enable app directory routing
  },
};

export default nextConfig;
