import React from "react";
import { render, screen } from "@testing-library/react";

import Text from "./index";
import { checkProps } from "helpers/test";

describe("Text component", () => {
  describe("Text rendering", () => {
    it("should render Text without error", () => {
      render(<Text>Text</Text>);
      expect(screen.getByTestId("qa-normal-text")).toBeInTheDocument();
    });
  });

  describe("Text Functionality", () => {
    it("should show children of Text", () => {
      render(<Text>This is Text</Text>);
      expect(screen.getByTestId("qa-normal-text")).toHaveTextContent("This is Text");
    });
  });

  describe("Text propTypes", () => {
    it("should not throw warning when expected color props are provided", () => {
      checkProps(Text, { color: "#ffffff" }, "Text");
    });
    it("should not throw warning when expected fontSize props are provided", () => {
      checkProps(Text, { fontSize: 18 }, "Text");
    });
    it("should not throw warning when expected textAlign props are provided", () => {
      checkProps(Text, { textAlign: "center" }, "Text");
    });
    it("should not throw warning when expected variant props are provided", () => {
      checkProps(Text, { variant: "heading" }, "Text");
    });
  });

  describe("Text props", () => {
    it("should have custom className when provided", () => {
      render(<Text className="test-class">Text</Text>);
      expect(screen.getByTestId("qa-normal-text").className).toContain("test-class");
    });
  });

  describe("Text Style", () => {
    it("should have default style when there is no props (default)", () => {
      render(<Text>Text</Text>);
      const expectedStyle = `
        color: #333333;
        font-size: 14px;
        text-align: left;
      `;
      expect(screen.getByTestId("qa-normal-text")).toHaveStyle(expectedStyle);
    });

    it("should have heading default style when props variant: heading", () => {
      render(<Text variant="heading">Text</Text>);
      const expectedStyle = `
        color: #333333;
        font-size: 28px;
        text-align: left;
      `;
      expect(screen.getByTestId("qa-heading-text")).toHaveStyle(expectedStyle);
    });

    it("should have font-size 12px when there is props fontSize: 12", () => {
      render(<Text fontSize={12}>Text</Text>);
      const expectedStyle = `
        font-size: 12px;
      `;
      expect(screen.getByTestId("qa-normal-text")).toHaveStyle(expectedStyle);
    });

    it("should have color white when there is props color: white", () => {
      render(<Text color="white">Text</Text>);
      const expectedStyle = `
        color: white;
      `;
      expect(screen.getByTestId("qa-normal-text")).toHaveStyle(expectedStyle);
    });

    it("should have text-align center when there is props textAlign: center", () => {
      render(<Text textAlign="center">Text</Text>);
      const expectedStyle = `
        text-align: center;
      `;
      expect(screen.getByTestId("qa-normal-text")).toHaveStyle(expectedStyle);
    });
  });
});
