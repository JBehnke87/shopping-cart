import { Component } from "react";

class CartItem extends Component {

    constructor(props) {
        super(props);
        this.state = { name: props.name, price: props.price, quantity: props.quantity }
    }

    render() {
        return <div class="list-group-item">
            <div class="row">
                <div class="col-md-8">{this.state.name}</div>
                <div class="col-md-2">{this.state.price}</div>
                <div class="col-md-2">{this.state.quantity}</div>
            </div>
        </div>;
    }

}

export default CartItem;