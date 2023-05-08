require("dotenv").config();
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    USER: process.env.userName,
    USER_PASSWORD: process.env.userPass,
  },
};

module.exports = nextConfig;
