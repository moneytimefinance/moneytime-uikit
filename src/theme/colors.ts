import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#39c36f",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
  backgroundRed: '#f2c3a7'
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  menuBackground: "rgb(254,251,214,0.95)",
  backgroundDisabled: "#d7ebc6",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#d6e9c4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#68c829",
  textDisabled: "#BDC2C4",
  textSubtle: "#a38200",
  borderColor: "#d7ebc6",
  card: "#68c829",
  
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#100C18",
  menuBackground: "rgb(0,0,0,0.49)",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#A28BD4",
  borderColor: "#524B63",
  card: "#68c829",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
