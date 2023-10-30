import { fireEvent, render, screen } from "@testing-library/react";
import ThemeSwitcher from "@/components/shared/other/theme-switcher";
import { act } from "@testing-library/react";

test("renders different themes to choose from", () => {
  render(<ThemeSwitcher />);
  act(() => {
    fireEvent.click(screen.getByTestId("theme-switcher"));
  });
  <div
    class="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-3 opacity-100 translate-y-0"
    id="headlessui-popover-panel-:rf:"
    tabindex="-1"
    data-headlessui-state="open"
  >
    <div class="overflow-hidden rounded-lg shadow-lg">
      <div class="relative bg-white grid grid-cols-3 gap-3 p-3">
        <div class="fixed left-1/2 -top-3 text-white -translate-x-1/2">
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            <use
              xlink:href="/sprites/solid.svg#caret-up"
              fill="currentColor"
            ></use>
          </svg>
        </div>
        <button class="flex flex-col items-center justify-center text-slate-900 hover:bg-slate-100 rounded-lg p-3 text-xs transition-colors duration-150 ease-in-out bg-transparent">
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            <use
              xlink:href="/sprites/regular.svg#sun-bright"
              fill="currentColor"
            ></use>
          </svg>
          <span class="mt-2">Light</span>
        </button>
        <button class="flex flex-col items-center justify-center text-slate-900 hover:bg-slate-100 rounded-lg p-3 text-xs transition-colors duration-150 ease-in-out bg-purple-100 dark:bg-purple-800 dark:text-white">
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            <use
              xlink:href="/sprites/regular.svg#moon"
              fill="currentColor"
            ></use>
          </svg>
          <span class="mt-2">Dark</span>
        </button>
        <button class="flex flex-col items-center justify-center text-slate-900 hover:bg-slate-100 rounded-lg p-3 text-xs transition-colors duration-150 ease-in-out bg-transparent">
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            <use
              xlink:href="/sprites/regular.svg#robot"
              fill="currentColor"
            ></use>
          </svg>
          <span class="mt-2">System</span>
        </button>
      </div>
    </div>
  </div>;
});
