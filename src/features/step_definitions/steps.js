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

  this.Then(/^This step should fail$/, function (done) {
    browser
      .getUrl().then(function(url) {
          expect(url).to.equal("https://wrong.com");
      })
      .call(done);
  });

  this.Given(/^I am on the YETI homepage$/, function(done) {
    browser
      .url('http://yeti.qa-2.blueacorn.net/')
      .call(done);
  });

  this.When(/^I click on the Careers link$/, function (done) {
    browser
      .click('body>div.footer-container>div>div.footer-links>ul:nth-child(1)>li:nth-child(3)>a')
      .call(done);
  });

  this.Then(/^I should reach the careers page$/, function (done) {
    browser
      .getUrl().then(function(url) {
          expect(url).to.equal('http://yeti.qa-2.blueacorn.net/careers');
      })
      .call(done);
  });
};