import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styled";

const propTypes = {
  /**
   * Set button whether outline or not
   */
  outline: PropTypes.bool,
};

const defaultProps = {
  outline: false,
};

function Button(props) {
  const { children, className, outline, ...restProps } = props;

  return (
    <ButtonStyled className={className} outline={outline} {...restProps}>
      {children}
    </ButtonStyled>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
