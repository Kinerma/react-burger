import {useCallback, useMemo} from "react";
import {newIngredientsDefaultSelector} from '../services/selectors/ingredientsSelectors';
import {IIngredient} from '../utils/interface';
import {useSelectors} from "./useSelector";

interface IUseData {
    [key: string]: IIngredient
}

export const useData = () => {
    const ingredients = useSelectors(newIngredientsDefaultSelector)
    const dataList = useMemo(() => {
        const ingredientsData:IUseData = {}
        ingredients.forEach(ingredient => ingredientsData[ingredient._id] = ingredient)
        return ingredientsData
    }, [ingredients])
    const getIngredientImage = useCallback((ingredientId:string) => dataList[ingredientId].image, [dataList])
    const getIngredientPrice = useCallback((ingredientId:string) => dataList[ingredientId].price, [dataList])
    const getIngredientData = useCallback((ingredientId: string) => dataList[ingredientId], [dataList])
    const priceCalculationById = useCallback((ingredientsIdList: string[]) => ingredientsIdList.reduce((prev, ingredientId) => prev + getIngredientPrice(ingredientId), 0), [getIngredientPrice])

    return useMemo(() => ({
        dataList,
        getIngredientImage,
        getIngredientPrice,
        getIngredientData,
        priceCalculationById
    }),
        [dataList, getIngredientImage, getIngredientPrice, getIngredientData, priceCalculationById])
}

