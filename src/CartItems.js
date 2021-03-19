import { Component } from "react";
import CartItem from './CartItem'

class CartItems extends Component {

  render() {
    console.log("Rerendering CartItems")

    const countOfItems = this.props.cartList.length;

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
        { countOfItems > 0 ? (this.props.cartList.map((listitem, index) => <CartItem allProducts={this.props.allProducts} id={listitem.id} key={index} product_id={listitem.product_id} quantity={listitem.quantity} />)) : null }
        <div>Total Price: $ 0</div>
      </div>
    </div>

  }
}

export default CartItems;
