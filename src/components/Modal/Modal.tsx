import React, {useEffect, useState, FC, ReactNode} from 'react';
import modalStyles from '../Modal/Modal.module.css'
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {createPortal} from "react-dom";

const modalRoot = document.querySelector('#modal');

interface IProps {
    children: ReactNode;
    handleModalClose: () => void
}

const Modal:FC<IProps> = ({children, handleModalClose}) => {
    const [modalState, setModalState] = useState(true)
    function handleClose() {
        setModalState(false)
        setTimeout(() => handleModalClose(), 300)
    }


    useEffect(() => {
        function closeByEscape(event:KeyboardEvent) {
            if (event.key === 'Escape') {
                handleClose()
            }
        }
        document.addEventListener("keydown", closeByEscape)
        return () => document.removeEventListener('keydown', closeByEscape)
    }, [])

    return createPortal ((
        <div className={modalState ? `${modalStyles.modal} ${modalStyles.modalOpen}` : modalStyles.modal}>
          <div className={`${modalStyles.content}`}>
              <button className={` ${modalStyles.closeButton}`} onClick={handleClose}>
                  <CloseIcon type={"primary"} />
              </button>
              {children}
          </div>
          <ModalOverlay onClick={handleClose} />
        </div>
    ), modalRoot as Element);
}

export default Modal;
