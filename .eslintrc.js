module.exports = {
	plugins: [
		'prettier',
		'vue'
	],
	'extends': [
    'eslint:recommended',
		'prettier'
	],
	rules: {
		'prettier/prettier': 'error'
	},
  parserOptions: {
    sourceType: 'module'
  }
};
