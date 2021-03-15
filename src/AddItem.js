import { Component } from "react";

class AddItem extends Component {

    constructor(props) {
        super(props);
        this.state = { products: props.productList }
    }

    render() {
        return <div className="container">
            <form>
                <div className="form-group">
                    <label for="quantity">Quantity</label>
                    <input className="form-control" type="text" name="quantity"></input>
                </div>
                <div className="form-group">
                    <label for="products">Products</label>
                    <select className="form-control" name="products">
                        {this.state.products.map(product => <option value={product.name}>{product.name} ({product.priceInCents / 100 + " $"})</option>)}
                    </select>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    }
}

export default AddItem;