/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net"
      }
    ]
  },
  env: {
    CONTENTFUL_SPACE_ID: "hq5jzaz3arfb",
    CONTENTFUL_ACCESS_TOKEN: "lzwKbNFNwrQ6kt85rsx9a4BsHHcy1UC88Iq-zV-gHo0"
  }
};

export default nextConfig;
