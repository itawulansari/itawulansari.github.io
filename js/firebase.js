// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCVDKUr-9K59mDn8s4RRgIs-8ihQDOpp68",
  authDomain: "vreegout.firebaseapp.com",
  databaseURL: "https://vreegout.firebaseio.com",
  projectId: "vreegout",
  storageBucket: "vreegout.appspot.com",
  messagingSenderId: "720147793330",
  appId: "1:720147793330:web:30174682c9f5cbf836d0ab",
  measurementId: "G-K5EZ07NC7H",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const database = firebase.database();

// ini untuk login :v
function login() {
  var email = document.getElementById("email-user").value;
  var password = document.getElementById("password").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then(function (authData) {})
    .catch(function (error) {
      alert(error.message);
    });
}

function signOut() {
  auth
    .signOut()
    .then(function () {
      location.href = "login.php";
    })
    .catch(function (error) {
      alert(error.message);
    });
}

// Global variable buat nampung identitas user dan Diagnosa
// yang nanti bakal dikirim ulang ke firebase
// Kita disini pakai banyak global variable karna variable tersebut bakalan dipke sama beberapa fungsi
var idPengguna, name, age, address, gender, descendingDiagnosa;
// variable counter, disini inisialisiasinya = 0 biar setiap reload di balik lagi jadi 0
var iniCounter = 0;

