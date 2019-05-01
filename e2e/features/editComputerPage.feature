# language: en
@e2e @regression
Feature: Edit a computer from the computer database
    As the computer company we want it to be possible to edit computers in the database

    Background: The computer database homepage is loaded and the user is on the add computer screen
        Given  a user navigates to the computer database homepage
        When a user clicks on the first computer in the list

    Scenario Outline: It is possible to edit a computer in the computer database
        When the name: <computername> is filled in the form
        And an introduction date: <introduced> is filled in the form
        And a discontinued date: <discontinued> is filled in the form
        And the company: <company> is selected in the form
        And the save button is clicked
        Then the <computername> is <edited> in the database
        Examples:
            | computername  | introduced | discontinued | company           | edited     |
            | TestComputer1 |            |              | Apple Inc.        | edited     |
            | TestComputer2 | 2015-01-01 | 2019-01-01   | Thinking Machines | edited     |
            | TestComputer3 | 2019-01-01 |              | RCA               | edited     |
            | TestComputer4 | 1-1-2019   |              | Netronics         | not edited |
            | TestComputer5 |            | 1-1-2019     | IBM               | not edited |
            |               |            |              | Xerox             | not edited |

    Scenario: The user returns to the Homepage when the Cancel button is clicked
        When the cancel button is clicked
        Then the computer database homepage is displayed