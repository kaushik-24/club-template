

const Hero = () => {
  return (
    <>
   <div className="relative text-white">
  {/* Text above the image */}
  <div className="absolute inset-0 flex items-center justify-center z-10">
    <h1 className="text-2xl font-bold"><span className="text-purple-200">Levels</span> Club</h1>
  </div>

  {/* Image with blur effect */}
  <div className="relative overflow-hidden">
    <img
      className="w-full h-full object-cover filter blur-sm"
      src="/levels-club.svg"
      alt="levels club image"
    />
  </div>
</div>

    </>
  )
}

export default Hero