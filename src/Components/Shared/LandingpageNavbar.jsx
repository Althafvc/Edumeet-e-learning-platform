import React from 'react'
function LandingpageNavbar() {

  return (
    <>
     <div className="navbar flex justify-between items-center p-4  h-16 w-full md:flex md:justify-between">
              <div className="nav-center">
                <h1 className='font-customFont text-[#7391e0] text-xl md:text-4xl'>Edumeet</h1>
              </div>
              <div className="nav-right flex gap-3 h-full ">
                <button className='w-auto h-auto border border-[#7391e0] rounded-[4px] text-xs text-[#7391e0] font-semibold p-1 px-2'>Login</button>
                <button className='w-auto h-auto  rounded-[4px] text-xs text-white font-semibold bg-[#7391e0] p-1 px-2 mr-5'>Signup</button>
                </div> 
               </div>
    </>
  )
}

export default LandingpageNavbar