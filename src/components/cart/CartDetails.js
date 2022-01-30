import React, { Component } from "react";
import { Badge, Table, Button } from "reactstrap";
import * as cartActions from "../../redux/actions/cartActions";
import { bindActionCreators } from "redux";
import alertify from "alertifyjs";
import { connect } from "react-redux";
class CartDetails extends Component {
  removeFromCart = (product) => {
    this.props.actions.removeFromCart(product);
    alertify.error(product.ProductName + " removed from cart!");
  };

  emptyCart() {
    return (
      <div>
        <br />
        <br />
        <h3>
          <Badge style={{ color: "#2942B1" }} color="none" pill>
            Cart Details
          </Badge>
        </h3>{" "}
        <div align="center">
          <img
            style={{ opacity: 0.3 }}
            alt="empty cart"
            src="https://64.media.tumblr.com/32556af3e07f28b5df681c710aaa9ff2/96d36ccd518edab7-59/s540x810/55f52a8a8ea8f8e4618daa7d72b34836084e4c77.png"
            width="300"
          />
        </div>
      </div>
    );
  }

  showCart() {
    return (
      <div>
        <br />
        <br />
        <h3>
          <Badge style={{ color: "#2942B1" }} color="none" pill>
            Cart Details
          </Badge>
        </h3>{" "}
        <br />
        <Table hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr scope="row" key={cartItem.product.ProductCode}>
                <td>
                  <img alt="image" src={cartItem.product.Image} width="100" />
                </td>
                <td align="left">{cartItem.product.ProductName}</td>
                <td align="left">{cartItem.quantity}</td>
                <td>{cartItem.quantity * cartItem.product.Price} TL</td>
                <td>
                  {" "}
                  <Badge
                    pill
                    color="danger"
                    onClick={() => this.removeFromCart(cartItem.product)}
                  >
                    X
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.showCart() : this.emptyCart()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cart: state.cartReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);
