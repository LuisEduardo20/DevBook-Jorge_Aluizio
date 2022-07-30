import useBookList from "../../hooks/useBookList";
import BookList from "../BookList";

type Props = {};

const BookListContainer = (props: Props) => {
  const { books, loading, error } = useBookList({ initial: [] });

  return <BookList books={books} loading={loading} error={error} />;
};

export default BookListContainer;
