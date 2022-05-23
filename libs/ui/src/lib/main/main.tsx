import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
const StyledMain = styled.main`
  padding: 0 1rem;
  width: 100%;
  max-width: 960px;
`;
export const Main = (props: HTMLAttributes<HTMLElement>) => (
<StyledMain>{props.children}</StyledMain>
);
export default Main;
/*import styled from 'styled-components';

// eslint-disable-next-line
export interface MainProps {}

const StyledMain = styled.div`
  color: pink;
`;

export function Main(props: MainProps) {
  return (
    <StyledMain>
      <h1>Welcome to Main!</h1>
    </StyledMain>
  );
}

export default Main;*/
