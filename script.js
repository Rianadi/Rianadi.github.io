// AOS JS Initialization
AOS.init();

// Function navbar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Taking data 
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const certificateMobile = document.querySelectorAll('.certificate-mobile');
const projectMobile = document.querySelectorAll('.project-mobile');
const certificateWeb = document.querySelectorAll('.certificate-web');
const projectWeb = document.querySelectorAll('.project-web');
const btn = document.querySelectorAll('.btn');
const cardWeb = document.querySelectorAll('.card-web');
const btnProject = document.querySelectorAll('.btn-project');
const btnCertificate = document.querySelectorAll('.btn-certificate');

// Checking screen / mobile
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

// Certificate left button
$('#cerLeft').on('click', function() {
  const numChange = 200;
  let numLeft = $(".card-web").scrollLeft() - numChange;
  $('.certificate-web').animate({scrollLeft: numLeft}, 300);
});

// Certificate right button
$('#cerRight').on('click', function() {
  const numChange = 200;
  let numRight = $(".card-web").scrollLeft() + numChange;
  $('.certificate-web').animate({scrollLeft: numRight}, 300);
});

// Project left button
$('#proLeft').on('click', function() {
  const numChange = 200;
  let numLeft = $(".project-web").scrollLeft() - numChange;
  $('.project-web').animate({scrollLeft: numLeft}, 300);
});

// Project right button
$('#proRight').on('click', function() {
  const numChange = 200;
  let numRight = $(".project-web").scrollLeft() + numChange;
  $('.project-web').animate({scrollLeft: numRight}, 300);
});

// checking scrollwidth to hide button
if ($('.card-web')[0].scrollWidth >= 1350) {
  $(btnCertificate).hide();
}

if ($('.card-web')[1].scrollWidth <= 1350) {
  $(btnProject).hide();
}

// Email button
function email() {
  location.href = "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBptCNkzXPGKQFhFQflhqSTFvRPLDPfnfkrRTJscwSZgRdNDhKwPHhSdVjJPrbcxhzQZTlW";
}

// Linkedin button
function linkedin() {
  location.href = "https://www.linkedin.com/in/fikri-dean-radityo-23bb3621a/";
}

// Github button
function github() {
  location.href = "https://github.com/Rianadi";
}

// Freecodecamp button
function freecodecamp() {
  location.href = "https://www.freecodecamp.org/fikridean";
}