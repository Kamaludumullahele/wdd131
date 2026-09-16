
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('______'); // fill in the blanks to refernce the unordered list element.
// Create a li element that will hold each entry's chapter title and an associated delete button.
const li = document.createElement('li');
// creating a delete button
const deleteButton = document.createElement('button');
//Populate the li element variable's textContent or innerHTML with the input value.
li.textContent = input.value;
// setting deleteButton textcontent to 
deleteButton.textContent = '❌';
//append deleteButton to li element
li.append(deleteButton);
// Append the li element variable to the unordered list in your HTML
list.append(li);