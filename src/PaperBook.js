"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaperBook = void 0;
class PaperBook {
    constructor(title, price, isbn, weight) {
        if (titlecheck(title)) {
            this.title = title;
        }
        else {
            //TODO
        }
        if (pricecheck(price)) {
            this.price = price;
        }
        else {
            //TODO
        }
        if (sizecheck(weight)) {
            this.weight = weight;
        }
        else {
            //TODO
        }
        if (isbncheck(isbn)) {
            this.isbn = isbn;
        }
        else {
            //TODO
        }
    }
}
exports.PaperBook = PaperBook;
function titlecheck(title) {
    let once = false;
    if (title !== "") {
        once = true;
    }
    return once;
}
function pricecheck(numero) {
    let once = false;
    if (numero >= 0) {
        once = true;
    }
    return once;
}
function sizecheck(numero) {
    let once = false;
    if (numero > 0) {
        once = true;
    }
    return once;
}
function isbncheck(isbn) {
    let once = false;
    let regex = /^[0-9]{13}$/;
    if (regex.test(isbn)) {
        once = true;
    }
    return once;
}