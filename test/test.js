var expect    = require("chai").expect;
var challenges = require("../javascript/challenges");

describe("1 - Find the last element of a list", function() {
  it("returns the last element of a list of digits", function() {
    let digits = challenges.lastElement([1, 2, 3, 4, 5]);
    expect(digits).to.equal(5);
  });
  it("returns the last element of a list of letters", function() {
    let letters = challenges.lastElement(["a", "b", "c", "d", "abcdef"]);
    expect(letters).to.equal("abcdef");
  });
});

describe("2 - Find the last but one element of a list", function() {
  it("returns the last but one element of a list of digits", function() {
    let digits = challenges.lastButOneElement([1, 2, 3, 4, 5]);
    expect(digits).to.equal(4);
  });
  it("returns the last but one element of a list of letters", function() {
    let letters = challenges.lastButOneElement(["a", "b", "c", "d", "abcdef"]);
    expect(letters).to.equal("d");
  });
});

describe("3 - Find the K'th element of a list. The first element in the list is number 1", function() {
  it("returns the last but one element of a list of digits", function() {
    let digits = challenges.kthElement([1, 2, 3, 4, 5], 2);
    expect(digits).to.equal(2);
  });
  it("returns the last but one element of a list of letters", function() {
    let letters = challenges.kthElement(["a", "b", "c", "d", "abcdef"], 3);
    expect(letters).to.equal("c");
  });
});

describe("4 - Find the number of elements of a list", function() {
  it("returns the length of a list of digits", function() {
    let digits = challenges.length([1, 2, 3, 4, 5]);
    expect(digits).to.equal(2);
  });
  it("returns the length of a list of words", function() {
    let letters = challenges.length(["a", "b", "c"]);
    expect(letters).to.equal(3);
  });
  it("returns 0 if the list is empty", function() {
    let letters = challenges.length([]);
    expect(letters).to.equal(0);
  });
});
