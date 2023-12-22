import React from 'react'

const Modal = ({ open, onClose, children }) => {
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? 'visible bg-black/20' : 'invisible'}`}>
        <div 
        onClick={(e) => e.stopPropagation()}
        className={`bg-white flex rounded-xl shadow p-6 transition-all ${open ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}>
            {children}
            <button 
            onClick={onClose}
            className='absolute top-1 right-4 p-1 rounded-lg text-3xl text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600'>
                x
            </button>
        </div>

    </div>
  )
}

export default Modal