import logo from "../../public/logo.svg";

const cardLogoContainerStyle = "flex flex-row justify-start items-center p-4 gap-2 col-span-full row-span-1";
const cardLogoTextContainerStyle = "flex flex-col justify-center items-start h-12";
const cardLogoTitleStyle = "flex justify-center items-center text-heading font-heading gap-x-2 text-200";
const cardLogoSpanStyle = "font-exp text-exp text-200";
const cardLogoSubtitleStyle = "font-body text-body text-200";
const cardLogoSvgStyle = "h-12 w-12";

export default function CardLogo() {
    return (
        <header className={cardLogoContainerStyle}>
            <img src={logo} alt="logo svg" className={cardLogoSvgStyle} />
            <div className={cardLogoTextContainerStyle}>
                <h1 className={cardLogoTitleStyle}>BENTO-ENVIRO <span className={cardLogoSpanStyle}>v1.000</span></h1>
                <p className={cardLogoSubtitleStyle}>Your environment in one view</p>
            </div>
        </header>
    )
}
