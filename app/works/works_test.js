'use strict';

describe('myApp.works module', function() {

  beforeEach(module('myApp.works'));

  describe('works controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var worksCtrl = $controller('worksCtrl');
      expect(worksCtrl).toBeDefined();
    }));

  });
});