// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by angular-markdown.js.
import { name as packageName } from "meteor/angular-markdown";

// Write your tests here!
// Here is an example.
Tinytest.add('angular-markdown - example', function (test) {
  test.equal(packageName, "angular-markdown");
});
