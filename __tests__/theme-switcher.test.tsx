import { render, screen, act } from "@testing-library/react";
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
    const themeSwitcher = screen.getByTestId("theme-switcher");
    expect(themeSwitcher).toBeInTheDocument();
  });
  it("renders a theme switcher with a label and icon", () => {
    render(<ThemeSwitcher />);
    const themeSwitcher = screen.getByTestId("theme-switcher");
    const icon = screen.getByTestId("theme-switcher-icon");
    expect(themeSwitcher).toContainElement(icon);
  });
  it("renders a theme switcher with a label and icon with a theme", () => {
    render(<ThemeSwitcher />);
    const themeSwitcher = screen.getByTestId("theme-switcher");
    const icon = screen.getByTestId("theme-switcher-icon");
    expect(themeSwitcher).toContainElement(icon);
    expect(screen.getByRole("icon")).toHaveAttribute(
      "href",
      "/sprites/regular.svg#sun-bright"
    );
  });
});
