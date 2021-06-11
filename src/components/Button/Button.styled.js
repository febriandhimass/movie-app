import styled, { css } from "styled-components";

export const outlineProps = ({ outline }) => css`
  ${outline
    ? css`
        border: 1px solid #384350;
        background: #ffffff;
        color: #384350;
      `
    : css`
        border: none;
        background: #384350;
        color: #ffffff;
      `}
`;

export const ButtonStyled = styled.button`
  border-radius: 8px;
  cursor: pointer;
  height: 42px;
  padding: 12px;

  ${outlineProps};
`;
