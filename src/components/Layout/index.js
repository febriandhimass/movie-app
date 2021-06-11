import React from "react";
import { Content, Wrapper } from "./Layout.styled";
import Header from "../Header";

function Layout({ children }) {
  return (
    <Wrapper>
      <Content>
        <Header />
        {children}
      </Content>
    </Wrapper>
  );
}

export default Layout;
