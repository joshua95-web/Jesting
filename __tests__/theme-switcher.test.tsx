import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeSwitcher from "@/components/shared/other/theme-switcher";

describe("ThemeSwitcher", () => {
  it("renders a theme switcher", () => {
    render(<ThemeSwitcher />);
    const themeSwitcher = screen.getByTestId("theme-switcher");
    expect(themeSwitcher).toBeInTheDocument();
  });

  it("renders a theme switcher with a label", () => {
    render(<ThemeSwitcher />);
    const themeSwitcher = screen.getByTestId(/theme/i);
    expect(themeSwitcher).toBeInTheDocument();
  });
  it();
});
