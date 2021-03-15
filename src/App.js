import logo from './logo.svg';
import './App.css';
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CartHeader />
      </header>
      <body>
        <CartItems />
      </body>
      <footer>
        <CartFooter copyright="&copy;" />
      </footer>
    </div>
  );
}

export default App;
