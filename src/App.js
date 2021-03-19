import './App.css';
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'
import { Component } from 'react';
import AddItem from './AddItem';

class App extends Component {

  state = {
    cartItemsList: [],
    products: [],
    total: 0,
  }

  async componentDidMount() {
    const responseItems = await fetch("http://localhost:8082/api/items");
    const jsonItems = await responseItems.json()

    const responseProducts = await fetch("http://localhost:8082/api/products");
    const jsonProducts = await responseProducts.json()
    this.setState({ products: jsonProducts, cartItemsList: jsonItems })
  }

  calculateTotal = () => {
    return 0;
  }

  async postItem(newItem) {
    const response = await fetch('http://localhost:8082/api/items', {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
  }

  submitItem = (item) => {
    let newItem = {
      product_id: item.product.id,
      quantity: item.quantity,
      id: this.state.cartItemsList.length + 1
    }
    this.setState({ cartItemsList: this.state.cartItemsList.concat(newItem) });
    this.postItem(newItem);

  }

  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems key={this.state.cartItemsList} calculateTotal={this.calculateTotal} allProducts={this.state.products} allItems={this.state.cartItemsList} />
        <div className="container">Total Price: $ {this.calculateTotal()}</div>
        <AddItem allProducts={this.state.products} submitItem={this.submitItem} />
        <CartFooter copyright="&copy;" />
      </div>
    );
  }
}

export default App;
