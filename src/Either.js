
class Either {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
  getValue(){
    return this.right ? this.right : this.left;
  }
  map(f) {
    return this.right ?
      Either.of(this.left, f(this.right)):
      Either.of(this.left, f(this.left))
  }
}

Either.of = function (left, right) {
  return new Either(left, right);
}

module.exports = Either;