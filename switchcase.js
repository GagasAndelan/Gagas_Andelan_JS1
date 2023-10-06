let day = 5;
let dayName;

switch (day) {
  case 1:
    dayName = "Minggu";
    break;
  case 2:
    dayName = "Senin";
    break;
  case 3:
    dayName = "Selasa";
    break;
  case 4:
    dayName = "Rabu";
    break;
  case 5:
    dayName = "Kamis";
    break;
  case 6:
    dayName = "Jumat";
    break;
  case 7:
    dayName = "Sabtu";
    break;
  default:
    dayName = "Hari tidak valid";
}

console.log(`Hari ke-${day} adalah ${dayName}`);
