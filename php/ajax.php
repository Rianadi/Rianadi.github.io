<?php 
  require "function.php";
  $search = $_GET["search"];
  $query = "SELECT * FROM datasiswa WHERE 
                  nama LIKE '%$search%' OR
                  nrp LIKE '%$search%' OR
                  email LIKE '%$search%' OR
                  jurusan LIKE '%$search%'
                ";
  $totalsiswa = query( $query );
?>

<table border= "1" cellpadding= "10" cellspacing= "0" class="responsive-table highlight">
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