// Fungsi get pasien data
function getPasienData() {
  var value = location.search.substring(1);

  if (value == "" || value == null) {
    location.href = "index.php";
  }

  var link = value.replace("id=", "");

  database.ref("User/" + link).once("value", function (snapshot) {
    var val = snapshot.val();

    idPengguna = snapshot.key;
    name = val.nama;
    age = val.umur;
    address = val.alamat;
    gender = val.jenis_kelamin;

    document.getElementById("pasien_id").innerHTML = snapshot.key;
    document.getElementById("pasien_name").innerHTML = name;
    document.getElementById("pasien_age").innerHTML = age;
    document.getElementById("pasien_address").innerHTML = address;
    document.getElementById("pasien_gender").innerHTML = gender;
  });

  // another global variable
  // Ini untuk menampung isi firebase nya, jadi array nya nnti nggk 60 doang.
  // Bakalan bertambah sesuai firebasenya update
  // Start of Array A untuk menampung seluruh isi dari chart
  excitementAcrophobia = [];
  engagementAcrophobia = [];
  focusAcrophobia = [];
  interestAcrophobia = [];
  relaxationAcrophobia = [];
  stressAcrophobia = [];

  excitementClaustrophobia = [];
  engagementClaustrophobia = [];
  focusClaustrophobia = [];
  interestClaustrophobia = [];
  relaxationClaustrophobia = [];
  stressClaustrophobia = [];

  excitementLygophobia = [];
  engagementLygophobia = [];
  focusLygophobia = [];
  interestLygophobia = [];
  relaxationLygophobia = [];
  stressLygophobia = [];

  excitementHydrophobia = [];
  engagementHydrophobia = [];
  focusHydrophobia = [];
  interestHydrophobia = [];
  relaxationHydrophobia = [];
  stressHydrophobia = [];

  excitementArachnophobia = [];
  engagementArachnophobia = [];
  focusArachnophobia = [];
  interestArachnophobia = [];
  relaxationArachnophobia = [];
  stressArachnophobia = [];

  excitementHemophobia = [];
  engagementHemophobia = [];
  focusHemophobia = [];
  interestHemophobia = [];
  relaxationHemophobia = [];
  stressHemophobia = [];

  excitementArsonphobia = [];
  engagementArsonphobia = [];
  focusArsonphobia = [];
  interestArsonphobia = [];
  relaxationArsonphobia = [];
  stressArsonphobia = [];

  excitementAliurophobia = [];
  engagementAliurophobia = [];
  focusAliurophobia = [];
  interestAliurophobia = [];
  relaxationAliurophobia = [];
  stressAliurophobia = [];

  excitementAstraphobia = [];
  engagementAstraphobia = [];
  focusAstraphobia = [];
  interestAstraphobia = [];
  relaxationAstraphobia = [];
  stressAstraphobia = [];

  excitementCenophobia = [];
  engagementCenophobia = [];
  focusCenophobia = [];
  interestCenophobia = [];
  relaxationCenophobia = [];
  stressCenophobia = [];
  // End of Array A untuk menampung seluruh isi dari chart

  // another global variable buat nampung isi stressnya, yang bakalan ada perhitungannya sendiri
  var stressAcrophobiaAverageRegex,
    stressClaustrophobiaAverageRegex,
    stressLygophobiaAverageRegex,
    stressHydrophobiaAverageRegex,
    stressArachnophobiaAverageRegex,
    stressHemophobiaAverageRegex,
    stressArsonphobiaAverageRegex,
    stressAliurophobiaAverageRegex,
    stressAstraphobiaAverageRegex,
    stressCenophobiaAverageRegex;

  // fungsi untuk get data dari firebase
  database.ref("/").on("value", function (snapshot) {
    // Array B untuk menampung isi chart
    // array B ini beda dengan yang diatas tadi, bedanya array yang ini akan kereset setiap firebase nya update
    excitement = [];
    engagement = [];
    focus2 = [];
    interest = [];
    relaxation = [];
    stress = [];

    // Pengisian array dari firebase ke array
    for (let i in snapshot.val().engagement) {
      engagement.push(snapshot.val().engagement[i]);
    }
    for (let i in snapshot.val().excitement) {
      excitement.push(snapshot.val().excitement[i]);
    }
    for (let i in snapshot.val().focus) {
      focus2.push(snapshot.val().focus[i]);
    }
    for (let i in snapshot.val().interest) {
      interest.push(snapshot.val().interest[i]);
    }
    for (let i in snapshot.val().relaxation) {
      relaxation.push(snapshot.val().relaxation[i]);
    }
    for (let i in snapshot.val().stress) {
      stress.push(snapshot.val().stress[i]);
    }

    // Penambahan counter
    // jadi setiap firebasenya update fungsi ini akan di ulang dan menambah value dari iniCounter
    iniCounter++;

    // Saya jelaskan satu IF aja, soalnya ini kebawah udah sama kok
    // Jadi jika counternya udah memenuhi syarat, script nya baru jalan
    if (iniCounter <= 6) {
      // mengumpulkan semua array B ke satu variable array A
      // Jadi array A bakalan jadi banyak banget gaes :v
      excitementAcrophobia.push(...excitement);
      engagementAcrophobia.push(...engagement);
      focusAcrophobia.push(...focus2);
      interestAcrophobia.push(...interest);
      relaxationAcrophobia.push(...relaxation);
      stressAcrophobia.push(...stress);

      // Ini jika udah counter nya terakhir, jadi script yang disini buat perhitungannya dan ngirim ke view nya
      if (iniCounter == 6) {
        // Yang ini buat ngerubah dari string ke array
        //engagementAcrophobia
        var excitementAcrophobiaInteger = excitementAcrophobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        // Yang ini buat ngejumlahin semua array tadi jadi satu angka
        var excitementAcrophobiaSum = excitementAcrophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        // Yang ini buat ngitung rata2 nya
        var excitementAcrophobiaAverage =
          excitementAcrophobiaSum / excitementAcrophobiaInteger.length;
        // Yang ini buat jadiin fixed, artinya 2 angka dibelakang koma
        var excitementAcrophobiaAverageRegex = excitementAcrophobiaAverage.toFixed(
          2
        );
        // Yang ini buat ngirim ke view hasil nya
        document.getElementById(
          "excitementAcrophobia"
        ).innerHTML = excitementAcrophobiaAverageRegex;

        // Jadi gitu seterusnya :v

        //engagementAcrophobia
        var engagementAcrophobiaInteger = engagementAcrophobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        var engagementAcrophobiaSum = engagementAcrophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var engagementAcrophobiaAverage =
          engagementAcrophobiaSum / engagementAcrophobiaInteger.length;
        var engagementAcrophobiaAverageRegex = engagementAcrophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "engagementAcrophobia"
        ).innerHTML = engagementAcrophobiaAverageRegex;

        //focusAcrophobia
        var focusAcrophobiaInteger = focusAcrophobia.map(function (x) {
          return parseInt(x, 10);
        });
        var focusAcrophobiaSum = focusAcrophobiaInteger.reduce(function (a, b) {
          return a + b;
        }, 0);
        var focusAcrophobiaAverage =
          focusAcrophobiaSum / focusAcrophobiaInteger.length;
        var focusAcrophobiaAverageRegex = focusAcrophobiaAverage.toFixed(2);
        document.getElementById(
          "focusAcrophobia"
        ).innerHTML = focusAcrophobiaAverageRegex;

        //interestAcrophobia
        var interestAcrophobiaInteger = interestAcrophobia.map(function (x) {
          return parseInt(x, 10);
        });
        var interestAcrophobiaSum = interestAcrophobiaInteger.reduce(function (
          a,
          b
        ) {
          return a + b;
        },
        0);
        var interestAcrophobiaAverage =
          interestAcrophobiaSum / interestAcrophobiaInteger.length;
        var interestAcrophobiaAverageRegex = interestAcrophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "interestAcrophobia"
        ).innerHTML = interestAcrophobiaAverageRegex;

        //relaxationAcrophobia
        var relaxationAcrophobiaInteger = relaxationAcrophobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        var relaxationAcrophobiaSum = relaxationAcrophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var relaxationAcrophobiaAverage =
          relaxationAcrophobiaSum / relaxationAcrophobiaInteger.length;
        var relaxationAcrophobiaAverageRegex = relaxationAcrophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "relaxationAcrophobia"
        ).innerHTML = relaxationAcrophobiaAverageRegex;

        //stressAcrophobia
        var stressAcrophobiaInteger = stressAcrophobia.map(function (x) {
          return parseInt(x, 10);
        });
        var stressAcrophobiaSum = stressAcrophobiaInteger.reduce(function (
          a,
          b
        ) {
          return a + b;
        },
        0);
        var stressAcrophobiaAverage =
          stressAcrophobiaSum / stressAcrophobiaInteger.length;
        stressAcrophobiaAverageRegex = stressAcrophobiaAverage.toFixed(2);
        document.getElementById(
          "stressAcrophobia"
        ).innerHTML = stressAcrophobiaAverageRegex;
      }
    }

    // Ini sama yang diatas, jadi ada interval
    if (iniCounter > 6 && iniCounter <= 12) {
      // mengumpulkan semua array ke satu variable array
      excitementClaustrophobia.push(...excitement);
      engagementClaustrophobia.push(...engagement);
      focusClaustrophobia.push(...focus2);
      interestClaustrophobia.push(...interest);
      relaxationClaustrophobia.push(...relaxation);
      stressClaustrophobia.push(...stress);

      if (iniCounter == 12) {
        //excitementClaustrophobia
        var excitementClaustrophobiaInteger = excitementClaustrophobia.map(
          function (x) {
            return parseInt(x, 10);
          }
        );
        var excitementClaustrophobiaSum = excitementClaustrophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var excitementClaustrophobiaAverage =
          excitementClaustrophobiaSum / excitementClaustrophobiaInteger.length;
        var excitementClaustrophobiaAverageRegex = excitementClaustrophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "excitementClaustrophobia"
        ).innerHTML = excitementClaustrophobiaAverageRegex;

        //engagementClaustrophobia
        var engagementClaustrophobiaInteger = engagementClaustrophobia.map(
          function (x) {
            return parseInt(x, 10);
          }
        );
        var engagementClaustrophobiaSum = engagementClaustrophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var engagementClaustrophobiaAverage =
          engagementClaustrophobiaSum / engagementClaustrophobiaInteger.length;
        var engagementClaustrophobiaAverageRegex = engagementClaustrophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "engagementClaustrophobia"
        ).innerHTML = engagementClaustrophobiaAverageRegex;

        //focusClaustrophobia
        var focusClaustrophobiaInteger = focusClaustrophobia.map(function (x) {
          return parseInt(x, 10);
        });
        var focusClaustrophobiaSum = focusClaustrophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var focusClaustrophobiaAverage =
          focusClaustrophobiaSum / focusClaustrophobiaInteger.length;
        var focusClaustrophobiaAverageRegex = focusClaustrophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "focusClaustrophobia"
        ).innerHTML = focusClaustrophobiaAverageRegex;

        //interestClaustrophobia
        var interestClaustrophobiaInteger = interestClaustrophobia.map(
          function (x) {
            return parseInt(x, 10);
          }
        );
        var interestClaustrophobiaSum = interestClaustrophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var interestClaustrophobiaAverage =
          interestClaustrophobiaSum / interestClaustrophobiaInteger.length;
        var interestClaustrophobiaAverageRegex = interestClaustrophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "interestClaustrophobia"
        ).innerHTML = interestClaustrophobiaAverageRegex;

        //relaxationClaustrophobia
        var relaxationClaustrophobiaInteger = relaxationClaustrophobia.map(
          function (x) {
            return parseInt(x, 10);
          }
        );
        var relaxationClaustrophobiaSum = relaxationClaustrophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var relaxationClaustrophobiaAverage =
          relaxationClaustrophobiaSum / relaxationClaustrophobiaInteger.length;
        var relaxationClaustrophobiaAverageRegex = relaxationClaustrophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "relaxationClaustrophobia"
        ).innerHTML = relaxationClaustrophobiaAverageRegex;

        //stressClaustrophobia
        var stressClaustrophobiaInteger = stressClaustrophobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        var stressClaustrophobiaSum = stressClaustrophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var stressClaustrophobiaAverage =
          stressClaustrophobiaSum / stressClaustrophobiaInteger.length;
        stressClaustrophobiaAverageRegex = stressClaustrophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "stressClaustrophobia"
        ).innerHTML = stressClaustrophobiaAverageRegex;
      }
    }

    if (iniCounter > 12 && iniCounter <= 18) {
      // mengumpulkan semua array ke satu variable array
      excitementLygophobia.push(...excitement);
      engagementLygophobia.push(...engagement);
      focusLygophobia.push(...focus2);
      interestLygophobia.push(...interest);
      relaxationLygophobia.push(...relaxation);
      stressLygophobia.push(...stress);

      if (iniCounter == 18) {
        //excitementLygophobia
        var excitementLygophobiaInteger = excitementLygophobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        var excitementLygophobiaSum = excitementLygophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var excitementLygophobiaAverage =
          excitementLygophobiaSum / excitementLygophobiaInteger.length;
        var excitementLygophobiaAverageRegex = excitementLygophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "excitementLygophobia"
        ).innerHTML = excitementLygophobiaAverageRegex;

        //engagementLygophobia
        var engagementLygophobiaInteger = engagementLygophobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        var engagementLygophobiaSum = engagementLygophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var engagementLygophobiaAverage =
          engagementLygophobiaSum / engagementLygophobiaInteger.length;
        var engagementLygophobiaAverageRegex = engagementLygophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "engagementLygophobia"
        ).innerHTML = engagementLygophobiaAverageRegex;

        //focusLygophobia
        var focusLygophobiaInteger = focusLygophobia.map(function (x) {
          return parseInt(x, 10);
        });
        var focusLygophobiaSum = focusLygophobiaInteger.reduce(function (a, b) {
          return a + b;
        }, 0);
        var focusLygophobiaAverage =
          focusLygophobiaSum / focusLygophobiaInteger.length;
        var focusLygophobiaAverageRegex = focusLygophobiaAverage.toFixed(2);
        document.getElementById(
          "focusLygophobia"
        ).innerHTML = focusLygophobiaAverageRegex;

        //interestLygophobia
        var interestLygophobiaInteger = interestLygophobia.map(function (x) {
          return parseInt(x, 10);
        });
        var interestLygophobiaSum = interestLygophobiaInteger.reduce(function (
          a,
          b
        ) {
          return a + b;
        },
        0);
        var interestLygophobiaAverage =
          interestLygophobiaSum / interestLygophobiaInteger.length;
        var interestLygophobiaAverageRegex = interestLygophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "interestLygophobia"
        ).innerHTML = interestLygophobiaAverageRegex;

        //relaxationLygophobia
        var relaxationLygophobiaInteger = relaxationLygophobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        var relaxationLygophobiaSum = relaxationLygophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var relaxationLygophobiaAverage =
          relaxationLygophobiaSum / relaxationLygophobiaInteger.length;
        var relaxationLygophobiaAverageRegex = relaxationLygophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "relaxationLygophobia"
        ).innerHTML = relaxationLygophobiaAverageRegex;

        //stressLygophobia
        var stressLygophobiaInteger = stressLygophobia.map(function (x) {
          return parseInt(x, 10);
        });
        var stressLygophobiaSum = stressLygophobiaInteger.reduce(function (
          a,
          b
        ) {
          return a + b;
        },
        0);
        var stressLygophobiaAverage =
          stressLygophobiaSum / stressLygophobiaInteger.length;
        stressLygophobiaAverageRegex = stressLygophobiaAverage.toFixed(2);
        document.getElementById(
          "stressLygophobia"
        ).innerHTML = stressLygophobiaAverageRegex;
      }
    }

    if (iniCounter > 18 && iniCounter <= 24) {
      // mengumpulkan semua array ke satu variable array
      excitementHydrophobia.push(...excitement);
      engagementHydrophobia.push(...engagement);
      focusHydrophobia.push(...focus2);
      interestHydrophobia.push(...interest);
      relaxationHydrophobia.push(...relaxation);
      stressHydrophobia.push(...stress);

      if (iniCounter == 24) {
        //excitementHydrophobia
        var excitementHydrophobiaInteger = excitementHydrophobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        var excitementHydrophobiaSum = excitementHydrophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var excitementHydrophobiaAverage =
          excitementHydrophobiaSum / excitementHydrophobiaInteger.length;
        var excitementHydrophobiaAverageRegex = excitementHydrophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "excitementHydrophobia"
        ).innerHTML = excitementHydrophobiaAverageRegex;

        //engagementHydrophobia
        var engagementHydrophobiaInteger = engagementHydrophobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        var engagementHydrophobiaSum = engagementHydrophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var engagementHydrophobiaAverage =
          engagementHydrophobiaSum / engagementHydrophobiaInteger.length;
        var engagementHydrophobiaAverageRegex = engagementHydrophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "engagementHydrophobia"
        ).innerHTML = engagementHydrophobiaAverageRegex;

        //focusHydrophobia
        var focusHydrophobiaInteger = focusHydrophobia.map(function (x) {
          return parseInt(x, 10);
        });
        var focusHydrophobiaSum = focusHydrophobiaInteger.reduce(function (
          a,
          b
        ) {
          return a + b;
        },
        0);
        var focusHydrophobiaAverage =
          focusHydrophobiaSum / focusHydrophobiaInteger.length;
        var focusHydrophobiaAverageRegex = focusHydrophobiaAverage.toFixed(2);
        document.getElementById(
          "focusHydrophobia"
        ).innerHTML = focusHydrophobiaAverageRegex;

        //interestHydrophobia
        var interestHydrophobiaInteger = interestHydrophobia.map(function (x) {
          return parseInt(x, 10);
        });
        var interestHydrophobiaSum = interestHydrophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var interestHydrophobiaAverage =
          interestHydrophobiaSum / interestHydrophobiaInteger.length;
        var interestHydrophobiaAverageRegex = interestHydrophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "interestHydrophobia"
        ).innerHTML = interestHydrophobiaAverageRegex;

        //relaxationHydrophobia
        var relaxationHydrophobiaInteger = relaxationHydrophobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        var relaxationHydrophobiaSum = relaxationHydrophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var relaxationHydrophobiaAverage =
          relaxationHydrophobiaSum / relaxationHydrophobiaInteger.length;
        var relaxationHydrophobiaAverageRegex = relaxationHydrophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "relaxationHydrophobia"
        ).innerHTML = relaxationHydrophobiaAverageRegex;

        //stressHydrophobia
        var stressHydrophobiaInteger = stressHydrophobia.map(function (x) {
          return parseInt(x, 10);
        });
        var stressHydrophobiaSum = stressHydrophobiaInteger.reduce(function (
          a,
          b
        ) {
          return a + b;
        },
        0);
        var stressHydrophobiaAverage =
          stressHydrophobiaSum / stressHydrophobiaInteger.length;
        stressHydrophobiaAverageRegex = stressHydrophobiaAverage.toFixed(2);
        document.getElementById(
          "stressHydrophobia"
        ).innerHTML = stressHydrophobiaAverageRegex;
      }
    }

    if (iniCounter > 24 && iniCounter <= 30) {
      // mengumpulkan semua array ke satu variable array
      excitementArachnophobia.push(...excitement);
      engagementArachnophobia.push(...engagement);
      focusArachnophobia.push(...focus2);
      interestArachnophobia.push(...interest);
      relaxationArachnophobia.push(...relaxation);
      stressArachnophobia.push(...stress);

      if (iniCounter == 30) {
        //excitementArachnophobia
        var excitementArachnophobiaInteger = excitementArachnophobia.map(
          function (x) {
            return parseInt(x, 10);
          }
        );
        var excitementArachnophobiaSum = excitementArachnophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var excitementArachnophobiaAverage =
          excitementArachnophobiaSum / excitementArachnophobiaInteger.length;
        var excitementArachnophobiaAverageRegex = excitementArachnophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "excitementArachnophobia"
        ).innerHTML = excitementArachnophobiaAverageRegex;

        //engagementArachnophobia
        var engagementArachnophobiaInteger = engagementArachnophobia.map(
          function (x) {
            return parseInt(x, 10);
          }
        );
        var engagementArachnophobiaSum = engagementArachnophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var engagementArachnophobiaAverage =
          engagementArachnophobiaSum / engagementArachnophobiaInteger.length;
        var engagementArachnophobiaAverageRegex = engagementArachnophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "engagementArachnophobia"
        ).innerHTML = engagementArachnophobiaAverageRegex;

        //focusArachnophobia
        var focusArachnophobiaInteger = focusArachnophobia.map(function (x) {
          return parseInt(x, 10);
        });
        var focusArachnophobiaSum = focusArachnophobiaInteger.reduce(function (
          a,
          b
        ) {
          return a + b;
        },
        0);
        var focusArachnophobiaAverage =
          focusArachnophobiaSum / focusArachnophobiaInteger.length;
        var focusArachnophobiaAverageRegex = focusArachnophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "focusArachnophobia"
        ).innerHTML = focusArachnophobiaAverageRegex;

        //interestArachnophobia
        var interestArachnophobiaInteger = interestArachnophobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        var interestArachnophobiaSum = interestArachnophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var interestArachnophobiaAverage =
          interestArachnophobiaSum / interestArachnophobiaInteger.length;
        var interestArachnophobiaAverageRegex = interestArachnophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "interestArachnophobia"
        ).innerHTML = interestArachnophobiaAverageRegex;

        //relaxationArachnophobia
        var relaxationArachnophobiaInteger = relaxationArachnophobia.map(
          function (x) {
            return parseInt(x, 10);
          }
        );
        var relaxationArachnophobiaSum = relaxationArachnophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var relaxationArachnophobiaAverage =
          relaxationArachnophobiaSum / relaxationArachnophobiaInteger.length;
        var relaxationArachnophobiaAverageRegex = relaxationArachnophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "relaxationArachnophobia"
        ).innerHTML = relaxationArachnophobiaAverageRegex;

        //stressArachnophobia
        var stressArachnophobiaInteger = stressArachnophobia.map(function (x) {
          return parseInt(x, 10);
        });
        var stressArachnophobiaSum = stressArachnophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var stressArachnophobiaAverage =
          stressArachnophobiaSum / stressArachnophobiaInteger.length;
        stressArachnophobiaAverageRegex = stressArachnophobiaAverage.toFixed(2);
        document.getElementById(
          "stressArachnophobia"
        ).innerHTML = stressArachnophobiaAverageRegex;
      }
    }

    if (iniCounter > 30 && iniCounter <= 36) {
      // mengumpulkan semua array ke satu variable array
      excitementHemophobia.push(...excitement);
      engagementHemophobia.push(...engagement);
      focusHemophobia.push(...focus2);
      interestHemophobia.push(...interest);
      relaxationHemophobia.push(...relaxation);
      stressHemophobia.push(...stress);

      if (iniCounter == 36) {
        //excitementHemophobia
        var excitementHemophobiaInteger = excitementHemophobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        var excitementHemophobiaSum = excitementHemophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var excitementHemophobiaAverage =
          excitementHemophobiaSum / excitementHemophobiaInteger.length;
        var excitementHemophobiaAverageRegex = excitementHemophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "excitementHemophobia"
        ).innerHTML = excitementHemophobiaAverageRegex;

        //engagementHemophobia
        var engagementHemophobiaInteger = engagementHemophobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        var engagementHemophobiaSum = engagementHemophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var engagementHemophobiaAverage =
          engagementHemophobiaSum / engagementHemophobiaInteger.length;
        var engagementHemophobiaAverageRegex = engagementHemophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "engagementHemophobia"
        ).innerHTML = engagementHemophobiaAverageRegex;

        //focusHemophobia
        var focusHemophobiaInteger = focusHemophobia.map(function (x) {
          return parseInt(x, 10);
        });
        var focusHemophobiaSum = focusHemophobiaInteger.reduce(function (a, b) {
          return a + b;
        }, 0);
        var focusHemophobiaAverage =
          focusHemophobiaSum / focusHemophobiaInteger.length;
        var focusHemophobiaAverageRegex = focusHemophobiaAverage.toFixed(2);
        document.getElementById(
          "focusHemophobia"
        ).innerHTML = focusHemophobiaAverageRegex;

        //interestHemophobia
        var interestHemophobiaInteger = interestHemophobia.map(function (x) {
          return parseInt(x, 10);
        });
        var interestHemophobiaSum = interestHemophobiaInteger.reduce(function (
          a,
          b
        ) {
          return a + b;
        },
        0);
        var interestHemophobiaAverage =
          interestHemophobiaSum / interestHemophobiaInteger.length;
        var interestHemophobiaAverageRegex = interestHemophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "interestHemophobia"
        ).innerHTML = interestHemophobiaAverageRegex;

        //relaxationHemophobia
        var relaxationHemophobiaInteger = relaxationHemophobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        var relaxationHemophobiaSum = relaxationHemophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var relaxationHemophobiaAverage =
          relaxationHemophobiaSum / relaxationHemophobiaInteger.length;
        var relaxationHemophobiaAverageRegex = relaxationHemophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "relaxationHemophobia"
        ).innerHTML = relaxationHemophobiaAverageRegex;

        //stressHemophobia
        var stressHemophobiaInteger = stressHemophobia.map(function (x) {
          return parseInt(x, 10);
        });
        var stressHemophobiaSum = stressHemophobiaInteger.reduce(function (
          a,
          b
        ) {
          return a + b;
        },
        0);
        var stressHemophobiaAverage =
          stressHemophobiaSum / stressHemophobiaInteger.length;
        stressHemophobiaAverageRegex = stressHemophobiaAverage.toFixed(2);
        document.getElementById(
          "stressHemophobia"
        ).innerHTML = stressHemophobiaAverageRegex;
      }
    }

    if (iniCounter > 36 && iniCounter <= 42) {
      // mengumpulkan semua array ke satu variable array
      excitementArsonphobia.push(...excitement);
      engagementArsonphobia.push(...engagement);
      focusArsonphobia.push(...focus2);
      interestArsonphobia.push(...interest);
      relaxationArsonphobia.push(...relaxation);
      stressArsonphobia.push(...stress);

      if (iniCounter == 42) {
        //excitementArsonphobia
        var excitementArsonphobiaInteger = excitementArsonphobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        var excitementArsonphobiaSum = excitementArsonphobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var excitementArsonphobiaAverage =
          excitementArsonphobiaSum / excitementArsonphobiaInteger.length;
        var excitementArsonphobiaAverageRegex = excitementArsonphobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "excitementArsonphobia"
        ).innerHTML = excitementArsonphobiaAverageRegex;

        //engagementArsonphobia
        var engagementArsonphobiaInteger = engagementArsonphobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        var engagementArsonphobiaSum = engagementArsonphobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var engagementArsonphobiaAverage =
          engagementArsonphobiaSum / engagementArsonphobiaInteger.length;
        var engagementArsonphobiaAverageRegex = engagementArsonphobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "engagementArsonphobia"
        ).innerHTML = engagementArsonphobiaAverageRegex;

        //focusArsonphobia
        var focusArsonphobiaInteger = focusArsonphobia.map(function (x) {
          return parseInt(x, 10);
        });
        var focusArsonphobiaSum = focusArsonphobiaInteger.reduce(function (
          a,
          b
        ) {
          return a + b;
        },
        0);
        var focusArsonphobiaAverage =
          focusArsonphobiaSum / focusArsonphobiaInteger.length;
        var focusArsonphobiaAverageRegex = focusArsonphobiaAverage.toFixed(2);
        document.getElementById(
          "focusArsonphobia"
        ).innerHTML = focusArsonphobiaAverageRegex;

        //interestArsonphobia
        var interestArsonphobiaInteger = interestArsonphobia.map(function (x) {
          return parseInt(x, 10);
        });
        var interestArsonphobiaSum = interestArsonphobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var interestArsonphobiaAverage =
          interestArsonphobiaSum / interestArsonphobiaInteger.length;
        var interestArsonphobiaAverageRegex = interestArsonphobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "interestArsonphobia"
        ).innerHTML = interestArsonphobiaAverageRegex;

        //relaxationArsonphobia
        var relaxationArsonphobiaInteger = relaxationArsonphobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        var relaxationArsonphobiaSum = relaxationArsonphobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var relaxationArsonphobiaAverage =
          relaxationArsonphobiaSum / relaxationArsonphobiaInteger.length;
        var relaxationArsonphobiaAverageRegex = relaxationArsonphobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "relaxationArsonphobia"
        ).innerHTML = relaxationArsonphobiaAverageRegex;

        //stressArsonphobia
        var stressArsonphobiaInteger = stressArsonphobia.map(function (x) {
          return parseInt(x, 10);
        });
        var stressArsonphobiaSum = stressArsonphobiaInteger.reduce(function (
          a,
          b
        ) {
          return a + b;
        },
        0);
        var stressArsonphobiaAverage =
          stressArsonphobiaSum / stressArsonphobiaInteger.length;
        stressArsonphobiaAverageRegex = stressArsonphobiaAverage.toFixed(2);
        document.getElementById(
          "stressArsonphobia"
        ).innerHTML = stressArsonphobiaAverageRegex;
      }
    }

    if (iniCounter > 42 && iniCounter <= 48) {
      // mengumpulkan semua array ke satu variable array
      excitementAliurophobia.push(...excitement);
      engagementAliurophobia.push(...engagement);
      focusAliurophobia.push(...focus2);
      interestAliurophobia.push(...interest);
      relaxationAliurophobia.push(...relaxation);
      stressAliurophobia.push(...stress);

      if (iniCounter == 48) {
        //excitementAliurophobia
        var excitementAliurophobiaInteger = excitementAliurophobia.map(
          function (x) {
            return parseInt(x, 10);
          }
        );
        var excitementAliurophobiaSum = excitementAliurophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var excitementAliurophobiaAverage =
          excitementAliurophobiaSum / excitementAliurophobiaInteger.length;
        var excitementAliurophobiaAverageRegex = excitementAliurophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "excitementAliurophobia"
        ).innerHTML = excitementAliurophobiaAverageRegex;

        //engagementAliurophobia
        var engagementAliurophobiaInteger = engagementAliurophobia.map(
          function (x) {
            return parseInt(x, 10);
          }
        );
        var engagementAliurophobiaSum = engagementAliurophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var engagementAliurophobiaAverage =
          engagementAliurophobiaSum / engagementAliurophobiaInteger.length;
        var engagementAliurophobiaAverageRegex = engagementAliurophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "engagementAliurophobia"
        ).innerHTML = engagementAliurophobiaAverageRegex;

        //focusAliurophobia
        var focusAliurophobiaInteger = focusAliurophobia.map(function (x) {
          return parseInt(x, 10);
        });
        var focusAliurophobiaSum = focusAliurophobiaInteger.reduce(function (
          a,
          b
        ) {
          return a + b;
        },
        0);
        var focusAliurophobiaAverage =
          focusAliurophobiaSum / focusAliurophobiaInteger.length;
        var focusAliurophobiaAverageRegex = focusAliurophobiaAverage.toFixed(2);
        document.getElementById(
          "focusAliurophobia"
        ).innerHTML = focusAliurophobiaAverageRegex;

        //interestAliurophobia
        var interestAliurophobiaInteger = interestAliurophobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        var interestAliurophobiaSum = interestAliurophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var interestAliurophobiaAverage =
          interestAliurophobiaSum / interestAliurophobiaInteger.length;
        var interestAliurophobiaAverageRegex = interestAliurophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "interestAliurophobia"
        ).innerHTML = interestAliurophobiaAverageRegex;

        //relaxationAliurophobia
        var relaxationAliurophobiaInteger = relaxationAliurophobia.map(
          function (x) {
            return parseInt(x, 10);
          }
        );
        var relaxationAliurophobiaSum = relaxationAliurophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var relaxationAliurophobiaAverage =
          relaxationAliurophobiaSum / relaxationAliurophobiaInteger.length;
        var relaxationAliurophobiaAverageRegex = relaxationAliurophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "relaxationAliurophobia"
        ).innerHTML = relaxationAliurophobiaAverageRegex;

        //stressAliurophobia
        var stressAliurophobiaInteger = stressAliurophobia.map(function (x) {
          return parseInt(x, 10);
        });
        var stressAliurophobiaSum = stressAliurophobiaInteger.reduce(function (
          a,
          b
        ) {
          return a + b;
        },
        0);
        var stressAliurophobiaAverage =
          stressAliurophobiaSum / stressAliurophobiaInteger.length;
        stressAliurophobiaAverageRegex = stressAliurophobiaAverage.toFixed(2);
        document.getElementById(
          "stressAliurophobia"
        ).innerHTML = stressAliurophobiaAverageRegex;
      }
    }

    if (iniCounter > 48 && iniCounter <= 54) {
      // mengumpulkan semua array ke satu variable array
      excitementAstraphobia.push(...excitement);
      engagementAstraphobia.push(...engagement);
      focusAstraphobia.push(...focus2);
      interestAstraphobia.push(...interest);
      relaxationAstraphobia.push(...relaxation);
      stressAstraphobia.push(...stress);

      if (iniCounter == 54) {
        //excitementAstraphobia
        var excitementAstraphobiaInteger = excitementAstraphobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        var excitementAstraphobiaSum = excitementAstraphobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var excitementAstraphobiaAverage =
          excitementAstraphobiaSum / excitementAstraphobiaInteger.length;
        var excitementAstraphobiaAverageRegex = excitementAstraphobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "excitementAstraphobia"
        ).innerHTML = excitementAstraphobiaAverageRegex;

        //engagementAstraphobia
        var engagementAstraphobiaInteger = engagementAstraphobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        var engagementAstraphobiaSum = engagementAstraphobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var engagementAstraphobiaAverage =
          engagementAstraphobiaSum / engagementAstraphobiaInteger.length;
        var engagementAstraphobiaAverageRegex = engagementAstraphobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "engagementAstraphobia"
        ).innerHTML = engagementAstraphobiaAverageRegex;

        //focusAstraphobia
        var focusAstraphobiaInteger = focusAstraphobia.map(function (x) {
          return parseInt(x, 10);
        });
        var focusAstraphobiaSum = focusAstraphobiaInteger.reduce(function (
          a,
          b
        ) {
          return a + b;
        },
        0);
        var focusAstraphobiaAverage =
          focusAstraphobiaSum / focusAstraphobiaInteger.length;
        var focusAstraphobiaAverageRegex = focusAstraphobiaAverage.toFixed(2);
        document.getElementById(
          "focusAstraphobia"
        ).innerHTML = focusAstraphobiaAverageRegex;

        //interestAstraphobia
        var interestAstraphobiaInteger = interestAstraphobia.map(function (x) {
          return parseInt(x, 10);
        });
        var interestAstraphobiaSum = interestAstraphobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var interestAstraphobiaAverage =
          interestAstraphobiaSum / interestAstraphobiaInteger.length;
        var interestAstraphobiaAverageRegex = interestAstraphobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "interestAstraphobia"
        ).innerHTML = interestAstraphobiaAverageRegex;

        //relaxationAstraphobia
        var relaxationAstraphobiaInteger = relaxationAstraphobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        var relaxationAstraphobiaSum = relaxationAstraphobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var relaxationAstraphobiaAverage =
          relaxationAstraphobiaSum / relaxationAstraphobiaInteger.length;
        var relaxationAstraphobiaAverageRegex = relaxationAstraphobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "relaxationAstraphobia"
        ).innerHTML = relaxationAstraphobiaAverageRegex;

        //stressAstraphobia
        var stressAstraphobiaInteger = stressAstraphobia.map(function (x) {
          return parseInt(x, 10);
        });
        var stressAstraphobiaSum = stressAstraphobiaInteger.reduce(function (
          a,
          b
        ) {
          return a + b;
        },
        0);
        var stressAstraphobiaAverage =
          stressAstraphobiaSum / stressAstraphobiaInteger.length;
        stressAstraphobiaAverageRegex = stressAstraphobiaAverage.toFixed(2);
        document.getElementById(
          "stressAstraphobia"
        ).innerHTML = stressAstraphobiaAverageRegex;
      }
    }

    if (iniCounter > 54 && iniCounter <= 60) {
      // mengumpulkan semua array ke satu variable array
      excitementCenophobia.push(...excitement);
      engagementCenophobia.push(...engagement);
      focusCenophobia.push(...focus2);
      interestCenophobia.push(...interest);
      relaxationCenophobia.push(...relaxation);
      stressCenophobia.push(...stress);

      if (iniCounter == 60) {
        //excitementCenophobia
        var excitementCenophobiaInteger = excitementCenophobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        var excitementCenophobiaSum = excitementCenophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var excitementCenophobiaAverage =
          excitementCenophobiaSum / excitementCenophobiaInteger.length;
        var excitementCenophobiaAverageRegex = excitementCenophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "excitementCenophobia"
        ).innerHTML = excitementCenophobiaAverageRegex;

        //engagementCenophobia
        var engagementCenophobiaInteger = engagementCenophobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        var engagementCenophobiaSum = engagementCenophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var engagementCenophobiaAverage =
          engagementCenophobiaSum / engagementCenophobiaInteger.length;
        var engagementCenophobiaAverageRegex = engagementCenophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "engagementCenophobia"
        ).innerHTML = engagementCenophobiaAverageRegex;

        //focusCenophobia
        var focusCenophobiaInteger = focusCenophobia.map(function (x) {
          return parseInt(x, 10);
        });
        var focusCenophobiaSum = focusCenophobiaInteger.reduce(function (a, b) {
          return a + b;
        }, 0);
        var focusCenophobiaAverage =
          focusCenophobiaSum / focusCenophobiaInteger.length;
        var focusCenophobiaAverageRegex = focusCenophobiaAverage.toFixed(2);
        document.getElementById(
          "focusCenophobia"
        ).innerHTML = focusCenophobiaAverageRegex;

        //interestCenophobia
        var interestCenophobiaInteger = interestCenophobia.map(function (x) {
          return parseInt(x, 10);
        });
        var interestCenophobiaSum = interestCenophobiaInteger.reduce(function (
          a,
          b
        ) {
          return a + b;
        },
        0);
        var interestCenophobiaAverage =
          interestCenophobiaSum / interestCenophobiaInteger.length;
        var interestCenophobiaAverageRegex = interestCenophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "interestCenophobia"
        ).innerHTML = interestCenophobiaAverageRegex;

        //relaxationCenophobia
        var relaxationCenophobiaInteger = relaxationCenophobia.map(function (
          x
        ) {
          return parseInt(x, 10);
        });
        var relaxationCenophobiaSum = relaxationCenophobiaInteger.reduce(
          function (a, b) {
            return a + b;
          },
          0
        );
        var relaxationCenophobiaAverage =
          relaxationCenophobiaSum / relaxationCenophobiaInteger.length;
        var relaxationCenophobiaAverageRegex = relaxationCenophobiaAverage.toFixed(
          2
        );
        document.getElementById(
          "relaxationCenophobia"
        ).innerHTML = relaxationCenophobiaAverageRegex;

        //stressCenophobia
        var stressCenophobiaInteger = stressCenophobia.map(function (x) {
          return parseInt(x, 10);
        });
        var stressCenophobiaSum = stressCenophobiaInteger.reduce(function (
          a,
          b
        ) {
          return a + b;
        },
        0);
        var stressCenophobiaAverage =
          stressCenophobiaSum / stressCenophobiaInteger.length;
        var stressCenophobiaAverageRegex = stressCenophobiaAverage.toFixed(2);
        document.getElementById(
          "stressCenophobia"
        ).innerHTML = stressCenophobiaAverageRegex;
      }
    }

    // Nah ini yang terakhir, jadi ketika updatenya smpe akhir atau udah selesai dia bakalan ngitung hasil diagnosa disini
    if (iniCounter == 60) {
      // Sya buat array 2 dimensi, buat nampung nama dan value dari stress tadi
      var Diagnosa = [
        ["Acrophobia", stressAcrophobiaAverageRegex],
        ["Claustrophobia", stressClaustrophobiaAverageRegex],
        ["Lygophobia", stressLygophobiaAverageRegex],
        ["Hydrophobia", stressHydrophobiaAverageRegex],
        ["Arachnophobia", stressArachnophobiaAverageRegex],
        ["Hemophobia", stressHemophobiaAverageRegex],
        ["Arsonphobia", stressArsonphobiaAverageRegex],
        ["Aliurophobia", stressAliurophobiaAverageRegex],
        ["Astraphobia", stressAstraphobiaAverageRegex],
        ["Cenophobia", stressCenophobiaAverageRegex],
      ];

      // Selanjutnya diurutin ke yang paling besar
      descendingDiagnosa = Diagnosa.sort(function (a, b) {
        return b[1] - a[1];
      });

      // Lalu disini nampilin ke view nya
      document.getElementById("DiagnosaOne").innerHTML =
        descendingDiagnosa[0][1];
      document.getElementById("DiagnosaTwo").innerHTML =
        descendingDiagnosa[1][1];
      document.getElementById("DiagnosaThree").innerHTML =
        descendingDiagnosa[2][1];
      document.getElementById("DiagnosaNameOne").innerHTML =
        descendingDiagnosa[0][0];
      document.getElementById("DiagnosaNameTwo").innerHTML =
        descendingDiagnosa[1][0];
      document.getElementById("DiagnosaNameThree").innerHTML =
        descendingDiagnosa[2][0];
    }

    // Pemanggilan fungsi chart
    drawGraph(stress, excitement, interest, focus2, relaxation, engagement);
  });

  // fungsi chart
  function drawGraph(
    stress,
    excitement,
    interest,
    focus2,
    relaxation,
    engagement
  ) {
    var labels = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      "Y",
    ];
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Stress",
            labelString: "°C",
            borderColor: "rgb(255, 100, 100)",
            backgroundColor: "rgb(255, 100, 100)",
            fill: false,
            data: stress,
            yAxisID: "y-axis-temp",
          },
          {
            label: "Excitement",
            labelString: "hum",
            borderColor: "rgb(209, 100, 255)",
            backgroundColor: "rgb(209, 100, 255)",
            fill: false,
            data: excitement,
            yAxisID: "y-axis-temp",
          },
          {
            label: "Interest",
            labelString: "light",
            borderColor: "rgb(100, 110, 255)",
            backgroundColor: "rgb(100, 110, 255)",
            fill: false,
            data: interest,
            yAxisID: "y-axis-temp",
          },
          {
            label: "Focus",
            labelString: "motion",
            borderColor: "rgb(100, 255, 141)",
            backgroundColor: "rgb(100, 255, 141)",
            fill: false,
            data: focus2,
            yAxisID: "y-axis-temp",
          },
          {
            label: "Relaxation",
            labelString: "motion",
            borderColor: "rgb(219, 255, 100)",
            backgroundColor: "rgb(219, 255, 100)",
            fill: false,
            data: relaxation,
            yAxisID: "y-axis-temp",
          },
          {
            label: "Engagement",
            labelString: "motion",
            borderColor: "rgb(255, 214, 100)",
            backgroundColor: "rgb(255, 214, 100)",
            fill: false,
            data: engagement,
            yAxisID: "y-axis-temp",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        hoverMode: "index",
        stacked: false,
        title: {
          display: true,
          text: "Refresh every 10 Seconds",
        },
        scales: {
          yAxes: [
            {
              type: "linear",
              display: true,
              position: "left",
              id: "y-axis-temp",
              ticks: {
                beginAtZero: true,
                suggestedMax: 50,
              },
            },
          ],
        },
      },
    });
  }
}

