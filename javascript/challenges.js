// Exercice 1
// Find the last element of a list.

exports.lastElement = function (list) {
  return list[list.length - 1];
};

// Exercice 2 - Find the last but one element of a list

exports.lastButOneElement = function (list) {
  return list[list.length - 2];
};

// Exercice 3 - Find the K'th element of a list

exports.kthElement = function (list, index) {
  return list[index - 1];
};

