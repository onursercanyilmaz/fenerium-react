import React, { Component } from "react";
import { Badge, Table, Button } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs"
import { Link } from 'react-router-dom';


class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  addToCart=(product)=>{
    this.props.actions.addToCart({quantity:1,product})
    alertify.success(product.ProductName + " added to cart!")
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <h3>
          <Badge style={{ color: "#2942B1" }} color="none" pill>
            Products
          </Badge>

          <Badge color="warning" pill>
            {this.props.currentCategory.CategoryName}
          </Badge>
        </h3>{" "}
        <br />
        <Table hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
           
              <th></th>
            </tr>
          </thead>
          <tbody>
              {this.props.products.map(p=>(
                <tr scope="row" key={p.ProductCode}>
              <td>

                  <img alt="image" src={p.Image} width="100"/>
              </td>
              <td align="left"><Link to={"/saveProduct/"+p.ProductCode}>{p.ProductName}</Link></td>
              <td>{p.Price} TL</td>
              <td> <Button onClick={()=>this.addToCart(p)} outline color="warning" >
              🛒
  </Button></td>
            </tr>

              ))}
            
          </tbody>
        </Table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
