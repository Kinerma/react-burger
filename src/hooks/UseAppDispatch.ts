import {useDispatch} from "react-redux";
import {ActionsDispatch} from '../services/store'

export const useAppDispatch = () => useDispatch<ActionsDispatch>()