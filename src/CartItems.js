import { Component } from "react";
import CartItem from './CartItem'

class CartItems extends Component {

  calculateTotal = () => {
    return this.props.allItems.reduce((acc, item) => { return acc + item.quantity * this.getProductByItemId(item).priceInCents }, 0);
  }

  getProductByItemId = (item) => {
    let product = this.props.allProducts.find(product => item.product_id === product.id);

    return {
      name: product.name,
      priceInCents: product.priceInCents,
      quantity: item.quantity,
    };
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
        {this.props.allItems.map((item, index) => {
          let product = this.getProductByItemId(item);
          return <CartItem key={index} id={item.id} product={product} quantity={item.quantity} />
        })
        }
      </div>
      <div className="container">Total Price: $ {this.calculateTotal() / 100}</div>
    </div>

  }
}

export default CartItems;
