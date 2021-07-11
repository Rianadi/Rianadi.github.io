<!-- PHP -->
<?php 

  session_start();

  if ( !isset ( $_SESSION["signin"] ) ) {
    header ("Location: signin.php");
    exit;
  }

  require 'function.php';
  
  $id = $_GET["id"];
  $siswa = query( "SELECT * FROM datasiswa WHERE id=$id" )[0];
  if ( isset ( $_POST ["submit"] ) ) {
    // ambil data dari setiap element
    if ( ubah ($_POST) > 0 ) {
      echo "<script>
                      alert('Data ini berhasil diubah!');
                      document.location.href = 'index.php';
                 </script>";
      exit;
    }
    else {
      echo "<script>
                    alert('Data ini gagal diubah!');
                 </script>";
    }
  }

  if ( isset ($_POST["cancel"]) ) {
    header ( "Location:index.php" );
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
  <title>Change Data on Database</title>
  <link rel="stylesheet" href="../css/ubah.css?v=<?= time(); ?>">
</head>
<body>

<div class="grid-container">
    <div class="h1">
      <h1>Change Data</h1>
    </div>
    <div class="form">
      <form method="post" enctype="multipart/form-data">
        <input type="hidden" name="id" value="<?= $id ?>">
        <input type="hidden" name="gambarLama" value="<?= $siswa["gambar"]; ?>">
        <ul>
          <li>
            <label for="nrp">NRP : </label>
            <input type="text" name="nrp" id="nrp" required value="<?= $siswa["nrp"] ?>">
          </li>
          <li>
            <label for="nama">Nama : </label>
            <input type="text" name="nama" id="nama" required value="<?= $siswa["nama"] ?>">
          </li>
          <li>
            <label for="email">Email : </label>
            <input type="text" name="email" id="email" required value="<?= $siswa["email"] ?>">
          </li>
          <li>
            <label for="jurusan">Jurusan : </label>
            <input type="text" name="jurusan" id="jurusan" required value="<?= $siswa["jurusan"] ?>">
          </li>
          <li>
            <label for="gambar">Gambar : </label>
            <img src="../img/<?= $siswa["gambar"]; ?>" width="100"  alt="preview">
            <input type="file" name="gambar" id="gambar">
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