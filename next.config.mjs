/** @type {import('next').NextConfig} */
const nextConfig = {
    //Contentful host de afbeeldingen extern, dus Next.js moet dat domein vertrouwen.
     images: {
    domains: ['images.ctfassets.net'],
  },
};

export default nextConfig;
