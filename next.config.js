// module.exports = {
//   reactStrictMode: true,
//   api: {
//     externalResolver: true,
//     bodyParser: false,
//   },
//   images: {
//      loader: "custom",
//      assetPrefix: './',
//    },
//    devIndicators: {
//     buildActivity: false,
//     autoPrerender: false,
// },


// }
/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  // disable: process.env.NODE_ENV === 'development',
});
const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
})
module.exports = nextConfig;