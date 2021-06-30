Feature: ANZ Home Loan Calculator
  As a customer
  I should be able to calculate, home loan borrowing Amount
  In order to get a home loan

  Scenario: Home Loan app calculator
    Given I log in Home loan page
    And I click on Single Application type
    And I select Number of Dependents 0
    And I click on "Home to Live in"
    And I send Your income as "80000"
	And I send Other income as "10000"
	And I send Living expense as "500"
	And I send Current home loan repayment as "0"
	And I send Other home loan repayment as "100"
	And I send Other commitments as "0"
	And I send Credit card limits as "10000"
    When I click "Work out how much I could borrow" button
    Then I should see borrowing limit "507000"

  Scenario: Clear Form
    Given I log in Home loan page
    And I send Your income as "80000"
    And I send Living expense as "500"
    When I click "Start over" button
    Then I should see Your income as "0"


