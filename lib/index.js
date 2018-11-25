'use strict';

require('dotenv').config();
const fs = require('fs');
const makeDir = require('make-dir');
const { O_CREAT, O_WRONLY } = fs.constants;
const path = require('path');
const testSpeed = require('./test-speed');

module.exports = async function speedTestLogger() {
    const logRoot = process.env.SPEED_TEST_LOGGER_LOG_ROOT || './log';
    const logPath = path.resolve(`${logRoot}/log.json`);
    const results = await testSpeed();

    await makeDir(logRoot);

    let logJson;

    try {
        logJson = fs.readFileSync(logPath).toString();
    } catch (_) {
        logJson = '[]';
    }

    const logData = JSON.parse(logJson);
    const updatedLogData = [results, ...logData];
    const updatedLogJson = JSON.stringify(updatedLogData, null, 4);

    fs.writeFileSync(logPath, updatedLogJson, { mode: O_CREAT | O_WRONLY });
};
