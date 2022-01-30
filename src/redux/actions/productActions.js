import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function createProductsSuccess(product) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product };
}

export function updateProductsSuccess(product) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product };
}

export function saveProduct(product) {
  return function (dispatch) {
    return saveProductAPI(product)
      .then((savedProduct) => {
        product.ProductCode
          ? dispatch(updateProductsSuccess(savedProduct))
          : dispatch(createProductsSuccess(savedProduct));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
  const error = await response.text();
  throw new Error(error);
}

export function handleError(error) {
  throw error;
}

export function saveProductAPI(product) {
  return fetch(
    "http://localhost:3000/Products/" + (product.ProductCode || ""),
    {
      method: product.ProductCode ? "PUT" : "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    }
  )
    .then(handleResponse)
    .catch(handleError);
}

export function getProducts(CategoryCode) {
  return function (dispatch) {
    let url = "http://localhost:3000/Products";

    if (CategoryCode) {
      url += "?Category=" + CategoryCode;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductsSuccess(result)));
  };
}
