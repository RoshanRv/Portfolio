/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "user-images.githubusercontent.com",
                // port: '',
                // pathname: '/account123/**',
            },
        ],
    },
}

module.exports = nextConfig
