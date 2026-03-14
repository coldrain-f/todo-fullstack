
/**
 * Todo 데이터 삭제 확인 모달 컴포넌트
 *
 * 사용자가 Todo 삭제를 확인하기 위한 모달을 표시합니다.
 * isOpen이 false면 아무것도 렌더링되지 않습니다. (Early Return)
 *
 * @param {Object} props - 컴포넌트의 props
 * @param {boolean} props.isOpen - Modal 열기/닫기 제어하는 boolean 값
 * @param {Function} props.onClose - "Cancel" 버튼 클릭 또는 모달을 닫을 때 호출되는 함수
 * @param {Function} props.onConfirm - "Delete" 버튼 클릭 시 호출되는 함수
 * @returns {JSX.Element|null} - Modal JSX 또는 null
 */
function TodoDeleteModal({ isOpen, onClose, onConfirm }) {
    // Early Return: 모달이 닫혀있으면 아무것도 렌더링하지 않음
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col items-center p-6 sm:p-8 text-center">
                    <div className="size-14 rounded-full bg-red-100 flex items-center justify-center mb-5 text-[#ef4343]">
                        <span className="material-symbols-outlined text-[32px]">warning</span>
                    </div>
                    <h3 className="text-[#1b0d0d] tracking-tight text-xl font-bold leading-tight mb-3">
                        Delete Task?
                    </h3>
                    <p className="text-[#5c3a3a] text-base font-normal leading-relaxed mb-8 max-w-[300px]">
                        Are you sure you want to delete this task? This action cannot be undone.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 w-full">
                        <button
                            onClick={onClose}
                            className="flex-1 px-5 py-3 rounded-xl bg-[#fcf8f8] text-[#1b0d0d] font-medium hover:bg-[#ebe5e5] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onConfirm}
                            className="flex-1 px-5 py-3 rounded-xl bg-[#ef4343] text-white font-medium hover:bg-red-600 transition-colors shadow-lg shadow-red-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoDeleteModal;