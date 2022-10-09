import React from "react";
import "./sub-category.scss";
import productArray from "./items";
import Product from "./Product";
import { BsSliders } from "react-icons/bs";
function SubCategory() {
  return (
    <div className="subCategory">
      <div className="container">
        <div className="bruh" />
        <div className="subCategory-breadcrumbs">
          {"<  "}Home{"  /  "}Categories{"  /  "}Dresses
        </div>
        <div className="subCategory-flex-1">
          <h1 className="subCategory-headline">DRESSES FOR BABES</h1>
          <p className="subCategory-stock">1-20 of 1478</p>
        </div>
        <div className="subCategory-flex-2">
          <h1 className="subCategory-filters">
            <p className="subCategory-filters-icon">
              <BsSliders />
            </p>{" "}
            <p className="subCategory-filters-text"></p>
            &nbsp; &nbsp; Filters
          </h1>
          <p className="subCategory-sort">
            Sort by: <span> &nbsp; Popularity &nbsp; &nbsp;</span>
          </p>
        </div>
      </div>
      <div className="subCategory-products">
        {productArray.map((item) => (
          <Product image={item.image} title={item.title} price={item.price} />
        ))}
      </div>
    </div>
  );
}

export default SubCategory;
