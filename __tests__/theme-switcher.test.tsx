import {
  waitFor,
  fireEvent,
  render,
  screen,
  act,
} from "@testing-library/react";
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
  it("brings up popover when clicked", () => {
    render(<ThemeSwitcher />);
    const button = screen.getByTestId("popOverButton");
    fireEvent.click(button);
    waitFor(() =>
      expect(screen.getByTestId("popOverPanel")).toBeInTheDocument()
    );
  });
  it("changes theme to selected theme on click", () => {
    render(<ThemeSwitcher />);
    const button = screen.getByTestId("popOverButton");
    fireEvent.click(button);
    waitFor(() =>
      expect(screen.getByTestId("popOverPanel")).toBeInTheDocument()
    );
    const preClick = screen.getByTestId("theme-switcher-icon");
    const key = screen.getByTestId("key");
    fireEvent.click(key);
    waitFor(() => expect(preClick).not.toBe(screen.getByTestId("key")));
  });
});
