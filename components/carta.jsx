export function Carta({img = 'https://avatars.githubusercontent.com/u/70248146?v=4'}) {
    return <div className='p-5'>
    <div className='
    overflow-hidden  inline-flex justify-center items-center relative group
     bg-neutral-900 cursor-pointer
    '>
      
      <img className="group-hover:scale-105 transition
       group-hover:opacity-40 w-80 aspect-square object-cover duration-700 object-center
       " 
       src={img}></img>
      {/* <button className='absolute
        py-3 px-5 bg-blue-700 text-white rounded-full capitalize opacity-0 
        group-hover:opacity-100 transition font-sans z-10 hover:bg-blue-900
        '>hola javier</button> */}
        <div className="absolute
        z-10 text-white px-5 opacity-0 group-hover:opacity-100 transition
        duration-700 text-3xl font-extrabold text-center ">
          <h1 className="text-lg capitalize mb-4">@Lembo006</h1>
          <h1>Desde pequeño los videojuegos son mi pasión </h1>
        </div>
    </div>
  </div>
}