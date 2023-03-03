import img2 from "../assets/img2.jpg"

function Hero() {
  return (
    <div className="w-full h-screen">
        <img src={img2} className="w-full top-0 left-0 h-screen flex object-cover opacity-90"/>
        <div className="text-white top-0 left-0 absolute w-full h-full flex flex-col justify-center">
            <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
                <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">Made with love</h1>
                <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, ex?</p>
              
            </div>
        </div>

    </div>
  )
}

export default Hero
