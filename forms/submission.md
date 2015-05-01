## Part 1
- var foodLabel = document.querySelector('#foodLabel');
- foodLabel.innerHTML; // GET
// 'Favorite food:'

## Part 2
- var foodId = document.querySelector('#foodId');
- foodId.value; // GET
// 'pizza'

## Part 3
- document.querySelectorAll('input'); // GET all inputs to see their ids
// [..., <input id="calmId" type="checkbox" name="calmName" checked="true">, ...]
- var calmId = document.querySelector('#calmId');
- calmId.checked; // GET
// true
- calmId.innerHTML; // GET
// ""
- calmId.value; // GET
// "on"

## Questions
- innerHTML is useful when there is content between the element tags. .value
  is useful for cases in which the element has an assigned value attribute.
- .checked is the most direct way to select for that input attribute and GET its boolean value.
