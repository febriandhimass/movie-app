import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import Button from "./index";
import { checkProps } from "helpers/test";

describe("Button component", () => {
  describe("Button rendering", () => {
    it("should render Button without error", () => {
      render(<Button>Button</Button>);
      expect(screen.getByTestId("qa-button")).toBeInTheDocument();
    });
  });

  describe("Button Functionality", () => {
    it("should show children of button", () => {
      render(<Button>This is Button</Button>);
      expect(screen.getByTestId("qa-button")).toHaveTextContent(
        "This is Button"
      );
    });

    it('should response click on button when clicked', () => {
      const spy = jest.fn();
      render(<Button onClick={() => spy("x")} />);
      fireEvent.click(screen.getByTestId("qa-button"));
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith("x");
    });
  });

  describe("Button propTypes", () => {
    it("should not throw warning when expected outline props are provided", () => {
      checkProps(Button, { outline: true }, "Button");
    });
  });

  describe("Button props", () => {
    it("should have custom className when provided", () => {
      render(<Button className="test-class">Button</Button>);
      expect(screen.getByTestId("qa-button").className).toContain("test-class");
    });
  });

  describe("Button Style", () => {
    it("should have no outline style when there is no outline props", () => {
      render(<Button>Button</Button>);
      const expectedStyle = `
        border: none;
        background: #384350;
        color: #ffffff;
      `;
      expect(screen.getByTestId("qa-button")).toHaveStyle(expectedStyle);
    });

    it("should have outline style when props outline: true", () => {
      render(<Button outline={true}>Button</Button>);
      const expectedStyle = `
        border: 1px solid #384350;
        background: #ffffff;
        color: #384350;
      `;
      expect(screen.getByTestId("qa-button")).toHaveStyle(expectedStyle);
    });
  });
});
