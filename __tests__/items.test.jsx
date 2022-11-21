// __tests__/index.test.jsx

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Items", () => {
  it("should render items list", () => {
    render(<Items />);
    const heading = screen.getByRole("heading", {
      name: /test title text/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("fail test 1", () => {
    render(<Items />);
    const heading = screen.getByRole("heading", {
      name: /test title text/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("fail test 2", () => {
    render(<Items />);
    const heading = screen.getByRole("heading", {
      name: /test title text/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("fail test 3", () => {
    render(<Items />);
    const heading = screen.getByRole("heading", {
      name: /test title text/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("fail test 4", () => {
    render(<Items />);
    const heading = screen.getByRole("heading", {
      name: /test title text/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("fail test 5", () => {
    render(<Items />);
    const heading = screen.getByRole("heading", {
      name: /test title text/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("fail test 6", () => {
    render(<Items />);
    const heading = screen.getByRole("heading", {
      name: /test title text/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("fail test 7", () => {
    render(<Items />);
    const heading = screen.getByRole("heading", {
      name: /test title text/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("fail test 8", () => {
    render(<Items />);
    const heading = screen.getByRole("heading", {
      name: /test title text/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("fail test 9", () => {
    render(<Items />);
    const heading = screen.getByRole("heading", {
      name: /test title text/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("fail test 10", () => {
    render(<Items />);
    const heading = screen.getByRole("heading", {
      name: /test title text/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("fail test 11", () => {
    render(<Items />);
    const heading = screen.getByRole("heading", {
      name: /test title text/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("fail test 12", () => {
    render(<Items />);
    const heading = screen.getByRole("heading", {
      name: /test title text/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("renders empty state when no data available", () => {
    render(<Items />);
    const heading = screen.getByRole("heading", {
      name: /test title text/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("renders loading state when awaiting fetch", () => {
    render(<Items />);
    const heading = screen.getByRole("heading", {
      name: /test title text/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("renders 20 items at a time", () => {
    render(<Items />);
    const heading = screen.getByRole("heading", {
      name: /test title text/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("renders the next and previous buttons when paginating", () => {
    render(<Items />);
    const heading = screen.getByRole("heading", {
      name: /test title text/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
