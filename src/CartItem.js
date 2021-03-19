import { Component } from "react";

class CartItem extends Component {

    state = {
        id: this.props.id,
        quantity: this.props.quantity,
        product: this.props.product,
    }

    render() {
        return <div className="list-group-item">
            <div className="row">
                <div className="col-md-8">{this.props.product.name}</div>
                <div className="col-md-2">{this.props.product.priceInCents / 100 + " $"}</div>
                <div className="col-md-2">{this.props.quantity}</div>
            </div>
        </div>;
    }

}

export default CartItem;