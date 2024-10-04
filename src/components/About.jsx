import React, { forwardRef } from "react";
import SectionTitle from "./SectionTitle";

const skills = [
  "JavaScript",
  "React",
  "Node",
  "Express",
  "MongoDB",
  "Redux",
  "Sass",
  "Material UI",
  "Postman",
  "Git & GitHub",
];

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <SectionTitle title="À propos" />

      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-2/5 mr-5 sm:w-full sm:mr-0">
          {/* Assurez-vous que le script Lottie est inclus dans votre projet */}
          <lottie-player
            src="https://assets4.lottiefiles.com/private_files/lf30_obidsi0t.json"
            background="transparent"
            speed="1"
            autoplay
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 w-3/5 sm:w-full">
          <p className="text-white">
            Bonjour ! Je suis Amirouche DELMI, ingénieur en logiciel et
            développeur Full Stack avec un Master 2 en Ingénierie Logicielle de
            l'Université des Sciences et de la Technologie Houari Boumediene.
            Mon expertise inclut la programmation fonctionnelle (C), la
            programmation orientée objet (Java), la gestion avancée de bases de
            données (Oracle, MySQL, MongoDB), ainsi que les systèmes
            d&apos;exploitation et la conception de logiciels. À l&apos;université, j&apos;ai
            également étudié Python et PHP.
          </p>
          <p className="text-white">
            Mon projet de fin d&apos;études chez Algérie Télécom, utilisant la
            technologie MERN stack, reflète ma capacité à créer des solutions
            logicielles modernes. Passionné par l&apos;innovation technologique, je
            recherche toujours à élargir mes compétences et à contribuer à des
            projets ambitieux et innovants.
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Voici quelques technologies avec lesquelles j&apos;ai récemment travaillé :
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div key={index} className="border border-tertiary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

// Ajouter un nom d'affichage
About.displayName = "About";

export default About;
