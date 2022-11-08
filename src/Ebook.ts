import { Book } from "./Book";

export class EBook implements Book {
    title: string;
    price: number;
    isbn: string;
    size: number;
    constructor(title: string, price: number, isbn: string, size: number){
            this.title = title;
            this.price = price;
            this.size = size;
            this.isbn = isbn;
    }
}
