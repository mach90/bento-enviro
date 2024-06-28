import logo from "../../public/logo.svg";

export default function CardLogo() {
    return (
        <div className="bg-gradient-to-br from-colorAccent1t via-colorAccent2t to-colorAccent3t flex flex-col justify-center items-start p-4 col-span-1 border border-colorBorder rounded-br-lg">
            <p className="flex justify-center items-center text-lg font-custom1 font-700 gap-x-2 text-colorTextLight"><img src={logo} alt="logo svg" className="h-4"/>BENTO-ENVIRO</p>
            <p className="font-custom1 text-md text-colorTextMedium">Your environment in one view</p>
        </div>
    )
}
