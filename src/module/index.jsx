import React from "react";
import { products } from "../list";
import css from "./table.module.css";

//console.warn(css);

// export const Table = () => (
//   <table className={css.table}>
//     <thead>
//       <tr>
//         <th className={css.table_cell}>Product Name</th>
//         <th className={css.table_cell}>Product Description</th>
//         <th className={css.table_cell}>Product Price</th>
//       </tr>
//     </thead>
//     <tbody>
//       {products.map((product, index) => (
//         <tr key={index}>
//           <th className={css.table_cell}>{product.title}</th>
//           <th className={css.table_cell}>{product.desc}</th>
//           <th className={css.table_cell}>{product.price}</th>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// );

//module with props

// export const Table = ({ color }) => (
//   <table className={css.table}>
//     <thead>
//       <tr>
//         <th className={`${css.table_cell} ${css[color]}`}>Product Name</th>
//         <th className={`${css.table_cell} ${css[color]}`}>
//           Product Description
//         </th>
//         <th className={`${css.table_cell} ${css[color]}`}>Product Price</th>
//       </tr>
//     </thead>
//     <tbody>
//       {products.map((product, index) => (
//         <tr key={index}>
//           <th className={`${css.table_cell} ${css[color]}`}>{product.title}</th>
//           <th className={`${css.table_cell} ${css[color]}`}>{product.desc}</th>
//           <th className={`${css.table_cell} ${css[color]}`}>{product.price}</th>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// );

//with clsx
import clsx from "clsx";
export const Table = ({ color }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th
            className={clsx(css.table_cell, css.italic, {
              [css.red]: color === "red", //true
              [css.green]: color === "green",
            })}
          >
            Product Name
          </th>
          <th className={clsx(css.table_cell, css.italic, {
              [css.red]: color === "red",
              [css.green]: color === "green",
            })}>
            Product Description
          </th>
          <th className={clsx(css.table_cell, css.italic, {
              [css.red]: color === "red",
              [css.green]: color === "green",
            })}>Product Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <th className={clsx(css.table_cell, css.italic, {
              [css.red]: color === "red",
              [css.green]: color === "green",
            })}>
              {product.title}
            </th>
            <th className={clsx(css.table_cell, css.italic, {
              [css.red]: color === "red",
              [css.green]: color === "green",
            })}>
              {product.desc}
            </th>
            <th className={clsx(css.table_cell, css.italic, {
              [css.red]: color === "red",
              [css.green]: color === "green",
            })}>
              {product.price}
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
