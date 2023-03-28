// import style from './clearButton.css'

const el = document.createElement('button');
el.innerHTML = "Clear button";
el.classList.add(['button']);
el.onclick = function() {
  alert("Clear button clicked");
}
document.body.appendChild(el);