import React from "react";
import Category from "./Category";
import DisplayCardList from "./DisplayCardList";

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <div className="container">
                    <div className="row justify-content-center justify-content-sm-between">
                        <Category choiceCategory={this.props.choiceCategory} />
                        <DisplayCardList cards={this.props.cards} />
                    </div>
                </div>
            </main>
        );
    }
}
