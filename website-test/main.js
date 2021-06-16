function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

ScrollReveal().reveal('.showcase', { delay: 200 });
ScrollReveal().reveal('.news-cards', { delay: 200 });
ScrollReveal().reveal('.cards-banner', { delay: 200 });

