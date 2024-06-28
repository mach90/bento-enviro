function Container({children}) {
    return (
        <div className="bg-[url('img/noisybg.jpg')] bg-repeat p-8 grid grid-cols-6">
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