function hamburgerMenu() {
  const firstClass = $('#myTopnav').hasClass('topnav');
  const secondClass = $('#myTopnav').hasClass('responsive');

  if (firstClass && !(secondClass)) {
    $('#myTopnav').toggleClass('responsive');

  } else if (firstClass && secondClass) {
    $('#myTopnav').toggleClass('responsive');
    
  }
}