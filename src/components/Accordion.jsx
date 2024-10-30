import { CircleChevronDown, CircleChevronUp } from "lucide-react";
import { useState } from "react";

const accordionContainerStyle = "border border-borderTransparent flex flex-col cursor-pointer rounded-lg w-96";
const accordionToggleStyle = "flex flex-row gap-2 items-center font-heading font-bold p-4 text-textTransparent text-sm";
const accordionParagraphStyle = "font-body text-sm p-4 text-justify text-textTransparent border-t border-borderTransparent";
const accordionLinkStyle = "text-textTransparentVariant hover:text-textTransparent";

export default function Accordion({question, answer, link}) {
    const [isOpen, setIsOpen] = useState(false);

    function manageOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <div className={accordionContainerStyle}>

            <div onClick={manageOpen} className={accordionToggleStyle}>
                <div>{isOpen ? <CircleChevronDown /> : <CircleChevronUp /> }</div>
                <div>{question}</div>
            </div> 
            
            {isOpen && 
            <div onClick={manageOpen} className={accordionParagraphStyle}>
                {answer} {link && <a className={accordionLinkStyle} href={link} target="_blank">Learn more...</a>}
            </div>}
            
        </div>
    );
}

