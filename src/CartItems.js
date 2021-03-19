import { Component } from "react";
import CartItem from './CartItem'

class CartItems extends Component {

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
        {this.props.allItems.map((listitem, index) => {
          let product = this.props.allProducts.find(product => listitem.product_id === product.id);
          return <CartItem key={index} calculateTotal={this.props.calculateTotal} id={listitem.id} product={product} quantity={listitem.quantity} />
        })
        }
      </div>
    </div>

  }
}

export default CartItems;
