$(".option").click(function () {
  $(".option").removeClass("active");
  $(this).addClass("active");
});

// toggle class active pen
const navbarPen = document.querySelector(".list-art");

// active
document.querySelector("#pen").onclick = () => {
  navbarPen.classList.toggle("active");
};

// outside
const pennya = document.querySelector("#pen");

document.addEventListener("click", function (e) {
  if (!pennya.contains(e.target) && !navbarPen.contains(e.target)) {
    navbarPen.classList.remove("active");
  }
});
