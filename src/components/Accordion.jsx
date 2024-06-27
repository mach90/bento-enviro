import { useState } from "react";

export default function Accordion({question, answer, link}) {
    const [isOpen, setIsOpen] = useState(false);

    function manageOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="bg-colorCard1 transition-all my-2 flex flex-col gap-3">

            <div onClick={manageOpen} className="bg-colorCard2 p-2 font-custom1 text-lg flex flex-row justify-between">
                <p>{question}</p> 
                <p className="text-colorDark">{isOpen ? "▲" : "▼" }</p>
            </div>

            {isOpen && 
            <div className="font-custom2 text-md py-3 px-8 text-justify">
                {answer} {link && <a className="text-colorCard3" href={link} target="_blank">Learn more...</a>}
            </div>}
            
        </div>
    );
}

