const cardAllergyContainerStyle = "bg-cardPrimary relative flex flex-col justify-center items-center p-2 cursor-not-allowed rounded-lg shadow-md col-span-1 row-span-1";

export default function CardAllergy() {
    return (
        <div className={cardAllergyContainerStyle}>
            <p className="text-center text-textPrimaryVariant font-heading text-md">Allergen data not yet implemented</p>
        </div>
    );
}

