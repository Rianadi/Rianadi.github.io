<!-- PHP -->
<?php

session_start();

if (!isset($_SESSION["signin"])) {
  header("Location: signin.php");
  exit;
}

require 'function.php';

if (isset($_POST["submit"])) {
  // ambil data dari setiap element

  if (tambah($_POST) > 0) {
    echo "<script>
                    alert('Data ini berhasil ditambahkan ke database!');
                    document.location.href = 'index.php';
                  </script>";
  } else {
    echo "<script>
                    alert('Data ini gagal ditambahkan ke database!');
                  </script>";
  }
}

if (isset($_POST["cancel"])) {
  header("Location: index.php");
  exit;
}


?>


<!-- HTML -->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=\, initial-scale=1.0">
  <title>Add Data to Database</title>
  <link rel="stylesheet" href="../css/tambah.css?v=<?= time(); ?>">
</head>

<body>

  <div class="grid-container">
    <div class="h1">
      <h1>Add Data to Database</h1>
    </div>
    <div class="form">
      <form method="post" enctype="multipart/form-data">
        <ul>
          <li>
            <label for="nrp">NRP : </label>
            <input type="text" name="nrp" id="nrp" autofocus>
          </li>
          <li>
            <label for="nama">Nama : </label>
            <input type="text" name="nama" id="nama">
          </li>
          <li>
            <label for="email">Email : </label>
            <input type="text" name="email" id="email">
          </li>
          <li>
            <label for="jurusan">Jurusan : </label>
            <input type="text" name="jurusan" id="jurusan">
          </li>
          <li>
            <label for="gambar">Gambar : </label>
            <input type="file" name="gambar" id="gambar">
          </li>
          <li>
            <button name="submit"><span>Submit</span></button>
            <button name="cancel"><span>Cancel</span></button>
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