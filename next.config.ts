/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optionnel : pour éviter certaines erreurs
  trailingSlash: true,  // Ajoutez ceci si vous avez des problèmes de routes
};

module.exports = nextConfig;