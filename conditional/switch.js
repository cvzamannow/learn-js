switch ("value") {
  case "value":
    // code block
    break;
  case "nilai":
    // code block
    break;
  default:
  // code block
}

const today = "selasa";

switch (today) {
  case "senin":
    console.log("ini hari senin");
    break;
  case "selasa":
    console.log("ini hari selasa");
    break;
  case "rabu":
    console.log("ini hari rabu");
    break;
  default:
    console.log("hari ini bukan hari senin, selasa, atau rabu");
}

const devTeam = "reza";
let teamAnswer;

switch (devTeam) {
  case "ridho":
  case "ramzi":
  case "sofyan":
  case "fito":
  case "dimas":
  case "abi":
  case "andriyan":
    teamAnswer = "dia team back end";
    break;
  case "nurrohman":
    teamAnswer = "dia team front end";
    break;
  default:
    teamAnswer = "dia bukan dari team front end dan back end";
}

console.log(teamAnswer);
