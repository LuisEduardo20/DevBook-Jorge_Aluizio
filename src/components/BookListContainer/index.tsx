import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import BookList from "../BookList";

type Props = {};

type Book = {
  name: string;
};

const BookListContainer = (props: Props) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getBooks = async (): Promise<void> => {
      setLoading(true);
      setError(false);

      try {
        const { data } = await api.get("books");
        setBooks(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getBooks();
  }, []);

  return <BookList books={books} />;
};

export default BookListContainer;
