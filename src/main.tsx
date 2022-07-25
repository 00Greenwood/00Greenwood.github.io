// Only need to import the font once at the entry point.
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme } from "@mui/material";
import { Website } from "./Website";

const theme = createTheme({
  palette: {
    primary: {
      light: "#718792",
      main: "#455a64",
      dark: "#1c313a",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Website />
  </React.StrictMode>
);
