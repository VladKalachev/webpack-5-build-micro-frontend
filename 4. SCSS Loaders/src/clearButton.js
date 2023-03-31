import style from './clearButton.scss'

const el = document.createElement('button');
el.innerHTML = "Clear button";
el.classList.add([style.button]);

el.onclick = function() {
  alert("Clear button clicked");
}


document.body.appendChild(el);