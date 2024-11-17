

const Hero = () => {
  return (
    <>
   <div className="relative text-white">
  {/* Text above the image */}
  <div className="absolute inset-0 flex items-top justify-center z-10">
    <h1 className="pt-[300px] lg:text-5xl text-[60px] text-black font-bold object-cover"><span className="">Levels <br /></span> <span className="flex pt-10">Club</span></h1>
  </div>

  {/* Image with blur effect */}
  <div className="relative overflow-hidden">
    <img
      className="w-full h-screen object-cover sm:h-auto filter blur-sm"
      src="/levels-club.svg"
      alt="levels club image"
    />
  </div>
</div>

    </>
  )
}

export default Hero