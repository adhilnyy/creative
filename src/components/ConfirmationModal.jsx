const ConfirmationModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-600/30 to-black/40 backdrop-blur-md w-screen h-screen">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{message}</p>
        <div className="flex justify-end gap-2">
          <button 
            onClick={onCancel} 
            className="text-sm/6 font-semibold bg-indigo-600 text-white hover:bg-white hover:text-indigo-600 border hover:border-indigo-600 px-3 py-1.5 rounded-md cursor-pointer"
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm} 
            className="text-sm/6 font-semibold bg-red-600 text-white hover:bg-white hover:text-red-600 border hover:border-red-600 px-3 py-1.5 rounded-md cursor-pointer"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
