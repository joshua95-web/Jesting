import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { act } from "@testing-library/react";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /hello world/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
