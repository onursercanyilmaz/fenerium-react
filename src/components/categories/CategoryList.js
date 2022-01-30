import React, { Component } from "react";
import { connect } from "react-redux";
import { changeCategoryReducer } from "./../../redux/reducers/changeCategoryReducer";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import { ListGroup, ListGroupItem } from "reactstrap";
import { changeCategory } from "./../../redux/actions/categoryActions";
import { Badge } from "reactstrap";
import * as productActions from "../../redux/actions/productActions";

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  selectCategory = (c) => {
    this.props.actions.changeCategory(c);
    this.props.actions.getProducts(c.CategoryCode);
  };
  render() {
    return (
      <div>
        <br />
        <br />

        <h3>
          <Badge style={{ color: "#2942B1" }} color="none" pill>
            Categories
          </Badge>{" "}
          <br />
        </h3>
        <ListGroup>
          {this.props.categories.map((c) => (
            <ListGroupItem
              active={
                c.CategoryCode === this.props.currentCategory.CategoryCode
              }
              onClick={() => this.selectCategory(c)}
              key={c.CategoryCode}
            >
              {c.CategoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
