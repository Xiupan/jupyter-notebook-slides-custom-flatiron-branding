// <svg width="350" height="200" viewBox="0 0 350 200">
//   <path class="lt" d="M 100 50 L 50 100 L 100 150"></path>
//   <path class="slash" d="M 150 175 L 200 25"></path>
//   <path class="gt" d="M 250 50 L 300 100 L 250 150"></path>
// </svg>

window.onload = function(){
  let backgroundsElement = document.querySelector(".backgrounds")

  let doubleSlashes = document.createElement("strong")
  doubleSlashes.setAttribute("id", "double-slashes")
  doubleSlashes.innerText = "//"

  backgroundsElement.append(doubleSlashes)
}
