<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>VreegOut - Dashboard</title>

    <!-- Custom fonts for this template -->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/sb-admin-2.min.css" rel="stylesheet">

    <!-- Custom styles for this page -->
    <link href="vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">

    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-analytics.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-database.js"></script>

    <script src="js/firebase.js"></script>
    <script src="js/sessionIndex.js"></script>

    <script src="js/demo/index.js"></script>
    <!-- <script src="js/demo/sessionIndex.js"></script> -->

</head>

<body id="page-top" onload="tampilDataPengguna()">

    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
                    style="height: 58px;">

                    <form
                        class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div class="d-sm-flex align-items-center justify-content-between mb-0">
                            <a class="navbar-brand" href="index.php">VreegOut</a>
                            <!-- <h1 class="mb-0 text-gray-800" href="index.php">VreegOut</h1> -->
                        </div>
                    </form>

                    <!-- Topbar Navbar -->
                    <ul class="navbar-nav ml-auto">

                        <!-- Nav Item - History -->
                        <li class="nav-item dropdown no-arrow my-4">
                            <a class="d-sm-flex align-items-center justify-content-between mb-0" href="pengguna.php"
                                role="button">
                                <span class="mr-2 d-none d-lg-inline text-gray-800 font-weight-bold">Pengguna</span>
                            </a>
                        </li>
                        <li class="nav-item dropdown no-arrow my-4">
                            <span class="mr-2 d-none d-lg-inline text-gray-800 font-weight-bold">|</span>
                        </li>
                        <li class="nav-item dropdown no-arrow my-4">
                            <a class="d-sm-flex align-items-center justify-content-between mb-0" href="tables.php"
                                role="button">
                                <span class="mr-2 d-none d-lg-inline text-gray-800 font-weight-bold">Riwayat
                                    Pengguna</span>
                            </a>
                        </li>

                        <div class="topbar-divider d-none d-sm-block"></div>

                        <!-- Nav Item - User Information -->
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span id="admin-name" class="mr-2 d-none d-lg-inline text-gray-600 small">Nama
                                    Admin</span>
                                <img class="img-profile rounded-circle" src="img/profile.png">
                            </a>

                            <!-- Dropdown - User Information -->
                            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <div class="dropdown-divider"></div>
                                <button class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Keluar
                                </button>
                            </div>
                        </li>

                    </ul>

                </nav>

                <!-- DataTales Example -->
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Riwayat Pengguna</h6>
                    </div>
                    <div class="card-body">
                        <div class="row no-gutters">
                            <div class="col align-self-center" style="padding: 12px;">
                                <input onfocus="this.value=''" autocomplete="off" id="text_cari" type="text"
                                    placeholder="Masukkan Nama Pasien" class="form-control" style="padding: 6px;" />
                            </div>
                            <div class="col-auto align-self-center" style="padding: 6px;">
                                <button class="btn btn-primary" type="button" onclick="CariDataPengguna()">
                                    Cari Data
                                </button>
                            </div>
                            <div class="col-auto align-self-center" style="padding: 6px;">
                                <button class="btn btn-success" type="button" id="tambah_data"
                                    style="margin-left: 10px;" data-toggle="modal" data-target="#ModalAdd">
                                    Tambah Data
                                </button>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>ID Pasien</th>
                                        <th>Nama</th>
                                        <th>Jenis Kelamin</th>
                                        <th>Umur</th>
                                        <th>Alamat</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Anda yakin untuk keluar?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Tidak</button>
                    <a class="btn btn-primary" href="login.php">Ya</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Logout Modal-->
    <div class="modal fade" id="ModalDelPengguna" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Apakah anda yakin ?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Tidak</button>
                    <button class="btn btn-primary" type="button" onclick="delData_ProsesPengguna()">Ya</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Logout Modal-->
    <div class="modal fade" id="ModalAdd" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Data User</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h6>ID :</h6>
                    <input class="form-control" type="text" id="ID" autocomplete="off" /></br>
                    <h6>Nama Pasien :</h6>
                    <input class="form-control" type="text" id="namaPasien" autocomplete="off" /></br>
                    <h6>Jenis Kelamin :</h6>
                    <select class="form-control" id="jeniskelamin" name="jenisKelamin">
                        <option value="Laki-Laki">Laki Laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select></br>
                    <h6>Umur :</h6>
                    <input class="form-control" type="text" id="umur" autocomplete="off" /></br>
                    <h6>Alamat :</h6>
                    <input class="form-control" type="text" id="alamat" autocomplete="off" /></br>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Batal</button>
                    <button class="btn btn-primary" type="button" onclick="addData_Proses()">Simpan</button>
                </div>
            </div>
        </div>
    </div>



    <!-- Bootstrap core JavaScript-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin-2.min.js"></script>

</body>

</html>