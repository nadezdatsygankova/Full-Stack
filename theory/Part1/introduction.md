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

```
be default

order: 0;

if we set .green
{
  order:1; - it will be last one
}
```

flex-wrap

```
be default
flex-wrap: no-wrap;

you can use to next
property for parent-

    flex-wrap: wrap;

```

```
for parent
justify-content: flex-start;
justify-content: flex-end;
justify-content: center;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;

```











