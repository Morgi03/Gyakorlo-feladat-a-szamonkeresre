import { Book } from "./Book";
import { EBook } from "./Ebook";
import { PaperBook } from "./PaperBook";
let bookDatabase: Book[] = [];

function ujraszamol() {
   let Konyvekdb = document.getElementById('KonyvekDB') as HTMLSpanElement;
   let IngyenesKonyvekDB = document.getElementById('IngyenesKonyvekDB') as HTMLSpanElement;
   let KonyvekOsszAr = document.getElementById('KonyvekOsszAr') as HTMLSpanElement;
   Konyvekdb.innerHTML = bookDatabase.length.toString();
   let bookDatabase_filtered = bookDatabase.map(e=>e.price == 0);
   IngyenesKonyvekDB.innerHTML = bookDatabase_filtered.length.toString();
   KonyvekOsszAr.innerHTML = bookDatabase.map(e=>e.price).reduce((a, b) => a + b, 0).toString();
}


document.addEventListener('DOMContentLoaded', () => {

});