function searchData() {
  // database.search-data
  var id = document.getElementById("search-data").value;

  database.ref("User/" + id).once("value", function (snapshot) {
    if (snapshot.exists()) {
      location.href = "print.php?id=" + id;
    } else {
      alert("Data tidak ada");
    }
  });
}

function checkPasien(id) {
  database.ref("User/" + id).once("value", function (snapshot) {
    if (snapshot.exists()) {
      return true;
    } else {
      return false;
    }
  });
}

function printOut() {
  window.print();
}

// ini fungsi untuk nampilin chart dihome
function chartHome() {
  var ref = firebase.database().ref("/");
  ref.on("value", function (snapshot) {
    excitement = [];
    engagement = [];
    focus2 = [];
    interest = [];
    relaxation = [];
    stress = [];
    for (let i in snapshot.val().engagement) {
      engagement.push(snapshot.val().engagement[i]);
    }
    for (let i in snapshot.val().excitement) {
      excitement.push(snapshot.val().excitement[i]);
    }
    for (let i in snapshot.val().focus2) {
      focus2.push(snapshot.val().focus2[i]);
    }
    for (let i in snapshot.val().interest) {
      interest.push(snapshot.val().interest[i]);
    }
    for (let i in snapshot.val().relaxation) {
      relaxation.push(snapshot.val().relaxation[i]);
    }
    for (let i in snapshot.val().stress) {
      stress.push(snapshot.val().stress[i]);
    }

    drawGraph(stress, excitement, interest, focus2, relaxation, engagement);
  });

  function drawGraph(
    stress,
    excitement,
    interest,
    focus2,
    relaxation,
    engagement
  ) {
    var labels = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      "Y",
    ];
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Stress",
            labelString: "°C",
            borderColor: "rgb(255, 100, 100)",
            backgroundColor: "rgb(255, 100, 100)",
            fill: false,
            data: stress,
            yAxisID: "y-axis-temp",
          },
          {
            label: "Excitement",
            labelString: "hum",

            borderColor: "rgb(209, 100, 255)",
            backgroundColor: "rgb(209, 100, 255)",
            fill: false,
            data: excitement,
            yAxisID: "y-axis-temp",
          },
          {
            label: "Interest",
            labelString: "light",

            borderColor: "rgb(100, 110, 255)",
            backgroundColor: "rgb(100, 110, 255)",
            fill: false,
            data: interest,
            yAxisID: "y-axis-temp",
          },
          {
            label: "Focus",
            labelString: "motion",

            borderColor: "rgb(100, 255, 141)",
            backgroundColor: "rgb(100, 255, 141)",
            fill: false,
            data: focus2,
            yAxisID: "y-axis-temp",
          },
          {
            label: "Relaxation",
            labelString: "motion",

            borderColor: "rgb(219, 255, 100)",
            backgroundColor: "rgb(219, 255, 100)",
            fill: false,
            data: relaxation,
            yAxisID: "y-axis-temp",
          },
          {
            label: "Engagement",
            labelStrig: "motion",

            borderColor: "rgb(255, 214, 100)",
            backgroundColor: "rgb(255, 214, 100)",
            fill: false,
            data: engagement,
            yAxisID: "y-axis-temp",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        hoverMode: "index",
        stacked: false,
        title: {
          display: false,
          text: "Last 20 room measurements",
        },
        scales: {
          yAxes: [
            {
              type: "linear",
              display: true,
              position: "left",
              id: "y-axis-temp",
              ticks: {
                beginAtZero: true,
                suggestedMax: 50,
              },
            },
          ],
        },
      },
    });
  }
}

