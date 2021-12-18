Feature: Keep sidebar state

  As a user,
  I want the sidebar to remain open after reload,
  so that I can always see the links.

  Background:
    Given the user is on Exercise 5

  Scenario: The user wants the Sidebar to remain open

    Given the sidebar is open
    When the user reloads the page
    Then the sidebar is visible
