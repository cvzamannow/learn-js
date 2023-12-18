// if else

if ("kondisi pertama") {
  //kode yang dijalankan ketika kondisi pertama true
} else if ("kondisi kedua") {
  //kode yang dijalankan ketika kondisi pertama false kemudian kondisi kedua true
} else {
  //kode yang dijalankan ketika kondisi pertama dan kedua bernilai false
}

const meetSchedule = 9;

if (meetSchedule === 9) {
  console.log("Ini meet pagi");
} else if (meetSchedule === 13) {
  console.log("Ini meet siang");
} else {
  console.log("Itu bukan jadwal meet");
}

const nurrInfo = {
  name: "Nurrohman",
  age: 18,
  isBreakfast: false,
  isMarried: false,
};
let answer;

if (nurrInfo.isBreakfast === true) {
  answer = "Apakah sarapanmu enak?";
} else {
  answer = "Gimana kalau kita sarapan indomie goreng:)";
}

console.log(answer);
