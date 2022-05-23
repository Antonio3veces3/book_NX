import React, {LiHTMLAttributes} from "react";
import styled from "styled-components";

const StyledNavigationItem = styled.li`
  margin-right: 1rem;
`;

export const NavigationItem = (props: LiHTMLAttributes<HTMLLIElement>) =>{
  return (
    <StyledNavigationItem>{props.children}</StyledNavigationItem>
  );
};

export default NavigationItem;


/*import styled from 'styled-components';

// eslint-disable-next-line
export interface NavigationItemProps {}

const StyledNavigationItem = styled.div`
  color: pink;
`;

export function NavigationItem(props: NavigationItemProps) {
  return (
    <StyledNavigationItem>
      <h1>Welcome to NavigationItem!</h1>
    </StyledNavigationItem>
  );
}

export default NavigationItem;*/
