define(["src/dummy"], function(Formisimo) {
  "use strict";

  describe("Formisimo", function() {
    describe("#foo",function () {
      it("should return 'bar'", function() {
        expect(Formisimo.foo()).toEqual('bar');
      });
    });
  });
});
