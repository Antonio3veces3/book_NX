import { InterfaceBook } from 'libs/shared-models/src/lib/shared-models';
import React from 'react';
import styled from 'styled-components';
import { Book } from '../book/book';

//eslint-disable-next-line
export interface BooksProps {
  books: InterfaceBook[];
  //new Prop
  onAdd: (book: InterfaceBook) => void;
}

const StyledBooks = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export function Books({ books, onAdd }: BooksProps) {
  return (
    <StyledBooks>
      {books.map((book) => (
        //Pass down new callback prop
        <Book key={book.id} book={book} onAdd={onAdd} />
      ))}
    </StyledBooks>
  );
}

export default Books;
