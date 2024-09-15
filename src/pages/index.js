import Head from "next/head";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/components/Navbar";
import Showcase from "@/components/Showcase";
import About from "@/components/About";
import JoinNow from "@/components/JoinNow";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>OMEN</title>
        <meta
          name="description"
          content="OMEN, the only bot you'll ever need"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut-icon" href="/omen/favicon.ico/" />
      </Head>
      <Navbar />
      <Showcase />
      <About />
      <JoinNow />
      <Footer />
    </>
  );
}
