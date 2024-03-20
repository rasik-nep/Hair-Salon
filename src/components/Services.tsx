export default function Services() {
    return (
        <section className='bg-[#DFCCC2] h-[130vh]'>
            <p className='text-4xl text-center text-white p-10'>Our Services</p>
            <div className='flex flex-row gap-5 w-[70%] mx-auto '>
                <div className=' w-[30%]'>
                    <img src="image-8.png" alt="" />
                    <p className='text-3xl text-white py-3'>Cut.</p>
                </div>
                <div className='w-[40%] p-20'>
                    <p className='text-3xl text-white py-3 mt-10'>Color.</p>
                    <div className='flex flex-row relative w-full h-full'>
                        <img src="image-9.png" alt="" className='z-[10] object-cover' />
                        <p className='text-3xl w-[12rem] z-[20] text-white absolute left-[-5rem] bottom-[20%]'>We create a customized new look for you.</p>
                        <div className='absolute bottom-[-5%] right-0'>
                            <img src="vector-5.png" alt="" className='' />
                        </div>
                    </div>
                </div>
                <div className='w-[30%] px-20'>
                    <div className='flex flex-row relative'>
                        <img src="image-10.png" alt="" className='mt-[5rem] z-[10]' />
                        <div className='flex flex-col'>
                            <img src="abstract-4.png" alt="" className='mt-[10rem] absolute bottom-[-20%] right-[-50%] top-[25%]' />
                        </div>
                    </div>
                    <p className='text-3xl text-white py-5'>Design.</p>
                </div>
            </div>
        </section>
    )
}
