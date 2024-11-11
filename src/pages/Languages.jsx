const Languages = () => {
  return (
    <>
        <div className="h-40 p-5 bg-teal-500">            
            <div className="flex flex-auto justify-center">
                <h1 className="font-bold text-2xl text-white">Lenguajes</h1>
            </div>
            {/* https://www.flowbite-react.com/docs/components/card */}
        
            <div class="flex flex-auto text-white justify-center">
                <h1 className="p-4">JavaScript</h1>
                <h1 className="p-4">CSS</h1>
                <h1 className="p-4">HTML</h1>
                <h1 className="p-4">C#</h1>
                <h1 className="p-4">PHP</h1>
                <h1 className="p-4">Node JS</h1>
                <h1 className="p-4">MySQL</h1>
                <h1 className="p-4">React</h1>
            </div>

            <div className="flex flex-auto justify-center">
                <h1 className="items-center font-bold text-white mb-10">SDK: <span className='font-normal'> Unity </span></h1>
                
            </div>

        </div>
    </>
    )
}

export default Languages