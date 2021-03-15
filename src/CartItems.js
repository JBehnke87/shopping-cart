import { Component } from "react";
import CartItem from './CartItem'

class CartItems extends Component {

    constructor(props) {
        super(props);
        this.state = { cartList: props.cartList };
    }

    render() {
        return <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          { this.state.cartList.map(listitem => <CartItem name={listitem.product.name} price={listitem.product.priceInCents} quantity={listitem.quantity}/>) }
        </div>
      </div>
      
    }
}

export default CartItems;
