import logo from "../../public/logo.svg";

const cardLogoContainerStyle = "bg-cardPrimary flex flex-col col-span-full xl:col-span-1 justify-center items-start p-4 rounded-lg shadow-md";
const cardLogoTitleStyle = "flex justify-center items-center text-lg font-heading font-700 gap-x-2 text-textPrimary";
const cardLogoSubtitleStyle = "font-heading text-md text-textPrimaryVariant";

export default function CardLogo() {
    return (
        <header className={cardLogoContainerStyle}>
            <h1 className={cardLogoTitleStyle}><img src={logo} alt="logo svg" className="h-4"/>BENTO-ENVIRO</h1>
            <p className={cardLogoSubtitleStyle}>Your environment in one view</p>
        </header>
    )
}
