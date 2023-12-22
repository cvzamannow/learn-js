let tasks = [];

//fungsi tambah tugas
function addTasks(task) {
  tasks.push(task);
  console.log(`Tugas ${task} berhasil ditambahkan`);
}

//fungsi tampilkan semua tugas
function showTasks() {
  if (tasks.length === 0) {
    console.log("Tidak ada tugas saat ini");
  } else {
    for (let i = 0; i < tasks.length; i++) {
      console.log(`${i + 1}. ${tasks[i]}`);
    }
  }
}

//fungsi hapus tugas
function deleteTask(index) {
  if (index >= 0 && index < tasks.length) {
    let deletedTasks = tasks.splice(index, 1);
    console.log(`Tugas ${deletedTasks} berhasil dihapus`);
  } else {
    console.log("Indeks tugas tidak valid");
  }
}

//panggil function
addTasks("belajar js");
addTasks("main ps");

deleteTask(2);
showTasks();
