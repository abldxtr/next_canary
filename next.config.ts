import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    dynamicIO: true,
    useCache: true,
    ppr: "incremental",
  },
};

module.exports = nextConfig;
