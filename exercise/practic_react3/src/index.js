import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
// Components
import Header from "./header";
import Counter from "./counter";
let brand = "Lucky Brand";
let subBrands = ["Fancy", "Funny", "Fresh"];
class App extends React.Component {
    render() {
        return (
            <div>
                <Header brand={brand} subBrand={subBrands} />
                <div className="container">
                    <div className="row">
                        <Counter/>
                    </div>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.querySelector("#root"));