import React from 'react';
import overlayStyles from '../ModalOverlay/ModalOverlay.module.css'
import PropTypes from "prop-types";

const ModalOverlay = ({onClick}) => {
    return (
        <div className={`${overlayStyles.overlay}`} onClick={onClick} />
    );
};

ModalOverlay.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default ModalOverlay;