<!-- PHP -->
<?php

session_start();
require 'function.php';
// cek cookie
if (isset($_COOKIE['id']) && isset($_COOKIE['key'])) {
  $id = $_COOKIE['id'];
  $key = $_COOKIE['key'];

  // ambil username berdasarkan id
  $result = mysqli_query($conn, "SELECT username FROM user WHERE id = $id");
  $row = mysqli_fetch_assoc($result);

  // cek cookie dan username
  if ($key = hash('sha256', $row['username'])) {
    $_SESSION['signin'] = true;
  }
}



if (isset($_SESSION["signin"])) {
  header("Location: index.php");
  exit;
}

if (isset($_POST["submit"])) {
  $username = $_POST["username"];
  $password = $_POST["password"];

  $result = mysqli_query($conn, " SELECT * FROM user WHERE username = '$username' ");
  if (mysqli_num_rows($result) === 1) {
    // cek password
    $row = mysqli_fetch_assoc($result);
    if (password_verify($password, $row["password"])) {
      // cek cookie
      if (isset($_POST['remember'])) {
        setcookie('id', $row['id'], time() + 60);
        setcookie('key', hash('sha256', $row['username'], time() + 60));
      }

      // cek session

      $_SESSION["signin"] = true;
      header("Location: index.php");
      exit;
    }
  }
  $error = true;
}

// if ( isset ( $_POST["register"] ) ) {
//   header ( "Location: register.php" );
//   exit;
// }

if (isset($_POST["developer-help"])) {
  echo "<script>
                    alert('Please contact the web developer!');
              </script>";
}

?>


<!-- HTML -->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign in to Database</title>
  <link rel="stylesheet" href="../css/signin.css?v=<?= time(); ?>">
</head>

<body>

  <div class="grid-container">
    <div class="h1">
      <h1>Sign in Database</h1>
    </div>
    <div class="form">
      <form method="post">
        <ul>
          <li>
            <label for="username">Username : </label>
            <input type="username" name="username" id="username" autofocus autocomplete="off">
          </li>
          <li>
            <label for="password">Password : </label>
            <input type="password" name="password" id="password" value="">
          </li>
          <!-- <li>
            <label for="remember">Remember me </label>
            <input type="checkbox" name="remember" id="remember">
          </li> -->
          <li>
            <label class="remember" for="remember">Remember Me</label>
            <label class="switch" for="remember">
              <input type="checkbox" name="remember" id="remember">
              <span class="slider round"></span>
            </label>
          </li>
          <button type="submit" name="submit"><span>Sign in</span></button>
          <!-- <button name="register"><span>Register</span></button> -->
          <form action="" method="POST">
            <button name="developer-help"><span>Developer Help</span></button>
          </form>
          <li>
            <?php if (isset($error)) : ?>
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