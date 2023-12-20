//ubah ke local scope
const animal = "Ayam";

function myAnima() {
  return animal;
}

//ubah ke global scope
function myAge() {
  const age = 18;
  return age;
}

//ubah ke block scope
function orderCheck(param) {
  let order;
  if (param > 0) {
    order = "Pesanan sedang diproses";
    return order;
  } else {
    order = "Pesanan kosong";
    return order;
  }
}

orderCheck(1);
