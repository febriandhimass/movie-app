import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import SearchBar from "./index";

describe("SearchBar component", () => {
  describe("SearchBar rendering", () => {
    it("should render without error", () => {
      render(<SearchBar onChange={() => {}} />);
      expect(screen.getByTestId("qa-searchbar")).toBeInTheDocument();
    });
  });

  describe("SearchBar input value", () => {
    it("should have value if value is given", () => {
      render(<SearchBar value="input value" onChange={() => {}} />);
      expect(screen.getByTestId("qa-searchbar").value).toBe("input value");
    });
  });

  describe("SearchBar functionality", () => {
    it("should update on change", () => {
      render(<SearchBar onChange={() => {}} />);
      const searchBar = screen.getByTestId("qa-searchbar");
      fireEvent.change(searchBar, { target: { value: "test" } });
      expect(searchBar.value).toBe("test");
    });
  });
});
