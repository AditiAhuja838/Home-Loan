"use strict";

const config = require('../test-config.json')
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
let HomePage = require('../pages/home.page');


    Given(/^I log in Home loan page$/, function () {
        HomePage.visit(config.baseurl);

        expect(HomePage.getURL()).to.eventually.have.string(config.baseurl);
    });

    Given('I click on Single Application type', function () {
               HomePage.clickSingleAppType();


             });

    Given('I select Number of Dependents 0', function () {
              HomePage.select0dependents();
              });
Given('I click on {String}', function (item) {
    HomePage.clickHome(item);
});

Given('I send Your income as {String}', function (item) {
    HomePage.selectYourIncome(item);
});

Given('I send Other income as {String}', function (item) {
    HomePage.selectOtherIncome(item);
});


Given('I send Living expense as {String}', function (item) {
    HomePage.selectLivingExpense(item);
});

    Given('I send Current home loan repayment as {String}', function (item) {
        HomePage.homeLoan(item);});

Given('I send Current home loan repayment as {String}', function (item) {
            HomePage.otherLoans(item);});


Given('I send Other commitments as {String}', function (item) {
            HomePage.otherCommitments(item);
});

Given('I send Credit card limits as {String}', function (item) {
    HomePage.creditLimits(item);
            });


When('I click {String} button', function (buttonText) {
    HomePage.clickButtonWithText(buttonText);
});
When('I should see borrowing limit {String}', function (buttonText) {
    HomePage.getBorrowAmount(buttonText);
});


