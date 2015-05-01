//
// Part 1
//
var li = document.querySelectorAll('li');
for (var i = 0; i < li.length; i++) {
    li[i].style.borderBottom = '1px dotted ' + randoRgb();
}
function randoRgb() {
    function num() {
        return Math.floor(Math.random() * 255);
    }
    return 'rgb(' + num() + ', ' + num() + ', ' + num() + ')';
}


//
// Part 2
//
var datatypeClass = document.querySelectorAll('.datatype');
for (var i = 0; i < datatypeClass.length; i++) {
    datatypeClass[i].style.color = 'red';
}


//
// Part 3
//
var functionClass = document.querySelectorAll('.function');
for (var i = 0; i < functionClass.length; i++) {
    functionClass[i].style.color = 'blue';
}


//
// Further Questions
//
console.log('.getElementById returns a single element specified by ID.');
console.log('.getElementsByClassName GETs elements matching class name.');
console.log('.getElementsByTagName GETs elements matching the tag name.');
console.log('.querySelectorAll GETs elements matching the specified selectors.');
