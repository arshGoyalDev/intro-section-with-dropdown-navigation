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
