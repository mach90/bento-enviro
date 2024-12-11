import { CircleChevronDown, CircleChevronUp } from "lucide-react";
import { useState } from "react";

const accordionContainerStyle = "bg-sixth border border-700 flex flex-col cursor-pointer rounded-lg w-full md:w-96";
const accordionToggleStyle = "flex flex-row gap-2 items-center font-body text-body p-4 text-200";
const accordionParagraphStyle = "font-body text-body p-4 text-justify text-300 border-t border-700";
const accordionLinkStyle = "text-fifth hover:text-0";

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

