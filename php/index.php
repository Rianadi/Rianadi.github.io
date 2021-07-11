<!-- PHP -->
<?php

session_start();

if (!isset($_SESSION["signin"])) {
  header("Location: signin.php");
  exit;
}

require "function.php";

$totalsiswa = query("SELECT * FROM datasiswa");

// Tombol search ditekan
if (isset($_POST["search"])) {
  $totalsiswa = cari($_POST["search"]);
}

// Tombol ke tambah.php ditekan
if (isset($_POST["tambahdatabase"])) {
  header("Location: tambah.php");
  exit;
}

if (isset($_POST["signout"])) {
  header("Location: signout.php");
  exit;
}

if (isset($_POST["register"])) {
  header("Location: register.php");
  exit;
}

?>

<!-- HTML -->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Database PHP</title>
  <!-- MyWebsite/
  |--css/
  |  |--materialize.css
  |
  |--fonts/
  |  |--roboto/
  |
  |--js/
  |  |--materialize.js
  |
  |--index.html -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <link rel="stylesheet" href="../css/index.css?v=<?= time(); ?>">
</head>

<body>

  <div class="grid-container">
    <div class="judul">
      <img src="../Brand - Foxico2.png" alt="Brand" class="brand">
      <h1>Admin Database</h1>
    </div>

    <div class="search">
      <form action="" method="post">
        <input type="text" name="search" id="search" size="20" placeholder="Masukkan kata kunci.." autocomplete="off" class="input-field" autofocus id="search">
      </form>
      <button type="submit" name="submit" class="submit" id="submit"></button>
    </div>

    <div class="table" id="container">
      <table border="1" cellpadding="10" cellspacing="0" class="responsive-table highlight">
        <tr class="highlight">
          <th>No.</th>
          <th>Aksi</th>
          <th>NRP</th>
          <th>Nama</th>
          <th>Email</th>
          <th>Jurusan</th>
          <th>Gambar</th>
        </tr>

        <?php
        $i = 1;
        foreach ($totalsiswa as $siswa) : ?>
          <tr>
            <td><?= $i ?></td>
            <td>
              <button><a href="ubah.php?id=<?= $siswa["id"]; ?>">Ubah</a></button>
              <button><a href="hapus.php?id=<?= $siswa["id"]; ?>" onclick="return confirm( ' Apakah anda yakin untuk menghapus data ini dari database? ' )">Hapus</a></button>
            </td>
            <td><?= $siswa["nrp"] ?></td>
            <td><?= $siswa["nama"] ?></td>
            <td><?= $siswa["email"] ?></td>
            <td><?= $siswa["jurusan"] ?></td>
            <td><img src="../img/<?= $siswa["gambar"]; ?>" width="80" alt="gambar yang diunggah" name="gambar" class="responsive-img"></td>
          </tr>
        <?php
          $i++;
        endforeach ?>
      </table>
    </div>

    <div class="down-button">
      <form method="post">
        <button name="tambahdatabase"> Pergi ke halaman pemasukkan data ke database</button>
        <button name="signout">Sign Out</button>
        <button name="register">Developer Register</button>
      </form>
    </div>
  </div>

  <footer>
    <h1>© 2021 Foxico made by Fikri Dean Radityo</h1>
  </footer>

  <script type="text/javascript" src="js/materialize.min.js"></script>
  <script src="../js/script.js"></script>
</body>

</html>