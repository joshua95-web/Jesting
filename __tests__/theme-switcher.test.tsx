import { fireEvent, render, screen } from "@testing-library/react";
import ThemeSwitcher from "@/src/components/theme-switcher";

test("renders different themes to choose from", () => {
  render(<ThemeSwitcher />);
  fireEvent.click(screen.getByTestId("theme-switcher"));
});
