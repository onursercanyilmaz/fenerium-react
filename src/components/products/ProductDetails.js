import React from "react";
import TextInput from "./../toolbox/TextInput";
import SelectInput from "./../toolbox/SelectInput";
import ImageInput from './../toolbox/ImageInput';

const ProductDetails = ({categories, product, onSave, onChange,errors}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.ProductCode ? "Update" : "Save"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.ProductName}
        onChange={onChange}
        error={errors.ProductName}
      />
      <SelectInput
        name="CategoryCode"
        label="Category"
        value={product.Category || ""}
        options={categories.map(category => ({
          value: category.CategoryCode,
          text: category.CategoryName,
        }))}
        onChange={onChange}
        error={errors.Category}
      />
      <TextInput
        name="Price"
        label="Price"
        value={product.Price}
        onChange={onChange}
        error={errors.Price}
      />
      <ImageInput
        name="Image"
        label={product.ProductName}
        alt={product.ProductName}
        src={product.Image}
        error={errors.Image}
      />
      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
};

export default ProductDetails;