// Ini fungsi buat nyimpan diagnosa
function saveDiagnosa() {
  // jadi ketika counternya udh lebih dari yang kita setting, dia baru jalan
  if (iniCounter >= 20) {
    // ini buat ngambil tanggal sekarang
    var dateObj = new Date();
    var options = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    var tanggalSekarang = dateObj.toLocaleDateString("in-ID", options);
    // ini buat bikin random id
    var randomId = Math.floor(Math.random() * 1001);

    // disini buat ngirim ke firebase
    database.ref("/Riwayat/" + randomId).set({
      idRiwayat: parseInt(randomId),
      name: name,
      idPasien: parseInt(idPengguna),
      tanggal: tanggalSekarang,
      diagnosa1: descendingDiagnosa[0][0],
      diagnosa2: descendingDiagnosa[1][0],
      diagnosa3: descendingDiagnosa[2][0],
    });

    // Ini pemanis biar tau sukses apa nggk
    window.alert("Data berhasil disimpan :D");
    // Biar ketika tombolnya hanya bisa diklik satu kali, menghindari input firebase yang berulang
    // kita bikin fungsinya berubah disini
    saveDiagnosa = function () {
      window.alert("Ngapain di klik lagi, udah kesimpen eaa :D");
    };
  }
  // tapi kalau counternya belum lebih dari yang kita setting, dia ada error wkwkwk
  else {
    window.alert("Tunggu sampe prosesnya selesai ya bosku !!");
  }
}

