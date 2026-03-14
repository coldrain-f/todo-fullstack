function TodoInput() {
    return (
        <>
            <div className="px-8 pb-6">
                <div className="flex gap-3">
                    <input
                        type="text"
                        className="flex-1 bg-[#f8f9fc] border border-[#ced8e8] rounded-xl px-4 py-3.5 text-[15px] text-[#0d131c] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#3c83f6]/20 focus:border-[#3c83f6] transition-all shadow-sm font-medium"
                        placeholder="Add a new task..."
                    />
                    <div className="relative w-[110px] shrink-0">
                        <select className="w-full h-full appearance-none bg-[#f8f9fc] border border-[#ced8e8] rounded-xl pl-4 pr-8 py-3.5 text-[14px] font-semibold text-[#0d131c] focus:outline-none focus:ring-2 focus:ring-[#3c83f6]/20 focus:border-[#3c83f6] transition-all shadow-sm cursor-pointer">
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <span className="material-symbols-outlined text-gray-400 text-[20px]">expand_more</span>
                        </div>
                    </div>
                    <button className="flex items-center justify-center h-[52px] w-[52px] bg-[#3c83f6] hover:bg-blue-600 text-white rounded-xl transition-colors shadow-sm active:scale-95 shrink-0">
                        <span className="material-symbols-outlined text-[26px]">add</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default TodoInput;