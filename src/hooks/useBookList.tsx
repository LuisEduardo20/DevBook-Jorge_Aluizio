import { useEffect, useState } from "react";
import { api } from "../services/api";

type Props = {
  initial: [];
};

const useBookList = (props: Props) => {
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

  return { books, loading, error };
};

export default useBookList;
