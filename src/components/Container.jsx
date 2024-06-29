function Container({children}) {
    return (
        <div className="bg-[url('img/noisybg.jpg')] bg-repeat p-4 md:p-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
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