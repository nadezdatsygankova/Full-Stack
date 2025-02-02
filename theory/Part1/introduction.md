## Heading
1.
```
   <h1> to <h6>
```
2. Life code extension -> html file -> show preview
3.
```
   <h1> - it is only one</h1>
```
4.
```
   <h1> - <h2> - <h3>  - better order
```

## HTML Paragraph Element
```
  <p> text inside </p>
```
Loream Ipsum - for general text

## Self-closing tags
```
<hr/>
/ - forward slash
\ - back slash
<br />

```

https://www.diffchecker.com/
- check different between two text

## Top movies project
https://www.rogerebert.com/reviews

My project - https://github.com/nadezdatsygankova/Full-Stack/tree/main/top%20movies
## The list element
```
//unordered list
<ul>
  <li> hi </li>
  <li> this </li>
</ul>

//ordered list
<ol>
  <li> hi </li>
  <li> this </li>
</ol>

```
Project ->

## Nesting and indenting
```
<ul>
  <li> hi </li>
  <li> this </li>
    <ol>
      <li> h1 </li>
      <li> h4 </li>
    </ol>
</ul>

```
Project ->

## Anchor element

```
<tag attribute=value> Content </tag>

<a href= "https://www.superteacherworksheets.com/generator-word-search.html">Link </a>


```
global attribute - for all tags

Project - Anchor

## Images

```
<img src="URL" alt = "text" /> //void element
```

```
https://picsum.photos/images/200

where 200 -size of the image
```

https://picsum.photos/images

alt - tools -  Silktide Toolbar

Project - Dog/Cat person

## file path

absolute path

C://users//docement

relative path

../absi -> go to up

./ ->

## webpages

Project is

## The HTML BoilerPlate

```

<!DOCTYPE html> - which version of HTML file
<html lang="en"> - root of the document, language = en
<head>
  <meta charset="UTF-8"> - characters display correctly
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> - how to display web page
  <title>Document</title> - what to display on the tab part
</head>
<body>
</body>
</html>
```
### Project - Portfolio

### Hosting to webserver

local development - all my files in local computer

all files we put in web server - this is web hosting

git hub - new repository, public
index.html and other pages upload
after files are uploaded
settings - pages
branch - main -
we got URL for website


### capstone project
=>

### css
Cascading style sheets - style of the web page

Style sheets languages:
- CSS
- Sass
- Less
and others

we can add css files:

1. inline
just adding css for a single element
```
<tag style='css' />

<html style ="background:green"></html>
```

2. internal
```
<head>
<style>
body{
  background:blue;
  }
</style>

<style>css</style>
```
3.external

we have a file style.css

rel - relationship
href - hyperlink reference
```
<head>
<link rel='stylesheet' type='text/css' href='style.css'/>
</head>

<link href="style.css"/>

```
## css selector

### element selector
```
h1
p
```
### class selector

```
.red-heading{
  color:red;
}
```
## id selector

```
#main{
  color:red;
}
```
## attribute selector
```
[title]
[title='hello']
[title='hello' lang='en']

p[draggable]{
  color:red;
}

p - html element
[draggable] - attribute

p[draggable = "true"]{
  color:red;
}

```

### universal selector

```
*{
  color:red;
  }
```
Project ->

## CSS Properties

### CSS Colors

property - value

```
background-color: red;
color: blue;
```
https://colorhunt.co/
color helpful

### font properties

```
font-weight: bold;
font-style: italic;
font-size: 20px;
font-family: Arial;

```
1px (pixel) - 1/96th inch - 0.26 mm
1pt (point) -word document the same - 1/72th inch - 0.35 mm
1em - 100% of parent
1rem - 100% of root - relative to root - better use it

sans-serif
serif (with some крючочки)

```
text-align: center;
text-decoration: underline;

```

### CSS inspection
Option+ command +I
F12

-> you can use inspect - ... -> CSS Overview
-> you can see all the CSS properties
-> you can edit them
-> you can add new ones
-> you can delete them


### the box model

```
border: 10px solid black;

```

#### content division element

```
<div>
Hello
</div>

```

Pesticide chrome extension for debugging code

Control+C -> hover

Project ->

## Intermediate CSS
### css cascade

1. external style
2. inline style


-> position
what is the position in document of the rule?
```
li {
  color: red;
  color: blue;-> this is will be
}

```
-> specificity

```
li{color: blue;} -> element selector
.first-class{color:red;} -> class selector
li[draggable]{color: purple;} -> attribute selector
#first-id{color: orange;} -> id selector
```
-> type

```
<link rel="stylesheet" href="./style.css"> - external file
<style></style> - internal
<h1 style="color:red;">Hello</h1> - inline style - most important

```
-> importance
```
color: red !important;

```
![Rules](../Part1/rules.jpeg "Rules")


### combining css
```
<div class= "inner-box" >
    <p>Text</p>
</div>

.inner-box p {
  color: red;
}
```

#### group rule = apply to both selectors

```
selector, selector {
  property: value;
}

```

#### child rule = apply to direct child of left side

```
.parent > .child {
  property: value;
  }

selector > selector{
  color: red;
}

```

#### descendant = apply to descendant of left side

```
selector selector {
  property: value;
}

in all descendant

```

#### chaining selector = apply where ALL selectors are true
- no space
add h1#id.class
start with element

```
selectorselector{
  property: value;
}

h1#first.same{
  color: red;
}

```
#### combining combiners

```
selector selectorselector {
  property: value;
  }

```

### CSS position

#### static - HTML default
- no positioning
- no offset parent
- no z-index
- no clipping
- no scrolling
- no transform
- no transition
- no animation
https://appbrewery.github.io/css-positioning/


#### relative - position relative to default
position relative to default
```
position: relative;

```

#### absolute
- we need to add  position:relative  to the parent

- position relative to nearest positioned ancestor or top left corner of the website

```
position: absolute;
z-index: 1000;
```

#### fixed
- position relative to viewport
- always on top
- no scrolling

```
position: fixed;

```
### css display

#### inline
the same line
- you can't add width and hight
- size = content

```
span {
  display: inline;
}

```

#### block

```
default
h1 {
  display: block;
}

```
#### inline-block
- can have width and height
- can have margin and padding
- can go inline
- can go block

#### none
- no display
- no space
- no margin
```
display: none;

```
https://appbrewery.github.io/css-display/


### css float
wrapping text around element

```
img {
  float: left;
  }

  ```
  text will be all around img

img and paragraph are

display:block;

if we don't want wrapping around after text

```
footer{
  clear:left;
}

or
footer{
  clear:both;
  }
```
### responsive design

#### media-query

below or equal 768 px
```
@media (max-width: 768px) {
  .container {
      width:500px;
  }
}

```
#### css grid

```

```

#### css flex-box

#### external frameworks e.g bootstrap


### media queries

all bigger that 600px

```
@media (min-width: 600px) {
  .container {
    width:800px;
    }
}

```
all the less than 600px
```
@media (max-width: 600px) {
  .container {
    width:400px;
    }

}
```
you can combine them

```
@media (max-width: 600px) and (orientation: landscape) {
  .container {

      width:45px;
  }
}
```

 Mobile Devices: 319px — 480px
 iPads and Tablets: 481px — 1200px
 Laptops: 1201px — 1600px
 Desktops: 1601px and more


### css flexbox

#### flexbox

float only great if you want to float an image to the left or the light of a block of text to the wrap the text around.



```

<div class="container">
   <div class="item">1</div>
   <div class="item">2</div>
   <div class="item">3</div>
</div>

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f2f2f2;
  gap: 10px;
}

```

```
<div> block element </div>
<p> block element </p>
<span> inline element </span>
<a> inline element </a>
<img> inline element </img>

```

if display: flex
container occupied 100% width
if display: inline-flex
container occupied width of content

#### flex direction

be default
flex-direction: row

if we set
flex-direction: column
from top to bottom

flex-basic: 100px; on the child element

#### flex layout
##### order
```
be default

order: 0;

if we set .green
{
  order:1; - it will be last one
}
```

##### flex-wrap

