let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

let objKeys = Object.keys(myObj);   // returns the object's own keys
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);   // prints the object's own and prototype's keys
}
