export default function Footer() {
    return (
        <footer className="bg-[#C2B8CC] text-white">
            <div className="container mx-auto p-10">
                <div className="flex flex-col md:flex-row">
                    <div className="p-10">
                        <h2 className="text-4xl font-bold">Maya Borws</h2>
                        <p className="text-sm">© 2024 Logo. All rights reserved</p>
                    </div>
                    <div className="p-10 md:ml-[20vw] lg:ml-[50vw]">
                        <ul>
                            <li className="text-xl p-2 font-bold">Facebook</li>
                            <li className="text-xl p-2 font-bold">Instagram</li>
                            <li className="text-xl p-2 font-bold">Twitter</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
