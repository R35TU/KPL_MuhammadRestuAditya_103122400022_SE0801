function formatTanggalSekarang() {
    const now = new Date();

    const formatter = new Intl.DateTimeFormat('id-ID', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    return formatter.format(now);
}

console.log(formatTanggalSekarang());