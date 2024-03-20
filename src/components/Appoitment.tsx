export default function Appoitment() {
    return (
        <section className="bg-appoitment h-[40rem] bg-center lg:bg-cover text-white flex flex-col justify-center items-center">
            <h1 className="text-4xl lg:text-6xl py-2">Let's make you your best self.</h1>
            <p className="text-base lg:text-2xl relative">
                Book an appointment
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-red-400"></span>
            </p>
        </section>
    )
}
