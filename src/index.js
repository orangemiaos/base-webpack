import "./index.css";

function component() {
  var element = document.createElement("div");
  element.innerHTML = "hello";
  return element;
}

document.body.appendChild(component());

console.log(1111, process.env.NODE_ENV);
