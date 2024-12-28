import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./productSlice";
import "./addProduct.css";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState({
    productName: "",
    unit: "",
    category: "",
    expiryDate: "",
    cost: 0,
    materialList: [
      {
        id: 0,
        materialName: "",
        Munit: "",
        qty: 0,
        materialPrice: "",
        totalPrice: 0,
        taxAmt: 0,
        totalAmount: 0,
      },
    ],
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleMaterialChange = (e, index) => {
    const { name, value } = e.target;
    const updatedMaterialList = [...productDetails.materialList];
    updatedMaterialList[index] = {
      ...updatedMaterialList[index],
      [name]: value,
    };

    const updatedMaterial = updatedMaterialList[index];
    const totalPrice = updatedMaterial.qty * updatedMaterial.materialPrice;
    const taxAmt = totalPrice * 0.1;
    const totalAmount = totalPrice + taxAmt;

    updatedMaterialList[index] = {
      ...updatedMaterial,
      totalPrice,
      taxAmt,
      totalAmount,
    };
    const totalCost = updatedMaterialList.reduce(
      (acc, material) => acc + material.totalAmount,
      0
    );

    setProductDetails((prev) => ({
      ...prev,
      materialList: updatedMaterialList,
      cost: totalCost,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(productDetails));
    setProductDetails({
      productName: "",
      unit: "",
      category: "",
      expiryDate: "",
      cost: 0,
      materialList: [
        {
          id: 0,
          materialName: "",
          Munit: "",
          qty: 0,
          materialPrice: "",
          totalPrice: 0,
          taxAmt: 0,
          totalAmount: 0,
        },
      ],
    });
  };
  return (
    <div className="form">
      <h3>Add a product below:</h3>
      <input
        type="text"
        name="productName"
        placeholder="Enter product Name"
        value={productDetails.productName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="unit"
        placeholder="Unit of measure of product"
        value={productDetails.unit}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Catergory of product"
        value={productDetails.category}
        onChange={handleChange}
      />
      Expiry Date
      <input
        type="date"
        name="expiryDate"
        value={productDetails.expiryDate}
        onChange={handleChange}
      />
      <p>Cost : ₹{productDetails.cost}</p>
      <h5>Enter list of Material below:</h5>
      {productDetails.materialList.map((material, index) => (
        <div key={index}>
          <input
            type="number"
            name="id"
            placeholder="Material id"
            value={material.id}
            onChange={(e) => handleMaterialChange(e, index)}
          />
          <input
            type="text"
            name="materialName"
            placeholder="Material Name"
            value={material.materialName}
            onChange={(e) => handleMaterialChange(e, index)}
          />
          <input
            type="text"
            name="Munit"
            placeholder="Unit of measure"
            value={material.Munit}
            onChange={(e) => handleMaterialChange(e, index)}
          />
          <input
            type="number"
            name="qty"
            placeholder="Quantity"
            value={material.qty}
            onChange={(e) => handleMaterialChange(e, index)}
          />
          <input
            type="number"
            name="materialPrice"
            placeholder="Price of material"
            value={material.materialPrice}
            onChange={(e) => handleMaterialChange(e, index)}
          />
          <div>
            <p>Total Price: ₹{material.totalPrice}</p>
            <p>Tax Amount: ₹{material.taxAmt}</p>
            <p>Total Amount: ₹{material.totalAmount}</p>
          </div>
        </div>
      ))}
      <button type="button" onClick={handleSubmit}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
