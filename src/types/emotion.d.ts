import "@emotion/react";
import { ThemeColors } from "./theme";

declare module "@emotion/react" {
  export interface Theme {
    colors: ThemeColors;
  }
}
