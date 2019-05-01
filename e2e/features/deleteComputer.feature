# language: en
@e2e @regression
Feature: Delete a computer from the computer database
  As the computer company we want it to be possible to delete computers from the database

  Background: The computer database homepage is loaded and the user is on the add computer screen
    Given  a user navigates to the computer database homepage
    When a user clicks on the first computer in the list

  Scenario: The selected computer can be deleted
    When the delete button is clicked
    Then the deleted computer is not in the list of computers