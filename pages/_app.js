import { AppContext } from "../context/AppContext";
import GlobalStyle from "../globalStyle";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../Layout/Layout";

const darkTheme = {
  body: "linear-gradient(244.24deg, #1E213F -24.95%, #0C0E20 101.84%)",
  wow: "#0C0E20",
  title: "#fff",
  bac: "linear-gradient(244.24deg, #1E213F -24.95%, #0C0E20 101.84%)",
  yello: "#838446"
};

const whiteTheme = {
  body: "linear-gradient(90deg, rgba(205,225,255,1) 0%, rgba(216,199,228,1) 100%)",
  title: "#0F044C",
  wow: "#fff",
  bac: "linear-gradient(90deg, rgba(205,225,255,1) 0%, rgba(216,199,228,1) 100%)",
  yello: "#dbde3d"
};

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");

  const AppContextValue = {
    theme,
    setTheme,
  };

  return (
    <AppContext.Provider value={AppContextValue}>
      <ThemeProvider theme={theme == "dark" ? darkTheme : whiteTheme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default MyApp;
