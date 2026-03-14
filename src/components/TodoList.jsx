function TodoList() {
    return (
        <>
            <div className="flex flex-col">
                {/* Active Item - High Priority */}
                <div className="group flex items-center justify-between gap-4 px-8 py-4 hover:bg-gray-50 border-b border-gray-100 transition-colors">
                    <label className="flex items-center gap-4 flex-1 cursor-pointer select-none">
                        <input
                            type="checkbox"
                            className="h-[22px] w-[22px] rounded-md border-2 border-[#ced8e8] bg-transparent text-[#3c83f6] focus:ring-0 focus:ring-offset-0 focus:outline-none transition-all shrink-0"
                        />
                        <span className="text-[15px] text-[#0d131c] font-medium truncate leading-normal pt-0.5">
                            Buy groceries
                        </span>
                    </label>
                    <div className="flex items-center gap-3 shrink-0">
                        <span className="hidden sm:inline-flex text-[12px] text-gray-400 font-medium tracking-tight">10.24 14:30</span>
                        <span className="inline-flex items-center px-2 py-1 rounded-[6px] text-[11px] font-bold bg-red-50 text-red-700 border border-red-100 uppercase tracking-wide">
                            High
                        </span>
                        <button
                            aria-label="Delete task"
                            className="flex items-center justify-center h-8 w-8 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 ml-1"
                        >
                            <span className="material-symbols-outlined text-[20px]" onClick={() => setIsModalOpen(true)}>delete</span>
                        </button>
                    </div>
                </div>

                {/* Active Item - Medium Priority */}
                <div className="group flex items-center justify-between gap-4 px-8 py-4 hover:bg-gray-50 border-b border-gray-100 transition-colors">
                    <label className="flex items-center gap-4 flex-1 cursor-pointer select-none">
                        <input
                            type="checkbox"
                            className="h-[22px] w-[22px] rounded-md border-2 border-[#ced8e8] bg-transparent text-[#3c83f6] focus:ring-0 focus:ring-offset-0 focus:outline-none transition-all shrink-0"
                        />
                        <span className="text-[15px] text-[#0d131c] font-medium truncate leading-normal pt-0.5">
                            Walk the dog
                        </span>
                    </label>
                    <div className="flex items-center gap-3 shrink-0">
                        <span className="hidden sm:inline-flex text-[12px] text-gray-400 font-medium tracking-tight">10.23 09:15</span>
                        <span className="inline-flex items-center px-2 py-1 rounded-[6px] text-[11px] font-bold bg-yellow-50 text-yellow-700 border border-yellow-100 uppercase tracking-wide">
                            Medium
                        </span>
                        <button
                            aria-label="Delete task"
                            className="flex items-center justify-center h-8 w-8 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 ml-1"
                        >
                            <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                    </div>
                </div>

                {/* Completed Item - Low Priority */}
                <div className="group flex items-center justify-between gap-4 px-8 py-4 hover:bg-gray-50 border-b border-gray-100 transition-colors">
                    <label className="flex items-center gap-4 flex-1 cursor-pointer select-none">
                        <input
                            type="checkbox"
                            defaultChecked
                            className="h-[22px] w-[22px] rounded-md border-2 border-[#ced8e8] bg-transparent text-[#3c83f6] focus:ring-0 focus:ring-offset-0 focus:outline-none transition-all shrink-0"
                        />
                        <span className="text-[15px] text-gray-400 font-medium line-through truncate leading-normal pt-0.5">
                            Read a book
                        </span>
                    </label>
                    <div className="flex items-center gap-3 shrink-0 opacity-60">
                        <span className="hidden sm:inline-flex text-[12px] text-gray-400 font-medium tracking-tight">10.22 18:45</span>
                        <span className="inline-flex items-center px-2 py-1 rounded-[6px] text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-100 uppercase tracking-wide">
                            Low
                        </span>
                        <button
                            aria-label="Delete task"
                            className="flex items-center justify-center h-8 w-8 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 ml-1"
                        >
                            <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                    </div>
                </div>

                {/* Completed Item - High Priority */}
                <div className="group flex items-center justify-between gap-4 px-8 py-4 hover:bg-gray-50 border-b border-gray-100 transition-colors">
                    <label className="flex items-center gap-4 flex-1 cursor-pointer select-none">
                        <input
                            type="checkbox"
                            defaultChecked
                            className="h-[22px] w-[22px] rounded-md border-2 border-[#ced8e8] bg-transparent text-[#3c83f6] focus:ring-0 focus:ring-offset-0 focus:outline-none transition-all shrink-0"
                        />
                        <span className="text-[15px] text-gray-400 font-medium line-through truncate leading-normal pt-0.5">
                            Pay bills
                        </span>
                    </label>
                    <div className="flex items-center gap-3 shrink-0 opacity-60">
                        <span className="hidden sm:inline-flex text-[12px] text-gray-400 font-medium tracking-tight">10.21 11:00</span>
                        <span className="inline-flex items-center px-2 py-1 rounded-[6px] text-[11px] font-bold bg-red-50 text-red-700 border border-red-100 uppercase tracking-wide">
                            High
                        </span>
                        <button
                            aria-label="Delete task"
                            className="flex items-center justify-center h-8 w-8 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 ml-1"
                        >
                            <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoList;