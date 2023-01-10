import React from 'react';
import {DragIcon, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import elementStyles from '../BurgerElements/BurgerElements.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {ADD_INGREDIENT_CONSTRUCTOR, CONSTRUCTOR_DELETE} from "../../services/actions/constructorActions";


const BurgerElements = () => {
    const ingredients = useSelector((state) => state.constructorReducer);
    const dispatch = useDispatch();
    const deleteElement = (cardId) => dispatch({type: CONSTRUCTOR_DELETE, payload: cardId})

    const [, dropContainerRef] = useDrop({
        accept: 'ingredient',
        drop(item) {
            dropHandler(item)
        }
    })

    const dropHandler = (ingredient) => {
            dispatch({type: ADD_INGREDIENT_CONSTRUCTOR, payload:ingredient})
    }

    return (
        <div className={`ml-4`} ref={dropContainerRef}>
            <div className={`pl-8`}>
              <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={`${ingredients.bun ? ingredients.bun.name : 'Выберите булку'} (верх)`}
                  price={ingredients.bun ? ingredients.bun.price : 0}
                  thumbnail={ingredients.bun ? ingredients.bun.image : ''}
              />
            </div>
            <div className={`mt-4 pr-2 ${elementStyles.element}`}>
              {ingredients.ingredients.map((ingredient) => {
                  return (
                    <div className={`mb-4 ${elementStyles.bun}`}  key={ingredient.cardId}>
                      <DragIcon type={"primary"} />
                      <ConstructorElement
                         text={ingredient.name}
                         thumbnail={ingredient.image}
                         price={ingredient.price}
                         handleClose={() => deleteElement(ingredient.cardId)}
                      />
                    </div>
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
                  thumbnail={ingredients.bun ? ingredients.bun.image : ''}
              />
            </div>
        </div>
    );
};


export default BurgerElements;
