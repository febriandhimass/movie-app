import styled from 'styled-components';

export const WrapperMovieDetail = styled.div`
  border: 1px solid #F3F5F6;
  box-sizing: border-box;
  box-shadow: 0px 2px 6px rgb(222 222 222 / 48%);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: 24px;
  padding: 24px;
  padding-bottom: 12px;
`;

export const MovieImage = styled.div`
  text-align: center;

  img {
    width: 100%;
  }

  @media (min-width: 400px) {
    img {
      width: auto;
    }
  }
`

export const MovieDesc = styled.div`
  flex-basis: 1;
  align-items: left;
  justify-content: left;
`