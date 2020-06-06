<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>VreegOut - Dashboard</title>

    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="css/sb-admin-2.min.css" rel="stylesheet">
    <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-analytics.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-database.js"></script>

    <script src="js/firebase.js"></script>
    <script src="js/sessionIndex.js"></script>

</head>

<body id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">
        </ul>

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
                            <!-- <h1 class="mb-0 text-gray-800">VreegOut</h1> -->
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
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Keluar
                                </a>
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
                                    <h5 class="m-0 font-weight-bold text-primary">Earnings Overview</h5>
                                </div>

                                <!-- Card Body -->
                                <div class="card-body">
                                    <canvas id="myChart" width="1200" height="450"></canvas>
                                </div>

                            </div>
                        </div>

                        <!-- Pie Chart -->
                        <div class="col-xl-4 col-lg-5">
                            <div class="card shadow mb-4">

                                <!-- Card Header - Dropdown -->
                                <div
                                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h5 class="m-0 font-weight-bold text-primary">Data Pengguna</h5>
                                </div>

                                <!-- Card Body -->
                                <div class="card-body">
                                    <form class=" mr-auto ml-md-0 my-2 my-md-0 mw-100 navbar-search">
                                        <table class="ml-2 my-4">
                                            <script>
                                            getPasienData()
                                            </script>
                                            <tr>
                                                <td class="h6 font-weight-bold text-dark" style="width: 130px;">Id</td>
                                                <td scope="row">:</td>
                                                <td type="text" class="h6 font-weight-bold text-dark pl-2"
                                                    id="pasien_id"></td>
                                            </tr>
                                            <tr>
                                                <td class="h6 font-weight-bold text-dark" style="width: 130px;">Nama
                                                </td>
                                                <td scope="row">:</td>
                                                <td type="text" class="h6 font-weight-bold text-dark pl-2"
                                                    id="pasien_name"></td>
                                            </tr>
                                            <tr>
                                                <td class="h6 font-weight-bold text-dark">Umur</td>
                                                <td scope="row">:</td>
                                                <td type="text" class="h6 font-weight-bold text-dark pl-2"
                                                    id="pasien_age"></td>
                                            </tr>
                                            <tr>
                                                <td class="h6 font-weight-bold text-dark">Jenis Kelamin</td>
                                                <td scope="row">:</td>
                                                <td type="text" class="h6 font-weight-bold text-dark pl-2"
                                                    id="pasien_gender"></td>
                                            </tr>
                                            <tr>
                                                <td class="h6 font-weight-bold text-dark">Alamat</td>
                                                <td scope="row">:</td>
                                                <td type="text" class="h6 font-weight-bold text-dark pl-2"
                                                    id="pasien_address"></td>
                                            </tr>
                                        </table>

                                        <div class="align-items-center justify-content-between my-4 ">
                                            <!-- <h5 class="font-weight-bold text-primary mx-2">Hasil Diagnosa<hr></h5> -->
                                            <h5 class="font-weight-bold text-primary">Hasil Diagnosa
                                                <button type="button" class="badge badge-primary"
                                                    onclick="printOut()">Cetak</button>
                                                <button type="button" class="badge badge-primary"
                                                    onclick="saveDiagnosa()">Simpan</button>
                                            </h5>
                                        </div>


                                        <div class="row">
                                            <div class="card ml-3" style="width: 23rem; height: 60px;">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-md-6 text-center">
                                                            <h6 style="text-align:left;font-weight : bold;"
                                                                id="DiagnosaNameOne">
                                                                Diagnosa 1
                                                            </h6>
                                                        </div>
                                                        <div class="col-md-6 text-center">
                                                            <span style="float:right; font-weight : bold"
                                                                id="DiagnosaOne">0</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card ml-3 mt-2" style="width: 23rem;height: 60px;">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-md-6 text-center">
                                                            <h6 style="text-align:left;font-weight : bold;"
                                                                id="DiagnosaNameTwo">
                                                                Diagnosa 2
                                                            </h6>
                                                        </div>
                                                        <div class="col-md-6 text-center">
                                                            <span style="float:right; font-weight : bold"
                                                                id="DiagnosaTwo">0</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card ml-3 mt-2" style="width: 23rem;height: 60px;">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-md-6 text-center">
                                                            <h6 style="text-align:left;font-weight : bold;"
                                                                id="DiagnosaNameThree">
                                                                Diagnosa 3
                                                            </h6>
                                                        </div>
                                                        <div class="col-md-6 text-center">
                                                            <span style="float:right; font-weight : bold"
                                                                id="DiagnosaThree">0</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Content Row -->
                    <div class="col-xl-8 px-0 mx-0  row">
                        <div class="col-md-6 mb-4">
                            <div class="card border-left-info shadow h-100">
                                <div class="card-body">
                                    <h5 style="text-align:center; color: #2980b9; font-weight : bold">Acrophobia</h5>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            Keterikatan <br>
                                            <h4 style="font-weight : bold" id="excitementAcrophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Kegembiraan <br>
                                            <h4 style="font-weight : bold" id="engagementAcrophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Fokus <br>
                                            <h4 style="font-weight : bold" id="focusAcrophobia">0</h4>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-4 text-center">
                                            Ketertarikan <br>
                                            <h4 style="font-weight : bold" id="interestAcrophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Relaksasi<br>
                                            <h4 style="font-weight : bold" id="relaxationAcrophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Stres<br>
                                            <h4 style="font-weight : bold" id="stressAcrophobia">0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <div class="card border-left-info shadow h-100">
                                <div class="card-body">
                                    <h5 style="text-align:center; color: #2980b9; font-weight : bold">Claustrophobia
                                    </h5><br>
                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            Keterikatan <br>
                                            <h4 style="font-weight : bold" id="excitementClaustrophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Kegembiraan <br>
                                            <h4 style="font-weight : bold" id="engagementClaustrophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Fokus <br>
                                            <h4 style="font-weight : bold" id="focusClaustrophobia">0</h4>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-4 text-center">
                                            Ketertarikan <br>
                                            <h4 style="font-weight : bold" id="interestClaustrophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Relaksasi<br>
                                            <h4 style="font-weight : bold" id="relaxationClaustrophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Stres<br>
                                            <h4 style="font-weight : bold" id="stressClaustrophobia">0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <div class="card border-left-info shadow h-100">
                                <div class="card-body">
                                    <h5 style="text-align:center; color: #2980b9; font-weight : bold">Lygophobia</h5>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            Keterikatan <br>
                                            <h4 style="font-weight : bold" id="excitementLygophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Kegembiraan <br>
                                            <h4 style="font-weight : bold" id="engagementLygophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Fokus <br>
                                            <h4 style="font-weight : bold" id="focusLygophobia">0</h4>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-4 text-center">
                                            Ketertarikan <br>
                                            <h4 style="font-weight : bold" id="interestLygophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Relaksasi<br>
                                            <h4 style="font-weight : bold" id="relaxationLygophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Stres<br>
                                            <h4 style="font-weight : bold" id="stressLygophobia">0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <div class="card border-left-info shadow h-100">
                                <div class="card-body">
                                    <h5 style="text-align:center; color: #2980b9; font-weight : bold">Hydrophobia</h5>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            Keterikatan <br>
                                            <h4 style="font-weight : bold" id="excitementHydrophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Kegembiraan <br>
                                            <h4 style="font-weight : bold" id="engagementHydrophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Fokus <br>
                                            <h4 style="font-weight : bold" id="focusHydrophobia">0</h4>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-4 text-center">
                                            Ketertarikan <br>
                                            <h4 style="font-weight : bold" id="interestHydrophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Relaksasi<br>
                                            <h4 style="font-weight : bold" id="relaxationHydrophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Stres<br>
                                            <h4 style="font-weight : bold" id="stressHydrophobia">0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <div class="card border-left-info shadow h-100">
                                <div class="card-body">
                                    <h5 style="text-align:center; color: #2980b9; font-weight : bold">Arachnophobia</h5>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            Keterikatan <br>
                                            <h4 style="font-weight : bold" id="excitementArachnophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Kegembiraan <br>
                                            <h4 style="font-weight : bold" id="engagementArachnophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Fokus <br>
                                            <h4 style="font-weight : bold" id="focusArachnophobia">0</h4>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-4 text-center">
                                            Ketertarikan <br>
                                            <h4 style="font-weight : bold" id="interestArachnophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Relaksasi<br>
                                            <h4 style="font-weight : bold" id="relaxationArachnophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Stres<br>
                                            <h4 style="font-weight : bold" id="stressArachnophobia">0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <div class="card border-left-info shadow h-100">
                                <div class="card-body">
                                    <h5 style="text-align:center; color: #2980b9; font-weight : bold">Hemophobia</h5>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            Keterikatan <br>
                                            <h4 style="font-weight : bold" id="excitementHemophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Kegembiraan <br>
                                            <h4 style="font-weight : bold" id="engagementHemophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Fokus <br>
                                            <h4 style="font-weight : bold" id="focusHemophobia">0</h4>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-4 text-center">
                                            Ketertarikan <br>
                                            <h4 style="font-weight : bold" id="interestHemophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Relaksasi<br>
                                            <h4 style="font-weight : bold" id="relaxationHemophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Stres<br>
                                            <h4 style="font-weight : bold" id="stressHemophobia">0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <div class="card border-left-info shadow h-100">
                                <div class="card-body">
                                    <h5 style="text-align:center; color: #2980b9; font-weight : bold">Arsonphobia</h5>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            Keterikatan <br>
                                            <h4 style="font-weight : bold" id="excitementArsonphobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Kegembiraan <br>
                                            <h4 style="font-weight : bold" id="engagementArsonphobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Fokus <br>
                                            <h4 style="font-weight : bold" id="focusArsonphobia">0</h4>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-4 text-center">
                                            Ketertarikan <br>
                                            <h4 style="font-weight : bold" id="interestArsonphobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Relaksasi<br>
                                            <h4 style="font-weight : bold" id="relaxationArsonphobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Stres<br>
                                            <h4 style="font-weight : bold" id="stressArsonphobia">0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <div class="card border-left-info shadow h-100">
                                <div class="card-body">
                                    <h5 style="text-align:center; color: #2980b9; font-weight : bold">Aliurophobia</h5>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            Keterikatan <br>
                                            <h4 style="font-weight : bold" id="excitementAliurophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Kegembiraan <br>
                                            <h4 style="font-weight : bold" id="engagementAliurophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Fokus <br>
                                            <h4 style="font-weight : bold" id="focusAliurophobia">0</h4>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-4 text-center">
                                            Ketertarikan <br>
                                            <h4 style="font-weight : bold" id="interestAliurophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Relaksasi<br>
                                            <h4 style="font-weight : bold" id="relaxationAliurophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Stres<br>
                                            <h4 style="font-weight : bold" id="stressAliurophobia">0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <div class="card border-left-info shadow h-100">
                                <div class="card-body">
                                    <h5 style="text-align:center; color: #2980b9; font-weight : bold">Astraphobia</h5>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            Keterikatan <br>
                                            <h4 style="font-weight : bold" id="excitementAstraphobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Kegembiraan <br>
                                            <h4 style="font-weight : bold" id="engagementAstraphobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Fokus <br>
                                            <h4 style="font-weight : bold" id="focusAstraphobia">0</h4>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-4 text-center">
                                            Ketertarikan <br>
                                            <h4 style="font-weight : bold" id="interestAstraphobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Relaksasi<br>
                                            <h4 style="font-weight : bold" id="relaxationAstraphobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Stres<br>
                                            <h4 style="font-weight : bold" id="stressAstraphobia">0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <div class="card border-left-info shadow h-100">
                                <div class="card-body">
                                    <h5 style="text-align:center; color: #2980b9; font-weight : bold">Cenophobia</h5>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            Keterikatan <br>
                                            <h4 style="font-weight : bold" id="excitementCenophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Kegembiraan <br>
                                            <h4 style="font-weight : bold" id="engagementCenophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Fokus <br>
                                            <h4 style="font-weight : bold" id="focusCenophobia">0</h4>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-4 text-center">
                                            Ketertarikan <br>
                                            <h4 style="font-weight : bold" id="interestCenophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Relaksasi<br>
                                            <h4 style="font-weight : bold" id="relaxationCenophobia">0</h4>
                                        </div>
                                        <div class="col-md-4 text-center border-left-info">
                                            Stres<br>
                                            <h4 style="font-weight : bold" id="stressCenophobia">0</h4>
                                        </div>
                                    </div>
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

        <!-- Bootstrap core JavaScript-->
        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        <!-- Core plugin JavaScript-->
        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

        <!-- Custom scripts for all pages-->
        <script src="js/sb-admin-2.min.js"></script>

        <!-- Page level plugins -->
        <script src="vendor/chart.js/Chart.min.js"></script>

        <!-- Page level custom scripts -->
        <script src="js/demo/chart-area-demo.js"></script>
        <script src="js/demo/chart-pie-demo.js"></script>

        <!-- The core Firebase JS SDK is always required and must be listed first -->
        <script src="https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js"></script>

        <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
        <script src="https://www.gstatic.com/firebasejs/7.12.0/firebase-auth.js"></script>
        <script>
        // Warning before leaving the page (back button, or outgoinglink)
        window.onbeforeunload = function() {
            return "Do you really want to leave our brilliant application?";
            //if we return nothing here (just calling return;) then there will be no pop-up question at all
            //return;
        };
        </script>


</body>

</html>