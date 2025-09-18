import ThemeToggle from "../ThemeToggle";

const Header = () => {
  return (
    <header className="text-slate-400 dark:text-slate-200">
      <ThemeToggle />
    </header>
  );
};

export default Header;
