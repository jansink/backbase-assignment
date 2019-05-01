# language: en
@e2e @regression
Feature: The computer database homepage
  As the computer company we want the computer homepage to function correctly

  Background: The computer database homepage is loaded
    Given a user navigates to the computer database homepage

  Scenario: The computer database homepage is displayed
    Then the computer database homepage is displayed

  Scenario: The Add a computer screen can be used from the homepage
    When a user navigate to the add a computer screen
    Then the add a computer screen is displayed

  Scenario Outline: The filter function can be used
    When a user navigate to the add a computer screen
    And the name: <computername> is filled in the form
    And the create button is clicked
    And a user enters <computername> as filter
    And the filter button is clicked
    Then <computername> is shown in the filtered list
    Examples:
      | computername       |
      | TestFilterComputer |

  Scenario: The displayed computers can be scrolled
    Then the previous button is disabled
    When the next button is clicked
    Then the previous button is not disabled
    And the second page of the computer database is shown
    When the previous button is clicked
    Then the first page of the computer database is shown