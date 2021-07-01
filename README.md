# Home-Loan
Pre-requisites:

Node v12.14.1, Chrome browser v79 must be installed Proxy configuration to enable npm to connect to internet should be completed

Configuration:

Edit protractor.conf.js for changing webdriver hub url, browser, wait time and cucumber options. Edit test-config.json for changing test data like user, password, base url etc

Usage steps:

Clone or download the repo

Download dependency using:

npm install

Install protractor globally using

npm install -g protractor

Test the installation using

protractor --version

From root directory of the framework, start the webdriver using:

npm run webdriver

From root directory of the framework, start the tests using command:

protractor
