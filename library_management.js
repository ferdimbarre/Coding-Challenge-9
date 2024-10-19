// Library management system 
// task 1: Create a Book Class
class Book {
constructor(title, author, ISBN, isAvailable = true) //set isAvailable to true because default is true 
{     this.title = title; 
    this.author = author;
    this.ISBN = ISBN;
    this._isAvailable = isAvailable;
}
// get details method 
getDetails (){
    return (`Book name is ${this.title}, written by ${this.author}, ISBN is ${this.ISBN}`); // will return book details
}
// setting a getter 
get isAvailable() {
    return this._isAvailable; //if true will return is available
}
// setter
set isAvailable(newAvailibility) {
    if (typeof newAvailibility === "boolean") {
        this._isAvailable = newAvailibility //updating availibility 
    }
}
}; 
// task 2: Create a Section Class
class Section {
    constructor (name, book) {
    this.name = name;
    this.books = []; // empty books array
    } 
    addBook(book){ 
        this.books.push(book); // add book to array 
    }
    getAvailableBooks(amount) {
        let availableBooks = 0;
    this.books.forEach(book => {
        if (book.isAvailable) {
            availableBooks++; //update available books count 
        }
    }); 
    return availableBooks; 
    }
    listBooks(){ 
        let bookList = '';
        this.books.forEach(book => {
          let available = book.isAvailable ? `Available` : `Not Available`; //checks if book is available 
          bookList += `${book.title}, is ${available}`
    })
    return bookList //will return the list of books
    }
    // add a method calculateTotalBooksAvailable()
    calculateTotalBooksAvailable(){
        let totalBooksAvailable = 0 
        this.books.forEach(book => {
            if (book.isAvailable) {
                totalBooksAvailable++; //  sum amount of available books 
            }
        }); return totalBooksAvailable

    }

    }
    


    // create patron class
    class Patron {
constructor (name, borrowedBooks) {
this.name = name; 
this.borrowedBooks = []; 
}
borrowBooks(book){
    if (book.isAvailable) {
book.isAvailable = false //updates availability
this.borrowedBooks.push(book) //pushes book into array 
console.log(`${this.name} borrowed ${book.title}`)
    } else { console.log(`Book is not available to borrow`)}

}
returnBook(book){
   let bookFound = this.borrowedBooks.findIndex(borrowedBook => borrowedBook === book) // finds the book in the borrowed books array 
    if (bookFound !== -1) { // -1 means it was not found. so if found proceed with code
        this.borrowedBooks.splice(bookFound, 1) // remove the book from this array 
    }
    book.isAvailable = true // makes book available again 
    console.log(`${this.name} returned ${book.title}`) //logs what happened 
}
    }; 

// Create a VIPPatron Class that Inherits from Patron
class VIPPatron extends Patron {
constructor(name, priority){
    super(name);
this.priority = priority
}
 borrowBooks(book){ //JS runs left-> right and top-> bottom, so first chec if the patron is vip and allow to borrow (priority)
    if (book.isAvailable && this.priority) {
        console.log(`Prioritize this patron: ${this.name}`)
        book.isAvailable = false //updates availability
this.borrowedBooks.push(book) //pushes book into array 
    }
    else if (book.isAvailable) { //patron isnt vip yet book is still available, can borrow 
        book.isAvailable = false //updates availability
        this.borrowedBooks.push(book) //pushes book into array 
        console.log(`${this.name} borrowed ${book.title}`)
    } else { console.log(`Book is not available to borrow`)

    }
}
};

