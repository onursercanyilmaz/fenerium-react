import React, { Component } from "react";
import { connect } from "react-redux";
import * as cartActions from "../../redux/actions/cartActions";
import { bindActionCreators } from "redux";
import alertify from "alertifyjs"
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  Badge,
  Row,
  DropdownMenu,
  NavLink,
  NavItem,
} from "reactstrap";

class CartSummary extends Component {
  removeFromCart=(product)=>{
    this.props.actions.removeFromCart(product)
    alertify.error(product.ProductName + " removed from cart!")
  }

  emptyCart() {
    return (
      <UncontrolledDropdown>
        <DropdownToggle caret color="none" style={{ color: "white" }}>
          <img
            alt="Cart"
            src="https://64.media.tumblr.com/0af252ae70c6012b6de91bac144b8238/6a25a1336e835582-7a/s2048x3072/dc30af1e06642f7a26b7bc21def964f2732802cf.png"
            width="25"
          ></img>
          {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu start>
          <div align="center">
            <Badge color="danger" pill>
              Empty Cart
            </Badge>
          </div>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  showCart() {
    return (
      <UncontrolledDropdown>
        <DropdownToggle caret color="none" style={{ color: "white" }}>
          <img
            alt="Cart"
            src="https://64.media.tumblr.com/0af252ae70c6012b6de91bac144b8238/6a25a1336e835582-7a/s2048x3072/dc30af1e06642f7a26b7bc21def964f2732802cf.png"
            width="25"
          ></img>
          {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu start>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.ProductCode}>
              <Row>
                <div
                  style={{ justifyContent: "space-between", display: "flex" }}
                >
                  {<img src={cartItem.product.Image} width="20" />}{" "}
                  {cartItem.product.ProductName}
                  <Badge color="warning" pill>
                    {" "}
                    {cartItem.quantity}
                  </Badge>
                </div>
              </Row>

              <Row>
                <div
                  style={{ justifyContent: "space-between", display: "flex" }}
                >
                  <Badge
                    pill
                    color="danger"
                    onClick={() => this.removeFromCart(cartItem.product)}
                  >
                    X
                  </Badge>
                  <Badge pill>
                    {" "}
                    {cartItem.product.Price * cartItem.quantity} TL
                  </Badge>
                </div>
              </Row>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem><Link to="/cart">Cart Details</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
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

export default connect(mapStateToProps,mapDispatchToProps)(CartSummary);
