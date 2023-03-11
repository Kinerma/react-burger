import {useCallback, useMemo} from "react";
import {useSelector} from "react-redux";
import {newIngredientsDefaultSelector} from '../services/selectors/ingredientsSelectors'

export const useData = () => {
    const ingredients = useSelector(newIngredientsDefaultSelector)
    const dataList = useMemo(() => {
        const ingredientsData = {}
        ingredients.forEach(ingredient => ingredientsData[ingredient._id] = ingredient)
        return ingredientsData
    }, [ingredients])
    const getIngredientImage = useCallback(ingredientId => dataList[ingredientId].image, [dataList])
    const getIngredientPrice = useCallback(ingredientId => dataList[ingredientId].price, [dataList])
    const getIngredientData = useCallback(ingredientId => dataList[ingredientId], [dataList])
    const priceCalculationById = useCallback((ingredientsIdList) => ingredientsIdList.reduce((prev, ingredientId) => prev + getIngredientPrice(ingredientId), 0), [getIngredientPrice])

    return useMemo(() => ({
        dataList,
        getIngredientImage,
        getIngredientPrice,
        getIngredientData,
        priceCalculationById
    }),
        [dataList, getIngredientImage, getIngredientPrice, getIngredientData, priceCalculationById])
}

