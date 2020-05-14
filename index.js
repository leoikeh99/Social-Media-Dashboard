var checkbox = document.querySelector(".checkbox");
var text = document.querySelector(".text");
console.log(checkbox);
checkbox.addEventListener("change", function () {
  console.log("yes");
  if (this.checked) {
    trans();
    document.querySelector(".text").textContent = "Light mode";
    document.documentElement.setAttribute("theme", "dark");
  } else {
    trans();
    document.querySelector(".text").textContent = "Dark mode";
    document.documentElement.setAttribute("theme", "light");
  }
});

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};
