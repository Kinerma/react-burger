import React, {useRef, FC} from "react";
import elementStyles from "../ConstructorElements/ConstructorElements.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrag, useDrop} from "react-dnd";
import {constructorReorder} from "../../services/actions/constructorActions";
import {useAppDispatch} from "../../hooks/UseAppDispatch";
import {IIngredient} from "../../utils/interface";

interface IProps {
    ingredient: IIngredient
    deleteElement:
    index:
}

const ConstructorElements:FC<IProps> = ({ingredient, deleteElement, index}) => {
    const dispatch = useAppDispatch()

    const mainRef = useRef(null)

    const [{isDrag},dragRef] =  useDrag({
        type: 'cartElement',
        item: {index:index},
        collect: monitor => ({isDrag:monitor.isDragging()})
    })

    const [,dropRef] = useDrop({
        accept: 'cartElement',
        hover(item) {
            if (index !== item.index) {
                dispatch(constructorReorder(item.index, index))
                item.index = index
            }
        }
    })

    dragRef(dropRef(mainRef))

    return (
        <div className={`mb-4 ${isDrag && elementStyles.bun}`}  key={ingredient.cartId} ref={mainRef}>
            <DragIcon type={"primary"} />
            <ConstructorElement
                text={ingredient.name}
                thumbnail={ingredient.image}
                price={ingredient.price}
                handleClose={() => {
                    deleteElement(ingredient.cartId)
                }}
            />
        </div>
    )
}


export default ConstructorElements;