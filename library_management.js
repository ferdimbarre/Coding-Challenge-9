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


