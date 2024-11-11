import foto from "../images/FotoJC.jpg"

const AboutMe = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={foto}
          alt="" />
        <div className="flex flex-col justify-start p-6">
          <h5
            className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            Un poco de mi...
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Desde pequeño me gustó resolver puzzles y acertijos, sin embargo, fue hasta más grande cuando estudié, un par de años ingeniería civil, que comencé a enteder lo mucho que me gustaba el análisis y la matemática para resolver acertijos de este tipo, a la mitad de la carrera entendí que la física era lo que realmente me gustaba y terminé por graduarme en ello. Los últimos años emprendí unos negocios unos con mayores éxitos que otros y en paralelo desarrollé y lancé algunas apps y sitios web, lo que ha hecho que me enfoque en aprender nuevos lenguajes y frameworks día con día. 
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default AboutMe