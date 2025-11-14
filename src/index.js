const card = document.querySelector(".card");
const btn = document.getElementById("colorBtn");

btn.addEventListener("click", () => {
  card.classList.toggle("active");
});
