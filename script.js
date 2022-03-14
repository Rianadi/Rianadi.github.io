AOS.init();

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const certificateMobile = document.querySelectorAll('.certificate-mobile');
const projectMobile = document.querySelectorAll('.project-mobile');
const certificateWeb = document.querySelectorAll('.certificate-web');
const projectWeb = document.querySelectorAll('.project-web');

if (screenWidth > 1200) {
  for(let i = 0; i < certificateWeb.length; i++) {
    certificateMobile[i].style.display = 'none';
  }
  for(let i = 0; i < certificateWeb.length; i++) {
    projectMobile[i].style.display = 'none';
  }
} else {
  for(let i = 0; i < certificateWeb.length; i++) {
    certificateWeb[i].style.display = 'none';
  }
  for(let i = 0; i < projectWeb.length; i++) {
    projectWeb[i].style.display = 'none';
  }
}