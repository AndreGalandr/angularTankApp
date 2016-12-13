'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

// Здесь подумай сгенерировать тесты в цикле for,Вместо того,
// чтобы писать блоки it вручную

describe('angularTankApp', function() {


  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch('/home');
  });


  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#!/home');
    });


    it('should render home when user navigates to /home', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for home/);
    });

  });


  describe('works', function() {

    beforeEach(function() {
      browser.get('index.html#!/works');
    });


    it('should render works when user navigates to /works', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for works/);
    });

  });

  describe('about', function() {

    beforeEach(function() {
      browser.get('index.html#!/about');
    });


    it('should render home when user navigates to /about', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for about/);
    });

  });

  describe('contacts', function() {

    beforeEach(function() {
      browser.get('index.html#!/contacts');
    about

    it('should render contacts when user navigates to /contacts', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for contacts/);
    });

  });

    describe('blog', function() {

    beforeEach(function() {
      browser.get('index.html#!/blog');
    about

    it('should render blog when user navigates to /blog', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for blog/);
    });

  });
});
