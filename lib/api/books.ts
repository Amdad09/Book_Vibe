import type { Book } from '@/types/Book';
import books from '../../public/BooksData.json';
export async function getBooks(): Promise<Book[]> {
    const res = await fetch('http://localhost:3000/BooksData.json', {
        cache: 'no-store',
    });
    if (!res.ok) {
        throw new Error('Failed to fetch book');
    }
    return res.json();
}

export async function getBook(bookId: string): Promise<Book | undefined> {
    const book = books.find((book) => book.bookId === Number(bookId));

    return book;
}
