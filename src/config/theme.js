import { Platform } from "react-native";

const theme = {
  fontFamily: Platform.select({
    android: "Roboto",
    ios: "Arial",
    default: "System",
  }),

  colors: {
    primary: "#FFFAFA",
    secondary: "#24292e",
    text: "#333",
  },
};

export default theme;
