import React, {useEffect} from "react";
import appStyles from './App.module.css'
import {AppHeader} from '../AppHeader/AppHeader'
import {checkUserAuthThunk, createIngredientsThunk} from "../../services/actions/createThunk";
import {useDispatch} from "react-redux";
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

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
      dispatch(createIngredientsThunk())
      dispatch(checkUserAuthThunk())
    }, [])

  return (
          <div className={appStyles.app}>
                  <AppHeader />
                  <Routes>
                      <Route to='/'>
                          <Route index path="/" element={<MainPage />} />
                          <Route path='/login' element={<Deauthorization><Login /></Deauthorization>} />
                          <Route path='/registration' element={<Deauthorization><Registration /></Deauthorization>} />
                          <Route path='/reset-password' element={<Deauthorization><ResetPassword /></Deauthorization>} />
                          <Route path='/forgot-password' element={<Deauthorization><ForgotPassword /></Deauthorization>} />
                          <Route path='/order-feed' element={<Feed />}>
                              {location.state?.from === "feed" && <Route path=":id" element={<Modal handleModalClose={() => navigate(-1)} children={<OrderInfo orderInfo={location.state.orderInfo}/>}/>}/>}
                          </Route>
                          <Route path='/profile/order-feed/:id' element={<Order />} />
                          <Route path='/profile' element={<Autorization><Profile /></Autorization>}>
                              <Route path='order-feed' element={<OrderProfile />}>
                                  {location.state?.from === "profile" && <Route path=":id" element={<Modal handleModalClose={() => navigate(-1)} children={<OrderInfo orderInfo={location.state.orderInfo}/>}/>}/>}
                              </Route>
                          </Route>
                          <Route path='/ingredient/:id' element={<IngredientDetailsId />} />
                      </Route>
                  </Routes>
          </div>
  );
};

export default App;
