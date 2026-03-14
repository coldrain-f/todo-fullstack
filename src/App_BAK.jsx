import { useState } from "react";
import TodoDeleteModal from "./components/TodoDeleteModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <TodoDeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => { }}
      />


      <div className="bg-[#f5f7f8] min-h-screen flex flex-col items-center justify-center p-4 font-['Pretendard',-apple-system,BlinkMacSystemFont,system-ui,Roboto,'Helvetica_Neue','Segoe_UI','Apple_SD_Gothic_Neo','Noto_Sans_KR','Malgun_Gothic',sans-serif] tracking-tight">
        <div className="w-full max-w-[500px] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden ring-1 ring-black/5">
          {/* Header */}
          <header className="pt-8 pb-6 px-8 text-center">
            <h1 className="text-[28px] font-bold tracking-tight text-[#0d131c] leading-tight">
              My Todos
            </h1>
          </header>

          {/* Input Section */}
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

          {/* Sort Bar */}
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

          {/* Todo List */}
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

          {/* Pagination */}
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
        </div>
      </div>
    </>
  );
}

export default App;