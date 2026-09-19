import type { Book } from '@/types/Book';
import Image from 'next/image';
import Link from 'next/link';

interface BookCardProps {
    book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
    return (
        <div className="group overflow-hidden rounded-xl border border-[#27292f] bg-[#1e1f24] transition duration-700 hover:border-[#00d991]/50">
            {/* Book Image */}
            <Link
                href={`/books/${book.bookId}`}
                className="block overflow-hidden bg-[#27292f]"
            >
                <div className="relative h-72">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                    />
                </div>
            </Link>

            {/* Content */}
            <div className="p-5">
                {/* Category */}
                <p className="mb-2 text-sm font-medium text-[#00d991]">
                    {book.category}
                </p>

                {/* Book Name */}
                <Link href={`/books/${book.bookId}`}>
                    <h2 className="line-clamp-1 text-xl font-semibold text-white transition hover:text-[#00d991]">
                        {book.bookName}
                    </h2>
                </Link>

                {/* Author */}
                <p className="mt-1 text-sm text-gray-400">{book.author}</p>

                {/* Meta */}
                <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
                    <span>★ {book.rating}</span>
                    <span>{book.totalPages} pages</span>
                    <span>{book.yearOfPublishing}</span>
                </div>

                {/* Action */}
                <Link
                    href={`/books/${book.bookId}`}
                    className="mt-5 block rounded-lg border border-[#00d991] py-2.5 text-center text-sm font-medium text-[#00d991] transition hover:bg-[#00d991] hover:text-[#17181c]"
                >
                    Show Details
                </Link>
            </div>
        </div>
    );
};

export default BookCard;
