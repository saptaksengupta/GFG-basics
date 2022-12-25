function Book(name, author, price) {
    this.name = name;
    this.author = author;
    this.price = price;

    this.displayBookDetails = function() {
        console.log("The book detail is: " + this.name + " and the author is: " + this.author);
    }

    this.getBookPrice = function() {
        console.log("The price of this book is: ", this.price);
    }
}

// module.exports = Book;
export default Book;