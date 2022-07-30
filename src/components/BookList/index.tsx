import { Typography } from "@material-ui/core";

type Props = {
  books: { name: string }[];
  loading: boolean;
  error: boolean;
};

const BookList = ({ books }: Props) => {
  return (
    <div data-test='book-list'>
      {books.map((book) => (
        <div className='book-item'>
          <Typography variant='h5' component='h5' className='titles'>
            {book.name}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default BookList;