function tampilData() {
  // Buat referensi database firebase
  var dbRef = firebase.database();
  var refData = dbRef.ref("Riwayat");

  // Dapatkan referensi table
  var table = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];

  // Membuang semua isi table
  $("#dataTable").find("tr:gt(0)").remove();

  //Memuat Data
  refData.on("child_added", function (data) {
    var riwayatPengguna = data.val();

    var row = table.insertRow(table.rows.length);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    cell1.innerHTML = riwayatPengguna.idPasien;
    cell2.innerHTML = riwayatPengguna.name;
    cell3.innerHTML = riwayatPengguna.tanggal;
    cell4.innerHTML = riwayatPengguna.diagnosa1;
    cell5.innerHTML = riwayatPengguna.diagnosa2;
    cell6.innerHTML = riwayatPengguna.diagnosa3;
    cell7.innerHTML =
      '<button class="btn btn-danger btn-sm" type="button" id="delete_data" onclick="deleteData_Tampil(' +
      riwayatPengguna.idRiwayat +
      ')" data-toggle="modal" data-target="#ModalDel" style="margin-left:10px;">Hapus</button>';
  });
}

function CariData() {
  // Ambil isi text pencarian
  var nama_pasien = $("#text_cari").val();

  // Buat referensi database firebase
  var dbRef = firebase.database();
  var refData = dbRef.ref("Riwayat");

  // Ambil data nama_alat huruf depan (dan selebihnya) isi text cari
  var query = refData
    .orderByChild("name")
    .startAt(nama_pasien)
    .endAt(nama_pasien + "\uf8ff");

  // Dapatkan referensi table
  var table = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];

  // Membuang semua isi table
  $("#dataTable").find("tr:gt(0)").remove();

  // Memuat Data pencarian
  query.on("child_added", function (snapshot) {
    var riwayatPengguna = snapshot.val();
    console.log(riwayatPengguna.idRiwayat);

    var row = table.insertRow(table.rows.length);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    cell1.innerHTML = riwayatPengguna.idPasien;
    cell2.innerHTML = riwayatPengguna.name;
    cell3.innerHTML = riwayatPengguna.tanggal;
    cell4.innerHTML = riwayatPengguna.diagnosa1;
    cell5.innerHTML = riwayatPengguna.diagnosa2;
    cell6.innerHTML = riwayatPengguna.diagnosa3;
    cell7.innerHTML =
      '<button class="btn btn-danger btn-sm" type="button" id="delete_data" onclick="deleteData_Tampil(' +
      riwayatPengguna.idRiwayat +
      ')" data-toggle="modal" data-target="#ModalDel" style="margin-left:10px;">Hapus</button>';
  });
}

