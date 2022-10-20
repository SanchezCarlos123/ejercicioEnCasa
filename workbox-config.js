module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,css,jpg,gif,png,ico,webp,vtt,mp4,mp3,ogg,webm,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};