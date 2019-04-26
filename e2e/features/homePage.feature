# language: en
@e2e @regression
Feature: The computer database homepage
   As the computer company we want the computer homepage to function correctly

  Scenario: The computer database homepage is displayed
    Given a user navigates to the computer database homepage
    Then the computer database homepage is displayed

  Scenario: The Add a computer screen can be used
    Given a user navigates to the computer database homepage
    When a user navigate to the add a computer screen
    Then the add a computer screen is displayed
