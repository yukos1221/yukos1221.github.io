import React from "react";
import db from "./db/db";

export default function ({id, count}) {
    return (
        <div className="goods">
            <div className="goods-img-wrapper">
                <img className="goods-img" src="img/temp.png" alt="" />
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
    );
}
