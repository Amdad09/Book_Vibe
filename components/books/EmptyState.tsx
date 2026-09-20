const EmptyState = ({ type }: { type: 'read' | 'wishlist' }) => {
    const isRead = type === 'read';

    return (
        <div className="rounded-xl border border-dashed border-[#27292f] bg-[#1e1f24] px-6 py-16 text-center">
            <div className="mx-auto max-w-md">
                <p className="text-lg font-semibold text-white">
                    {isRead
                        ? 'No books in your reading list'
                        : 'Your wishlist is empty'}
                </p>

                <p className="mt-2 text-sm text-gray-400">
                    {isRead
                        ? 'Start reading a book and it will appear here.'
                        : 'Add books to your wishlist so you can find them later.'}
                </p>
            </div>
        </div>
    );
};

export default EmptyState;