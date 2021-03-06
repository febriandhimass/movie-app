import styled from "styled-components";

export const WrapperMovieList = styled.div`
  padding: 16px;
`;

export const MovieItem = styled.div`
  margin-bottom: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  border: 1px solid #f3f5f6;
  box-sizing: border-box;
  box-shadow: 0px 2px 6px rgb(222 222 222 / 48%);
  border-radius: 8px;
`;

export const MovieImage = styled.div`
  flex-basis: 1;
  text-align: center;
  cursor: pointer;
`;

export const MovieDesc = styled.div`
  flex-basis: 1;
  margin: auto 12px;
  text-align: center;
`;
