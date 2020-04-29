import React from "react";

export default class Main extends React.Component {
    render() {
        return (
            <div className="cart">
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
                    </div>

                    <button className="btn btn-primary cart-confirm">
                        Оформить заказ
                    </button>
                    <div className="cart-close"></div>
                </div>
            </div>
        );
    }
}
