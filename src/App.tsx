import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import BookList from "./components/BookList";
import { api } from "./services/api";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async (): Promise<void> => {
      const { data } = await api.get("books");

      setBooks(data);
    };

    getBooks();
  }, []);

  return (
    <>
      <Typography variant='h2' component='h2' data-test='heading'>
        DevBook!
      </Typography>

      <BookList data-test='book-list' books={books} />
    </>
  );
}

export default App;