var idRiwayatbuatngapus;
// Melakukan proses delete data yang telah dikonfirmasi sebelumnya
function delData_Proses() {
  var id_add_proses = idRiwayatbuatngapus;
  console.log(id_add_proses);
  var dbRef_delete = firebase.database();
  var refDelete = dbRef_delete.ref("/Riwayat/" + id_add_proses);
  refDelete.remove();
  $("#ModalDel").modal("hide");
  tampilData();
}

// Memasukkan id ke textbox di modal konfirmasi delete
function deleteData_Tampil(idRiwayat) {
  idRiwayatbuatngapus = idRiwayat;
  console.log(idRiwayatbuatngapus);
}

function tampilDataPengguna() {
  // Buat referensi database firebase
  var dbRef = firebase.database();
  var refData = dbRef.ref("User");

  // Dapatkan referensi table
  var table = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];

  // Membuang semua isi table
  $("#dataTable").find("tr:gt(0)").remove();

  //Memuat Data
  refData.on("child_added", function (data) {
    var riwayatPengguna = data.val();

    var row = table.insertRow(table.rows.length);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = riwayatPengguna.id;
    cell2.innerHTML = riwayatPengguna.nama;
    cell3.innerHTML = riwayatPengguna.jenis_kelamin;
    cell4.innerHTML = riwayatPengguna.umur;
    cell5.innerHTML = riwayatPengguna.alamat;
    cell6.innerHTML =
      '<button class="btn btn-danger btn-sm" type="button" id="delete_data" onclick="deleteData_Tampil(' +
      riwayatPengguna.id +
      ')" data-toggle="modal" data-target="#ModalDelPengguna" style="margin-left:10px;">Hapus</button>';
  });
}

