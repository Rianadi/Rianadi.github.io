  <!-- link favicon -->
<link rel="shortcut icon" href="../ico/favicon.ico" />
<link rel="apple-touch-icon-precomposed" sizes="57x57" href="../ico/apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="../ico/apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="../ico/apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="../ico/apple-touch-icon-144x144.png" />
<link rel="apple-touch-icon-precomposed" sizes="60x60" href="../ico/apple-touch-icon-60x60.png" />
<link rel="apple-touch-icon-precomposed" sizes="120x120" href="../ico/apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon-precomposed" sizes="76x76" href="../ico/apple-touch-icon-76x76.png" />
<link rel="apple-touch-icon-precomposed" sizes="152x152" href="../ico/apple-touch-icon-152x152.png" />
<link rel="icon" type="image/png" href="../ico/favicon-196x196.png" sizes="196x196" />
<link rel="icon" type="image/png" href="../ico/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/png" href="../ico/favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="../ico/favicon-16x16.png" sizes="16x16" />
<link rel="icon" type="image/png" href="../ico/favicon-128.png" sizes="128x128" />
<meta name="application-name" content="&nbsp;"/>
<meta name="msapplication-TileColor" content="#FFFFFF" />
<meta name="msapplication-TileImage" content="mstile-144x144.png" />
<meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
<meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
<meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
<meta name="msapplication-square310x310logo" content="mstile-310x310.png" />

  <!-- PHP -->
<?php 
      // koneksi ke database
      $conn = mysqli_connect("localhost", "root", "", "phpdasar");

      // function totalsiswa (index.php)
      function query ($query) {
        global $conn;
        $result = mysqli_query($conn, $query);
        $rows = [];
        while ( $row = mysqli_fetch_assoc ( $result ) ) {
          $rows[] = $row;
        }
        return $rows;
      }

      // data fetch = ambil data ( fetch ) siswa dari object result
        // mysqli_fetch_row() // mengembalikan array numerik
        // mysqli_fetch_assoc() // mengembalikan array associative
        // mysqli_fetch_array() // mengembalikan array numerik dan associative
        // mysqli_fetch_object() // mengembalikan object

      // function tambah (tambah.php)
      function tambah ( $data ) {
        global $conn;

        $nrp = htmlspecialchars($data["nrp"]);
        $nama = htmlspecialchars($data["nama"]);
        $email = htmlspecialchars($data["email"]);
        $jurusan = htmlspecialchars($data["jurusan"]);

        // upload gambar
        $gambar = upload();
        if ( !$gambar ) {
          return false;
        };

        $query = "INSERT INTO datasiswa VALUES
                    (' ', '$nrp', '$nama', '$email', '$jurusan', '$gambar')
                    ";

        $result = mysqli_query($conn, $query);
        
        return mysqli_affected_rows($conn);
      }

      // function hapus (hapus.php)
      function hapus ( $id ) {
        global $conn;

        $query = "DELETE FROM datasiswa WHERE id = '$id' ";

        $result = mysqli_query($conn, $query);

        return mysqli_affected_rows($conn);
      }

      // function ubah (ubah.php)
      function ubah ( $data ) {
        global $conn;

        $id = $data["id"];
        $nama = htmlspecialchars($data["nama"]);
        $nrp = htmlspecialchars($data["nrp"]);
        $email = htmlspecialchars($data["email"]);
        $jurusan = htmlspecialchars($data["jurusan"]);
        $gambarLama = htmlspecialchars($data["gambarLama"]);

        if( $_FILES["gambar"]["error"] === 4 ) {
          $gambar = $gambarLama;
        }
        else {
          $gambar  = upload();
        }

        $query = "UPDATE datasiswa SET nama = '$nama', nrp = '$nrp', email = '$email', jurusan = '$jurusan', gambar = '$gambar' WHERE id = $id";

        $result = mysqli_query($conn, $query);

        return mysqli_affected_rows($conn);
      }
      
      function cari ( $search ) {
        global $conn;

        $query = "SELECT * FROM datasiswa WHERE 
                        nama LIKE '%$search%' OR
                        nrp LIKE '%$search%' OR
                        email LIKE '%$search%' OR
                        jurusan LIKE '%$search%'
                       ";

        return query ( $query );
      }
      
      // function upload gambar
      function upload () {
        $namaFile = $_FILES['gambar']['name'];
        $ukuranFile = $_FILES['gambar']['size'];
        $error = $_FILES['gambar']['error'];
        $tmpName = $_FILES['gambar']['tmp_name'];

        // cek apakah tidak ada gambar yang diupload
        if ( $error === 4 ) {
          echo " 
            <script>
              alert(' Pilihlah gambar yang ingin diunggah terlebih dahulu! ')
            </script>
          ";
          return false;
        }

        // cek apakah yang diupload merupakan gambar
        $ekstensiGambarValid = ['jpg', 'jpeg', 'png'];
        $ekstensiGambar = explode( '.', $namaFile );
        $ekstensiGambar = strtolower(end( $ekstensiGambar ));
        if ( !in_array ( $ekstensiGambar, $ekstensiGambarValid )) {
          echo "<script>
                      alert('Yang anda unggah bukanlah sebuah gambar!');
                  </script>";
          return false;
        }

        // cek apakah gambar yang di upload terlalu kecil atau terlalu besar
        if ( $ukuranFile > 100000000 ) {
          echo "<script>
                      alert('Gambar yang anda unggah tidak sesuai dengan ketentuan!');
                  </script>";
          return false;
        }

        // lolos pengecekan, gambar siap diupload
        // generate nama baru untuk gambar yang diupload atau diubah
        $namaFileBaru = uniqid();
        $namaFileBaru .= '.';
        $namaFileBaru .= $ekstensiGambar;
        move_uploaded_file( $tmpName, "../img/" . $namaFileBaru );
        return $namaFileBaru;
    }

    // function registrasi
      function registrasi ( $data ) {
        global $conn;

        $username = strtolower ( stripslashes ( $data["username"] ) );
        $password = mysqli_real_escape_string ( $conn, $data["password"] );
        $password2 = mysqli_real_escape_string ( $conn, $data["password2"] );


      // PENGECEKAN
        
        // jika salah satu kolom tidak diisi
        if ( $username == "" || $password == "" || $password2 == "" ) {
          echo " <script> 
                                  alert('Terdapat kolom yang tidak diisi. Harap mengisi semua kolom yang disediakan!');
                              </script> 
          ";
          return false;
        }
        
        // jika username sudah ada di database
        $result = mysqli_query ( $conn, "SELECT username FROM user WHERE username = '$username'" );

        if ( mysqli_fetch_assoc ( $result ) ) {
          echo " <script> 
                                  alert('Username sudah terdaftar!');
                              </script> 
        ";
        return false;
        }

        // jika konfirmasi password tidak sesuai
        if ( $password !== $password2 ) {
          echo " <script> 
                  alert('Konfirmasi password tidak sesuai!');
                      </script> 
                ";
          return false;
        }

        // enkripsi password
        $password = password_hash ( $password, PASSWORD_DEFAULT );

        // menambahkan user ke dalam database\
        $query = "INSERT INTO user VALUES ('', '$username', '$password')";
        mysqli_query ( $conn, $query );

        // mengirim value 1 ke registrasi.php
        return mysqli_affected_rows ( $conn );


      }

?>