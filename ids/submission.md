## Part 1
var mainHeading = document.querySelector('#main-heading');
mainHeading.innerHTML = "Fun DOM Example";

## Part 2
var img = document.querySelector('img');
img.style.height = '300px';

## Part 3
img.setAttribute('src', 'img/dom_basic.png');

## Questions
- With .innerHTML, in this case, at least, we can quickly update the content
  with a new string with no concatenation. With .setAttribute, we are able to
  more quickly and simply update the attribute and the value of the attribute
  without having to worry about formatting/syntax of the html or concatenation.
- In changing the style of the image, we used assignment (=) to change the value
  of height. Whereas setAttribute serves as function into which we passed two
  arguments, src and a new value for src.
