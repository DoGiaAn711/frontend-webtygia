/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./views/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			// center: true,
		},
		extend: {
			colors: {
				'grey-boder': 'rgba(0, 0, 0, 0.25)',
				'grey-4': '#F2F3F7',
				'grey-text': '#7F7F7F',
				'grey-text-2': '#585C6C',
				'white-text': '#FFFFFF',
				'black-text': '#2F2F2F',
				'black-text-2': '#000000',
				'blue-text': '#1366FF',
				'back-ground-1': '#F5F5F5',
				'back-text': '#333333',
				'active-bg': '#0030E0',
				'price-decrease': '#00BF3D',
				'price-increase': '#03A66D',
				'orange-1': '#FFA60C',
			},
			width: {},
			boxShadow: {
				'shadow-custom': '0px 2px 3px rgba(0, 0, 0, 0.1)',
			},
		},
	},
	plugins: [],
};
