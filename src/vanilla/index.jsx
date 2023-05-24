import React from "react";
import { products } from "../list";

// export const Table = () => (
//     <table>
//         <thead>
//             <tr>
//                 <th>Product Name</th>
//                 <th>Product Description</th>
//                 <th>Product Price</th>
//             </tr>
//         </thead>
//         <tbody>
//             {products.map((product, index) => (
//                 <tr key={index}>
//                     <th>{product.title}</th>
//                     <th>{product.desc}</th>
//                     <th>{product.price}</th>
//                 </tr>
//             ))}
//         </tbody>
//     </table>
// )

//vanilla with classNames
// import "./table.css";

// export const Table = () => (
//     <table className="table">
//         <thead>
//             <tr>
//                 <th className="table-cell">Product Name</th>
//                 <th className="table-cell">Product Description</th>
//                 <th className="table-cell">Product Price</th>
//             </tr>
//         </thead>
//         <tbody>
//             {products.map((product, index) => (
//                 <tr key={index}>
//                     <th className="table-cell">{product.title}</th>
//                     <th className="table-cell">{product.desc}</th>
//                     <th className="table-cell">{product.price}</th>
//                 </tr>
//             ))}
//         </tbody>
//     </table>
// )

//vanilla with classNames composition
// import "./table.css";

// export const Table = ({ color }) => {
//   const classNames = ["italic"];
//   if (color === 'red') classNames.push("red");
//   if (color === 'green') classNames.push("green");
//   return (
//     <table className="table">
//       <thead>
//         <tr>
//           <th className={classNames.join(" ")}>Product Name</th>
//           <th className={classNames.join(" ")}>Product Description</th>
//           <th className={classNames.join(" ")}>Product Price</th>
//         </tr>
//       </thead>
//       <tbody>
//         {products.map((product, index) => (
//           <tr key={index}>
//             <th className={classNames.join(" ")}>{product.title}</th>
//             <th className={classNames.join(" ")}>{product.desc}</th>
//             <th className={classNames.join(" ")}>{product.price}</th>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };
