import React from "react";

export default class Category extends React.Component {
    render() {
        return (
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                <div className="category">
                    <div className="category-title">
                        <h5>Категории</h5>
                    </div>
                    <ul className="category-list">
                        <li>
                            <a
                                href="/"
                                onClick={(event) => {
                                    event.preventDefault();
                                    return this.props.choiceCategory(function (
                                        items
                                    ) {
                                        return items.filter((item) =>
                                            item.category.includes("mobile")
                                        );
                                    });
                                }}
                                className="category-item category-item__mobile"
                                data-category="mobile"
                            >
                                Телефоны и аксессуары
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={(event) => {
                                    event.preventDefault();
                                    return this.props.choiceCategory(function (
                                        items
                                    ) {
                                        return items.filter((item) =>
                                            item.category.includes("pc")
                                        );
                                    });
                                }}
                                href="/"
                                className="category-item category-item__pc"
                                data-category="pc"
                            >
                                Компьютеры и оргтехника
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={(event) => {
                                    event.preventDefault();
                                    return this.props.choiceCategory(function (
                                        items
                                    ) {
                                        return items.filter((item) =>
                                            item.category.includes("electron")
                                        );
                                    });
                                }}
                                href="/"
                                className="category-item category-item__electron"
                                data-category="electron"
                            >
                                Электроника
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={(event) => {
                                    event.preventDefault();
                                    return this.props.choiceCategory(function (
                                        items
                                    ) {
                                        return items.filter((item) =>
                                            item.category.includes("home")
                                        );
                                    });
                                }}
                                href="/"
                                className="category-item category-item__home"
                                data-category="home"
                            >
                                Бытовая Техника
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={(event) => {
                                    event.preventDefault();
                                    return this.props.choiceCategory(function (
                                        items
                                    ) {
                                        return items.filter((item) =>
                                            item.category.includes("sport")
                                        );
                                    });
                                }}
                                href="/"
                                className="category-item category-item__sport"
                                data-category="sport"
                            >
                                Спорт и развлечения
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
