<!-- PHP -->
<?php
  require 'function.php';
  
  $id = $_GET["id"];
  if ( hapus($id) > 0 ) {
    echo "<script>
                    alert('Data berhasil dihapus dari database!');
                    document.location.href = 'index.php';
                 </script>";
  }
  else {
    echo "<script>
                    alert('Proses penghapusan data gagal!');
                    document.location.href = 'index.php';
                 </script>";
  }
?>