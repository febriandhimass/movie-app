import React from "react";
import { HeadingText, NormalText } from "./Text.styled";
import PropTypes from "prop-types";

const propTypes = {
  /**
   * Set color text
   */
  color: PropTypes.string,
  /**
   * Set fontSize text
   */
  fontSize: PropTypes.number,
  /**
   * Set text textAlign
   */
  textAlign: PropTypes.oneOf(["center", "justify", "left", "right"]),
  /**
   * set variant text
   */
  variant: PropTypes.oneOf(["heading", "normal"]),
};

const defaultProps = {
  color: "#333333",
  textAlign: "left",
  variant: "normal",
};

function Text(props) {
  const {
    color,
    className,
    children,
    fontSize,
    textAlign,
    variant,
    ...restProps
  } = props;

  return variant === "heading" ? (
    <HeadingText
      color={color}
      data-testid="qa-heading-text"
      className={className}
      fontSize={fontSize}
      textAlign={textAlign}
      {...restProps}
    >
      {children}
    </HeadingText>
  ) : (
    <NormalText
      color={color}
      className={className}
      data-testid="qa-normal-text"
      fontSize={fontSize}
      textAlign={textAlign}
      {...restProps}
    >
      {children}
    </NormalText>
  );
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
