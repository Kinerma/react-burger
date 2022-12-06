import React from "react";
import {Logo, ListIcon, ProfileIcon, BurgerIcon,} from '@ya.praktikum/react-developer-burger-ui-components';
import styleAppHeader from './AppHeader.module.css'

function BurgerConstructor() {
  return (
    <button className={`pt-4 pb-4 pr-5 pl-5 text text_type_main-default ${styleAppHeader.button_active} ${styleAppHeader.button}`}>
      <div className={`mr-2 ${styleAppHeader.container}`}>
        <BurgerIcon type="primary" />
      </div>
      Конструктор
    </button>
  );
};

function OrderFeed() {
  return (
    <button className={`ml-2 pt-4 pb-4 pr-5 pl-5 text text_type_main-default text_color_inactive ${styleAppHeader.button} ${styleAppHeader.button_order}`}>
      <div className={`mr-2 ${styleAppHeader.container}`}>
        <ListIcon type="secondary" />
      </div>
      Лента заказов
    </button>
  );
};

function PersonalAccount() {
  return (
    <button className={`ml-2 pt-4 pb-4 pr-5 pl-5 text text_type_main-default text_color_inactive ${styleAppHeader.button} ${styleAppHeader.button_account}`}>
      <div className={`mr-2 ${styleAppHeader.container}`}>
        <ProfileIcon type="secondary" />
      </div>
      Личный кабинет
    </button>
    );
};

export const AppHeader = () => {
  return (
    <header className={styleAppHeader.header}>
      <div className={`p-4 ${styleAppHeader.header_navigation}`}>
        <div className={styleAppHeader.header_bar}>
          <BurgerConstructor />
          <OrderFeed />
          <Logo />
          <PersonalAccount />
        </div>
      </div>
    </header>
  );
};
