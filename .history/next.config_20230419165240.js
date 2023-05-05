/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			'assets.coingecko.com',
			'printgo.vn',
			'vectorflags.s3.amazonaws.com',
			'apitygia.ansecurity.net',
			'img.meta.com.vn',
			'cdn.haitrieu.com',
			'inkythuatso.com',
			'www.scb.com.vn',
			'static.wixstatic.com',
			'www.inlogo.vn',
			'scontent.iocvnpt.com',
			'vectorflags.s3.amazonaws.com',
			'inminhkhang.com',
		],
		// remotePatterns: [
		// 	{
		// 		protocol: 'https',
		// 		hostname: 'assets.coingecko.com',
		// 		port: '',
		// 		// pathname: '/coins/images/1/large/**',
		// 	},
		// ],
	},
	env: {
		PRODUCT_URL: 'https://apitygia.ansecurity.net/api/v1',
	},
};

module.exports = nextConfig;
