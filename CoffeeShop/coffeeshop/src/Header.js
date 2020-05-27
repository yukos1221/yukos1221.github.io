import React from "react";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            formClasses: ["search"],
        };
    }

    onSubmit() {
        const val = this.state.value.trim();
        if (val !== "") {
            const searchString = new RegExp(val, "i");
            const filt = function (goods) {
                return goods.filter((item) => searchString.test(item.title));
            };
            this.props.choiceCategory(filt);
            this.setState({ value: "" });
        } else {
            this.setState({
                formClasses: ["search", "error"],
            });
            setTimeout(() => {
                this.setState({
                    formClasses: ["search"],
                });
            }, 2000);
        }
    }

    render() {
        return (
            <header>
                <nav>
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <a className="logo" href="/"></a>
                            <form
                                className={this.state.formClasses.join(" ")}
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    this.onSubmit();
                                }}
                            >
                                <div className="search-wrapper">
                                    <input
                                        value={this.state.value}
                                        onChange={(event) =>
                                            this.setState({
                                                value: event.target.value,
                                            })
                                        }
                                        id="searchGoods"
                                        className="search-wrapper_input"
                                        type="text"
                                        aria-label="Поиск товаров"
                                        role="search"
                                    />
                                </div>
                                <div className="search-wrap-btn">
                                    <button
                                        type="submit"
                                        className="search-btn"
                                        id="search-btn"
                                        aria-label="Поиск товаров"
                                    ></button>
                                </div>
                            </form>
                            <a
                                href="/"
                                className="nav-elements"
                                id="cart"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.props.toggleIsCartOpen();
                                }}
                            >
                                <span className="counter">
                                    {Object.keys(this.props.goodsCart).length}
                                </span>
                            </a>
                            <a
                                href="/"
                                className="nav-elements"
                                id="wishlist"
                                onClick={(event) => {
                                    let fakearr = this.props.wishlist.slice();
                                    event.preventDefault();
                                    this.props.choiceCategory((items) =>
                                        items.filter((item) =>
                                            fakearr.includes(item.id)
                                        )
                                    );
                                }}
                            >
                                <span className="counter">
                                    {this.props.wishlist.length}
                                </span>
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
