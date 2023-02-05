// toggle class active menu
const navbarNav = document.querySelector(".navbar-nav");

// active
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// outside
const menunya = document.querySelector("#pen");

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

// animation about
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
