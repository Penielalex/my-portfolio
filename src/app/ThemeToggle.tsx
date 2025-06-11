interface ThemeToggleProps {
  onClick: () => void;
  mode: string;
}

// Import Share Tech Mono font locally in your component (e.g., in page.tsx or wherever you want to use it)



export const ThemeToggle: React.FC<ThemeToggleProps> = ({ onClick, mode }) => {
  return (
    <span onClick={onClick} className="theme-toggle-text text-theme cursor-pointer text-5xl font-sharemono">
  {mode === "dark" ? "Let There Be Light!" : "Hello Darkness, My Old Friend"}
</span>
  );
};
