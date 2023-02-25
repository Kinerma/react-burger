import React from "react";
import {Logo, ListIcon, ProfileIcon, BurgerIcon,} from '@ya.praktikum/react-developer-burger-ui-components';
import styleAppHeader from './AppHeader.module.css'
import {NavLink} from "react-router-dom";



const BurgerConstructor = () => {
    return (
        <NavLink to="/" className={ ({isActive}) => `pt-4 pb-4 pr-5 pl-5 text text_type_main-default ${isActive ? styleAppHeader.button_active : ''} ${styleAppHeader.button} `}>
            <div className={`mr-2 ${styleAppHeader.container}`}>
                <BurgerIcon type="primary" />
            </div>
            Конструктор
        </NavLink>
    );
};

const OrderFeed =() => {
    return (
        <NavLink to='/order-feed' className={({isActive}) => `ml-2 pt-4 pb-4 pr-5 pl-5 text text_type_main-default ${isActive ? styleAppHeader.button_active : ''} ${styleAppHeader.button} `}>
            <div className={`mr-2 ${styleAppHeader.container}`}>
                <ListIcon type="secondary" />
            </div>
            Лента заказов
        </NavLink>
    );
};

const PersonalAccount = () => {
    return (
        <NavLink to='/profile' className={({isActive}) => `ml-2 pt-4 pb-4 pr-5 pl-5 text text_type_main-default ${isActive ? styleAppHeader.button_active : ''} ${styleAppHeader.button}`}>
            <div className={`mr-2 ${styleAppHeader.container}`}>
                <ProfileIcon type="secondary" />
            </div>
            Личный кабинет
        </NavLink>
    );
};

export const AppHeader = () => {
    return (
        <header className={styleAppHeader.header}>
            <div className={`p-4 ${styleAppHeader.header_navigation}`}>
                <div className={styleAppHeader.header_bar}>
                    <BurgerConstructor />
                    <OrderFeed />
                    <NavLink to='/' className={styleAppHeader.logo}><Logo /></NavLink>
                    <PersonalAccount />
                </div>
            </div>
        </header>
    );
};