function CariDataPengguna() {
  // Ambil isi text pencarian
  var nama_pasien = $("#text_cari").val();

  // Buat referensi database firebase
  var dbRef = firebase.database();
  var statusAlat = dbRef.ref("User");

  // Ambil data nama_alat huruf depan (dan selebihnya) isi text cari
  var query = statusAlat
    .orderByChild("nama")
    .startAt(nama_pasien)
    .endAt(nama_pasien + "\uf8ff");

  // Dapatkan referensi table
  var table = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];

  // Membuang semua isi table
  $("#dataTable").find("tr:gt(0)").remove();

  // Memuat Data pencarian

  query.on("child_added", function (snapshot) {
    var riwayatPengguna = snapshot.val();

    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = riwayatPengguna.id;
    cell2.innerHTML = riwayatPengguna.nama;
    cell3.innerHTML = riwayatPengguna.jenis_kelamin;
    cell4.innerHTML = riwayatPengguna.umur;
    cell5.innerHTML = riwayatPengguna.alamat;
    cell6.innerHTML =
      '<button class="btn btn-danger btn-sm" type="button" id="delete_data" onclick="deleteData_TampilPengguna(' +
      riwayatPengguna.id +
      ')" data-toggle="modal" data-target="#ModalDelPengguna" style="margin-left:10px;">Hapus</button>';
  });
}

