
// (KSu) Defining a variable that has a value of an array of strings
var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles")

// (KSu) Adding elements to arrays
function addElementToBeginningOfArray(array, element) {
 return ["foo", 1]
}
function addElementToEndOfArray(array, element) {
  return [1, "foo"]
}

// (KSu) Adding elements to arrays destructively
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

// (KSu) Mostly self-explanatory titles
function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var array = [1, 2, 3]
  array.slice(1)
  return array
}