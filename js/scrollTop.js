const scrollBtn = document.querySelector(".scrollTop");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    scrollBtn.classList.add("show"); 
  } else {
    scrollBtn.classList.remove("show"); 
  }
};

scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};