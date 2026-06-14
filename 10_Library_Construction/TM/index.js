import pangkat from "./lib/pangkat.js";
import bulat from "./lib/bulat.js";
import kuadrat from "./lib/kuadrat.js";

export { pangkat, bulat, kuadrat };

//Test
const narasi = `Seorang insinyur menetapkan luas panel ${bulat(kuadrat(12))} meter persegi, lalu menggunakan kapasitas penyimpanan sebesar ${pangkat(2, 10)} watt-jam. Ketika sensor mengirimkan data arus sisa yang berantakan seperti 85.95 ampere, ia kalibrasikan menjadi ${bulat(85.95)} agar sistem keamanan memutus aliran tepat pada angka bulat tanpa koma.`;

console.log(narasi);