"use client";
import { useRef } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import LeftSider from "@/components/LeftSider";
import Projects from "@/components/Projects";

export default function Home() {
  const aboutRef = useRef(null);

  const handleScrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header />
      <div className="bg-primary px-40 sm:px-5">
        <Intro scrollToAbout={handleScrollToAbout} />
        <About ref={aboutRef} />
        <Experiences />
        <Projects />
        <Contact />
        <Footer />
        <LeftSider /> 
      </div>
    </div>
  );
}
