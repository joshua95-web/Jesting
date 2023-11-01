import ThemeSwitcher from "@/components/shared/other/theme-switcher";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-24"
      data-testid="Home"
    >
      <h1>Hello World</h1>
      <ThemeSwitcher data-testid="theme-switcher" />
    </main>
  );
}
