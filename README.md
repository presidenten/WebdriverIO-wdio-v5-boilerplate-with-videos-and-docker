Webdriver IO v5 template
========================

Boilerplate project for Webdriver IO v5 using [wdio-video-reporter](https://github.com/presidenten/wdio-video-reporter) and has a `docker-compose.yml` ready to spawn a selenium grid.

Checkout example Allure report with included video on failed tests here:
https://presidenten.github.io/wdio-video-reporter/

Installation
============

Install docker
--------------
- Mac https://download.docker.com/mac/stable/Docker.dmg
- Win https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe
- Linux `curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh && sudo usermod -aG docker $USER`

Dont want docker? 
Just install `@wdio/selenium-standalone-service` as a dependency and change
```
  services: undefined,
```
to
```
  services: ['selenium-standalone'],
```


Install dependencies
--------------------

`yarn` or `npm install`

Usage
-----

Start docker hub with docker with command:
- `docker-compose up -d`
(If using selenium-standalone, then skip that line)

Check `http://localhost:4444/grid/console` and wait for chrome and firefox to register themselves.

To see whats going on in the browsers during the test, you can connect 
with a [vnc client](https://www.realvnc.com/en/connect/download/viewer/)
to `localhost:5901` for Chrome and `localhost:5902` for Firefox.

Because all tests run in a docker container, your own mouse and keyboard wont hogged during the test runs when you write your tests. Yey!
You can also keep up with new browsers and selenium drivers for chrome and firefox by keeping an eye out on Seleniums github: https://github.com/SeleniumHQ/docker-selenium

`@` is resolved to `src` to avoid `../../../`.... in the tests.

The idea with this setup is to name local tests (testing local webserver on localhost) 
`file.gui.js`, while e2e-tests that test external sites are named `file.e2e.js`.

Run tests with: `yarn e2e` 

Check allure report with: `yarn report`

Clean up
--------

Shut down the docker grid with command:
- `docker-compose down`
