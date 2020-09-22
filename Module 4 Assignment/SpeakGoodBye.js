(function (global) {
  //var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var byeSpeaker = {};
  byeSpeaker.speak = function (name) {
    console.log("Good Bye " + name)
  }
  global.byeSpeaker = byeSpeaker;
})(window);