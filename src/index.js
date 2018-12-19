require("babel-register");
const Functor = require("./Functor.js");
const Maybe = require("./Maybe");
const Either = require("./Either");

//input demo1
const Functor1 = Functor.of(2).map(function(two){
  return two + 2;
});   //Functor(4)
const value1 = Functor1.getValue(); //4
console.log(value1, "////");

//input demo2
const Functor2 = new Functor('flamethrowers').map(function(s){
  return s.toUpperCase();
})  //Functor("FLAMETHROWERS");

//input demo3
// const Functor3 = (new Functor("bombs")).map(_.concat("away")).map(_.prop("length"));
// console.log(Functor3);

//没有Maybe函数 传递空值会报错
// const error =  Functor.of(null).map(function(s){
//   return s.toUpperCase();
// }) //TypeError

const maybe = Maybe.of(null).map(function(s){
  return String(s).toUpperCase();
});
console.log(maybe);

//demo4
function addX(x) {
  return x + 10;
}

const either1 = Either.of(5, 6).map(addX)
const either2 = Either.of(5, null).map(addX);
console.log(either1.getValue(), either2.getValue());
