import React from "react";
import Header from "./Header";
import Main from "./Main/Main";
import Basket from "./Basket";
import db from "./db/db";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wishlist: [],
            goodsCart: {},
            cards: this.defaultFilter(db),
            isCartOpen: false,
        };
    }

    toggleIsCartOpen = () => {
        this.setState({
            isCartOpen: !this.state.isCartOpen,
        });
    };

    addToCartMethod = (id) => {
        let newGoods = Object.assign({}, this.state.goodsCart);
        if (this.state.goodsCart[id]) {
            newGoods[id] = newGoods[id] + 1;
        } else {
            newGoods[id] = 1;
        }
        this.setState({
            wishlist: this.state.wishlist,
            cards: this.state.cards,
            isCartOpen: this.state.isCartOpen,
            goodsCart: newGoods,
        });
    };

    toggleWishlist = (id) => {
        let localarr = this.state.wishlist.slice();
        if (localarr.includes(id)) {
            localarr.splice(localarr.indexOf(id), 1);
            this.setState({
                wishlist: localarr,
            });
        } else {
            this.setState({
                wishlist: [...this.state.wishlist, id],
            });
        }
    };

    defaultFilter(items) {
        return items.sort(() => Math.random() - 0.5);
    }

    choiceCategory = (newfilter) => {
        this.setState({
            cards: newfilter(db),
        });
    };

    render() {
        return (
            <>
                <Header
                    choiceCategory={this.choiceCategory}
                    wishlist={this.state.wishlist}
                    goodsCart={this.state.goodsCart}
                    toggleIsCartOpen={this.toggleIsCartOpen}
                />
                <Main
                    cards={this.state.cards}
                    choiceCategory={this.choiceCategory}
                    wishlistPack={[this.state.wishlist, this.toggleWishlist]}
                    addToCartMethod={this.addToCartMethod}
                />
                <Basket
                    goodsCart={this.state.goodsCart}
                    isCartOpenPack={[
                        this.state.isCartOpen,
                        this.toggleIsCartOpen,
                    ]}
                />
            </>
        );
    }
}

//TODO: make db json again
