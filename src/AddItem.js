import { Component } from "react";

class AddItem extends Component {

    state = {
        product: {
            id: 0,
            name: "undefined",
            priceInCents: 0
        },
        quantity: 0
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newProduct = { product: this.state.product, quantity: parseInt(this.state.quantity) }
        this.props.submitItem(newProduct);
    }

    setQuantity = (e) => {
        this.setState({ quantity: e.target.value });
    }

    setSelectedProductByName = (e) => {
        let selectedItem = this.props.productList.find(product => product.name === e.target.value);
        this.setState({ product: selectedItem });
    }

    render() {
    console.log("Rerendering AddItem")

        return <div className="container">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input onChange={this.setQuantity} className="form-control" type="text" name="quantity"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="product">Product</label>
                    <select onChange={this.setSelectedProductByName} className="form-control" name="product" id="product">
                        {this.props.productList.map(product => <option key={product.id} value={product.name}>{product.name} ({product.priceInCents / 100 + " $"})</option>)}
                    </select>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    }
}

export default AddItem;