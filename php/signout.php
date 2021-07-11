<!-- PHP -->
<?php 

  // mematikan session
  session_start();
  $_SESSION = [];
  session_unset();
  session_destroy();

  // mematikan cookie
  setcookie ( 'id', '', time() - 3600 );
  setcookie ( 'key', '', time() - 3600 );

  // menuju ke signin.php
  header ("Location: signin.php");
  exit;

?>