import Cards from "../components/cards"

const Citas = ({cita, randomNumber}) => {

  var autor = cita[randomNumber].autor
  var cit = cita[randomNumber].cita
  

  return (
    <>
      <div className='flex items-center text-orange-300 justify-center m-10'>

        <Cards autor={autor} cit={cit}/>

      </div>
      
    </>
  )
}

export default Citas