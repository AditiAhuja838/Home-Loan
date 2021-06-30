
'use strict';

const {browser} = require("protractor");
const {element} = require("protractor");
module.exports = {
    visit: (url) => {
        browser.get(url);

    },

    clickSingleAppType: () => {
			let single = element(by.id('application_type_single'));
			waitForElementToBeClickable(single);
        let click = single.click();
    },

    getURL: () => {
            return browser.getCurrentUrl();
        },

    select0dependents: () => {
        let dep = element(by.xpath('//select[option=\'" + 0 + "\']"))'));
        dep.click();
    },
    clickHome: () => {
        let single = element(by.id('borrow_type_home'));
        waitForElementToBeClickable(single);
        let click = single.click();
    },

    selectYourIncome: (text) => {
        var element = document.querySelector('[aria-labelledby="q2q1"]');

         element.sendKeys(text);
    },
    selectOtherIncome: (text) => {
        var element = document.querySelector('[aria-labelledby="q2q2"]');

        element.sendKeys(text);
    },

    selectLivingExpense: (text) => {
        var element = document.querySelector('[aria-labelledby="q3q1"]');

        element.sendKeys(text);
    },
    homeLoan: (text) => {
        var homeloan = element(by.id('homeloans'));
        waitForElementToBeClickable(homeloan);
        homeloan.sendKeys(text);
    },

    otherLoans: (text) => {
        var otherloan = element(by.id('otherloans'));
        waitForElementToBeClickable(otherloan);
        otherloan.sendKeys(text);
    },

    otherCommitments: (text) => {
        var element = document.querySelector('[aria-labelledby="q3q4"]');
        element.sendKeys(text);
    },
    creditLimits: (text) => {
        var element = document.querySelector('[aria-labelledby="q3q5"]');
        element.sendKeys(text);
    },


    getBorrowAmount: () => {
        var borrowAmt = element(by.id('borrowResultTextAmount'));
        waitForElementToBeClickable(borrowAmt);
        borrowAmt.isDisplayed();
    },

    clickButtonWithText: (text) => {
        var buttonWithText = element(by.xpath('//button[text()="${text}"]'));

        waitForElementToBeClickable(buttonWithText);
        buttonWithText.click();
    },
    getYourIncomeAmount: () => {
        var borrowAmt = element(by.id('q2q1'));
        var val=  borrowAmt.getText();
        expect(val,0);
    },


};

function waitForElementToBeClickable(elem) {
			var EC = protractor.ExpectedConditions;
			var isClickable = EC.elementToBeClickable(elem);
			browser.wait(isClickable, 50000);
}
