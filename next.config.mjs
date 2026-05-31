// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     //Contentful host de afbeeldingen extern, dus Next.js moet dat domein vertrouwen.
//      images: {
//     domains: ['images.ctfassets.net'],
//   },
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;