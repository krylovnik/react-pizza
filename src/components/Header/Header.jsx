import React from 'react';
import s from  "./Header.module.css"
import logoSvg from '../../assets/img/pizza-logo.svg'
import basketSvg from '../../assets/img/basket-logo.svg'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header_left}>
                <img src={logoSvg} alt="pizza-logo"/>
                <div>
                    <h1>REACT PIZZA</h1>
                    <p>самая вкусная пицца во вселенной</p>
                </div>
            </div>
            <div className={s.header_right}>
                <div className={s.basket}>
                    <span>0 ₽</span>
                    <div className={s.separator}/>
                    <div className={s.basket_logo}>
                        <img src={basketSvg} alt="basket-logo"/>
                        <span>0</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;