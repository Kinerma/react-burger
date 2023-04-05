import React, {useCallback, useMemo, FC} from 'react';
import cardStyles from './OrderCard.module.css'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {useData} from '../../hooks/useData'
import {getData, displayStatus} from "../../utils/typesIngredients";
import {IOrderType} from '../../utils/interface'

interface IProps {
    elementPosition: "profile" | "feed";
    orderInfo: IOrderType;
}

const OrderCard:FC<IProps> = ({elementPosition, orderInfo}) => {
    const ingredientsData = useData()
    const price = useMemo(() => orderInfo.ingredients.reduce((a, ingredientId) => ingredientId ? a + ingredientsData.getIngredientPrice(ingredientId) : a, 0), [ingredientsData, orderInfo])
    const getLink = useCallback((linkPos: typeof elementPosition) => linkPos === "feed" ? `/feed/${orderInfo._id}` : `/profile/orders/${orderInfo._id}`, [orderInfo])

    return (
        <Link to={getLink(elementPosition)} className={cardStyles.link}
              state={{from: elementPosition, orderInfo: orderInfo}}>
            <div className={`pt-6 pb-6 pl-6 pr-6 ${cardStyles.container}`}>
                <div className={cardStyles.info}>
                    <p className={"text text_type_digits-default text_color_primary"}>#{orderInfo.number}</p>
                    <p className={"text text_type_main-default text_color_inactive"}>{getData(orderInfo.createdAt)}</p>
                </div>
                <p className={`text text_type_main-medium text_color_primary mt-6 ${cardStyles.title}`}>{orderInfo.name}</p>
                {orderInfo.status &&
                    <p className={orderInfo.status === "done" ? "text text_type_main-small mt-2 text_color_success" : orderInfo.status === "created" ? "text text_type_main-small mt-2 text_color_primary" : "text text_type_main-small mt-2 text_color_accent"}>{displayStatus(orderInfo.status)}</p>}
                <div className={`${cardStyles.info} mt-6`}>
                    <div className={cardStyles.ingredientsContainer}>
                        {
                            orderInfo.ingredients.slice(0, 6)
                                .map((ingredientId, index) => ingredientId &&
                                    <div className={cardStyles.ingredient}
                                         data-count={`+${orderInfo.ingredients.slice(6).length}`}
                                         key={`${orderInfo._id}-${index}-${ingredientId}`}><img
                                         src={ingredientsData.getIngredientImage(ingredientId)}
                                         className={cardStyles.ingredientImage} alt={"Картинка ингредиента"}/>
                                    </div>)
                        }
                    </div>
                    <div className={cardStyles.price}>
                        <p className={"text text_type_digits-default text_color_primary"}>{price}</p>
                        <CurrencyIcon type='primary' />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default OrderCard;