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
const btn = document.querySelectorAll('.btn');

if (screenWidth > 1200) {
  for(let i = 0; i < certificateMobile.length; i++) {
    certificateMobile[i].style.display = 'none';
  }

  for(let i = 0; i < projectMobile.length; i++) {
    projectMobile[i].style.display = 'none';
  }

} else {
  for(let i = 0; i < certificateWeb.length; i++) {
    certificateWeb[i].style.display = 'none';
  }

  for(let i = 0; i < projectWeb.length; i++) {
    projectWeb[i].style.display = 'none';
  }

  for (let i = 0; i < btn.length; i++) {
    btn[i].style.display = 'none';
  }

}

$('#cerLeft').on('click', function() {
  const numChange = 200;
  let numLeft = $(".card-web").scrollLeft() - numChange;
  $('.certificate-web').animate({scrollLeft: numLeft}, 300);
});

$('#cerRight').on('click', function() {
  const numChange = 200;
  let numRight = $(".card-web").scrollLeft() + numChange;
  $('.certificate-web').animate({scrollLeft: numRight}, 300);
});

$('#proLeft').on('click', function() {
  const numChange = 200;
  let numLeft = $(".project-web").scrollLeft() - numChange;
  $('.project-web').animate({scrollLeft: numLeft}, 300);
});

$('#proRight').on('click', function() {
  const numChange = 200;
  let numRight = $(".project-web").scrollLeft() + numChange;
  $('.project-web').animate({scrollLeft: numRight}, 300);
});

const counterCertificate = $(".certificate-web .card-list");

if (counterCertificate.length <= 4) {
  $(".btn-certificate").hide();
}