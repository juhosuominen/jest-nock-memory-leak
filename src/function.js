const https = require('https');

module.exports = async function () {
	return new Promise(resolve => {
		let data = '';
		https.get('https://github.com', res => {
			res.on('data', chunk => data += chunk);
			res.on('end', () => resolve(data));
		})
	});
};
