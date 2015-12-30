# Daily Programming Challenges

First set of challenges will be from [The Advent of Code](http://adventofcode.com/)

12/28/2015 - Finished day 1 of Advent of code. Be wary of using for in loops on anything other than an object. That method is meant to specifically iterate through object attributes in no particular order, which can cause errors when looping through arrays or strings.

12/29/2015 - Finished day 2 of AOC. Javascript only accepts newlines using '/n', so you have to do some creative formatting when you try to use multi-line text from the internet. Javascript's sort method uses strings by default, use a [compare function](http://www.w3schools.com/jsref/jsref_sort.asp) to sort numbers.

12/30/2015 - Finished day 3 of AOC. This one was a doozy. For this challenge I was storing location coordinates into an array, then pushing that into an array to act as a log. Javascript pushes objects (arrays are an object) as reference into an array. So anytime I changed the coordinates all the coordinates in the log would also change. My work around was storing the coords into an new object, then pushing that object to the array. The caveat of this approach is indexOf won't match similar objects even if they have equal attributes. So you have to make a custom indexOf function to match for objects.
