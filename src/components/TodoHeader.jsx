function TodoHeader({ title }) {
    return (
        <>
            <header className="pt-8 pb-6 px-8 text-center">
                <h1 className="text-[28px] font-bold tracking-tight text-[#0d131c] leading-tight">
                    {title}
                </h1>
            </header>
        </>
    )
}

export default TodoHeader;