Feature: Toggle sidebar state

  As a user,
  I want open and close the sidebar,
  so that I can either see the links or have more space.

  Background:
    Given the user is on Exercise 5

  Scenario: The user wants to close the Sidebar

    Given the sidebar is closed
    When the user clicks the "menu-button"
    Then the sidebar is visible

  Scenario: The user wants to close the Sidebar

    Given the sidebar is open
    When the user clicks the "menu-button"
    Then the sidebar is not visible

