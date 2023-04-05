import React, {useRef, FC} from "react";
import elementStyles from "../ConstructorElements/ConstructorElements.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrag, useDrop} from "react-dnd";
import {constructorReorder} from "../../services/actions/constructorActions";
import {useAppDispatch} from "../../hooks/UseAppDispatch";
import {IConstructor} from "../../utils/interface";

interface IProps {
    ingredient: IConstructor,
    deleteElement: (cartId: any) => void,
    index: number,
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
            // @ts-ignore
            if (index !== item.index) {
                // @ts-ignore
                dispatch(constructorReorder(item.index, index))
                // @ts-ignore
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
