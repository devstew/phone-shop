import React, {Component, Fragment} from 'react';
import Product from './Product.js';
import Title from './Title';
import { storeProducts } from '../data';

class ProductList extends Component {

  state = {
    products: storeProducts
  }

  render() {
    console.log(this.state.products);
    return (
      <Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products"/>
            <div className="row">

            </div>
          </div>
        </div>
        <Product/>
      </Fragment>
    );
  }
}

export default ProductList;