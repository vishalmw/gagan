/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.shutterstock.com',
    
        },
        {
          protocol: 'https',
          hostname: 'thumbs.dreamstime.com',
    
        }
      ],
     
    }
      
};

export default nextConfig;
