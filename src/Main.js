"use strict";
class PaperBook {
    constructor(title, price, isbn, weight) {
        this.title = title;
        this.price = price;
        this.weight = weight;
        this.isbn = isbn;
    }
}
class EBook {
    constructor(title, price, isbn, size) {
        this.title = title;
        this.price = price;
        this.size = size;
        this.isbn = isbn;
    }
}
/*import { Book } from "./Book";
import { EBook } from "./Ebook";
import { PaperBook } from "./PaperBook";
*/
let bookDatabase = [];
function ujraszamol() {
    let Konyvekdb = document.getElementById('KonyvekDB');
    let IngyenesKonyvekDB = document.getElementById('IngyenesKonyvekDB');
    let KonyvekOsszAr = document.getElementById('KonyvekOsszAr');
    Konyvekdb.innerHTML = bookDatabase.length.toString();
    let bookDatabase_filtered = bookDatabase.filter(e => e.price == 0);
    IngyenesKonyvekDB.innerHTML = bookDatabase_filtered.length.toString();
    KonyvekOsszAr.innerHTML = bookDatabase.map(e => e.price).reduce((a, b) => a + b, 0).toString();
}
function canBeABook(title, price, isbn, weight, size) {
    let name_error = document.getElementById('error_name');
    let error_price = document.getElementById('error_price');
    let error_isbn = document.getElementById('error_isbn');
    let error_weightANDsize = document.getElementById('error_weightANDsize');
    name_error.textContent = "";
    error_price.textContent = "";
    error_isbn.textContent = "";
    error_weightANDsize.textContent = "";
    let once = false;
    if (title == "") {
        name_error.textContent = "Hiba a könyv címének megadása során!";
        once = true;
    }
    if (price < 0) {
        error_price.textContent = "Hiba a könyv árának megadása során!";
        once = true;
    }
    let regex = /^[0-9]{13}$/;
    if (!regex.test(isbn)) {
        error_isbn.textContent = "Hiba a könyv egyedi azonosítójának megadása során!";
        once = true;
    }
    if (weight <= 0 && size <= 0) {
        error_weightANDsize.textContent = "Hiba a könyv méretének megadása során!";
        once = true;
        let weight = document.getElementById('weight');
        let size = document.getElementById('size');
        weight.value = "";
        size.value = "";
    }
    return once;
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('ebook_Tipus').addEventListener('change', () => {
        document.getElementById('weight').disabled = true;
        document.getElementById('weight').value = "";
        document.getElementById('size').disabled = false;
        document.getElementById('name').value = "";
        document.getElementById('price').value = "";
        document.getElementById('isbn').value = "";
    });
    document.getElementById('papir_Tipus').addEventListener('change', () => {
        document.getElementById('weight').disabled = false;
        document.getElementById('size').disabled = true;
        document.getElementById('size').value = "";
        document.getElementById('name').value = "";
        document.getElementById('price').value = "";
        document.getElementById('isbn').value = "";
    });
    document.getElementById('submit').addEventListener('click', () => {
        let name = document.getElementById('name');
        let price = document.getElementById('price');
        let isbn = document.getElementById('isbn');
        let weight = document.getElementById('weight');
        let size = document.getElementById('size');
        let book;
        if (price.value == "") {
            price.value = '0';
        }
        if (weight.value = '0') {
            weight.value = '0';
        }
        if (size.value = '0') {
            size.value = '0';
        }
        if (!canBeABook(name.value, parseInt(price.value), isbn.value, parseInt(weight.value), parseInt(size.value))) {
            if (weight.value == "") {
                book = new EBook(name.value, parseInt(price.value), isbn.value, parseInt(size.value));
            }
            else {
                book = new PaperBook(name.value, parseInt(price.value), isbn.value, parseInt(weight.value));
            }
            bookDatabase.push(book);
        }
        ujraszamol();
    });
});
