import React from "react";
import Card from "./Card";

export default class DisplayCardList extends React.Component {
    render() {
        return (
            <div className="col-12 col-sm-6 col-md-9 col-xl-10">
                <div className="container">
                    <div className="row no-gutters goods-wrapper justify-content-center">
                        {this.props.cards.map((element) => (
                            <Card elem={element} key={element.id} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
