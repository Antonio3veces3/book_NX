import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { BooksFeature } from '@myorg/books/feature';

import {
GlobalStyles,
Header,
Main,
NavigationItem,
NavigationList
} from '@myorg/ui';
export const App = () => {
return (
<>
<GlobalStyles />
<Header>
<h1>Bookstore</h1>
<NavigationList>
<NavigationItem>
  <Link to="/books">Books</Link>
</NavigationItem>
</NavigationList>
</Header>
<Main>
<Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route path="/books" element={<BooksFeature />} />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
</Main>
</>
);
};
export default App;
/*
const StyledApp = styled.div`
  //Here your style
`;
*/
/*
export const App = () => {
  return (
    <StyledApp>
      <header>
        <h1>Bookstore</h1>
      </header>

      {//START: routes}
      {// These routes and navigation have been generated for you}
      {//Feel free to move and update them to fit your needs }
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/feature">BooksFeature</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route path="/feature" element={<BooksFeature />} />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {// END: routes }
    </StyledApp>
  );
};

export default App;*/
