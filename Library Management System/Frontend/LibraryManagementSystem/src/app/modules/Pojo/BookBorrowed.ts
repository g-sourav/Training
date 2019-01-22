export class BookBorrowed {
    id: number;
    borrowerEmail: String;
    bookId: String;
    bookName: String;
    borrowDate: Date;
    returnDate: Date;
    status: boolean;
    fineDue: number;
}