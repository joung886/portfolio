import { createContext, useContext } from "react";
import type { ThemeColors } from "../types/theme";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

const darkTheme: ThemeColors = {
  background: "#0a0a0a",
  text: "#ffffff",
  primary: "#3182ce",
  secondary: "#2c5282",
  accent: "#4299e1",
  surface: "#1a202c",
  border: "rgba(255, 255, 255, 0.1)",
};

interface ThemeContextType {
  colors: ThemeColors;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={{ colors: darkTheme }}>
      <EmotionThemeProvider theme={{ colors: darkTheme }}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
