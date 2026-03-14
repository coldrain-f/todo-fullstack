function TodoPagination() {
    return (
        <div className="px-8 py-4 flex items-center justify-center gap-1.5 bg-white">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 transition-colors disabled:opacity-50">
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#3c83f6] text-white text-[13px] font-bold shadow-sm transition-colors ring-2 ring-offset-1 ring-[#3c83f6]">
                1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 text-[13px] font-medium transition-colors">
                2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 text-[13px] font-medium transition-colors">
                3
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 transition-colors">
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
        </div>
    )
}

export default TodoPagination;