import { Book } from "./Book";
export class PaperBook implements Book {
    title!: string;
    price!: number;
    isbn!: string;
    weight!: number;
    constructor(title: string, price: number, isbn: string, weight: number) {
        if (titlecheck(title)) {
            this.title = title;
        } else {
            //TODO
        }

        if (pricecheck(price)) {
            this.price = price;
        } else {
            //TODO
        }

        if (sizecheck(weight)) {
            this.weight = weight;
        } else {
            //TODO
        }

        if (isbncheck(isbn)) {
            this.isbn = isbn;
        } else {
            //TODO
        }


    }
}
function titlecheck(title: string): boolean {
    let once = false;
    if (title !== "") {
        once = true;
    }
    return once;
}
function pricecheck(numero: number): boolean {
    let once = false;
    if (numero >= 0) {
        once = true;
    }
    return once;
}
function sizecheck(numero: number): boolean {
    let once = false;
    if (numero > 0) {
        once = true;
    }
    return once;
}
function isbncheck(isbn : string): boolean {
    let once = false;
    let regex = /^[0-9]{13}$/;
    if (regex.test(isbn)) {
        once = true;
    }
    return once;
}