import React, {useEffect, FC} from 'react';
import {ModalActions} from '../../services/actions/modalActions';
import Modal from "../Modal/Modal";
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/UseAppDispatch";
import {useSelectors} from "../../hooks/useSelector";
import {IIngredient} from "../../utils/interface";

interface IProps {
    ingredientDetails: IIngredient
}

const ModalDetails:FC<IProps> = ({ingredientDetails}) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const ingredient = useSelectors(state => state.contentReducer.currentIngredient)
    console.log(ingredientDetails)
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