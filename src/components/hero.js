import Mountains from "../assets/images/mountain-range.jfif"

const Hero = () => {
  return ( 
    <div id="Hero" style={{backgroundImage: 'url('+Mountains+')'}} className="w-[100vw] h-[100vh] bg-cover bg-no-repeat bg-center">
      <div id="Hero_Filter" className="backdrop-blur-sm backdrop-saturate-[.75] backdrop-grayscale-[.2] w-full h-full">
        <div id="Hero_Container" className="h-full w-full flex flex-col items-center justify-between text-white">
          <h1 className="pt-[40vh] text-7xl text-center">Elin Lundberg</h1>
          <p className="pb-3">nav</p>
        </div>
      </div>
    </div>
   );
}
 
export default Hero;