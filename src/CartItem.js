import { Component } from "react";

class CartItem extends Component {

    state = {
        id: this.props.id,
        product_id: this.props.product_id,
        quantity: this.props.quantity,
        product: {
            name: "No Name",
            priceInCents: 0,
            id: 0,
            },
    }

    componentDidMount() {
        this.setProduct();
    }

    setProduct = () => {
        let product = this.props.allProducts.find(product => product.id === this.state.product_id);
        this.setState({ product: product })
    }

    render() {
        console.log("Rerendering Item")

        return <div className="list-group-item">
            <div className="row">
                <div className="col-md-8">{this.state.product.name}</div>
                <div className="col-md-2">{this.state.product.priceInCents / 100 + " $"}</div>
                <div className="col-md-2">{this.state.quantity}</div>
            </div>
        </div>;
    }

}

export default CartItem;