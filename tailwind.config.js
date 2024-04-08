/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./views/**/*.{html,js,ejs}', './assets/js/*.js'],
	theme: {
		fontFamily: {
			sans: ['Plus Jakarta Sans', 'sans-serif']
		},
		extend: {
			colors: {
				'primary-color': '#0B60B0',
				'secondary-color': '#40A2D8',
				'text-color': '#1F364B',
				'border-color': '#A1B8CB',
				'input-box-color': '#E0EAF2',
				'input-box2-color': '#A8D7F0',
				'correct-box-color': '#CAFAD7',
				'option-box-color': '#CAE4F2',
				'correct-border-color': '#93E1A9',
				'correct-text-color': '#45CD58',
				'wrong-box-color': '#F5D5D5',
				'wrong-border-color': '#E87E7E',
				'wrong-text-color': '#EB5044',
				'score-bg-color': '#FCEA50',
				'statistics-bg-color': '#F0EDCF',
				'text-white-color': '#FbFdF4',
				'bg-white': '#fff'
			},
			boxShadow: {
				'inner-normal': 'inset 0 -7px 1 #1F364B'
			}
		}
	},
	plugins: []
}
