describe("pow", function() {

  it("eleva a la n-ésima potencia", function() {
    assert.equal(pow(2, 3), 8);
    assert.equal(pow(3, 4), 81);
  });

});

describe("pow", function() {

  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} elevado a 3 es ${expected}`, function() {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }

});

describe("test", function() {

  before(() => alert("Inicio testing – antes de todos los tests"));
  after(() => alert("Final testing – después de todos los tests"));

  beforeEach(() => alert("Antes de un test – entramos al test"));
  afterEach(() => alert("Después de un test – salimos del test"));

  it('test 1', () => alert(1));
  it('test 2', () => alert(2));

});