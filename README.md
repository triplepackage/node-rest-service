# Node REST Endpoint
<pre>
Johns-MBP:node-utilities admin$ node --inspect server.js
</pre>

To Debug NodeJS
![Alt text](./images/image-002.jpg?raw=true "Step 01")
![Alt text](./images/image-001.jpg?raw=true "Step 01")
![Alt text](./images/image-003.jpg?raw=true "Step 01")

# NodeJs Utilities

Node JS Practice
<pre>
Johns-MacBook-Pro:GitHub admin$ mkdir json-practice
Johns-MacBook-Pro:GitHub admin$ cd json-practice/
Johns-MacBook-Pro:GitHub admin$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (github) prettyjson
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to /Users/admin/GitHub/package.json:

{
  "name": "node-utilities",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes)

Johns-MacBook-Pro:json-practice admin$ ls
package.json
Johns-MacBook-Pro:json-practice admin$ git init
Initialized empty Git repository in /Users/admin/GitHub/json-practice/.git/

Johns-MacBook-Pro:json-practice admin$ npm install --save json-beautify
npm WARN node-utilities@1.0.0 No description
npm WARN node-utilities@1.0.0 No repository field.

+ json-beautify@1.0.1
updated 1 package and audited 4 packages in 0.774s
found 0 vulnerabilities


Johns-MacBook-Pro:json-practice admin$ cat makepretty.js
var beautify = require("json-beautify");

var obj = { str: "Hello World", num: 42, smallarray: [ 1, 2, 3, "foo", {} ], smallobject: { foo: "bar", bar: 42 }, bigarray: [ 1, 2, 3, "foo", { foo: "bar", bar: "42", arr: [ 1, 2, 3, "foo", {} ] } ], bigobject: { foo: [ 1, 2, 3, "foo", {} ], bar: 42, a: {b: { c: 42 }}, foobar: "FooBar" } };

console.log(beautify(obj, null, 2, 80));
Johns-MacBook-Pro:json-practice admin$ node makepretty.js
{
  "str": "Hello World",
  "num": 42,
  "smallarray": [ 1, 2, 3, "foo", {} ],
  "smallobject": { "foo": "bar", "bar": 42 },
  "bigarray": [
    1,
    2,
    3,
    "foo",
    { "foo": "bar", "bar": "42", "arr": [ 1, 2, 3, "foo", {} ] }
  ],
  "bigobject": {
    "foo": [ 1, 2, 3, "foo", {} ],
    "bar": 42,
    "a": { "b": { "c": 42 } },
    "foobar": "FooBar"
  }
}

Johns-MacBook-Pro:json-practice admin$ git add makepretty.js package.json
Johns-MacBook-Pro:json-practice admin$ git commit -m "Initial creation."
[master (root-commit) cc55b70] Initial creation.
 2 files changed, 19 insertions(+)
 create mode 100644 makepretty.js
 create mode 100644 package.json
Johns-MacBook-Pro:json-practice admin$ git commit -m "Initial creation."

Johns-MacBook-Pro:json-practice admin$ git remote add origin https://github.com/triplepackage/node-utilities.git
Johns-MacBook-Pro:json-practice admin$ git push -u origin master
remote: Repository not found.
fatal: repository 'https://github.com/triplepackage/node-utilities.git/' not found
Johns-MacBook-Pro:json-practice admin$ git remote --v
origin	https://github.com/triplepackage/node-utilities.git (fetch)
origin	https://github.com/triplepackage/node-utilities.git (push)
Johns-MacBook-Pro:json-practice admin$ git push -u origin master
remote: Repository not found.
fatal: repository 'https://github.com/triplepackage/node-utilities.git/' not found
Johns-MacBook-Pro:json-practice admin$ git push -u origin master

</pre>
