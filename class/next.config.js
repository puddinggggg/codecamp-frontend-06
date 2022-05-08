/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  generateBuildId: ()=> "puddingg",
  exportPathMap:()=>({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404"}
  })
}

module.exports = nextConfig