```
be default
flex-wrap: no-wrap;

you can use to next
property for parent-

    flex-wrap: wrap;

```
##### justify-content
```
for parent
justify-content: flex-start;
justify-content: flex-end;
justify-content: center;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;

```
##### align-items
```
for parent
align-items: flex-start;
align-items: flex-end;
align-items: center;
align-items: baseline;
align-items: stretch;

we need to set height for container

height: 70vh; - viewport height
it should be no wrap
flex-wrap: no-wrap;

----
***
align-items: flex-start;
height: 70vh;
flex-wrap: no-wrap;

---

if you need to set for specific item
align-self: flex-start;
```

https://css-tricks.com/snippets/css/a-guide-to-flexbox/


##### align-content
only works

```
for parent

align-content: flex-start;
flex-wrap: wrap;
height: 70vh;

```

https://appbrewery.github.io/flexboxfroggy/

#### flex sizing

by default
flex items will take up as much space as they need
if there is extra space, it will be distributed evenly

content width < width< flex-basic < min-width/max-width
min-width- longest word - how small they can shrink to
max-width - longest possible line of the text - max to grow

```

flex-grow: 0 or 1; (yes or not) -max-width
flex-shrink: 0 or 1; - min-width

flex-basic:0

flex: 1 1 0; === flex:1;
first - grow
second - shrink
third - basic
if you want equal - basic:0;
default  basic:auto - more space to more content
```
```
/* Write your CSS code below to make the blue items size, grow and shrink like the green ones.*/

.container {
  display:flex;
  justify-content:space-between;
}

.container > * {
}

.item1 {
flex-basic:200px;
}

.item2 {
flex-basis:200px;
flex-shrink:0;
}

.item3 {
flex-basis:200px;
flex-shrink:0;
}

```
### css grid

Flexbox
- inline content
- one dimension
- horizontal or vertical

Grid
- block content
- two dimensions
- horizontal and vertical

```
.container {
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap:10px;
  }

  ```

  #### grid size

  ```
  .container {
    display:grid;
    <!-- first rows/column -->
    grid-template: 200px 200px / 300px 300px;
    }

    .container{
      display:grid;
      grid-template-columns: 100px auto; //100%
      grid-template-rows: 100px auto; // fit content

    }

```

https://appbrewery.github.io/grid-sizing/

fractional size

```
.container {
  display:grid;
  grid-template-columns: 1fr 2fr 3fr;
  }

  .container {
    display:grid;
    grid-template-columns: 200px 400px;
    grid-template-rows: 200px minmax(400px, 800px);
  }

.container{
  display:grid;
  grid-template-columns: repeat (2, 200px); //200px 200px
  grid-template-rows: repeat(2, 200px); // 200px 200px

}
```
automaticaly

```
.container {
  display:grid;
  grid-template-columns: auto 200px auto;
  grid-template-rows: auto 200px auto;
  grid-auto-rows: 400px;
  }

```

  inspector -> grid layout

```
.grid-container {
display:grid;
grid-template-columns: auto 400px minmax(200px, 500px);
grid-template-rows: 1fr 1fr 2fr;
grid-auto-rows: 50px;

}

```

#### grid item placement

row tracks
column tracks
grid cells
grid lines (gap)
grid items
grid container

```
.grid-container {
  display:grid;
  grid-template-columns: 200px 400px;
  grid-template-rows: 200px 400px;
  grid-gap: 10px;
  }
  .grid-item{
    grid-column-start: 1 ///left
    grid-column-end: -1 ///right
  }

  grid-column: span 2;
  order: 1;- go to the end of the grid


grid-area: 2 / 1 / 3 /3;
grid-row-start: 2;
grid-column-start: 1;
grid-row-end: 3;
grid-column-end: 3;

https://appbrewery.github.io/gridgarden/

```
#### Mondrian project

in mondrian folder

### bootstap
css framework

```
<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>


```

col-lg-2
col-sm-4
col-6


#### bootstrap component
```
<html lang="en" data-bs-theme="dark"> // dark mode
```
https://www.w3schools.com/bootstrap/bootstrap_templates.asp

free bootstrap templates

### design website

#### colour theory

red- love. energy. intensity
orange- warmth. excitement. creativity
yellow- joy. intellect. attention
green- freshness. safety. growth
blue- stability. trust. serenity
purple- luxury. creativity. wisdom
pink- playfulness. femininity. sweetness
brown- earthiness. reliability. comfort
grey- neutrality. balance. sophistication
black- elegance. power. sophistication
white- purity. innocence. simplicity

