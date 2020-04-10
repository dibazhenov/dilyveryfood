const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const modal = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
    modal.classList.toggle("is-open");
}

new WOW().init();
 