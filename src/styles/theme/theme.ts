import { ThemeTypes } from "../../utils/types/theme";

export const theme: ThemeTypes = {
  theme: "light",
  colors: {
    background: {
      default: "#E5E5E5",
      light: "#DBDAD8",
      dark: "#000000",
    },
    typography: {
      default: "#000000",
      light: "#FFFFFF",
      dark: "#3c948b",
    },
  },
  typography: {
    weight: {
      light: "300",
      regular: "400",
      medium: "500",
      bold: "600",
    },
    size: {
      font64: "4rem",
      font40: "2.5rem",
      font32: "2rem",
      font24: "1.5rem",
      font20: "1.1rem",
      font16: "1rem",
      font14: "0.8rem",
      font12: "0.6rem",
    },
  },
  media: {
    mobile: "(max-width: 599px)",
    desktop: "(min-width: 600px)",
  },
};
