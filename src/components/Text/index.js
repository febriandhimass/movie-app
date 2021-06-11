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
  variant: PropTypes.oneOf(["heading", "normal"]).isRequired,
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
      fontSize={fontSize}
      className={className}
      textAlign={textAlign}
      {...restProps}
    >
      {children}
    </HeadingText>
  ) : (
    <NormalText
      color={color}
      fontSize={fontSize}
      className={className}
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
