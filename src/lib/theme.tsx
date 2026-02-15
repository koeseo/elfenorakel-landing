// Dark-only theme - no toggling needed
export const useTheme = () => ({
  theme: "dark" as const,
  toggleTheme: () => {},
  setTheme: () => {},
});
