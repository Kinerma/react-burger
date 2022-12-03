import React from 'react';
import OverlayStyles from '../ModalOverlay/ModalOverlay.module.css'
import PropTypes from "prop-types";

const ModalOverlay = ({onClick}) => {
    return (
        <div className={`${OverlayStyles.overlay}`} onClick={onClick} />
    );
};

ModalOverlay.propTypes = {

}

export default ModalOverlay;