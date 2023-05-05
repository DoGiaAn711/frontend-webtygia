/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	// images: {
	// 	domains: ['localhost'],
	// },
	env: {
		PRODUCT_URL: 'https://apitygia.ansecurity.net/api/v1',
	},
};

module.exports = nextConfig;
