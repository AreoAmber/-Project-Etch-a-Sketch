function createDivs() {
  const divContainer = document.querySelector(".container");
  for (let i = 1; i <= 256; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    divContainer.appendChild(div);

    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "red";
    });

    divContainer.appendChild(div);
  }
}
createDivs(16);
