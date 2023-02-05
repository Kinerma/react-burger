import React, {useEffect} from "react";
import appStyles from './App.module.css'
import {AppHeader} from '../AppHeader/AppHeader'
import {createIngredientsThunk} from "../../services/actions/createThunk";
import {useDispatch} from "react-redux";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import OrderFeed from "../../pages/OrderFeed/OrderFeed";
import NotFound from "../../pages/NotFound/NotFound";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(createIngredientsThunk())

    }, [])

  return (
          <div className={appStyles.app}>
              <BrowserRouter>
                  <AppHeader />
                  <Routes>
                      <Route to='/'>
                          <Route index path="/" element={<MainPage />} />
                          <Route path='/login' element={<Login />} />
                          <Route path='/registration' element={<Registration />} />
                          <Route path='/reset-password' element={<ResetPassword />} />
                          <Route path='/forgot-password' element={<ForgotPassword />} />
                          <Route path='/order-feed' element={<OrderFeed />} />
                          <Route path='*' element={<NotFound />} />
                      </Route>
                  </Routes>
              </BrowserRouter>
          </div>
  );
};

export default App;
