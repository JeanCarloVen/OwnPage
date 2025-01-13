
import { useLoaderData } from 'react-router-dom'
import { obtenerCitas } from '../data/citas'
import Works from './Works'
import Languages from './Languages'
import Blog from './Blog'
import Clientes from './Clientes'
import Citas from './Citas'
import AboutMe from './AboutMe'

export function loader(){
  const citas = obtenerCitas()
 
  return citas
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


const Index = () => {

  const cita = useLoaderData();

  const randomNumber = getRandomIntInclusive(0,4);
 
  return (
    <>
    <div className='flex items-center justify-center h-screen p-1'>

      <h1 className='font-bold text-4xl text-orange-400 animate-wiggle'>Hola! es un gusto poder salurdarte!</h1>
      
    </div>
    
    <Works/>  
    <Languages/>
    <Blog/>
    <Clientes/>
    <Citas cita={cita} randomNumber={randomNumber}/>
    <AboutMe/>

    </>
  )
}

export default Index