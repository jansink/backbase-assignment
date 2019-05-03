# language: en
@e2e @regression
Feature: Add a computer to the computer database
    As the computer company we want it to be possible to add computers to the database

    Background: The computer database homepage is loaded and the user is on the add computer screen
        Given  a user navigates to the computer database homepage
        When a user navigate to the add a computer screen

    Scenario Outline: It is possible to add a computer to the computer database
        When the name: <computername> is filled in the form
        And an introduction date: <introduced> is filled in the form
        And a discontinued date: <discontinued> is filled in the form
        And a company: <company> is filled in the form
        And the create button is clicked
        Then the <computername> is <added> to the database
        Examples:
            | computername  | introduced | discontinued | company    | added     |
            | TestComputer1 |            |              |            | added     |
            | TestComputer2 | 2015-01-01 | 2019-01-01   |            | added     |
            | TestComputer3 | 2019-01-01 |              |            | added     |
            | TestComputer4 |            |              | Apple Inc. | added     |
            | TestComputer5 | 1-1-2019   |              |            | not added |
            | TestComputer6 |            | 1-1-2019     |            | not added |
            |               |            |              |            | not added |

    Scenario: The user returns to the Homepage when the Cancel button is clicked
        When the cancel button is clicked
        Then the computer database homepage is displayed