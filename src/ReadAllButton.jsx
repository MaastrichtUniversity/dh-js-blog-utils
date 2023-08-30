import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";

export default function ReadAllButton(props) {
  return (
    <ReadAll to="/blog" align={props.align}>
      Read all articles & news
      {/* <FaArrowRight style={{ paddingLeft: "4px" }} /> */}
    </ReadAll>
  );
}

const ReadAll = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => (props.align == "center" ? "0 auto" : "100px 0 0 0 ")};
  width: 300px;
  color: var(--dark-blue);
  text-decoration: none;
  padding: 10px 10px;
  border: 2px solid var(--dark-orange);
  border-radius: 4px;
  &:hover {
    border: 2px solid var(--light-blue);
  }
`;
