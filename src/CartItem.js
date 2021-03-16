import { Component } from "react";

class CartItem extends Component {

    constructor(props) {
        super(props);
        this.state = { name: props.name, price: props.price, quantity: props.quantity }
    }

    render() {
        return <div className="list-group-item">
            <div className="row">
                <div className="col-md-8">{this.state.name}</div>
                <div className="col-md-2">{this.state.price / 100 + " $"}</div>
                <div className="col-md-2">{this.state.quantity}</div>
            </div>
        </div>;
    }

}

export default CartItem;