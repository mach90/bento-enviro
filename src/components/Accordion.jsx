import { useState } from "react";

export default function Accordion({question, answer, link}) {
    const [isOpen, setIsOpen] = useState(false);

    function manageOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="flex flex-col cursor-help">

            <div onClick={manageOpen} className="p-2 font-custom1 text-sm flex flex-row items-center gap-4">
                <p className="text-colorTextMedium bg-gradient-to-r from-colorAccent3t to-colorAccent1t p-1">{question}</p> 
                <p className="text-colorTextMedium">{isOpen ? "▲" : "▼" }</p>
            </div>

            {isOpen && 
            <div onClick={manageOpen} className="font-custom2 text-sm py-3 px-3 text-justify text-colorTextMedium">
                {answer} {link && <a className="text-colorAccent2" href={link} target="_blank">Learn more...</a>}
            </div>}
            
        </div>
    );
}

