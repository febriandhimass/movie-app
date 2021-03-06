import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  IconWrapper,
  InputContainer,
  InputStyled,
  Wrapper,
} from "./SearchBar.styled";

function SearchBar({ value, onChange, onKeyPress }) {
  return (
    <Wrapper>
      <InputContainer>
        <IconWrapper>
          <FontAwesomeIcon icon={faSearch} />
        </IconWrapper>
        <InputStyled
          placeholder="Find movie here"
          type="text"
          data-testid="qa-searchbar"
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </InputContainer>
    </Wrapper>
  );
}

export default SearchBar;
