import style from './index.scss';
import './clearButton';
import logo from './assets/logo.png';

const btn1 = document.getElementById('btn1');
const logEl = document.getElementById('logo');

btn1.addEventListener('click', function() {
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

btn1.classList.add([style.button]);
logEl.src = logo;