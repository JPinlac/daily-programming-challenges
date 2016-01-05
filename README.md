# Daily Programming Challenges

First set of challenges will be from [The Advent of Code](http://adventofcode.com/)

To run any of the AOC programs, just clone this repository and execute the program you want using node. All the data is organized in the data.js file, so you can change the data to solve your unique puzzle there. All libraries are aslo included.

12/28/2015 - Finished day 1 of AOC. Be wary of using for in loops on anything other than an object. That method is meant to specifically iterate through object attributes in no particular order, which can cause errors when looping through arrays or strings.

12/29/2015 - Finished day 2 of AOC. Javascript only accepts newlines using '/n', so you have to do some creative formatting when you try to use multi-line text from the internet. Javascript's sort method uses strings by default, use a [compare function](http://www.w3schools.com/jsref/jsref_sort.asp) to sort numbers.

12/30/2015 - Finished day 3 of AOC. This one was a doozy. For this challenge I was storing location coordinates into an array, then pushing that into an array to act as a log. Javascript pushes objects (arrays are an object) as reference into an array. So anytime I changed the coordinates all the coordinates in the log would also change. My work around was storing the coords into an new object, then pushing that object to the array. The caveat of this approach is indexOf won't match similar objects even if they have equal attributes. So you have to make a custom indexOf function to match for objects.

12/31/2015 - Started day 4 of AOC. I found an interesting way to add vanilla html javascript libraries (ex. libraries you would include in script tags) to node. This was necassary to create md5 hashes for the puzzle. Unfortunately, this brute forcing is taking a really long time too...

1/4/2016 - Happy New Years! Day 4 of AOC finished. The program took a long time because the substring I was comparing against wasn't the correct length. the Javascript subtring method is non-inclusive. Also I had a couple console logs in the loop to check output, too much of these caused a ``` FATAL ERROR: JS Allocation failed - process out of memory ``` Taking them out solved that issue. 

1/5/2016 = Finished day 5 of AOC. Problem required regex which is always a fun time! Ran into a weird issue where I was getting less matched using a global flag. Still stumped on that one.
