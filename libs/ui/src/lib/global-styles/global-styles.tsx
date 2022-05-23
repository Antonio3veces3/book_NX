import React from 'react';
import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
body {
margin: 0;
font-size: 16px;
font-family: sans-serif;
}
* {
box-sizing: border-box;
}
`;
export default GlobalStyles;

/*import styled from 'styled-components';

//eslint-disable-next-line 
export interface GlobalStylesProps {}

const StyledGlobalStyles = styled.div`
body {
  margin: 0;
  font-size: 16px;
  font-family: sans-serif;
  }
  * {
  box-sizing: border-box;
  }
`;

export function GlobalStyles(props: GlobalStylesProps) {
  return (
    <StyledGlobalStyles>
      <h1>Welcome to GlobalStyles!</h1>
    </StyledGlobalStyles>
  );
}

export default GlobalStyles;*/
