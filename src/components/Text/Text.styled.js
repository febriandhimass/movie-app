import styled, { css } from "styled-components";

export const variantProps = ({ color, fontSize, textAlign }) => css`
  font-family: Lato, Helvetica, Arial, sans-serif !important;
  font-style: normal;
  line-height: 150%;
  ${color && css` color: ${color} `};
  ${fontSize && css` font-size: ${fontSize}px `};
  ${textAlign && css` text-align: ${textAlign} `};
`;

export const HeadingText = styled.h2`
  font-size: 28px;
  ${variantProps};
`;

export const NormalText = styled.p`
  font-size: 14px;
  ${variantProps};
`;
