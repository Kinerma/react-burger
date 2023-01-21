import React, {useRef} from "react";
import elementStyles from "../ConstructorElements/ConstructorElements.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrag, useDrop} from "react-dnd";
import {useDispatch} from "react-redux";
import {CONSTRUCTOR_REORDER} from "../../services/actions/constructorActions";

const ConstructorElements = ({ingredient, deleteElement, index}) => {
    const dispatch = useDispatch()

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
                dispatch({type:CONSTRUCTOR_REORDER, payload: {dragIndex: item.index, hoverIndex: index}})
                item.index = index
            }
        }
    })

    dragRef(dropRef(mainRef))

    return (
        <div className={`mb-4 ${isDrag && elementStyles.bun}`}  key={ingredient.cardId} ref={mainRef}>
            <DragIcon type={"primary"} />
            <ConstructorElement
                text={ingredient.name}
                thumbnail={ingredient.image}
                price={ingredient.price}
                handleClose={() => deleteElement(ingredient.cardId)}
            />
        </div>
    )
}


export default ConstructorElements;