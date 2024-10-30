function Container({children}) {
    return (
        <div className="bg-[url('img/noisybg-dark.jpg')] bg-repeat p-4 md:p-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 min-h-screen">
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
bg-[url('img/noisybg-light.jpg')]
*/