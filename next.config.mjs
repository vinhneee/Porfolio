/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
    ],
  },
  transpilePackages: ['three', 'gsap', 'lenis', 'meshline', '@react-three/fiber', '@react-three/drei', '@react-three/rapier'],
};

export default nextConfig;
