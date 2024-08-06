import React from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

interface ModalProps {
  btnCaption: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  title?: string;
  message?: string;
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, onConfirm, title, message }) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          {title && <AlertDialogTitle>{title}</AlertDialogTitle>}
          {message && <AlertDialogDescription className="text-black">{message}</AlertDialogDescription>}
        </AlertDialogHeader>
        <AlertDialogFooter>
          {onConfirm && (
            <AlertDialogAction onClick={onConfirm} className="bg-red-600 text-white hover:bg-red-700">
              Confirm
            </AlertDialogAction>
          )}
          <AlertDialogAction onClick={onClose} className="bg-black text-white hover:bg-gray-800">
            Ok
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Modal;
