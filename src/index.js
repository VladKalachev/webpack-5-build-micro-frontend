
document.getElementById('btn1').addEventListener('click', handlerClick)

function handlerClick() {
  const element = document.getElementById("header");
  element.innerHTML = "Hello world!";

  const list = ['Apples', 'Pears', 'Orange'];
  const listElement = document.getElementById('list');
  list.forEach(function(fruit) {
    const el = document.createElement('li');
    el.innerHTML = fruit;
    listElement.appendChild(el);
  })
}