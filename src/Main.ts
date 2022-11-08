interface Book {
   title: string;
   price: number;
   isbn: string;
}

class PaperBook implements Book {
   title: string;
   price: number;
   isbn: string;
   weight: number;
   constructor(title: string, price: number, isbn: string, weight: number) {
      this.title = title;
      this.price = price;
      this.weight = weight;
      this.isbn = isbn;
   }
}

class EBook implements Book {
   title: string;
   price: number;
   isbn: string;
   size: number;
   constructor(title: string, price: number, isbn: string, size: number) {
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
let bookDatabase: Book[] = [];

function ujraszamol() {
   let Konyvekdb = document.getElementById('KonyvekDB') as HTMLSpanElement;
   let IngyenesKonyvekDB = document.getElementById('IngyenesKonyvekDB') as HTMLSpanElement;
   let KonyvekOsszAr = document.getElementById('KonyvekOsszAr') as HTMLSpanElement;
   Konyvekdb.innerHTML = bookDatabase.length.toString();
   let bookDatabase_filtered = bookDatabase.filter(e => e.price == 0);
   IngyenesKonyvekDB.innerHTML = bookDatabase_filtered.length.toString();
   KonyvekOsszAr.innerHTML = bookDatabase.map(e => e.price).reduce((a, b) => a + b, 0).toString();
}


function canBeABook(title: string, price: number, isbn: string, weight: number, size: number): boolean {
   let name_error = document.getElementById('error_name')! as HTMLLabelElement;
   let error_price = document.getElementById('error_price')! as HTMLLabelElement;
   let error_isbn = document.getElementById('error_isbn')! as HTMLLabelElement;
   let error_weightANDsize = document.getElementById('error_weightANDsize')! as HTMLLabelElement;

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
      let weight = document.getElementById('weight') as HTMLInputElement;
      let size = document.getElementById('size') as HTMLInputElement;
      weight.value = "";
      size.value = "";
   }

   return once;
}


document.addEventListener('DOMContentLoaded', () => {
   document.getElementById('ebook_Tipus')!.addEventListener('change', () => {
      document.getElementById('weight')!.disabled = true;
      document.getElementById('weight')!.value = "";
      document.getElementById('size')!.disabled = false;
      document.getElementById('name')!.value = "";
      document.getElementById('price')!.value = "";
      document.getElementById('isbn')!.value = "";

   });
   document.getElementById('papir_Tipus')!.addEventListener('change', () => {
      document.getElementById('weight')!.disabled = false;
      document.getElementById('size')!.disabled = true;
      document.getElementById('size')!.value = "";
      document.getElementById('name')!.value = "";
      document.getElementById('price')!.value = "";
      document.getElementById('isbn')!.value = "";
   });


   document.getElementById('submit')!.addEventListener('click', () => {
      let name = document.getElementById('name') as HTMLInputElement;
      let price = document.getElementById('price') as HTMLInputElement;
      let isbn = document.getElementById('isbn') as HTMLInputElement;
      let weight = document.getElementById('weight') as HTMLInputElement;
      let size = document.getElementById('size') as HTMLInputElement;
      let book: Book;
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
         } else {
            book = new PaperBook(name.value, parseInt(price.value), isbn.value, parseInt(weight.value));
         }
         bookDatabase.push(book);
      }
      ujraszamol();

   });
});