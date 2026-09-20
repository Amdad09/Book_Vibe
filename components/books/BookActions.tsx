'use client'

import { useBook } from "@/hooks/useBook";
import type { Book } from "@/types/Book";

const BookActions = ({book}: {book: Book}) => {
    const { addToRead, addToWisList } = useBook();
  return (
      <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={()=>addToRead(book)} className="flex-1 rounded-lg bg-[#00d991] px-6 py-3 font-medium text-[#17181c] transition hover:bg-[#00c982] sm:flex-none">
              Read Book
          </button>

          <button onClick={()=> addToWisList(book)} className="flex-1 rounded-lg border border-[#00d991] px-6 py-3 font-medium text-[#00d991] transition hover:bg-[#00d991] hover:text-[#17181c] sm:flex-none">
              ♡ Add to Wishlist
          </button>
      </div>
  );
};

export default BookActions;