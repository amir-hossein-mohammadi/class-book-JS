class Book {
    constructor (
        title ,
        genre ,
        author ,
        pageNumber ,
        isbnNumber ,
        releaseDate ,
        publisher ,
        price
    ){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.pageNumber = pageNumber;
        this.isbnNumber = isbnNumber;
        this.releaseDate = releaseDate;
        this.publisher = publisher; 
        this.price = price;
    }

    get gettitle() {
        return this.title;
    }

    set settitle(title){
        this.title = title;
    }

    details() {
       return this.title + " " + this.genre + " " + this.author + " " + this.isbnNumber + " " +
        this.pageNumber + " " + this.releaseDate + " " + this.publisher + " " + this.price; 
    }

}

let book = new Book(
    "قندتلخ",
    ["درام", "عاشقانه"],
    "مریم حاتمی",
    "دویست صفحه",
    "978-622-6041-13-3",
    new Date("june 1 ,2018"),
    "انتشارات پر",
    "28.500 تومان",
)

console.log(book.details());