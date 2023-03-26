import {useSelectors} from './useSelector'
import {newUserSelector} from '../services/selectors/userSelector'

const useAuthorization = () => {
    return useSelectors(newUserSelector)
}

export default useAuthorization