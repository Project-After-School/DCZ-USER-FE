import { createGlobalStyle } from "styled-components";

export const theme = {
  color: {
    white: "#fff",
    black: "#000000",
    BG: "#242424",
    main: {
      50: "#E0FAFF",
      100: "#B3F2FF",
      200: "#80EAFF",
      300: "#4DE1FF",
      400: "#26DAFF",
      500: "#00D4FF",
      600: "#00CFFF",
      700: "#00C9FF",
      800: "#00C3FF",
      900: "#00B9FF",
    },
    sub: {
      purple: "#AE55EC",
      green: "#01EC7F",
      red: "#FE5741",
    },
    gray: {
      50: "#EEEEEE",
      100: "#D4D4D4",
      200: "#B8B8B8",
      300: "#9B9B9C",
      400: "#858586",
      500: "#707071",
      600: "#686869",
      700: "#5D5D5E",
      800: "#535354",
      900: "#414142",
    },
  },
  font: {
    heading: {
      1: {
        size: "42px",
        fontWeight: "600",
      },
      2: {
        size: "32px",
        fontweight: "600",
      },
      3: {
        size: "24px",
        fontweight: "600",
      },
      4: {
        size: "20px",
        fontweight: "600",
      },
    },
    subTitle: {
      1: {
        size: "18px",
        fontweight: "600",
      },
      2: {
        size: "16px",
        fontweight: "600",
      },
      3: {
        size: "14px",
        fontweight: "600",
      },
    },
    body: {
      1: {
        size: "14px",
        fontweight: "500",
      },
      2: {
        size: "16px",
        fontweight: "500",
      },
      3: {
        size: "14px",
        fontweight: "500",
      },
      4: {
        size: "12px",
        fontweight: "500",
      },
    },
    caption: {
      1: {
        size: "18px",
        fontweight: "400",
      },
      2: {
        size: "16px",
        fontweight: "400",
      },
      3: {
        size: "12px",
        fontweight: "400",
      },
    },
    label: {
      1: {
        size: "18px",
        fontweight: "500",
      },
      2: {
        size: "16px",
        fontweight: "500",
      },
      3: {
        size: "12px",
        fontweight: "500",
      },
    },
    button: {
      1: {
        size: "18px",
        fontweight: "600",
      },
      2: {
        size: "16px",
        fontweight: "600",
      },
      3: {
        size: "12px",
        fontweight: "600",
      },
    },
  },
  "box-shadow": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
};

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    //color: ${theme.color.white};
    background-color: ${theme.color.BG};
  }
`;
