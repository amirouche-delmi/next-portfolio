function Intro({ scrollToAbout }) {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-5 sm:gap-4 sm:h-[100vh]">
      <h1 className="text-white">Bonjour, Je suis</h1>
      <h1 className="text-6xl sm:text-3xl text-secondary font-semibold">
        Amirouche DELMI
      </h1>
      <h1 className="text-5xl sm:text-2xl text-white font-semibold">
        Ingénieur en logiciel & Développeur Full Stack.
      </h1>
      <p className="text-white">
        Diplômé d'un Master 2 en Ingénierie Logicielle de l'Université des
        Sciences et de la Technologie Houari Boumediene, spécialisé en
        développement full stack. Mon stage de fin d'études chez Algérie Télécom
        a été réalisé en utilisant la technologie MERN stack.
      </p>
      <button
        onClick={scrollToAbout}
        className="border-2 border-tertiary text-tertiary px-10 py-3 rounded mt-10"
      >
        Commencer
      </button>
    </div>
  );
}

export default Intro;
