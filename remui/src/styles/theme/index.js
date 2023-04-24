import { createTheme } from "@mui/material/styles";
export const Colors = {
    primary: "#5F2C3E",
    secondary: "#D1ADCC",
    success: "#4CAF50",
    info: "#00a2ff",
    danger: "#FF5772",
    warning: "#FFC107",
    dark: "#0E1B20",
    light: "#aaa",
    muted: "#ABAFB3",
    border: "#DDDFE1",
    inverse: "#2FED4A",
    shaft: "#333",
    ////////////
    /// Grays
    ////////////
    dim_grey: "#696969",
    dove_gray: "#d5d5d5",
    body_bg: "#f3f6f9",
    light_gray: "#rgb(230, 230, 230)",
    ////////////
    /// Solid Color
    ////////////
    white: "#fff",
    black: "#000"
};


const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        }
    },

    compoenents: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElvation: true
            }
        }
    }
});

export default theme;