In design we use 2 or 3 colours
1. primary colour
2. secondary colour
3. accent colour
4. background colour
5. text colour
6. hover colour
7. active colour
8. focus colour
9. disabled colour
10. error colour

- analogous colour
 - so close colours
 * navigation bar
 * footer
 * background
- complementary colour
  - opposite colours
* icon
* button

https://color.adobe.com/create/color-wheel

https://colorhunt.co/

#### typography

- serif
  - more serious
  - more formal
  - more traditional
  - more classic

  * old style
  * transitional
  * modern
  * didone
  * slab serif

  San-serif
  - more modern
  - more clean
  - more simple
  - more minimal
  start up loves using this type
   * humanist - very clear- readable
   * geometric

- 2 fonts in one design
  - 1 font for headings
  - 1 font for body

Similar
 * mood
 * time era

Contrast
 * serif-ness
 * weight

 #### user interface design

 1. hierarchy
   - most important information go first
   - use size, colour, and position to create hierarchy
2. Layout
- use grid to create layout
- use white space to create balance
- use alignment to create order
40 characters per line

3. Alignment
- left
- right
- center


- it is better in one line - left
4. White space
- use it to create balance
- use it to create hierarchy
- use it to create order

5. Audience
- know who is the audience
- know what is the audience need

#### user experience design
1. user flow
- create a flow chart to show how user interact with the system
2. user journey
- create a story to show how user interact with the system
3. user research

-- simplicity
-- consistency
-- reading patterns
   - use F layout
   or use Z pattern
-- all platform design
  - use same design for all platform
  - use same design for all device

remove all banners on mobile
-- don't use your powers for evil

#### tasks
https://www.dailyui.co/
examples
https://collectui.com/


font - cardo
subtitle - glacial indifference


website - https://nadiatsy.my.canva.site/

## JS

JavaScript, Ruby, Python are interpreted
Java, C/C+, Swift are compiled

- compiled language is faster
- interpreted language is easier to learn
- compiled language is more secure
- interpreted language is more flexible
- compiled language is more efficient


-console
- sources -> snippet -> can write many different lines -> bottom play button


```
alert("Hello");
```
Idiomatic -

https://github.com/rwaldron/idiomatic.js/

### data type

```
"Hello" - string
123 - number
true / false - boolean
null - null
undefined - undefined
typeof(345) -> number
typeof("hello") -> string
typeof(true) -> boolean
```
variable

```
let name = "John";
let age = 30;
let isMarried = true;

prompt("What is your name?");
let name = prompt("What is your name?");
alert(name)
```
### javascript variable exercise

```
function test() {
    var a = "3";
    var b = "8";

var c = a;
a=b;
b=c;

    console.log("a is " + a);
    console.log("b is " + b);
}

```
### naming and naming convention for javascript variables

cleaning - command + K

snippet - long click to reload button- empty cache and hard reload
```
let name = "John";
let age = 30;
let isMarried = true;
```
name can contains
- number + letters + $ + _
- cannot start with number
- cannot contain space
- cannot contain special character except $ and _
camel casing
- first letter is lowercase
- first letter of each word is uppercase
- example: `let firstName = "John";`
- example: `let isMarried = true;`
- example: `let ageClient = 30;`
### strings
- concatenation
```
let message = "Hello!"
let name = "Nadia"
alert(message +" "+ name);
```

### length
number of characters inside variables or word

```
let name = "Nadia"
console.log(name.length);

//task
let text = prompt("Your text");
alert(text.length);
alert(280-text.length);

```
### slicing and extracting parts of string
- slicing

```
let name = "Nadia"
console.log(name.slice(0,3)); //Nad

tasks
let text = prompt("Your text");
let textAfterSlice=(text.slice(0,184));
alert(textAfterSlice);

```
### changing casing in text
- toUpperCase()
- toLowerCase()

