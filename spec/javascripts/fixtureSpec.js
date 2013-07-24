describe("Fixture Testing", function() {

  beforeEach(function() {
    loadFixtures('real_non_mocked_fixture.html');
    operater = new Operater();
  });

  it("shoud be visible", function() {
    expect($('#real_non_mocked_fixture')).toBeVisible();
    expect($('#real_non_mocked_fixture')).toHaveClass('fixture');
  });

  describe("when dom to operate", function() {
    beforeEach(function() {
      operater.setElement('#real_non_mocked_fixture');
    });

    describe("dom is hide", function() {
      beforeEach(function() {
        operater.hide();
      });

      it("should be hide", function () {
        expect($('#real_non_mocked_fixture')).toBeHidden();
      });
    });

    describe("dom is show", function() {
      beforeEach(function() {
        operater.hide();
        operater.show();
      });

      it("should be hide", function () {
        expect($('#real_non_mocked_fixture')).toBeVisible();
      });
    });

  });
});
