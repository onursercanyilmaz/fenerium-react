import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetails from "./ProductDetails";


function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props
}) {
  const [product, setProduct] = useState({ ...props.product });
  const[errors,setErrors]=useState({})
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    
    }
    setProduct({ ...props.product });
  }, [props.product,categories.length,getCategories]);

  function handleChange(event) {
    const { name, value } = event.target;
    debugger;
    setProduct(previousProduct => ({
      ...previousProduct,
      [name]: value.toString()
      
      
    }));
    if(value=="")
    {
      setErrors(previousErrors=>({...previousErrors,ProductName:"Should be product name"}))
    }
    
  }

  function handleSave(event) {
    event.preventDefault();
    saveProduct(product).then(() => {
      history.push("/");
    });
  }
  return (
    <ProductDetails
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
}

const mapDispatchToProps = {
  getCategories,
  saveProduct,
};

export function getProductById(products, productId) {
  let product =
    products.find((product) => product.ProductCode === productId) || null;
  return product;
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.match.params.productId;
  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {};
  return {
    product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(AddOrUpdateProduct);