```
let name = "Nadia"
console.log(name.toUpperCase()); //NADIA
console.log(name.toLowerCase()); //nadia

```
```
let text = prompt("Your name");
let lengthText = text.length;
let secondPartOfText = text.slice(1,lengthText)

alert("Hello, " + text.slice(0,1).toUpperCase() + secondPartOfText.toLowerCase());

```
87
### basic arithmetics and the modulo operator

numbers
- addition
- subtraction
- multiplication
- division
- modulo
- exponentiation

```
let a = 5;
let b = 3;
console.log(a + b); //8
console.log(a - b); //2
console.log(a * b); //15
console.log(a / b); //1.6666666666666667
console.log(a % b); //2
console.log(a ** b); //25
if % is 0 => even number
if % is 1 => odd number

```
multiplication - first

```
let dogAge = prompt("What is your dog age?");
let humanAge = (dogAge-2)*4 + 21;
alert("Your dog age is "+ humanAge+ " in human Ages")

```
### increment and decrement expressions
- increment operator ++
- decrement operator --

```
let a = 5;
console.log(a++); //5
console.log(a); //6
console.log(++a); //7
console.log(a); //7
console.log(a--); //7
console.log(a); //6
console.log(--a); //5
console.log(a); //5
a += 5;
console.log(a); //10
```
### function
- function declaration
- function expression
- function call
- function return
- function arguments
- function parameters

```
function greet(name) {
  console.log("Hello, " + name);
  }
  greet("John");
  function add(a, b) {
    return a + b;
  }
    console.log(add(5, 7));

```
https://stanford.edu/~cpiech/karel/ide.html

```
function costOfMilk(bottles) {
  return bottles * 0.25;
  }

costOfMilk(5);

```
if we need round

```
let a = 1.44556
let b = Math.floor(a);
console.log(b); //1
The Math.floor() method rounds a number DOWN to the nearest integer.

```
```
function lifeInWeeks(age) {

    let ageBeetwen = 90-age;
    let days= ageBeetwen*365;
    let week=ageBeetwen*52;
    let month=ageBeetwen*12;
    console.log("You have "+ days+" days, "+week+" weeks, and "+month+" months left.")

}
```
```
function getMilk (money) {
return money % 1.5;
}

let change = getMilk(5);
console.log(change);
```
```
function calculateBottles(startingMoney, costPerBottle){
  let bottles = Math.floor(startingMoney / costPerBottle);
  return bottles;
}

console.log(calculateBottles(100, 5));

function CalcChange(startingMoney, bottles){
  let change = startingMoney % bottles;
  return change;
}

```
```
function bmiCalculator(weight, height)
{
   let BMI = weight/Math.pow(height,2);
   return Math.round(BMI);
}

let BMI = Math.round(bmiCalculator(65,1.69));
console.log(BMI);
```
## Intermediate JS
```
let n = Math.random();
//between 0 - 0.99
n = n * 6;
//if need to range 1-12 we can multiply by 12
n = Math.floor(n) + 1;
//between 1 - 6
```
task
```
let nameFirst = prompt("What is your name?");
let nameSecond = prompt("What is your lover name?");

let random = Math.random();
random= random * 100;
random = Math.floor(random)+1;
console.log("You have "+ random +" % of love");
```
### use if else

comparatives

```
let nameFirst = prompt("What is your name?");
let nameSecond = prompt("What is your lover name?");
let love = prompt("How much do you love your lover?");
let random = Math.random();
random= random * 100;
random = Math.floor(random)+1;
if (random > 50){
  console.log(nameFirst + " loves " + nameSecond + " very much");
  } else {
    console.log(nameFirst + " loves " + nameSecond + " a little");
    }

```
```
=== is equal - the data type is matching
!== is not equal
> is greater than
< is less than
>= is greater than or equal to
<= is less than or equal to

```
```
let nameFirst = prompt("What is your name?");
let nameSecond = prompt("What is your lover name?");
let love = prompt("How much do you love your lover?");
let random = Math.random();
random= random * 100;
random = Math.floor(random)+1;
if (random > 50 && love > 50){
  console.log(nameFirst + " loves " + nameSecond + " very much");
  } else {
    console.log(nameFirst + " loves " + nameSecond + " a little");
    }
 and - &&
 or - ||
 not - !
```
```
BMI calculator

function bmiCalculator (weight, height) {
     let BMI = weight/(height*height);
     let interpretation;
     if (BMI <18.5)
     {
         interpretation = "Your BMI is " +BMI+", so you are underweight.";
     }
     if (BMI >18.5 && BMI <=24.9)
     {
          interpretation = "Your BMI is " +BMI+", so you have a normal weight.";
     }
     if (BMI >24.9)
     {
          interpretation = "Your BMI is " +BMI+", so you are overweight.";
     }

    return interpretation;
}
```
Leap Year Challenge Exercise
```
function isLeap(year) {

if (year%4 == 0)
{
   if (year%100 ==0)
   {
       if(year%400 ==0)
       {
           console.log("Leap year.")
       }
       else
       {
           console.log("Not leap year.")
       }
   }
   else
   {
       console.log("Leap year.")
   }
}
else
{
    console.log("Not leap year.")
}



}
```
### working with javascript arrays

