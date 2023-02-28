import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "components/Hero";
import About from "components/about";
import Services from "components/services";
import Technologies from "components/techonlogies";
import Expriance from "components/expriance";
import Contact from "components/constact";
import Referances from "components/reference";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="expriance">
        <Expriance />
      </div>
      <div id="technologies">
        <Technologies />
      </div>
      {/* <div id="reference">
        <Referances />
      </div>  */}
      <div id="contanct">
        <Contact />
      </div>
    </>
  );
}
