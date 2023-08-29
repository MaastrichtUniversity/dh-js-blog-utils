import React from "react";
import styled from "styled-components";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

export default function Pagination({
  currentPage,
  handlePageChange,
  endIndex,
  paginationIndex,
  itemsPerPage,
}) {
  return (
    <PaginationContainer>
      <Button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <AiFillLeftCircle />
      </Button>
      <PageInfo>
        Page {currentPage} from {Math.ceil(paginationIndex / itemsPerPage)}
      </PageInfo>
      <Button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={endIndex >= paginationIndex}
      >
        <AiFillRightCircle />
      </Button>
    </PaginationContainer>
  );
}

const PaginationContainer = styled.div`
  float: right;
  display: flex;
`;

const PageInfo = styled.span`
  margin: 0 4px;
`;

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.disabled ? "var(--light-grey)" : "var(--light-blue)"};
  pointer-events: ${(props) => (props.disabled ? "none" : null)};
`;
