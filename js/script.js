// For NavBar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.opacity = "0.8";
  } else {
    document.getElementById("navbar").style.opacity = "1";
  }
}

