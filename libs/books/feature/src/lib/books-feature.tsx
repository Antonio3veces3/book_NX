import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getBooks } from '@myorg/books/data-access';
import { Books, Book } from '@myorg/books/ui';
import { InterfaceBook } from '../../../../shared-models/src/lib/shared-models';

export const BooksFeature = () => {
  const [books, setBooks] = useState([{}] as InterfaceBook[]);

  useEffect(() => {
    getBooks().then(setBooks).catch(console.log);
  }, []);

  return (
    <>
      <h2>Books</h2>
      <Books
        books={books}
        onAdd={(book) => alert(`Added ${book.title} to Cart`)}
      />
    </>
  );
};

export default BooksFeature;

/*
// eslint-disable-next-line
export interface BooksFeatureProps {}

const StyledBooksFeature = styled.div`
  color: pink;
`;

export function BooksFeature(props: BooksFeatureProps) {
  return (
    <StyledBooksFeature>
      <h1>Welcome to BooksFeature!</h1>
    </StyledBooksFeature>
  );
}

export default BooksFeature;*/
