
export default function NavBar(){
    return (
    <nav>
        <div className="flex justify-center w-full bg-[#043873] h-[92px] items-center">
            <div className="flex justify-between max-w-[1289px] w-full">
                <div>
                    <span className="text-[28px] text-white"><strong>NightByte</strong></span>
                </div>
                <div className="flex gap-[60px]">
                    <div className="flex gap-[32px]">
                        <button className="text-[18px] text-white">Products ^</button>
                        <button className="text-[18px] text-white">Solutions ^</button>
                        <button className="text-[18px] text-white">Resources ^</button>
                        <button className="text-[18px] text-white">Pricing ^</button>
                    </div>
                    <div className="flex gap-[24px]">
                        <button className="bg-[#FFE492]">Login</button>
                        <button className="bg-[#4F9CF9]">Try Whitepace free</button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    );
}