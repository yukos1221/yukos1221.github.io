import React from "react";

export default function Card({ elem }) {
    return (
        <div className="card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3">
            <div className="card">
                <div className="card-img-wrapper">
                    <img className="card-img-top" src={elem.imgCart} alt="" />
                    <button
                        className="card-add-wishlist" // ${wishlist.includes(id)? 'active' : ''
                        data-goods-id={elem.id}
                    ></button>
                </div>
                <div className="card-body justify-content-between">
                    <a href="/" className="card-title">
                        {elem.title}
                    </a>
                    <div className="card-price">{elem.price} ₽</div>
                    <div>
                        <button
                            className="card-add-cart"
                            data-goods-id={elem.id}
                        >
                            Добавить в корзину
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
