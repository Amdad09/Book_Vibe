import { getBook, getBooks } from '@/lib/api/books';
import type { Book } from '@/types/Book';
import Image from 'next/image';
import Link from 'next/link';

interface BookDetailsProps {
    params: Promise<{ bookId: string }>;
}

export async function GenerateStaticParams() {
    const books = getBooks();
    return (await books).map(book => ({
        bookId: book.bookId.toString()
    }))
}
const BookDetailsPage = async ({ params }: BookDetailsProps) => {
    const { bookId } = await params;
    const book: Book | undefined = await getBook(bookId);
    if (!book) throw new Error('Book not found');
    return (
        <main className="min-h-screen bg-base-100 px-5 py-12">
            <div className="mx-auto max-w-6xl">
                {/* Back */}
                <Link href="/books" className="btn btn-ghost mb-8">
                    ← Back to Books
                </Link>

                <div className="grid gap-10 rounded-3xl bg-base-200 p-6 shadow-xl md:grid-cols-[320px_1fr] md:p-10">
                    {/* Book Image */}
                    <div className="relative h-112.5 overflow-hidden rounded-2xl">
                        <Image
                            src={book.image}
                            alt={book.bookName}
                            fill
                            className="object-cover"
                            sizes="320px"
                            priority
                        />
                    </div>

                    {/* Details */}
                    <div className="flex flex-col">
                        {/* Category */}
                        <div className="mb-4">
                            <span className="badge bg-[#00d991] text-slate-800 font-semibold text-sm">
                                {book.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl font-bold md:text-5xl">
                            {book.bookName}
                        </h1>

                        {/* Author */}
                        <p className="mt-3 text-lg text-base-content/60">
                            Written by{' '}
                            <span className="font-semibold text-base-content">
                                {book.author}
                            </span>
                        </p>

                        {/* Rating */}
                        <div className="mt-5 flex items-center gap-3">
                            <span className="text-2xl">⭐</span>

                            <span className="text-xl font-semibold">
                                {book.rating}
                            </span>

                            <span className="text-base-content/50">/ 5</span>
                        </div>

                        {/* Book Info */}
                        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                            <div className="rounded-xl bg-base-300 p-4">
                                <p className="text-xs text-base-content/50">
                                    Pages
                                </p>
                                <p className="mt-1 font-semibold">
                                    {book.totalPages}
                                </p>
                            </div>

                            <div className="rounded-xl bg-base-300 p-4">
                                <p className="text-xs text-base-content/50">
                                    Published
                                </p>
                                <p className="mt-1 font-semibold">
                                    {book.yearOfPublishing}
                                </p>
                            </div>

                            <div className="rounded-xl bg-base-300 p-4">
                                <p className="text-xs text-base-content/50">
                                    Publisher
                                </p>
                                <p className="mt-1 font-semibold">
                                    {book.publisher}
                                </p>
                            </div>

                            <div className="rounded-xl bg-base-300 p-4">
                                <p className="text-xs text-base-content/50">
                                    Category
                                </p>
                                <p className="mt-1 font-semibold">
                                    {book.category}
                                </p>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            {book.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-base-300 px-4 py-2 text-sm"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Review */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold">
                                About this book
                            </h2>

                            <p className="mt-3 leading-7 text-base-content/70">
                                {book.review}
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="mt-8 flex flex-wrap gap-3">
                            <button className="flex-1 rounded-lg bg-[#00d991] px-6 py-3 font-medium text-[#17181c] transition hover:bg-[#00c982] sm:flex-none">
                                Read Book
                            </button>

                            <button className="flex-1 rounded-lg border border-[#00d991] px-6 py-3 font-medium text-[#00d991] transition hover:bg-[#00d991] hover:text-[#17181c] sm:flex-none">
                                ♡ Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BookDetailsPage;
