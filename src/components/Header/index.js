import React from 'react';
import { Text, Wrapper } from './Header.styled';

function Header({ children }) {
  return (
    <Wrapper>
      <Text>{children}</Text>
    </Wrapper>
  );
}

export default Header;