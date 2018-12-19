class Functor{
  constructor(value) {
    this.value = value;
  }
  getValue() {
    return this.value;
  }
  //函子的标志就是容器具有map方法。 该方法将容器里的每一个值，映射到另一个容器。
  map(f) {
    return Functor.of(f(this.value));
  }
}

Functor.of = function (value) {
  return new Functor(value);
}

module.exports = Functor;
