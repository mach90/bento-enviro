import logo from "../img/logo.svg";

export default function CardLogo() {
    return (
        <div className="flex flex-col justify-center items-start px-4 gap-y-2">
            <p className="flex justify-center items-center text-3xl font-custom1 font-700 gap-x-1"><img src={logo} alt="logo svg" className="h-8"/>BENTO-ENVIRO</p>
            <p className="font-custom1 text-2xl">Your enviro in one view</p>
        </div>
    )
}
