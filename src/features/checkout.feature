Feature: Checkout
  As a user of the YETI site
  I want to have access to the product page
  So that I purchase a simple product

  Scenario: Checking out with simple product
    Given I have a product in my cart
	When I proceed through checkout
	And I have submitted my order
	When I have submitted my order
	Then My order is created in Magento