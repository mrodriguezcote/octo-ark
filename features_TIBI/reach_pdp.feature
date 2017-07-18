@testX
Feature: Navigating to PDP
  As a user of the Tibi site
  I want to be able to reach the product page through all possible channels

  Background: Starting on the homepage
    Given I am on the homepage

  Scenario: Direct URL
    And I request the product page
    Then I should reach the product page with visible ATC

  Scenario: From category page
    And I request a category page
    When I click on a product grid item
    Then I should reach the product page with visible ATC

  Scenario: From search results page
    Given I request a search results page
    And I click on a product grid item
    Then I should reach the product page with visible ATC

  Scenario: Through related products on PDP
    And I request the product page
    And I click on a product link on the related products casousel
    Then I should reach the product page with visible ATC


