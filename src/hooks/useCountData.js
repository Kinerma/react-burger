import {useCallback, useMemo} from "react";
import {useSelector} from "react-redux";
import {newIngredientsReducerSelector} from "../services/selectors/ingredientsSelectors";

const useCountData = (arrayCalculated) => {
    const ingredients = useSelector(newIngredientsReducerSelector)
    const countData = useMemo(() => {
        const ingredientsCount = {}
        if (!ingredients.isSuccess) return ingredientsCount
        ingredients.ingredients.forEach((ingredient) => ingredientsCount[ingredient._id] = arrayCalculated.filter(arrayItem => arrayItem._id === ingredient._id).length)
        return ingredientsCount
    }, [ingredients, arrayCalculated])
    const getIngredient = useCallback ((ingredientId) => countData[ingredientId],[countData])
    return useMemo(() => ({countData,getIngredient}),[countData, getIngredient])
}

export default useCountData
