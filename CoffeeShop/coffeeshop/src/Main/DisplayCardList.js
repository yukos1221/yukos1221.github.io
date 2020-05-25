import React from "react";
import Card from "./Card";

export default class DisplayCardList extends React.Component {
    render() {
        const string = this.props.cards.length
            ? ""
            : "❌ По вашему запросу ничего не найдено";
        return (
            <div className="col-12 col-sm-6 col-md-9 col-xl-10">
                <div className="container">
                    <div className="row no-gutters goods-wrapper justify-content-center">
                        <p>{string}</p>
                        {this.props.cards
                            ? this.props.cards.map((element) => (
                                  <Card
                                      elem={element}
                                      key={element.id}
                                      wishlistPack={this.props.wishlistPack}
                                      addToCartMethod={this.props.addToCartMethod}
                                  />
                              ))
                            : null}
                    </div>
                </div>
            </div>
        );
    }
}
