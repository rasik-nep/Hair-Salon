export default function Services() {
    return (
        <section className='bg-[#DFCCC2] md:h-[80vh] lg:h-[120vh]'>
            <p className='text-4xl text-center text-white p-10'>Our Services</p>
            <div className='flex flex-col md:flex-row lg:gap-5 lg:w-[70%] justify-center mx-auto'>
                <div className='w-[20%] lg:w-[30%]'>
                    <img src="image-8.png" alt="" className="min-w-[8rem] lg:min-w-[10rem] h-[17rem]" />
                    <p className='text-3xl text-white py-3'>Cut.</p>
                </div>
                <div className='md:w-[40%] lg:p-20 '>
                    <p className='text-3xl text-white py-3 mt-10'>Color.</p>
                    <div className='flex flex-row relative w-full h-full'>
                        <img src="image-9.png" alt="" className='z-[10] object-cover  md:min-w-[13rem] lg:min-w-[15rem] h-[32rem] ' />
                        <p className='text-3xl w-[12rem] z-[20] text-white absolute md:left-[-5rem] bottom-[20%]'>We create a customized new look for you.</p>
                        <div className='absolute bottom-[-5%] right-[10%] md:right-0'>
                            <img src="vector-5.png" alt="" className='w-[15rem] h-[17rem] hidden md:block' />
                        </div>
                    </div>
                </div>
                <div className='md:w-[30%]'>
                    <div className='flex flex-row relative shrink-0'>
                        <img src="image-10.png" alt="" className='mt-[5rem] z-[10] md:min-w-[11rem] lg:min-w-[13rem] h-[22rem] ' />
                        <div className='flex flex-col'>
                            <img src="abstract-4.png" alt="" className='hidden md:block absolute right-[-50%] md:right-[-20%] lg:right-[-10%] top-[25%] lg:top-[45%] w-[15rem] h-[15rem]' />
                        </div>
                    </div>
                    <p className='text-3xl text-white py-5'>Design.</p>
                </div>
            </div>
        </section>
    )
}
