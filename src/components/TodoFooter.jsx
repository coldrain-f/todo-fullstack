function TodoFooter() {
    return (
        <>
            {/* Footer - Filters */}
            <div className="bg-[#fafbfd] border-t border-gray-100 flex flex-col p-6 space-y-5">
                {/* Status Filter */}
                <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 w-full sm:w-auto text-center sm:text-left">
                        Status
                    </span>
                    <div className="flex items-center gap-1 bg-white p-1 rounded-lg shadow-sm border border-gray-100 w-full sm:w-auto justify-center sm:justify-start">
                        <button className="px-4 py-1.5 text-[12px] font-semibold text-[#3c83f6] bg-blue-50 rounded-[4px] transition-colors">
                            All
                        </button>
                        <button className="px-4 py-1.5 text-[12px] font-medium text-gray-600 hover:bg-gray-50 rounded-[4px] transition-colors">
                            Active
                        </button>
                        <button className="px-4 py-1.5 text-[12px] font-medium text-gray-600 hover:bg-gray-50 rounded-[4px] transition-colors">
                            Completed
                        </button>
                    </div>
                </div>

                {/* Priority Filter */}
                <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 w-full sm:w-auto text-center sm:text-left">
                        Priority
                    </span>
                    <div className="flex items-center justify-center sm:justify-end gap-2 flex-wrap w-full sm:w-auto">
                        <button className="px-3 py-1.5 rounded-full text-[11px] font-bold bg-gray-800 text-white shadow-sm transition-transform hover:scale-105">
                            All
                        </button>
                        <button className="px-3 py-1.5 rounded-full text-[11px] font-bold bg-white border border-red-200 text-red-600 hover:bg-red-50 transition-colors">
                            High
                        </button>
                        <button className="px-3 py-1.5 rounded-full text-[11px] font-bold bg-white border border-yellow-200 text-yellow-600 hover:bg-yellow-50 transition-colors">
                            Medium
                        </button>
                        <button className="px-3 py-1.5 rounded-full text-[11px] font-bold bg-white border border-blue-200 text-blue-600 hover:bg-blue-50 transition-colors">
                            Low
                        </button>
                    </div>
                </div>

                {/* Clear Completed */}
                <div className="pt-4 border-t border-gray-100 flex justify-center">
                    <button className="text-[12px] font-medium text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">delete_sweep</span>
                        Clear completed tasks
                    </button>
                </div>
            </div>
        </>
    )
}

export default TodoFooter;