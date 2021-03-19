import './App.css';
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'
import { Component } from 'react';
import AddItem from './AddItem';

class App extends Component {

  state = {
    cartItemsList: [],
    products: []
  }

  async componentDidMount() {
    const responseItems = await fetch("http://localhost:8082/api/items");
    const jsonItems = await responseItems.json()
    this.setState({ cartItemsList: jsonItems })

    console.log(jsonItems)

    const responseProducts = await fetch("http://localhost:8082/api/products");
    const jsonProducts = await responseProducts.json()
    this.setState({ products: jsonProducts })

    console.log(jsonProducts)

  }

  submitItem = (item) => {
    let newProduct = { id: this.state.cartItemsList.length + 1, product: item.product, quantity: item.quantity };
    this.setState({ cartItemsList: this.state.cartItemsList.concat(newProduct) });
    this.forceUpdate();
  }

  render() {
    console.log("Rerendering App")
    return (
      <div className="App">
        <CartHeader />
        <CartItems key={this.state.cartItemsList} allProducts={this.state.products} cartList={this.state.cartItemsList} />
        <AddItem productList={this.state.products} submitItem={this.submitItem} />
        <CartFooter copyright="&copy;" />
      </div>
    );
  }
}

export default App;
