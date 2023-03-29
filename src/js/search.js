document.querySelector("#search-menu").addEventListener("keyup", () => {
  let inputSearch = document.querySelector("#search-menu").value.toLowerCase();

  let itemElement = document.querySelectorAll(".product-card");

  for (let item of itemElement) {
    if (!item.innerHTML.toLowerCase().includes(inputSearch)) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  }
});
