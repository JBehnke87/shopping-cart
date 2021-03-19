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

    setSelectedValue = (e) => {
        this.setState({ product: this.props.allProducts.find(product => product.name === e.target.value) })
    }

    onSubmit = (e) => {
        e.preventDefault();
        let selectedItem = { ...this.state}
        this.props.submitItem(selectedItem);
    }

    setQuantity = (e) => {
        this.setState({ quantity: parseInt(e.target.value) });
    }

    render() {
        return <div className="container">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input onChange={this.setQuantity} className="form-control" type="text" name="quantity"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="product">Product</label>
                    <select onChange={this.setSelectedValue} className="form-control" name="product" id="product">
                        <option>select Product...</option>
                        {this.props.allProducts.map(product => <option key={product.id} value={product.name}>{product.name} ({product.priceInCents / 100 + " $"})</option>)}
                    </select>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    }
}

export default AddItem;