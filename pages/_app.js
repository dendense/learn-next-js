// Import CakraUI Provider
// import { ChakraProvider } from "@chakra-ui/react";
// Custom SASS
// import "../styles/index.scss";

// Ini Buat Komponen
import Header from "../components/Header";
import Footer from "../components/Footer";

function ShowcaseApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default ShowcaseApp;
