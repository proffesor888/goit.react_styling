import React from "react";
import { products } from "../list";
import { styled, css } from "styled-components";

const fontWeight = css`
  font-weight: 600;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
`;
const StyledCell = styled.th`
  border-color: #000;
  border-style: solid;
  color: ${(props) => (props.color === "red" ? "red" : "green")};
  ${fontWeight}
  & :first-child
`;
const StyledItalicCell = styled(StyledCell)`
  font-style: italic;
`;

export const Table = ({ color }) => (
  <StyledTable>
    <thead>
      <tr>
        <StyledCell color={color}>Product Name</StyledCell>
        <StyledItalicCell color={color}>Product Description</StyledItalicCell>
        <StyledItalicCell color={color}>Product Price</StyledItalicCell>
      </tr>
    </thead>
    <tbody>
      {products.map((product, index) => (
        <tr key={index}>
          <StyledCell color={color}>{product.title}</StyledCell>
          <StyledCell color={color}>{product.desc}</StyledCell>
          <StyledCell color={color}>{product.price}</StyledCell>
        </tr>
      ))}
    </tbody>
  </StyledTable>
);
