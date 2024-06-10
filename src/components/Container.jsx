function Container({children}) {
    return (
        <div className="bg-amber-50 px-4 py-10 md:p-10 lg:p-14 xl:p-40 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {children}
        </div>
    );
}

export default Container;

/*
sm: '480px',
md: '768px',
lg: '976px',
xl: '1440px'
*/