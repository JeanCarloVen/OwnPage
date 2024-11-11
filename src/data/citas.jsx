export function obtenerCitas(){

    //falta el await en el export await function 
    //const respuesta = await fetch(import.meta.env.VITE_API_URL)
    
    //const resultado = await respuesta.json()
    const citas = [
        {
          id: 1,
          cita: '"Gastar dinero en los libros es una inversión que rinde buen interés".',
          autor: 'Benjamin Franklin'
        },
        {
          id: 2,
          cita: '"El éxito es fácil de obtener. Lo difícil es merecerlo".',
          autor: 'Albert Camus'
        },
        {
          id: 3,
          cita: '"La mejor estructura no garantizará los resultados ni el rendimiento. Pero la estructura equivocada es una garantía de fracaso".',
          autor: 'Peter Drucker'
        },
        {
          id: 4,
          cita: '"La originalidad es la única cosa cuya utilidad no pueden comprender los espíritus vulgares".',
          autor: 'John Stuart Mill'
        },
        {
          id: 5,
          cita: '"El motor de la historia es la lucha de clases".',
          autor: 'Karl Marx'
        }
      ];

    return citas;
}