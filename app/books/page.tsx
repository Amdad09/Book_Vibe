import Container from "@/components/shared/Container";
import BookCard from "@/components/ui/BookCard";
import { getBooks } from "@/lib/api/books";


const BooksPage = async () => {
    const books = await getBooks();
  return (
      <div className="py-12">
          <Container>
              <div className="mb-10">
                  <h1 className="text-4xl font-bold">Explore Books</h1>
                  <p className="mt-2 text-base-content/60">
                      Discover your next favorite book.
                  </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {books.map((book) => (
                      <BookCard key={book.bookId} book={book} />
                  ))}
              </div>
          </Container>
      </div>
  );
};

export default BooksPage;