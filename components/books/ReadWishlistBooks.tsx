'use client';

import Container from '@/components/shared/Container';
import { useBook } from '@/hooks/useBook';
import { useState } from 'react';
import BookListItem from './BookListItem';
import EmptyState from './EmptyState';

type Tab = 'read' | 'wishlist';

const ReadWishlistBooks = () => {
    const { readBooks, wishlistBooks } = useBook();
    console.log('Add to read: ', readBooks);
    console.log('Add to wish: ', wishlistBooks);
    const [activeTab, setActiveTab] = useState<Tab>('read');

    const books = activeTab === 'read' ? readBooks : wishlistBooks;
    console.log(books);
    return (
        <div className="min-h-screen bg-[#17181c] py-10">
            <Container>
                {/* Header */}
                <div className="mb-10">
                    <p className="mb-2 text-sm font-medium text-[#00d991]">
                        My Library
                    </p>

                    <h1 className="text-3xl font-bold text-white sm:text-4xl">
                        Your Books
                    </h1>

                    <p className="mt-2 max-w-xl text-gray-400">
                        Keep track of the books you are reading and the ones you
                        want to read later.
                    </p>
                </div>

                {/* Tabs */}
                <div className="mb-8 flex gap-8 border-b border-[#27292f]">
                    <button
                        onClick={() => setActiveTab('read')}
                        className={`relative pb-4 text-sm font-medium transition ${
                            activeTab === 'read'
                                ? 'text-[#00d991]'
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        Read Books
                        <span className="ml-2 rounded-full bg-[#27292f] px-2 py-0.5 text-xs">
                            {readBooks.length}
                        </span>
                        {activeTab === 'read' && (
                            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#00d991]" />
                        )}
                    </button>

                    <button
                        onClick={() => setActiveTab('wishlist')}
                        className={`relative pb-4 text-sm font-medium transition ${
                            activeTab === 'wishlist'
                                ? 'text-[#00d991]'
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        Wishlist
                        <span className="ml-2 rounded-full bg-[#27292f] px-2 py-0.5 text-xs">
                            {wishlistBooks.length}
                        </span>
                        {activeTab === 'wishlist' && (
                            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#00d991]" />
                        )}
                    </button>
                </div>

                {/* Sort */}
                <div className="mb-8 flex justify-end">
                    <button className="rounded-lg border border-[#27292f] bg-[#1e1f24] px-4 py-2 text-sm text-gray-300 transition hover:border-[#00d991]/50 hover:text-[#00d991]">
                        Sort by
                    </button>
                </div>

                {/* Books */}
                {books.length === 0 ? (
                    <EmptyState type={activeTab} />
                ) : (
                    <div className="space-y-5">
                        {books.map((book) => (
                            <BookListItem key={book.bookId} book={book} />
                        ))}
                    </div>
                )}
            </Container>
        </div>
    );
};

export default ReadWishlistBooks;
