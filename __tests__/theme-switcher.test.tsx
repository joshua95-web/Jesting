import { fireEvent, render, screen } from "@testing-library/react";
import ThemeSwitcher from "@/components/shared/other/theme-switcher";
import { act } from "@testing-library/react";

test("renders different themes to choose from", () => {
  render(<ThemeSwitcher />);
  act(() => {
    fireEvent.click(screen.getByTestId("theme-switcher"));
  });
});
