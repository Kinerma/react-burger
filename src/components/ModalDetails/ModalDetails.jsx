import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ModalActions} from '../../services/actions/modalActions';
import Modal from "../Modal/Modal";
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import {useNavigate} from "react-router-dom";


const ModalDetails = ({ingredientDetails}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const ingredient = useSelector(state => state.contentReducer.currentIngredient)

    useEffect(() => {
        dispatch({type: ModalActions.ADD_INGREDIENTS_MODAL, payload: ingredientDetails})
    }, [])

    return (
        <>
            {ingredient && <Modal handleModalClose={() => navigate(-1)}><IngredientDetails/></Modal>}
        </>
    );
};

export default ModalDetails;