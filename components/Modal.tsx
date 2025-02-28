import React, { MouseEventHandler } from "react";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  component?:JSX.Element
}
export const Modal = ({ isOpen, onClose, component }: ModalProps) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-10 flex items-center  justify-center bg-white-800 bg-opacity-50">
          {component}
      </div>
    );
  };
  