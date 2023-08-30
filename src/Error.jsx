import React from "react";
// import { TbFaceIdError } from "react-icons/tb";
import styled from "styled-components";

export default function Error({ errorMessage, size }) {
  return <ErrorMessage size={size}>{errorMessage}</ErrorMessage>;
}

const ErrorMessage = styled.div`
  color: red;
  font-size: 1.2rem;
  text-align: center;
  height: ${(props) => (props.size === "small" ? "300px" : "50vh")};
  display: flex;
  justify-content: center;
  align-items: center;
`;
