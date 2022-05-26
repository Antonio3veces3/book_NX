import React from 'react';
import styled from 'styled-components';
import { Button } from '@myorg/ui';
export interface BookProps {
book: any;
//new Prop
onAdd: (book: any) => void;
}
const StyledBook = styled.div`
display: flex;
align-items: center;
border-bottom: 1px solid #ccc;
&:last-child {
border-bottom: none;
}
> span {
padding: 1rem 0.5rem;
margin-right: 0.5rem;
}
.title {
flex: 1;
}
.price {
color: #478d3c;
}

.rating {
  color: #967D0D;
}
`;

export const Book = ({ book, onAdd }: BookProps) => {
  return (
  <StyledBook>
  <span className="title">
  <b>{book.id} - </b>{book.title} by <em>{book.author}</em>
  </span>
  <span className='rating'>{book.rating}</span>
  <span className="price">${book.price}</span>
  <span>
    <Button onClick={()=> onAdd(book)}>Add to Cart</Button>
  </span>
  </StyledBook>
  );
  };
  export default Book;