import React from "react";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wishlist: [],
            goodsCart: {},
            filter: function (items) {
                return items.sort(() => Math.random() - 0.5);
            },
            isCart,
        };
    }

    render() {
        return (<Header />), (<Category />), (<Cards />);
    }
}

export default App;
