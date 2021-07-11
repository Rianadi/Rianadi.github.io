  // important elements
var search = document.getElementById( "search" );
var submit = document.getElementById( "submit" );
var container = document.getElementById( "container" );

  // function autosearch
function autosearch() {
    // create ajax object
  var xhr = new XMLHttpRequest();

    // check ajax readiness
  xhr.onreadystatechange = function() {
    if ( xhr.readyState == 4 && xhr.status == 200 ) {
      container.innerHTML = xhr.responseText;
    }
  }

    // ajax execution
  xhr.open ( 'GET', '../php/ajax.php?search=' + search.value, true );
  xhr.send();
}

  // trigger
search.addEventListener( "keyup", autosearch);





