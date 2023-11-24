const input = document.getElementById("input-box");
const container = document.getElementById("list-container");

function addTask() {
  if (input.value === "") {
    alert("You must write somehting!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    container.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
}

container.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", container.innerHTML);
}
function showData() {
  container.innerHTML = localStorage.getItem("data");
}
showData();
