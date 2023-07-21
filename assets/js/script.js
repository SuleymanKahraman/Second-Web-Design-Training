const searchForm = document.querySelector(".search-form");
const cartContainer = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");
 

// buttons

const searchButton = document.querySelector("#search-btn");
const cartButton = document.querySelector("#cart-btn");
const menuButton = document.querySelector("#menu-btn");

searchButton.addEventListener("click", function () {
  searchForm.classList.add("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchButton) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});


cartButton.addEventListener("click", function () {

  cartContainer.classList.add("active");
  document.addEventListener("click", function (e) {
    if (
    !e.composedPath().includes(cartButton) &&
    !e.composedPath().includes(cartContainer)
    ) {
      cartContainer.classList.remove("active");
    }
  });
});

menuButton.addEventListener("click", function () {

  navbar.classList.add("active");
  document.addEventListener("click", function (e) {
    if (
   !e.composedPath().includes(menuButton) &&
   !e.composedPath().includes(navbar)
   ) {
      navbar.classList.remove("active");
    }
  });

});