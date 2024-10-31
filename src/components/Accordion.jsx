import { CircleChevronDown, CircleChevronUp } from "lucide-react";
import { useState } from "react";

const accordionContainerStyle = "bg-cardFifth border border-borderFifth flex flex-col cursor-pointer rounded-lg w-full md:w-96";
const accordionToggleStyle = "flex flex-row gap-2 items-center font-heading font-bold p-4 text-textFifth text-sm";
const accordionParagraphStyle = "font-body text-sm p-4 text-justify text-textFifthVariant border-t border-borderFifth";
const accordionLinkStyle = "text-textFifthVariant hover:text-textFifth";

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

