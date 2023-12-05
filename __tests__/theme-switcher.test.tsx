import {
  waitFor,
  fireEvent,
  render,
  screen,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeSwitcher from "@/components/shared/other/theme-switcher";

("use client");

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
  it("brings up popover when clicked", () => {
    render(<ThemeSwitcher />);
    const button = screen.getByTestId("popOverButton");
    fireEvent.click(button);
    waitFor(() =>
      expect(screen.getByTestId("popOverPanel")).toBeInTheDocument()
    );
  });
  it("changes light theme to dark theme on click", () => {
    localStorage.setItem("theme", "light");
    render(<ThemeSwitcher />);
    const button = screen.getByTestId("popOverButton");
    fireEvent.click(button);
    waitFor(() =>
      expect(screen.getByTestId("popOverPanel")).toBeInTheDocument()
    );
    const darkThemeButton = screen.getByTestId("darkThemeButton");
  });
});
