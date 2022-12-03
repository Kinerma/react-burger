import React from 'react';
import OverlayStyles from '../ModalOverlay/ModalOverlay.module.css'
import PropTypes from "prop-types";

const ModalOverlay = ({onCloseOverlay}) => {
    return (
        <div className={`${OverlayStyles.overlay}`} onClick={onCloseOverlay} />
    );
};

ModalOverlay.propTypes = {
    onCloseOverlay: PropTypes.func.isRequired
}

export default ModalOverlay;