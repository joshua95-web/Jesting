import {
  waitFor,
  fireEvent,
  render,
  screen,
  act,
  getByText,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeSwitcher from "@/components/shared/other/theme-switcher";

// ("use client");

// describe("ThemeSwitcher", () => {
//   it("renders a theme switcher", () => {
//     render(<ThemeSwitcher />);
//     const themeSwitcher = screen.getByTestId("theme-switcher");
//     expect(themeSwitcher).toBeInTheDocument();
//   });

//   it("renders a theme switcher with a label", () => {
//     render(<ThemeSwitcher />);
//     const themeSwitcher = screen.getByTestId("theme-switcher");
//     expect(themeSwitcher).toBeInTheDocument();
//   });
//   it("renders a theme switcher with a label and icon", () => {
//     render(<ThemeSwitcher />);
//     const themeSwitcher = screen.getByTestId("theme-switcher");
//     const icon = screen.getByTestId("theme-switcher-icon");
//     expect(themeSwitcher).toContainElement(icon);
//   });
//   it("brings up popover when clicked", () => {
//     render(<ThemeSwitcher />);
//     const button = screen.getByTestId("popOverButton");
//     fireEvent.click(button);
//     waitFor(() =>
//       expect(screen.getByTestId("popOverPanel")).toBeInTheDocument()
//     );
//   });
//   it("changes light theme to dark theme on click", () => {
//     localStorage.setItem("theme", "light");
//     render(<ThemeSwitcher />);
//     const popOverButton = screen.getByTestId("popOverButton");
//     fireEvent.click(popOverButton);
//     waitFor(() =>
//       expect(screen.getByTestId("popOverPanel")).toBeInTheDocument()
//     );
//     const themes = [
//       {
//         value: "light",
//         icon: "sun-bright",
//         label: "Light",
//       },
//       {
//         value: "dark",
//         icon: "moon",
//         label: "Dark",
//       },
//       {
//         value: "system",
//         icon: "robot",
//         label: "System",
//       },
//     ];
//     const darkThemeLabel = themes.find((theme) => theme.value === "dark").label;
//     const darkThemeButton = screen.getByRole("button", {
//       name: darkThemeLabel,
//     });
//     if (darkThemeButton) {
//       fireEvent.click(darkThemeButton);
//     } else {
//       throw new Error("Dark theme button not found");
//     }
//   });
//   console.log(screen.debug());
//   // expect(document.documentElement.classList.contains("dark")).toBe(true);
// });

jest.mock("@/lib/utils/theme-setting", () => ({
  __esModule: true,
  default: jest.fn(() => {
    return { setting: "light", setSetting: jest.fn() };
  }),
}));

describe("ThemeSwitcher component", () => {
  it("redners correctly", () => {
    const { getByTestId } = render(<ThemeSwitcher />);
    const themeSwitcher = getByTestId("theme-switcher");
    expect(themeSwitcher).toBeInTheDocument();
  });

  it("toggles theme on button click", () => {
    const { getByTestId } = render(<ThemeSwitcher />);
    const popOverButton = getByTestId("popOverButton");
    const popOverPanel = getByTestId("popOverPanel");

    fireEvent.click(popOverButton);
    expect(popOverPanel).toBeInTheDocument();
  });
});
