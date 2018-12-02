speed-test-logger
=================
[![npm](https://img.shields.io/npm/v/speed-test-logger.svg?)](https://www.npmjs.com/package/speed-test-logger)
[![node](https://img.shields.io/node/v/speed-test-logger.svg?)](https://nodejs.org/)
[![build](https://img.shields.io/travis/jbenner-radham/node-speed-test-logger.svg?)](https://travis-ci.org/jbenner-radham/node-speed-test-logger)
[![license](https://img.shields.io/github/license/jbenner-radham/node-speed-test-logger.svg?)](LICENSE)

Perform a speed test on your internet connection and log the results.

~~Install~~
-----------
```sh
$ yarn add speed-test-logger # Or alternatively: `npm install speed-test-logger`
```

Setup
-----
1. Copy `.env.example` to a new file named `.env` (e.g., `cp .env.example .env`).
2. Set `SPEED_TEST_LOGGER_LOG_ROOT` to the desired absolute directory path.
3. Configure a task scheduler (e.g., `cron`, etc.) to invoke `node $EXAMPLE_PATH_TO/speed-test-logger/bin/cli.js` at the desired interval.
4. Manually invoke `node bin/cli.js` to verify that a speed test was performed and the results were successfully written to `$SPEED_TEST_LOGGER_LOG_ROOT/log.json`.

~~Testing~~
-----------
```sh
$ yarn test # Or alternatively: `npm test`
```

To-Do
-----
- [ ] Write tests.
- [ ] Publish on npm.
- [X] Add "setup" section to readme.

See Also
--------
- [speed-test](https://github.com/sindresorhus/speed-test#readme)

License
-------
The MIT License (Expat). See the [license file](LICENSE) for details.
