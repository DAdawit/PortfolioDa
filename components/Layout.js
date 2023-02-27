import NavBar from "./NavBar/NavBar";
import Footer from "./NavBar/Footer";
import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logo.png" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="content">
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
