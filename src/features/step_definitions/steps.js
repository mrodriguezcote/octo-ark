module.exports = function () {
  this.Given(/^This step should pass$/, function(done) {
    browser
      .url('http://yeti:pass4yeti@yeti.qa-2.blueacorn.net/')
      .getTitle().then(function(title) {
          expect(title).to.equal("YETI | Premium Ice Chests, Apparel, and Gear");
      })
      .call(done);
  });

  this.When(/^This step should pass again$/, function(done) {
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
};