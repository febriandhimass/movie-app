import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 420px;
  margin: 0 auto;
  padding: 16px 0;
`

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: stretch;
`

export const IconWrapper = styled.div`
  background: #ffffff;
  padding: 10px;
  border: 1px solid #d0d2d3;
  border-radius: 4px 0 0 4px;
`;

export const InputStyled = styled.input`
  flex: 1;
  width: 100%;
  padding: 10px;
  outline: none;
  border: 1px solid #d0d2d3;
  border-radius: 0 4px 4px 0;
  border-left: none;
`