module.exports = function () {

  this.Given(/^This step should pass$/, {timeout: 10 * 1000}, function(done) {
    browser
      .url('/')
      .call(done);
  });

  this.When(/^This step should also pass$/, function (done) {
    browser
      .click('#js-pjax-container>div>div.col-9.float-left.pl-2>div.js-repo-filter.position-relative>div.mt-4>div.js-pinned-repos-reorder-container>ol>li:nth-child(2)>span>span>a>span')
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

};
