import './App.css';
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'
import { Component } from 'react';
import AddItem from './AddItem';

class App extends Component {

  state = {
    cartItemsList: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ]
  }

  submitItem = (item) => {
    let newProduct = { id: this.state.cartItemsList.length + 1, product: item.product, quantity: item.quantity };
    this.setState({ cartItemsList: this.state.cartItemsList.concat(newProduct) });
    this.forceUpdate();
  }

  render() {

    return (
      <div className="App">
        <CartHeader />
        <CartItems key={this.state.cartItemsList} cartList={this.state.cartItemsList} />
        <AddItem productList={this.state.products} submitItem={this.submitItem} />
        <CartFooter copyright="&copy;" />

      </div>
    );
  }
}

export default App;
