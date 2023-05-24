import React from "react";
import { products } from "../list";
import clsx from "clsx";
import "../vanilla/table.css";

export const Table = ({ color }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th
            className={clsx("italic", {
              red: color === "red",
              green: color === "green",
            })}
          >
            Product Name
          </th>
          <th
            className={clsx("italic", {
              red: color === "red",
              green: color === "green",
            })}
          >
            Product Description
          </th>
          <th
            className={clsx("italic", {
              red: color === "red",
              green: color === "green",
            })}
          >
            Product Price
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <th
              className={clsx("italic", {
                red: color === "red",
                green: color === "green",
              })}
            >
              {product.title}
            </th>
            <th
              className={clsx("italic", {
                red: color === "red",
                green: color === "green",
              })}
            >
              {product.desc}
            </th>
            <th
              className={clsx("italic", {
                red: color === "red",
                green: color === "green",
              })}
            >
              {product.price}
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
