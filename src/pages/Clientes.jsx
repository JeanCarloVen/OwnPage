import logoCharly from "../images/LOGO-CHARLYHOLMES02.png";
import logoHausi from "../images/LOGO-HAUSI03.png";

const Clientes = () => {
  return (
    <>
        <div className="pb-12">
            
        <h1 className="font-bold text-2xl text-orange-400 text-center p-5">Clientes</h1>
        
            <div class="relative flex h-auto flex-col sm:flex-row md:flex-row justify-center">
                
                    <div class="mx-auto flex flex-col bg-white rounded-2xl shadow-xl shadow-slate-300/60">
                        
                        <img class="w-96 rounded-t-2xl object-cover object-center" src={logoCharly} />
                        
                        <div class="p-4">
                        <small class="text-blue-400 text-xs">Inmobiliaria (PHP, MySQL, CSS y HTML)</small>
                        <h1 class="text-2xl font-medium text-slate-600 pb-2">Charlie Holmes</h1>
                        <p class="text-sm tracking-tight font-light text-slate-400 leading-6">Compra-Venta de inmuebles</p>
                        </div>
                        
                    </div>
                    <div class="mx-auto flex w-96 flex-col bg-white rounded-2xl shadow-xl shadow-slate-300/60">
                    
                        <img class="w-96 rounded-t-2xl object-cover object-center" src={logoHausi} />
                        
                        <div class="p-4">
                        <small class="text-blue-400 text-xs">Tours Virtuales (JS, CSS y HTML) </small>
                        <h1 class="text-2xl font-medium text-slate-600 pb-2">Housi</h1>
                        <p class="text-sm tracking-tight font-light text-slate-400 leading-6">Realización de Tours Virtuales para inmuebles</p>
                        </div>
                        
                    </div>
                
            </div>

            
            
            
        </div>
    </>
  )
}

export default Clientes