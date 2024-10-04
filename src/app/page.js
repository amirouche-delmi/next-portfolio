"use client";

import { useEffect, useRef, useState } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import LeftSider from "@/components/LeftSider";
import Projects from "@/components/Projects";
import Loading from "@/components/Loading"; // Assurez-vous d'importer votre composant de chargement

export default function Home() {
  const aboutRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Délai de 3 secondes

    return () => clearTimeout(timer); // Nettoyage du minuteur
  }, []);

  const handleScrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (loading) {
    return <Loading />; // Afficher le composant de chargement
  }

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
