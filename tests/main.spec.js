describe('Main', function() {

  var arr;

  // roda uma vez, antes do bloco
  before(function() {

  });

  // roda uma vez, depois do bloco
  after(function() {

  });

  // roda todas as vezes, antes de CADA bloco
  beforeEach(function() {
    arr = [1, 2, 3];
  });

  // roda todas as vezes, depois de CADA bloco
  afterEach(function() {

  });

  it('should have a size of 4 when push another value to the array', function() {
    arr.push(4);
    console.log(arr.length); // 4
  });

  it('should have a size of 2 when pop a value from array', function() {
    var arr = [1, 2, 3];
    arr.pop();
    console.log(arr.length); // 2
  });

  it('should remove the value 3 when use pop in the array', function() {
    var arr = [1, 2, 3];
    console.log(arr.pop() === 3) // true
  });

});
