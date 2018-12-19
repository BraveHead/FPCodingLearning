const Functor = require("./Functor");

class Maybe extends Functor {
  map(f){
    return this.value ? Maybe.of(f(this.value)) : Maybe.of(null);
  }
}

module.exports = Maybe;