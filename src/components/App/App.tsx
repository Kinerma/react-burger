import React, {useEffect} from "react";
import appStyles from './App.module.css'
import {AppHeader} from '../AppHeader/AppHeader'
import {checkUserAuthThunk, createIngredientsThunk} from "../../services/actions/createThunk";
import {Routes, Route, useNavigate, useLocation} from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import Feed from "../../pages/Feed/Feed";
import Profile from "../../pages/Profile/Profile";
import Autorization from "../../pages/Autorization/Autorization";
import Deauthorization from "../../pages/Deauthorization/Deauthorization";
import IngredientDetailsId from "../../pages/IngredientDetailsId/IngredientDetailsId";
import Order from "../../pages/Order/Order";
import {OrderProfile} from "../../pages/OrderProfile/OrderProfile";
import Modal from "../Modal/Modal";
import OrderInfo from "../OrderInfo/OrderInfo";
import NotFound from "../../pages/NotFound/NotFound";
import ModalDetails from "../ModalDetails/ModalDetails";
import {
    newIngredientsReducerSelector
} from "../../services/selectors/ingredientsSelectors";
import {useAppDispatch} from '../../hooks/UseAppDispatch'
import {useSelectors} from "../../hooks/useSelector";
import Loader from "../Loader/Loader";

function App() {
    const dispatch = useAppDispatch();
    const {ingredients, isLoading, isFail, isSuccess} = useSelectors(newIngredientsReducerSelector);
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {!ingredients.length && dispatch(createIngredientsThunk())},[ingredients])
    useEffect(() => {
      dispatch(checkUserAuthThunk())
    }, [])
    if (!isSuccess && !isFail)
        return <Loader />

  return (
          <div className={appStyles.app}>
                  <AppHeader />
                  <Routes>
                      <Route path='/'>
                          <Route path="/" element={<MainPage/>}>
                              {location.state?.from === "/"
                                  &&
                                  <Route path={"/ingredient/:id"} element={<ModalDetails ingredientDetails={location.state.ingredient}/>} />}
                          </Route>
                          <Route path='/login' element={<Deauthorization><Login /></Deauthorization>} />
                          <Route path='/registration' element={<Deauthorization><Registration /></Deauthorization>} />
                          <Route path='/reset-password' element={<Deauthorization><ResetPassword /></Deauthorization>} />
                          <Route path='/forgot-password' element={<Deauthorization><ForgotPassword /></Deauthorization>} />
                          <Route path='/feed' element={<Feed />}>
                              {location.state?.from === "feed"
                                  &&
                                  <Route path=":id" element={<Modal handleModalClose={() => navigate(-1)} children={<OrderInfo orderInfo={location.state.orderInfo}/>}/>} />}
                          </Route>
                          <Route path='/profile' element={<Autorization><Profile /></Autorization>}>
                              <Route path='orders' element={<OrderProfile />}>
                                  {location.state?.from === "profile"
                                      &&
                                      <Route path=":id" element={<Modal handleModalClose={() => navigate(-1)} children={<OrderInfo orderInfo={location.state.orderInfo}/>}/>} />}
                              </Route>
                          </Route>
                          <Route path='/profile/feed/:id' element={<Order />} />
                          <Route path='/feed/:id' element={<Order />} />
                          <Route path="/profile/orders/:id" element={<Autorization><Order /></Autorization>}/>
                          <Route path='/ingredient/:id' element={<IngredientDetailsId />} />
                          <Route path='*' element={<NotFound />} />
                      </Route>
                  </Routes>
          </div>
  );
}

export default App;
