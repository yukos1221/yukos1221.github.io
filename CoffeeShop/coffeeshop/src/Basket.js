import React from "react";
import Basket_card from "./Basket_card";

export default function ({ isCartOpenPack, goodsCart }) {
    const isCartOpen = isCartOpenPack[0];
    const toggleIsCartOpen = isCartOpenPack[1];
    if (!isCartOpen) {
        return null;
    }

    return (
        <div
            className="cart"
            onClick={(event) => {
                if (event.target.className === "cart") toggleIsCartOpen();
            }}
        >
            <div className="cart-body">
                <div className="cart-head">
                    <div className="cart-title">Корзина</div>
                    <div className="cart-total">
                        Общая сумма: <span>0</span> руб
                    </div>
                </div>

                <div className="cart-wrapper">
                    <div className="goods">
                        <div className="goods-img-wrapper">
                            <img
                                className="goods-img"
                                src="img/temp.png"
                                alt=""
                            />
                        </div>
                        <div className="goods-description">
                            <h2 className="goods-title">Название товара</h2>
                            <p className="goods-price">100000 ₽</p>
                        </div>
                        <div className="goods-price-count">
                            <div className="goods-trigger">
                                <button className="goods-add-wishlist"></button>
                                <button className="goods-delete"></button>
                            </div>
                            <div className="goods-count">1</div>
                        </div>
                    </div>
                    {/* {Object.keys(goodsCart).map((id) => {
                        return (
                            <Basket_card
                                id={id}
                                count={goodsCart[id]}
                                key={id}
                            />
                        );
                    })} */}
                </div>

                <button className="btn btn-primary cart-confirm">
                    Оформить заказ
                </button>
                <div
                    className="cart-close"
                    onClick={() => toggleIsCartOpen()}
                ></div>
            </div>
        </div>
    );
}
