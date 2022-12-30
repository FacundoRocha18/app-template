/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			width: {
				'complete': '100vw',
				'50v': '50vw',
				'400p': '400px',
				'200p': '200px',
			},
			height: {
				'complete': '100vh',
				'60v': '60vh',
				'50v': '50vh',
				'40v': '40vh',
				'20v': '20vh',
				'50p': '50px',
			},
			fontFamily: {
				'poppins': 'poppins'
			},
			fontSize: {
				'title': '52px',
				'subtitle': '48px',
				'smTitle': '32px',
				'smSubtitle': '24px',
			},
		},
		screens: {
			'mb': [{'max': '550px'}],
			'md': [{'min': '668px', 'max': '1100px'},]
		},
	},
	plugins: [],
	darkMode: 'class',
}