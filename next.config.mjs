/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'images.unsplash.com',
            'www.shutterstock.com',
            'miro.medium.com',
            "www.planetnatural.com"
        ],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'miro.medium.com',
              port: '',
              pathname: '*',
            },
            {
                protocol: 'https',
                hostname: 'www.planetnatural.com',
                port: '',
                pathname: '*',
              }
        ]
    }
};

export default nextConfig;
