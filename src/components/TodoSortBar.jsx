function TodoSortBar() {
    return (
        <>
            <div className="px-8 py-3 flex justify-between items-center border-b border-gray-100">
                <span className="text-[13px] font-semibold text-gray-500">2 items left</span>
                <div className="relative">
                    <select className="appearance-none bg-transparent hover:bg-gray-50 border-none text-[13px] font-semibold text-gray-600 rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:ring-0 transition-all cursor-pointer">
                        <option>Sort by Priority (High to Low)</option>
                        <option>Sort by Priority (Low to High)</option>
                        <option>Sort by Date (Newest first)</option>
                        <option>Sort by Date (Oldest first)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none">
                        <span className="material-symbols-outlined text-gray-400 text-[18px]">sort</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoSortBar;