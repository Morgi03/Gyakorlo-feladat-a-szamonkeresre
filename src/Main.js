"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let bookDatabase = [];
function ujraszamol() {
    let Konyvekdb = document.getElementById('KonyvekDB');
    let IngyenesKonyvekDB = document.getElementById('IngyenesKonyvekDB');
    let KonyvekOsszAr = document.getElementById('KonyvekOsszAr');
    Konyvekdb.innerHTML = bookDatabase.length.toString();
    let bookDatabase_filtered = bookDatabase.map(e => e.price == 0);
    IngyenesKonyvekDB.innerHTML = bookDatabase_filtered.length.toString();
    KonyvekOsszAr.innerHTML = bookDatabase.map(e => e.price).reduce((a, b) => a + b, 0).toString();
}
document.addEventListener('DOMContentLoaded', () => {
});
