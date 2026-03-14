function DeleteModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    return (
        /* Modal Backdrop Overlay */
        <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={onClose}
        >
            {/* Modal Container */}
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col items-center p-6 sm:p-8 text-center">
                    {/* Warning Icon Container */}
                    <div className="size-14 rounded-full bg-red-100 flex items-center justify-center mb-5 text-[#ef4343]">
                        <span className="material-symbols-outlined text-[32px]">warning</span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-[#1b0d0d] tracking-tight text-xl font-bold leading-tight mb-3">
                        Delete Task?
                    </h3>

                    {/* Body Text */}
                    <p className="text-[#5c3a3a] text-base font-normal leading-relaxed mb-8 max-w-[300px]">
                        Are you sure you want to delete this task? This action cannot be undone.
                    </p>

                    {/* Actions */}
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

export default DeleteModal;