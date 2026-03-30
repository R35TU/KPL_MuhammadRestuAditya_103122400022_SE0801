const editorElement = document.getElementById("editor-kecil");

const charCountElement = document.getElementById("hf");
const upperCountElement = document.getElementById("hb");
const lowerCountElement = document.getElementById("hk");

const btnUpper = document.getElementById("huruf-besar");
const btnLower = document.getElementById("huruf-kecil");


editorElement.addEventListener("input", () => {

    const text = editorElement.value;

    let total = 0;
    let upper = 0;
    let lower = 0;

    for (let i = 0; i < text.length; i++) {

        const char = text[i];

        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            total++;
        }

        if (char >= 'A' && char <= 'Z') {
            upper++;
        }

        if (char >= 'a' && char <= 'z') {
            lower++;
        }

    }

    charCountElement.textContent = total;
    upperCountElement.textContent = upper;
    lowerCountElement.textContent = lower;

});


btnUpper.addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
    editorElement.dispatchEvent(new Event("input"));
});

btnLower.addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
    editorElement.dispatchEvent(new Event("input"));
});


const tombolTerang = document.getElementById("tombol-terang");
const tombolGelap = document.getElementById("tombol-gelap");
const tombolSepia = document.getElementById("tombol-sepia");

function setMode(mode) {
    document.documentElement.classList.remove("dark-mode", "sepia-mode");

    if (mode === "dark") {
        document.documentElement.classList.add("dark-mode");
    } else if (mode === "sepia") {
        document.documentElement.classList.add("sepia-mode");
    }
}

tombolTerang.addEventListener("click", () => {
    setMode("light");
});

tombolGelap.addEventListener("click", () => {
    setMode("dark");
});

tombolSepia.addEventListener("click", () => {
    setMode("sepia");
});