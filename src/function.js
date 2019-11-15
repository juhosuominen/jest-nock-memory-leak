const fetch = require('node-fetch');

module.exports = function () {
	return fetch('https://github.com').then(res => res.text());
};
