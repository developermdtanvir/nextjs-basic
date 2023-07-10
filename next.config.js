/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'i.ibb.co'
            },
            {
                hostname: 'fakestoreapi.com'
            }
        ]
    }
}

module.exports = nextConfig
