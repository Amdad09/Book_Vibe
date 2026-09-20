'use client'

import type { Book } from "@/types/Book";
import { createContext, useState, type ReactNode } from "react";

interface BookProviderProps{
    children: ReactNode;
}
interface BookContextType {
    readBooks: Book[];
    wishlistBooks: Book[];
    addToRead: (book: Book) => void;
    addToWisList: (book: Book) => void;
}

export const BookContext = createContext<BookContextType | null>(null);

const BookProvider = ({ children }: BookProviderProps) => {
    const [readBooks, setReadBooks] = useState<Book[]>([]);
    const [wishlistBooks, setWishlistBooks] = useState<Book[]>([]);

    const addToRead = (book: Book) => {
        setReadBooks(prev => [...prev, book]);
    };

    const addToWisList = (book: Book) => {
        setWishlistBooks(prev => [...prev, book]);
    };
  return (
      <BookContext.Provider value={{
          readBooks, wishlistBooks, addToRead, addToWisList
      }}>
          
        {children}
    </BookContext.Provider>
  );
};

export default BookProvider;