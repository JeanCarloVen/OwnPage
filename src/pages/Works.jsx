import Cards from "../components/Cards"
import logoBizkit from "../images/LOGO-BIZKIT.png";
import logoThinkerian from "../images/LOGO-THINKERIAN.png";

const Works = () => {
  return (
    <>
        <div className="min-h-screen p-1">

            <div className="flex flex-auto justify-center">
                <h1 className="items-center font-bold text-2xl text-orange-400 mb-10">Trabajos propios</h1>
            </div>

            <div className='flex flex-auto text-orange-400 justify-center'>
                <Cards 
                    titulo={"THINKERIAN (C#, PHP, MySQL)"} 
                    descripcion={"Juego multijugador desarrollado para plataformas IOS y Android"} 
                    enlace={logoThinkerian}
                    
                />
                <Cards 
                    titulo={"BIZKIT (C#)"} 
                    descripcion={"Juego de carreras desarrollado para plataforma Android"} 
                    enlace={logoBizkit}
                />
                
            </div>
 
        </div>

        
    </>
  )
}

export default Works