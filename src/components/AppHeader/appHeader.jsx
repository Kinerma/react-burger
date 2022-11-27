import React from "react";

import {Logo, ListIcon, ProfileIcon, BurgerIcon,} from '@ya.praktikum/react-developer-burger-ui-components';

import styleAppHeader from './appHeader.module.css'

function BurgerConstructor() {
  return (
    <button className={styleAppHeader.button}>
      <div className={styleAppHeader.Container}>
        <BurgerIcon type="primary" />
      </div>
      Конструктор
    </button>
  );
};

function OrderFeed() {
  return (
    <button className={styleAppHeader.button}>
      <div className={styleAppHeader.Container}>
        <ListIcon type="secondary" />
      </div>
      Лента заказов
    </button>
  );
};

function PersonalAccount() {
  return (
    <button className={styleAppHeader.button}>
      <div className={styleAppHeader.Container}>
        <ProfileIcon type="secondary" />
      </div>
      Личный кабинет
    </button>
    );
};

export const AppHeader = () => {
  return (
    <header className={styleAppHeader.header_semantic}>
      <div className={styleAppHeader.header}>
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

