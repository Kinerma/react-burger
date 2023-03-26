import React from 'react';
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import elementStyles from '../BurgerElements/BurgerElements.module.css'
import ConstructorElements from '../ConstructorElements/ConstructorElements'
import {useDispatch, useSelector} from "react-redux";
import iconBun from '../../images/bun-icon.png'
import {useDrop} from "react-dnd";
import {ConstructorActions} from "../../services/actions/constructorActions";


const BurgerElements = () => {
    const ingredients = useSelector((state) => state.constructorReducer);
    const dispatch = useDispatch();
    const deleteElement = (cardId) => dispatch({type: ConstructorActions.CONSTRUCTOR_DELETE, payload: cardId})

    const [, dropContainerRef] = useDrop({
        accept: 'ingredient',
        drop(item) {
            dropHandler(item)
        }
    })


    const dropHandler = (ingredient) => {
            dispatch({type: ConstructorActions.ADD_INGREDIENT_CONSTRUCTOR, payload:ingredient})
    }

    return (
        <div className='ml-4' ref={dropContainerRef}>
            <div className={`pl-8`}>
              <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={`${ingredients.bun ? ingredients.bun.name : 'Выберите булку'} (верх)`}
                  price={ingredients.bun ? ingredients.bun.price : 0}
                  thumbnail={ingredients.bun ? ingredients.bun.image : iconBun}
              />
            </div>
            <div className={`mt-4 pr-2 ${elementStyles.element}`}>
              {ingredients.ingredients.map((ingredient, index) => {
                  return (
                    <ConstructorElements key={ingredient.cartId} deleteElement={deleteElement} ingredient={ingredient} index={index} />
                  );
                })
              }
            </div>
            <div className={`pl-8`}>
              <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={`${ingredients.bun ? ingredients.bun.name : 'Выберите булку'} (низ)`}
                  price={ingredients.bun ? ingredients.bun.price : 0}
                  thumbnail={ingredients.bun ? ingredients.bun.image : iconBun}
              />
            </div>
        </div>
    );
};


export default BurgerElements;
