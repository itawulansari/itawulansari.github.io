<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>VreegOut- Dashboard</title>

    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="css/sb-admin-2.min.css" rel="stylesheet">

    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-analytics.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-database.js"></script>

    <script src="js/firebase.js"></script>
    <script src="js/sessionIndex.js"></script>


    <script src="js/demo/index.js"></script>
    <!-- <script src="js/demo/sessionIndex.js"></script> -->


    <!-- Bootstrap core JavaScript-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin-2.min.js"></script>

    <!-- Page level plugins -->
    <script src="vendor/chart.js/Chart.min.js"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.js'></script>

    <!-- Page level custom scripts -->
    <script src="js/demo/chart-area-demo.js"></script>
    <script src="js/demo/chart-pie-demo.js"></script>


</head>

<body id="page-top" onload="chartHome()">

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
                            <!-- <h1 class="h1 mb-0 text-gray-800">VreegOut</h1> -->
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
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Content Row -->
                    <div class="row">

                        <!-- Area Chart -->
                        <div class="col-xl-8 col-lg-7">
                            <div class="card shadow mb-4">

                                <!-- Card Header - Dropdown -->
                                <div
                                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">Overview</h6>
                                </div>

                                <!-- Card Body -->
                                <div class="card-body">
                                    <canvas id="myChart" width="1200" height="400"></canvas>
                                </div>
                            </div>
                        </div>

                        <!-- Pie Chart -->
                        <div class="col-xl-4 col-lg-5">
                            <div class="card shadow mb-4">

                                <!-- Card Header - Dropdown -->
                                <div
                                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">Data Pengguna</h6>
                                </div>

                                <!-- Card Body -->
                                <div class="card-body">
                                    <div class="mr-auto ml-md-0 my-2 my-md-0 mw-100 navbar-search">
                                        <div class="input-group">
                                            <h5 class="mb-0 mx-1 my-2 text-gray-800">ID</h5>
                                            <input type="text" id="search-data"
                                                class="form-control bg-light border-0 small" placeholder="Cari id..."
                                                aria-label="Search" aria-describedby="basic-addon2" required>

                                            <div class="input-group-append">
                                                <button class="btn btn-primary" onclick="searchData()">
                                                    <i class="fas fa-search fa-sm"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Content Row -->
                    <div class="col-xl-8 px-0 mx-0  row">
                        <div class="col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100">
                                <div class="card-body">
                                    <h5 style="text-align:center; color: #2980b9; font-weight : bold">Acrophobia</h5>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            Keterikatan <br>
                                            <h4 style="font-weight : bold" id="acrophobiaKeterikatan">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Kegembiraan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Fokus <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-4 text-center">
                                            Ketertarikan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Relaksasi<br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Stres<br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100">
                                <div class="card-body">
                                    <h5 style="text-align:center; color: #2980b9; font-weight : bold">Claustrophobia
                                    </h5><br>
                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            Keterikatan <br>
                                            <h4 style="font-weight : bold" id="ClaustrophobiaKeterikatan">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Kegembiraan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Fokus <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-4 text-center">
                                            Ketertarikan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Relaksasi<br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Stres<br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100">
                                <div class="card-body">
                                    <h5 style="text-align:center; color: #2980b9; font-weight : bold">Lygophobia</h5>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            Keterikatan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Kegembiraan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Fokus <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-4 text-center">
                                            Ketertarikan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Relaksasi<br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Stres<br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100">
                                <div class="card-body">
                                    <h5 style="text-align:center; color: #2980b9; font-weight : bold">Hydrophobia</h5>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            Keterikatan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Kegembiraan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Fokus <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-4 text-center">
                                            Ketertarikan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Relaksasi<br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Stres<br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100">
                                <div class="card-body">
                                    <h5 style="text-align:center; color: #2980b9; font-weight : bold">Arachnophobia</h5>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            Keterikatan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Kegembiraan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Fokus <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-4 text-center">
                                            Ketertarikan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Relaksasi<br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Stres<br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100">
                                <div class="card-body">
                                    <h5 style="text-align:center; color: #2980b9; font-weight : bold">Hemophobia</h5>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            Keterikatan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Kegembiraan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Fokus <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-4 text-center">
                                            Ketertarikan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Relaksasi<br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Stres<br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100">
                                <div class="card-body">
                                    <h5 style="text-align:center; color: #2980b9; font-weight : bold">Arsonphobia</h5>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            Keterikatan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Kegembiraan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Fokus <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-4 text-center">
                                            Ketertarikan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Relaksasi<br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Stres<br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100">
                                <div class="card-body">
                                    <h5 style="text-align:center; color: #2980b9; font-weight : bold">Aliurophobia</h5>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            Keterikatan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Kegembiraan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Fokus <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-4 text-center">
                                            Ketertarikan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Relaksasi<br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Stres<br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100">
                                <div class="card-body">
                                    <h5 style="text-align:center; color: #2980b9; font-weight : bold">Astraphobia</h5>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            Keterikatan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Kegembiraan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Fokus <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-4 text-center">
                                            Ketertarikan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Relaksasi<br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Stres<br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100">
                                <div class="card-body">
                                    <h5 style="text-align:center; color: #2980b9; font-weight : bold">Cenophobia</h5>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            Keterikatan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Kegembiraan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Fokus <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-4 text-center">
                                            Ketertarikan <br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Relaksasi<br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-primary">
                                            Stres<br>
                                            <h4 style="font-weight : bold">0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End of Content Wrapper -->

        </div>
        <!-- End of Page Wrapper -->

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
                        <button onclick="signOut()" id="signOut" class="btn btn-primary">Ya</button>
                    </div>
                </div>
            </div>
        </div>



</body>

</html>