'use strict';

const execa = require('execa');

module.exports = async function testSpeed() {
    const startedAt = new Date().toISOString();
    const { stdout } = await execa('speed-test', ['--json', '--verbose']);
    const endedAt = new Date().toISOString();
    const results = JSON.parse(stdout);

    return { startedAt, endedAt, ...results };
};
