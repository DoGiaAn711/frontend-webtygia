/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['assets.coingecko.com'],
	},
	env: {
		PRODUCT_URL: 'https://apitygia.ansecurity.net/api/v1',
	},
};

module.exports = nextConfig;
