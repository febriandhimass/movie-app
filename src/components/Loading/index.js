import React from "react";
import logo from "assets/images/logo.svg";
import { LoadingWrapper, LoadingImage } from './Loading.styled';

function Loading() {
  return (
    <LoadingWrapper>
      <LoadingImage src={logo} alt="loading-logo" />
    </LoadingWrapper>
  );
}

export default Loading;
