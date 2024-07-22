import React from 'react';
import ReactModal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Crypto Selector"
            className="fixed inset-0 bg-white p-6 max-w-lg mx-auto my-12 rounded-lg shadow-2xl outline-none h-[500px]"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-700 hover:text-gray-900">
                <AiOutlineClose size={24} />
            </button>
            {children}
        </ReactModal>
    );
};

export default Modal;
