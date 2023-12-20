//1. Local Scope
function greeting(param) {
  const greet = "Selamat datang " + param;
  return greet;
}

//console.log(greet);

//2. Global Scope
const myName = "reza";

function yourName() {
  return myName;
}

console.log(yourName());

//3. Block Scope
if (1 === 1) {
  const isTrue = "Itu benar";
  console.log(isTrue);
} else {
  const isTrue = "Maaf itu salah";
  console.log(isTrue);
}

function myFavoriteFood(param) {
  if (param === "Nasi Goreng") {
    const favorite = "Ini adalah makanan kesukaan saya";
    console.log(favorite);
  } else {
    const favorite = "Ini bukan makanan kesukaan saya";
    console.log(favorite);
  }
}

myFavoriteFood("Nasi Goreng");
