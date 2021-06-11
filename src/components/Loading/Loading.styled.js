import styled from "styled-components";

export const LoadingWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100px;
  margin: auto;
`;

export const LoadingImage = styled.img`
  margin: -100px auto 0 auto;
  display: inherit;
  align-self: center;
  height: 100px;
  width: 100px;

  @media (prefers-reduced-motion: no-preference) {
    animation: spin infinite 2s linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;