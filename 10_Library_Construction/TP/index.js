/**
 * Hitung jumlah huruf (A-Z, tanpa spasi)
 */
function countLetters(text) {
    const cleaned = text.replace(/[^a-zA-Z]/g, '');
    return cleaned.length;
}

/**
 * Hitung jumlah kata (berdasarkan spasi)
 */
function countWords(text) {
    const words = text.trim().split(/\s+/);
    return words.filter(word => word.match(/^[a-zA-Z]+$/)).length;
}

module.exports = {
    countLetters,
    countWords
};