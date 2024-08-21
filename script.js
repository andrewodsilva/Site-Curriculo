function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})