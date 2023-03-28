import './index.css';
import './clearButton';

document.getElementById('btn1').addEventListener('click', function(e) {
  const element = document.getElementById("header");
  element.innerHTML = "Hello world!";

  const list = ['Apples', 'Pears', 'Orange'];
  const listElement = document.getElementById('list');
  list.forEach(function(fruit) {
    const el = document.createElement('li');
    el.innerHTML = fruit;
    listElement.appendChild(el);
  })
})