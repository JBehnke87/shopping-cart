import { Component } from "react";

class CartFooter extends Component {

    constructor({copyright}) {
        super();
        this.copyright = copyright;
    }

    render() {
        return <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">{this.copyright} 253535418</a>
        </nav>
    }

}

export default CartFooter;