import './App.css'
import React from 'react'
import Navbar from './Navbar'

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <section className='bg-[#DFCCC2] h-[1332px] w-full'>
        <div className='mx-auto my-auto w-full lg:w-[70%] bg-red-200'>
          <div className='flex flex-row relative md:p-10 lg:p-20 flex-nowrap'>
            <img src="image-1.png" alt="" className='w-[27rem] h-[30rem] mx-auto z-[10] object-cover' />
            {/* <div className='absolute top-[8rem] left-[10rem] w-[20rem] z-[20] text-white'>
              <p className='text-3xl'>Hi, we are Maya. Ready to create an art form on your body.</p>
            </div> */}
            <div className='absolute bottom-[-2rem] left-[43rem]'>
              <img src="abstract-2.png" alt="" className='w-[250px h-[230px]' />
            </div>
            <div className='absolute  bottom-0 left-[20rem]'>
              <img src="vector-1.png" alt="" className='h-[200px] w-[200px]' />
            </div>
            
            <div className='hidden md:block absolute top-0 md:left-[60%] lg:left-[55%]'>
              <img src="abstract-1.png" alt="" className='lg:w-[15rem] lg:h-[12rem] object-cover' />
            </div>
            <div className='hidden md:block absolute top-[12%] left-[63%] z-[20]'>
              <img src="image-2.png" alt="" className='w-[13rem] lg:w-[16rem] h-[13rem] lg:h-[16rem] object-cover' />
            </div>
            <div className='text-white md:text-black md:w-[13%] lg:w-[15%] absolute top-[55%] lg:top-[55%] left-[73%] lg:left-[70%] z-[20] '>
              <p>Maya is natural product-based, hair design & boutique.</p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment >
  )
}

export default App;