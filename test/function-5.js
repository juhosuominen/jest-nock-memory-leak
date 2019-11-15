const getGithubFrontpage = require('../src/function');
const USE_NOCK = process.env.WITHOUT_NOCK !== 'true';

let nock;
if (USE_NOCK) {
	nock = require('nock');
}

it('should fetch Github frontpage', async () => {
	if (USE_NOCK) nock('https://github.com').get('/').reply(200, 'github.com');
	expect(await getGithubFrontpage()).toBeTruthy();
});
