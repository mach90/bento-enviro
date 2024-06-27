import logo from "../../public/logo.svg";

export default function CardLogo() {
    return (
        <div className="flex flex-col justify-center items-start p-4 col-span-1 gap-y-2 bg-black rounded-2xl">
            <p className="flex justify-center items-center text-xl font-custom1 font-700 gap-x-2 text-white"><img src={logo} alt="logo svg" className="h-8"/>BENTO-ENVIRO</p>
            <p className="font-custom1 text-md text-colorBrand">Your environment in one view</p>
        </div>
    )
}
