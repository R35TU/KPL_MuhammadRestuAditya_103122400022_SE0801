require('dotenv').config();
const BASE_API = process.env.BASE_API;

function formatAngka(number) {
    return new Intl.NumberFormat('id-ID', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(number);
}

async function getExchangeRate(amount) {
    try {
        const response = await fetch(BASE_API);
        const data = await response.json();

        const date = new Date(data.date);
        const rates = data.idr;

        const cnhValue = amount * rates.cnh;
        const eurValue = amount * rates.eur;

        const idrFormat = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0
        }).format(amount);

        const eurFormat = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(eurValue);

        const dateFormat = new Intl.DateTimeFormat('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }).format(date);

        console.log(
            `Kurs ${idrFormat} pada ${dateFormat} adalah CNH ${formatAngka(cnhValue)} dan ${eurFormat}`
        );

    } catch (error) {
        console.error("Gagal mengambil data:", error.message);
    }
}

async function runTests() {
    await getExchangeRate(25000);
    await getExchangeRate(50000);
    await getExchangeRate(100000);
}

runTests();