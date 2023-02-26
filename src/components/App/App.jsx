import React, {useEffect} from "react";
import appStyles from './App.module.css'
import {AppHeader} from '../AppHeader/AppHeader'
import {checkUserAuthThunk, createIngredientsThunk} from "../../services/actions/createThunk";
import {useDispatch} from "react-redux";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import Feed from "../../pages/Feed/Feed";
import NotFound from "../../pages/NotFound/NotFound";
import Profile from "../../pages/Profile/Profile";
import Autorization from "../../pages/Autorization/Autorization";
import Deauthorization from "../../pages/Deauthorization/Deauthorization";
import IngredientDetailsId from "../../pages/IngredientDetailsId/IngredientDetailsId";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(createIngredientsThunk())
      dispatch(checkUserAuthThunk())
    }, [])

  return (
          <div className={appStyles.app}>
              <BrowserRouter>
                  <AppHeader />
                  <Routes>
                      <Route to='/'>
                          <Route index path="/" element={<MainPage />} />
                          <Route path='/login' element={<Deauthorization><Login /></Deauthorization>} />
                          <Route path='/registration' element={<Deauthorization><Registration /></Deauthorization>} />
                          <Route path='/reset-password' element={<Deauthorization><ResetPassword /></Deauthorization>} />
                          <Route path='/forgot-password' element={<Deauthorization><ForgotPassword /></Deauthorization>} />
                          <Route path='/order-feed' element={<Feed />} />
                          <Route path='/profile' element={<Autorization><Profile /></Autorization>} />
                          <Route path='/ingredient/:id' element={<IngredientDetailsId />} />
                          <Route path='*' element={<NotFound />} />
                      </Route>
                  </Routes>
              </BrowserRouter>
          </div>
  );
};

export default App;
