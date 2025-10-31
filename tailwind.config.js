/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    addVariablesForColors
  ],
}

function addVariablesForColors({ addBase, theme }) {
	const colors = theme('colors');
	const newVars = {};

	// Flatten and generate CSS variables
	const flattenColors = (obj, prefix = '') => {
		for (const [key, val] of Object.entries(obj)) {
			const varName = prefix ? `${prefix}-${key}` : key;
			if (typeof val === 'string') {
				newVars[`--${varName}`] = val;
			} else if (typeof val === 'object') {
				flattenColors(val, varName);
			}
		}
	};

	flattenColors(colors);

	addBase({
		':root': newVars
	});
}
