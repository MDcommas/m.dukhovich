Feature: User Login

  Scenario: Successful login with valid data
    Given I am on the login page
    When I fill the username "demo"
    And I fill the password "demo"
    And I submit the login form
    Then I see "Good Evening demo!" on the page

  Scenario: Should show error when login with invalid username
    Given I am on the login page
    When I fill the username "demo1"
    And I fill the password "demo"
    And I submit the login form
    Then I see "Wrong username or password." on the error message

  Scenario: Should show error when login with invalid password
    Given I am on the login page
    When I fill the username "demo"
    And I fill the password "demo1"
    And I submit the login form
    Then I see "Wrong username or password." on the error message