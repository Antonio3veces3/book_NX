import React, {HTMLAttributes} from "react";
import styled from "styled-components";

const StyledNavigationList = styled.div`
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export const NavigationList = (props: HTMLAttributes <HTMLElement>) =>{
  return(
    <StyledNavigationList role="navigation">
      <ul>{props.children}</ul>
    </StyledNavigationList>
  );
};

export default NavigationList;

/*
import styled from 'styled-components';

eslint-disable-next-line 
export interface NavigationListProps {}

const StyledNavigationList = styled.div`
  color: pink;
`;

export function NavigationList(props: NavigationListProps) {
  return (
    <StyledNavigationList>
      <h1>Welcome to NavigationList!</h1>
    </StyledNavigationList>
  );
}

export default NavigationList;
*/