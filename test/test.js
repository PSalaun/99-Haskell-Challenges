var expect    = require("chai").expect;
var challenges = require("../javascript/challenges");

describe("Find the last element of a list", function() {
  it("returns the last element of a list of digits", function() {
    const digits = challenges.lastElement([1, 2, 3, 4, 5]);
    expect(digits).to.equal(5);
  });
  it("returns the last element of a list of letters", function() {
    const letters = challenges.lastElement(["a", "b", "c", "d", "abcdef"]);
    expect(letters).to.equal("abcdef");
  });
});
