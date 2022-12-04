import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import modalStyles from '../Modal/Modal.module.css'
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {createPortal} from "react-dom";

const modalRoot = document.querySelector('#modal');

const Modal = ({children, handleModalClose}) => {
    const [modalState, setModalState] = useState(true)
    function handleClose() {
        setModalState(false)
        setTimeout(() => handleModalClose(), 300)
    }


    useEffect(() => {
        function closeByEscape(event) {
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
    ), modalRoot);
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  handleModalClose: PropTypes.func.isRequired
}

export default Modal;