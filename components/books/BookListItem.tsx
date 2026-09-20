import type { Book } from '@/types/Book';
import Image from 'next/image';
import Link from 'next/link';

interface BookListItemProps {
    book: Book;
}

const BookListItem = ({ book }: BookListItemProps) => {
    return (
        <article className="group rounded-xl border border-[#27292f] bg-[#1e1f24] p-5 transition hover:border-[#00d991]/40">
            <div className="flex flex-col gap-5 sm:flex-row">
                {/* Cover */}
                <div className="relative h-52 w-full shrink-0 overflow-hidden rounded-lg bg-[#27292f] sm:h-44 sm:w-32">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        fill
                        sizes="128px"
                        className="object-cover transition duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="flex min-w-0 flex-1 flex-col">
                    <div>
                        <span className="text-xs font-medium uppercase tracking-wide text-[#00d991]">
                            {book.category}
                        </span>

                        <h2 className="mt-2 text-xl font-semibold text-white">
                            {book.bookName}
                        </h2>

                        <p className="mt-1 text-sm text-gray-400">
                            by {book.author}
                        </p>
                    </div>

                    {/* Meta */}
                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
                        <span>★ {book.rating}</span>

                        <span>{book.totalPages} pages</span>

                        <span>{book.yearOfPublishing}</span>

                        <span>{book.publisher}</span>
                    </div>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-md bg-[#27292f] px-2.5 py-1 text-xs text-gray-300"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Bottom */}
                    <div className="mt-6 flex items-center justify-between border-t border-[#27292f] pt-4">
                        <span className="text-sm text-gray-500">
                            {book.totalPages} pages
                        </span>

                        <Link
                            href={`/books/${book.bookId}`}
                            className="rounded-lg border border-[#00d991] px-4 py-2 text-sm font-medium text-[#00d991] transition hover:bg-[#00d991] hover:text-[#17181c]"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BookListItem;
