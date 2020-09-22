(function (global) {
  //var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var helloSpeaker = {};
  helloSpeaker.speak = function (name) {
    console.log("Hello " + name)
  }
  global.helloSpeaker = helloSpeaker;
})(window);