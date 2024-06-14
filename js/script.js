// functionality to open drop-down menu

let navBtn = document.querySelectorAll(".nav-btn");

navBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.parentElement.classList.contains("open")) {
      btn.parentElement.classList.remove("open");
    } else {
      btn.parentElement.classList.add("open");
    }
  });
});

// toggle menu (for mobile devices)

let openBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");

let menu = document.querySelector(".mobile-nav");

openBtn.addEventListener('click', (e) => {
  menu.classList.remove("hidden");
})

closeBtn.addEventListener('click', (e) => {
  menu.classList.add("hidden");
})