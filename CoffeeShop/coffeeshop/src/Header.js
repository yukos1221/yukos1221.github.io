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
                            <a className="logo" href="index.html"></a>
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
                            <a href="/" className="nav-elements" id="cart">
                                <span className="counter">0</span>
                            </a>
                            <a href="/" className="nav-elements" id="wishlist">
                                <span className="counter">0</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
