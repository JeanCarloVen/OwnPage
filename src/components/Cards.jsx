import logoIOS from "../images/LOGO-IOS.png";
import logoAndroid from "../images/LOGO-ANDROID.png";

const   Cards = ({autor, cit, imagen, titulo, descripcion, enlace}) => {

  return (
    <>
        <div className="">
            <div class="max-w-sm rounded overflow-hidden shadow-lg mx-20">
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                <div class="px-6 py-4">
                    {cit ? (
                        <div>
                            <div class="font-bold text-xl mb-2">
                                {cit}
                            </div>
                            <p class="text-gray-700 text-base" className="text-right" >
                                {autor}
                            </p>
                        </div>
                    ):(
                        <div>
                            <img class="aspect-video w-90 object-cover object-center" src={enlace} />
                            <h1 class="font-extrabold">{titulo}</h1>
                            <p class="text-gray-700 text-base" className="text-left" >
                                {descripcion}
                            </p>
                            <div className="flex flex-wrap justify-center align-middle">
                                <div className="w-1/2 sm:w-1/6 px-3 my-5">
                                    <img src={logoIOS} alt="iOS" className="max-w-full h-auto align-middle border-none" />
                                </div>
                                <div className="w-1/2 sm:w-1/6 px-3 my-5">
                                    <img src={logoAndroid} alt="ANDROID" className="max-w-full h-auto align-middle border-none" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </>
    )
}

export default Cards