/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("icon");
  if (x.className === "topnav") {
    x.className += " responsive";
    y.innerHTML = `<i class="fa fa-times-circle" style="font-size:24px" aria-hidden="true"></i>`;
  } else {
    x.className = "topnav";
    y.innerHTML = `<i class="fa fa-bars" style="font-size:24px" aria-hidden="true"></i>`;
  }
}