document.addEventListener("DOMContentLoaded", () => {
  try {
    const animatedElements = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target instanceof Element) {
            const animation = entry.target.dataset.animate;
            entry.target.classList.add("animate__animated", `animate__${animation}`);
            observer.unobserve(entry.target);
            }
        })
    }, {
        root: null,
        threshold: 0.1,
    })

    animatedElements.forEach(el => {
        observer.observe(el);
    })    
  } catch (error) {
    console.log(`Ошибка с анимациями: ${error}`);
  }
});

document.querySelectorAll(".translate__item").forEach(item => {
    item.addEventListener("click", () => {
        alert("Temporarily out of order!")
    })
});

document.querySelector(".first-sect__btn").addEventListener("click", () => {
    alert("Temporarily out of order!")
});

