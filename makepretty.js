var beautify = require("json-beautify");

var obj = { str: "Hello World", num: 42, smallarray: [ 1, 2, 3, "foo", {} ], smallobject: { foo: "bar", bar: 42 }, bigarray: [ 1, 2, 3, "foo", { foo: "bar", bar: "42", arr: [ 1, 2, 3, "foo", {} ] } ], bigobject: { foo: [ 1, 2, 3, "foo", {} ], bar: 42, a: {b: { c: 42 }}, foobar: "FooBar" } };

console.log(beautify(obj, null, 2, 80));
