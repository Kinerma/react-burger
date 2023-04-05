import React, {FC} from 'react';
import overlayStyles from '../ModalOverlay/ModalOverlay.module.css'

interface IProps {
    onClick: () => void
}

const ModalOverlay:FC<IProps> = ({onClick}) => {
    return (
        <div className={`${overlayStyles.overlay}`} onClick={onClick} />
    );
}

export default ModalOverlay;
