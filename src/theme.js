import { createTheme } from "@mui/material"

const scrollbar_bg_color = "#959595"
const scrollbar_bg_color_1 = "#ddd"
const scrollbar_bg_color_2 = "#bbb"

export const theme = createTheme({
    typography: {
        fontFamily: 'Gilroy',
        fontSize: 12,
        button: {
            textTransform: "none",
        },
    },
    palette: {
        primary: {
            main: "#0f96eb",
        },
        secondary: {
            main: "#edf2ff",
        },
    },

    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    maxWidth: "1440px",
                    paddingLeft: "20px !important",
                    paddingRight: "20px !important",
                }
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollbarColor:
                        scrollbar_bg_color_2 + " " + scrollbar_bg_color_1,
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        backgroundColor: scrollbar_bg_color_1,
                        height: 16,
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb":
                        {
                            borderRadius: 8,
                            backgroundColor: scrollbar_bg_color_2,
                            minHeight: 20,
                            border: "3px solid " + scrollbar_bg_color_1,
                        },
                    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
                        {
                            backgroundColor: scrollbar_bg_color,
                        },
                    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
                        {
                            backgroundColor: scrollbar_bg_color,
                        },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
                        {
                            backgroundColor: scrollbar_bg_color,
                        },
                    "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner":
                        {
                            backgroundColor: scrollbar_bg_color_1,
                        },
                },
            },
        },

        MuiInputBase: {
            styleOverrides: {
                root: { padding: 0 },
            },
        },
    },
})
