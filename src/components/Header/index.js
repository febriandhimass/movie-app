import React from "react";
import { Wrapper } from "./Header.styled";
import Text from "../Text";

function Header({ children }) {
  return (
    <Wrapper>
      <Text color="#ffffff" variant="heading" textAlign="center" fontSize={32}>
        Movies
      </Text>
    </Wrapper>
  );
}

export default Header;