```
// Creating an array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// Accessing an element in the array
console.log(numbers[0]);
// Modifying an element in the array
numbers[0] = 10;
console.log(numbers);
// Adding an element to the array
numbers.push(6);
console.log(numbers);
// Removing an element from the array
numbers.pop();
console.log(numbers);
// Checking if an element exists in the array
console.log(numbers.includes(2));
// Getting the length of the array
console.log(numbers.length);
// Sorting the array
numbers.sort((a, b) => a - b);
console.log(numbers);
// Reversing the array
numbers.reverse();
console.log(numbers);
// Filtering the array
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
// Mapping the array
let squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers);
// Reducing the array
let sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum);

```

```
let gestsList = ["Anna", "Jena", "Nadia"];
let guess = prompt("What is you name?")

if (gestsList.includes(guess)){
    console.log("Welcome");
}
else {
    console.log("Sorry, you are not in the list");
}

```
### FizzBuzz

push - in the end of the array
pop - take out last item

```
let output =[];

function fizzBuzz (i){
    output.push(i)
    console.log(output);
}

for(i=0; i< 10; i++){
    fizzBuzz (i)
}
```

### Loops
- for
- while
- do while

while
```
let i = 0;
while (i < 10){
  console.log(i);
  i++;
  }
  ```
do while
```
let i = 0;
do {
  console.log(i);
  i++;
  } while (i < 10);
```

#### infinite loop

when the computer will cary on until eternity, and instead crashed your code.

### for loop

```
for (let i = 0; i < 10; i++){
  console.log(i);
  }
```
- let i = 0 - initialize
- i < 10 - condition
- i++ - increment
- console.log(i) - code to be executed

### Fibonacci Challenge
- Create a function that takes a number as an argument and returns the nth number in the Fibonacci sequence
- The Fibonacci sequence is a series of numbers where a number is the addition of the last two numbers
- 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
- The first two numbers in the sequence are 0 and 1
- The next number in the sequence is the sum of the previous two numbers
- The sequence continues indefinitely

### The DOM- 114

- The Document Object Model (DOM) is a programming interface for HTML and XML documents
- It represents the structure of a document as a tree-like data structure
- The DOM is a W3C standard

```
// insert Js
//when body onload
<body onload = "alert('Hello');" >
```
```
<body>
<script type = "text/javascript">
alert(Hello");

</script>
</body>
```
or
external file
at the end of </body>
```
<script src="index.js" charset="utf-8"></script>
//at the end of </body>

```
### introduction to the DOM
- The DOM is a tree-like data structure
- The DOM is a W3C standard
- The DOM is a programming interface for HTML and XML documents
- The DOM represents the structure of a document as a tree-like data structure
- The DOM is used to access and manipulate the elements of a document
- The DOM is used to add, remove, and modify elements of a document

Extension - HTML Tree Generator

https://chromewebstore.google.com/detail/html-tree-generator/dlbbmhhaadfnbbdnjalilhdakfmiffeg

document is the entire html file
```
document.firstElementChild
// everything from <html></html>
document.firstElementChild.innerHTML = "Good bye!";
document.querySelector("input").click();
```
Objects has properties and methods

Method is something that an object can do
Property is something that an object has

### Manipulating and Changing Styles
- The DOM allows you to manipulate and change the styles of elements

