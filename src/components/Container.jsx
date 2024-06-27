function Container({children}) {
    return (
        <div className="bg-colorBackground px-4 py-10 md:p-10 lg:p-14 xl:p-40 grid gap-6 grid-cols-5 h-max">
            {children}
        </div>
    );
}

export default Container;

/*
Reminder
sm: '480px',
md: '768px',
lg: '976px',
xl: '1440px'
*/