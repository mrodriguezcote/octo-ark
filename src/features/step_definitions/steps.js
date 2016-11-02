module.exports = function () {
  this.Given(/^This step should pass$/, function(done) {
    browser
      .url('https://github.com/mrodriguezcote')
      .call(done);
  });

  this.When(/^This step should also pass$/, function (done) {
    browser
      .click('#js-pjax-container>div>div.col-9.float-left.pl-3>div.js-repo-filter.position-relative>div.mt-4>div.js-pinned-repos-reorder-container>ol>li:nth-child(2)>span>span>a>span')
      .call(done);
  });

  this.Then(/^This final step should pass$/, function (done) {
    browser
      .getUrl().then(function(url) {
          expect(url).to.equal('https://github.com/mrodriguezcote/octo-ark');
      })
      .call(done);
  });

  this.Then(/^This final step should fail$/, function (done) {
    browser
      .getUrl().then(function(url) {
          expect(url).to.equal('https://wrong.com');
      })
      .call(done);
  });

  this.Given(/^I have a product in my cart$/, function(done){
    browser
      .url('http://blueacorn:pass4blueacorn@yeti.qa-2.blueacorn.net/rambler-tumbler-straw-lid/')
      .click('#jq-purchase-block>div.purchase.block>button')
      .waitForVisible('#header-cart>div.minicart-wrapper>div.minicart-actions>ul')
      .then(function(){
        this.click('#header-cart>div.minicart-wrapper>div.minicart-actions>ul>li>a')
      })
      .call(done);
  });

  this.When(/^I proceed through checkout$/, {timeout: 30 * 1000}, function(done){
    browser
      .waitForVisible('#login-email')
      .setValue('#login-email', 'test1@test.com')
      .setValue('#login-password', 'password')
      .click('#checkout-step-login>div:nth-child(2)>div.col-2>div>button')
      .waitForVisible('#billing-buttons-container > button')
      .click('#billing-buttons-container > button')
      .waitForVisible('#shipping-method-buttons-container > button')
      .then(function(){
        this.click('#shipping-method-buttons-container > button')
      })
      .call(done);
  });

  this.When(/^I have submitted my order$/, function(done){
    browser
      .waitForVisible('#uniform-p_method_cashondelivery')
      .click('#p_method_cashondelivery')
      .waitForSelected('#p_method_cashondelivery')
      .then(function(){
        this.click('#other-payment-container>div>div>button');
      })
      .call(done);
  });

  this.Then(/^My order is created in Magento$/, function(done){
    browser
      .waitForVisible('body>div.wrapper>div.page>div.main.col1-layout>div>h2')
      .isExisting('body>div.wrapper>div.page>div.main.col1-layout>div>p:nth-child(3)>a').then(function(isExisting) {
            expect(isExisting).to.be.true;
      })
      .call(done);
  });
};