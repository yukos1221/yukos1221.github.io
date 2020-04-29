import React from "react";
import Header from "./Header";
import Main from "./Main/Main";
import db from "./db/db";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.choiceCategory = this.choiceCategory.bind(this);
        this.state = {
            wishlist: [],
            goodsCart: {},
            cards: this.defaultFilter(db),
            isCartOpen: false,
        };
    }

    defaultFilter(items) {
        return items.sort(() => Math.random() - 0.5);
    }

    choiceCategory(newfilter) {
        this.setState({
            cards: newfilter(db),
        });
    }

    render() {
        return (
            <>
                <Header />
                <Main
                    cards={this.state.cards}
                    choiceCategory={this.choiceCategory}
                />
            </>
        );
    }
}

//TODO: make db json again
