import React from "react";
import { useSelector } from "react-redux";
import { productSelector } from "./productSlice";
import "./addProduct.css";

const DisplayProducts = () => {
  const productDetails = useSelector(productSelector);
  console.log(productDetails);

  return (
    <>
      <h4>Product Details :</h4>
      <div className="container">
        {productDetails.map((product, index) => {
          return (
            <div className="card" key={index}>
              <ul>
                <li>Name of product : {product.productName}</li>
                <li>Unit of measure of product : {product.unit}</li>
                <li> Category of product : {product.category}</li>
                <li>Expiry of product : {product.expiryDate}</li>
                <li>Total cost of product: {product.cost}</li>
                <h5> List of material</h5>
                {product.materialList.map((material, materialIndex) => (
                  <div key={materialIndex}>
                    <ul>
                      <li>Material ID: {material.id}</li>
                      <li>Name of material: {material.materialName}</li>
                      <li>Unit of measure: {material.Munit}</li>
                      <li>Quantity of material: {material.qty}</li>
                      <li>Price of material: ₹{material.materialPrice}</li>
                      <li>Total Price: ₹{material.totalPrice}</li>
                      <li>Tax Amount: ₹{material.taxAmt}</li>
                      <li>Total Amount: ₹{material.totalAmount}</li>
                    </ul>
                  </div>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DisplayProducts;
