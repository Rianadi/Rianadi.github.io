<!-- PHP -->
<?php 

  require 'function.php';

  if ( isset ( $_POST["signin"] ) ) {
    header ( "Location:signin.php" );
    exit;
  }

  if ( isset ( $_POST["submit"] ) ) {
    if ( registrasi ( $_POST ) > 0 ) {
      echo " <script> 
                  alert('User baru telah ditambahkan!');
                 </script> 
                ";
    }
    else {
      echo mysqli_error ( $conn );
    }
  }

?>


<!-- HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registrasi Data to Database</title>
  <link rel="stylesheet" href="../css/register.css?v=<?= time(); ?>">
</head>
<body>
  
  <div class="grid-container">
    <div class="h1">
      <h1>Register Database</h1>
    </div>
    <div class="form">
      <form method="post">
        <ul>
          <li>
            <label for="username">Username : </label>
            <input type="username" name="username" id="username" autocomplete="off" autofocus>
          </li>
          <li>
            <label for="password">Password : </label>
            <input type="password" name="password" id="password">
          </li>
          <li>
            <label for="password2">Confirm Password : </label>
            <input type="password" name="password2" id="password2">
          </li>
          <button type="submit"  name="submit"><span>Register</span></button>
          <button name="signin"><span>Sign in instead</span></button>
          <li>
            <?php if ( isset ( $error ) ) : ?>
              <p class="error">Username / Password yang anda masukkan salah!</p>
            <?php endif ?>
          </li>
        </ul>
      </form>
    </div>
  </div>

  <footer>
    <h1>© 2021 Foxico made by Fikri Dean Radityo</h1>
  </footer>
  
</body>
</html>