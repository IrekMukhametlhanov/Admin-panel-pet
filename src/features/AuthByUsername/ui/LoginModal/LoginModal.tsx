import React from "react";
import cls from "./LoginModal.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal isOpen={isOpen} lazy onClose={onClose}>
      <LoginForm />
    </Modal>
  );
};