```
document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.fontSize = "30px";
document.querySelector("h1").style.fontFamily = "Arial";
document.querySelector("h1").style.visibility =" hidden";
document.querySelector("button").style.backgroundColor =" yellow";
document.querySelector(".PBBEhf").style.backgroundColor = "red";

```
### The separation of concerns
- The separation of concerns is a principle of software design
- The separation of concerns is a way of organizing code

```
document.querySelector("button").classList.add("invisible"); //add a class invisible to the object
document.querySelector("button").classList.remove("invisible"); //remove a class invisible to the object
document.querySelector("button").classList.toggle("invisible"); //toggle a class invisible to the object
document.querySelector("button").classList.contains("invisible"); //check if a class invisible is in the object
document.querySelector("button").classList.replace("invisible", "visible"); //replace a class invisible with a
```
we can save all our styles in style.css and turn on/ off using JS


### Text Manipulation
- The DOM allows you to manipulate the text of elements
- The DOM allows you to get the text of an element

```
document.querySelector("h1").textContent = "Hello World!";// add just text content //Hello World
document.querySelector("h1").innerHTML="Hello"; // all HTML between <h1></h1>
// for example it can be <strong>Hello </strong>
document.querySelector("h1").innerText = "<em>Hello World!</em>";

document.querySelector("h1").outerHTML = "<h1>Hello</h1>"; // all HTML
document.querySelector("h1").innerText = "Hello World!"; // all text
```

### Adding and Removing Elements

```
document.querySelector("h1").attributes;
document.querySelector("h1").getAttribute("class");// check what we have
document.querySelector("h1").setAttribute("class", "new-class"); // add attribute
document.querySelector("h1").removeAttribute("class");


- The DOM allows you to add and remove elements from a document
- The DOM allows you to add and remove elements from a document using the `createElement` method
- The DOM allows you to add and remove elements from a document using the `appendChild` method
- The DOM allows you to add and remove elements from a document using the `removeChild` method
- The DOM allows you to add and remove elements from a document using the `replaceChild` method
- The DOM allows you to add and remove elements from a document using the `insertBefore` method
- The DOM allows you to add and remove elements from a document using the `insertAfter` method
- The DOM allows you to add and remove elements from a document using the `appendChild` method
```
## Boss level challenge 1
project under dice

## Advanced JS

in inspect you can go to the console

```
//show h1 element
$0


//change text of h1 element
$0.innerHTML = "Nadia";

$0.addEventListener("click", respondToClick);
function respondToClick (){
  console.log("You clicked me!");
}
```

```
// in inspect

debugger;
calculator(5,4,add);

```
#### Hight order functions are functions that take other functions as arguments or return functions as output

### 139 How to play sounds on a Website

### JS object
```
let person = {
  name: "Nadia",
  age: 30,
  address: {
    street: "123 main st",
    city: "NYC",
    state: "NY"
    },
    hobbies: ["reading", "hiking", "coding"]
}

```
accessing

```
console.log(person.name);
console.log(person.address.street);

```
construction function

```
function createPerson(name, age, address, hobbies){
  return {
    name: name,
    age: age,
    address: address,
    hobbies: hobbies
    }
}
or
function createPerson(name, age, address, hobbies){
  this.name = name;
  this.age = age;
  this.address = address;
  this.hobbies = hobbies;
  }

  // create
  let person1 = new createPerson("Nadia", "78", "main", ["bike","run"]);
  console.log(person1.name);
  ```
  ### methods

  ```
  function createPerson(name, age, address, hobbies){
    this.name = name;
    this.age = age;
    this.address = address;
    this.hobbies = hobbies;
    this.sayHello = function(){
      console.log("Hello, my name is " + this.name);
      }
}
// create
let person1 = new createPerson("Nadia", "78", "main", ["bike","run"]);
person1.sayHello();

```
keydown

