export default function WeLove() {
  return (
      <section className='bg-[#C5CEBD] h-[1065px] w-full'>
          <div className='flex flex-col md:flex-row '>
              <div className='flex flex-row md:w-[60%] relative mt-10 md:mt-[10rem]'>
                  <img src="image-5.png" alt="" className='w-full md:w-[33rem] h-[40rem] object-cover z-[10]' />
                  <p className='text-6xl absolute lg:top-[20%] lg:right-[28%] w-[24rem] text-white z-[20]'>
                      We love what we do. We are up to the task.
                  </p>
                  <p className='absolute top-[60%] right-[2%] w-[24rem] text-black'>
                      Cuts tailor made for your hair, making it easy for you to recreate your look every day. Debonaire team, makes you feel happy at ease and work with you to make you your most lovely.
                  </p>
                  <div className='hidden md:block absolute bottom-[-10%] left-[36%] z-[0]'>
                      <img src="abstract-3.png" alt="" className='h-[17rem] w-[16rem]' />
                  </div>
              </div>
              <div className='flex flex-row md:w-[40%] mt-10 md:mt-[20rem] relative p-5 md:p-0'>
                  <img src="vector-4.png" alt="" className='h-[200px] w-[300px] md:h-[400px] md:w-[600px]' />
                  <div className='absolute top-[-10%] md:top-0 right-[5%]'>
                      <img src="image-6.png" alt="" className='h-[200px] w-[200px] md:h-[400px] md:w-[400px] rounded-full' />
                  </div>
                  <div className='absolute bottom-[-30%] md:bottom-[-20%]'>
                      <img src="image-7.png" alt="" className='h-[200px] w-[170px] md:h-[400px] md:w-[340px]' />
                  </div>
              </div>
          </div>
      </section>
  )
}
