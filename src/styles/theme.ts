import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { yellow } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: yellow[600],
    },
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontFamily: "Dimbo, Arial",
    fontSize: 16,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },
    MuiButtonBase: {
      root: {
        backgroundColor: "#fff",
        justifyContent: "center",
      },
    },
    MuiButton: {
      root: {
        textTransform: undefined,
        fontSize: "1.5rem",
        color: "black",
        borderRadius: 0,
      },
      contained: {
        borderRadius: "0.6rem",
      },
      text: {
        padding: "0.5rem 1rem",
      },
      startIcon: {
        marginRight: 8,
      },
      endIcon: {
        marginLeft: 8,
      },
      containedPrimary: {
        "&:hover": {
          background:
            "linear-gradient(94.35deg, #efc406 4.43%, rgba(0, 208, 254, 0.6) 105.09%)",
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
