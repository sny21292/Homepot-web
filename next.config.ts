// Homepot's website is a static export: `npm run build` writes plain HTML/CSS/JS to
// `out/`, which any web server (nginx, Apache) can serve. No Node server needed.
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // /privacy -> out/privacy/index.html (works on any static server)
  images: { unoptimized: true }, // image optimisation needs a server
};

export default nextConfig;
