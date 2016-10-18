module.exports = function () {
  this.Given(/^I am on the Cucumber.js GitHub repository$/, function(done) {
    browser
      .url('https://github.com/mrodriguezcote')
      .call(done);
  });

  this.When(/^I click on "([^"]*)"$/, function (text, done) {
    browser
      .click('#js-pjax-container>div>div.col-9.float-left.pl-3>div.js-repo-filter.position-relative>div.mt-4>div.js-pinned-repos-reorder-container>ol>li:nth-child(2)>span>span>a>span')
      .call(done);
  });

  this.Then(/^I should see "([^"]*)"$/, function (text, done) {
    browser
      .getUrl().then(function(url) {
          expect(url).to.equal("https://github.com/mrodriguezcote/octo-arkx");
      })
      .call(done);
  });
};