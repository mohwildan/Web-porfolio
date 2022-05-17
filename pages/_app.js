import { AppContext } from "../context/AppContext";
import GlobalStyle from "../globalStyle";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../Layout/Layout";

const darkTheme = {
  body: "linear-gradient(244.24deg, #1E213F -24.95%, #0C0E20 101.84%)",
  wow: "#0C0E20",
  title: "#fff",
};

const whiteTheme = {
  body: "#fff",
  title: "#0F044C",
  wow: "#fff",
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
