import React, { useCallback, useEffect, type FC, type ReactNode } from "react";
import { Button } from "../Button/Button";
import { Portal } from "../Portal/Portal";
import cls from "./Modal.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const Modal: FC<ModalProps> = (props) => {
  const { className = "", children, isOpen = false, onClose } = props;

  const mods: Record<string, boolean> = { [cls.opened]: isOpen };

  const handleClose = useCallback(() => {
    if (onClose) onClose();
  }, [onClose]);

  const handleStopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleEscPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      console.log("escape");
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscPress);
    }
    return () => {
      window.removeEventListener("keydown", handleEscPress);
    };
  }, [isOpen, handleClose]);

  //* @ts-ignore */
  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={handleClose}>
          <div
            className={classNames(cls.content, mods)}
            onClick={handleStopPropagation}
          >
            <Button className={cls.closeBtn} onClick={handleClose}>
              X
            </Button>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
