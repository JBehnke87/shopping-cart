import { Component } from "react";

class CartFooter extends Component {

    constructor(props) {
        super(props);
        this.state = { copyright: props.copyright};
    }

    render() {
        return <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">{this.copyright} 2018</a>
        </nav>
    }

}

export default CartFooter;