```
document.addEventListener("keydown", function(event){
  console.log(event.key);
  console.log(event.code);
  console.log(event.charCode);
  console.log(event.keyCode);
  console.log(event.altKey);
  console.log(event.ctrlKey);
}
)
```
```
document.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    console.log("Enter key was pressed");
    }
    }
    )

```
## section 19 - jQuery
### what is jQuery
jQuery is a fast, small, and feature-rich JavaScript library. It makes things simpler for HTML document
traversing, event handling, animating, and Ajax interactions for quicker development and easier maintenance of
web applications.
```
// jQuery
document.querySelector("h1") = jQuery("h1")=$("h1")

```
### how to incorporate jQuery into Website
1. download jQuery from jQuery website
Google CDN
https://developers.google.com/speed/libraries#jquery

2. include jQuery in your HTML file

```
 <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="./index.js"></script>

```
or
```
$(document).ready(function() {
  $("h1").css("color", "red");
});

```

we can use minify- to min size

### selected elements

```
// get all elements with class name
$(".class-name")
// get all elements with id
$("#id")
// get all elements with tag name
$("tag-name")

// get all elements with attribute
$("[attribute='value']")
// get all elements with attribute that contains value
$("[attribute*='value']")
// get all elements with attribute that starts with value
$("[attribute^='value']")
// get all elements with attribute that ends with value
$("[attribute$='value']")

examples:
$("buttons");
$("#myButton");
$(".myClass");
$("[href='#']");
$("[href*='http']");
$("[href^='http']");
$("[href$='com']");

$("h1").css("color") - we get property
$("h1").css("color", "red") - we set property

```
### DOM manipulation

```
$("h1").text("Bye");
$("h1").html("<b>Bye</b>");
$("h1").val("Bye"); // for input fields
$("h1").attr("class", "myClass");
$("img").attr("src");
$("h1").attr("class", "myClass myClass2");
$("h1").removeAttr("class");
$("h1").removeAttr("class", "myClass");
$("h1").remove();
```
### Event jQuery

```
$("h1").click(function(){
  $("h1").css("color", "purple")
});
$("h1").hover(function(){
  $("h1").css("color", "blue")
  },
  function(){
    $("h1").css("color", "red")
    });

$("input").keypress(function(event){
  console.log(event.key)
  $("h1").text(event.key);
})

$("h1").on("mouseover", function(){
  $("h1").css("color", "red")
})

```
### adding element

```
$("body").append("<p>Bye</p>");
$("body").prepend("<p>Bye</p>");
$("body").after("<p>Bye</p>");
$("body").before("<p>Bye</p>");

```
### removing element
```
$("p").remove();
$("p").empty();
```
### toggle
```
$("h1").toggle();
$("h1").toggle("slow");
$("h1").toggle("slow", "swing");
```
### animation
```
$("h1").animate({left: "100px"}, "slow");
$("h1").animate({left: "100px"}, "slow", "swing");
$("h1").show();
$("h1").hide();

$("h1").fadeout();
$("h1").fadeIn();
$("h1").fadeToggle();

$("h1").slideDown();
$("h1").slideUp();
$("h1").slideToggle();

```
## The Simon Game
folder Simon Game

### Command line
- GUI - Graphical User Interface
- CLI - Command Line Interface
- API - Application Programming Interface

BASH shell - Bourne Again Shell
- `cd` - change directory
- `ls` - list
- `mkdir` - make directory
- `rm` - remove
- `cp` - copy
- `mv` - move
- `touch` - create file
- `echo` - print
- `cat` - print file

- `echo "hello"`
- `echo "hello" > file.txt`
- `~` - root directory
- `.` - current directory
add optional and go through the line
control + a - at the start
control + e - at the end

- `touch Text.txt`
- `open Text.txt`
- `open -a /Applications/PDF\ Reader\ Pro.app Text.txt`
- ` rm text.txt` - remove text
- `rm -r text.txt` - remove text and all files in it
- `rm -rf text.txt` - remove text and all files in it and all subdirectories
- `cp text.txt text2.txt` - copy text to text2
- `cp -r text text2` - copy text and all files in it to text2
- `mv text.txt text2.txt` - move text to text2
-`pwd` - print work directory
- `cd ~` - change to root directory
- `rm * ` - remove all texts inside directory
- `rm -r *` - remove all texts and all files in it inside directory
- `rm -r /Angela` - removed directory
- `rm -rf /Angela` - removed directory and all files in it
https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/12384438#overview





















