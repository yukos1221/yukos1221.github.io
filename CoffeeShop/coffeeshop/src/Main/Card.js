import React from "react";

export default function Card({ elem, wishlistPack }) {
    const wishlist = wishlistPack[0];
    let fakewishlist = wishlist.slice();
    const toggleWishlist = wishlistPack[1];
    let wishlistButtonClasses = "card-add-wishlist ";
    if (fakewishlist.includes(elem.id)) {
        wishlistButtonClasses += "active";
    }
    return (
        <div className="card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3">
            <div className="card">
                <div className="card-img-wrapper">
                    <img className="card-img-top" src={elem.imgCart} alt="" />
                    <button
                        className={wishlistButtonClasses}
                        data-goods-id={elem.id}
                        onClick={() => toggleWishlist(elem.id)}
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
