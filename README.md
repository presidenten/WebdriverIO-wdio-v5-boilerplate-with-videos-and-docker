Webdriver IO v5 template
========================

Setup docker hub with docker with command:
- `docker-compose up -d`

Check `http://localhost:4444/grid/console` and verify chrome and firefox has registered.

To see whats going on in the browsers during the test, you can connect 
with a [vnc client](https://www.realvnc.com/en/connect/download/viewer/)
to `localhost:5901` for Chrome and `localhost:5902` for Firefox.

Because all tests run in a docker container, your own mouse and keyboard wont hogged during the test run. Yey!

`@` is resolved to src to avoid `../../../`.... in the tests.

Run tests with: `yarn gui` 

Check allure report with: `yarn report`

