const cardAllergyContainerStyle = "bg-third relative flex flex-col justify-center items-center p-2 cursor-not-allowed rounded-lg col-span-1 row-span-1 shadow-inner shadow-800 border-8 border-500";

export default function CardAllergy() {
    return (
        <div className={cardAllergyContainerStyle}>
            <p className="text-center text-600 font-body text-body">Allergen data not yet implemented</p>
        </div>
    );
}