var idRiwayatbuatngapus;

// Memasukkan id ke textbox di modal konfirmasi delete
function deleteData_TampilPengguna(id) {
  idRiwayatbuatngapus = id;
  console.log(idRiwayatbuatngapus);
}

// Melakukan proses delete data yang telah dikonfirmasi sebelumnya
function delData_ProsesPengguna() {
  var id_add_prosesPengguna = idRiwayatbuatngapus;
  console.log(id_add_prosesPengguna);
  var dbRef_delete = firebase.database();
  var refDelete = dbRef_delete.ref("/User/" + id_add_prosesPengguna);
  refDelete.remove();
  $("#ModalDelPengguna").modal("hide");
  tampilDataPengguna();
}

// Melakukan proses penambahan data
function addData_Proses() {
  var id_pasien = $("#ID").val();
  var namaPasien = $("#namaPasien").val();
  var jenisKelamin = document.getElementById("jeniskelamin");
  var umur = $("#umur").val();
  var alamat = $("#alamat").val();

  var refAdd = firebase.database();

  // Isikan data kedalam firebase
  var refInput = refAdd.ref("/User/" + id_pasien);
  refInput.set({
    id: id_pasien,
    nama: namaPasien,
    umur: parseInt(umur),
    jenis_kelamin: jenisKelamin.value,
    alamat: alamat,
  });

  $("#ModalAdd").modal("hide");
  tampilDataPengguna();
}
