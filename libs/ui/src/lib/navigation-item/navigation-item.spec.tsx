import React, {HTMLAttributes, LiHTMLAttributes} from "react";
import styled from "styled-components";

const StyledNavigationItem = styled.li`
  margin-right: 1rem;
`;

export const NavigationItem = (props: LiHTMLAttributes<HTMLLIElement>) =>{
  return <StyledNavigationItem>{props.children}</StyledNavigationItem>
};

export default NavigationItem;
/*import { render } from '@testing-library/react';

import NavigationItem from './navigation-item';

describe('NavigationItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationItem />);
    expect(baseElement).toBeTruthy();
  });
});
*/