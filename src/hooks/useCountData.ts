import {useCallback, useMemo} from "react";
import {newIngredientsReducerSelector} from "../services/selectors/ingredientsSelectors";
import {IIngredient, IConstructor} from '../utils/interface';
import {useSelectors} from "./useSelector";

interface ICountData {
    [key: string]: number
}

const useCountData = (arrayCalculated: (IIngredient | IConstructor)[]) => {
    const ingredients = useSelectors(newIngredientsReducerSelector)
    const countData = useMemo(() => {
        const ingredientsCount:ICountData = {}
        if (!ingredients.isSuccess) return ingredientsCount
        ingredients.ingredients.forEach((ingredient) => ingredientsCount[ingredient._id] = arrayCalculated.filter(arrayItem => arrayItem._id === ingredient._id).length)
        return ingredientsCount
    }, [ingredients, arrayCalculated])
    const getIngredient = useCallback ((ingredientId: string) => countData[ingredientId],[countData])
    return useMemo(() => ({countData,getIngredient}),[countData, getIngredient])
}

export default useCountData
