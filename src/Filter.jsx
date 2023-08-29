import React from "react";
import styled from "styled-components";

const Filter = ({ filterCategory, handleCategoryChange }) => {
  const categories = [
    "All",
    "General",
    "Release notes",
    "Roadmap",
    "Sprint summary",
  ];

  const handleClick = (category) => {
    handleCategoryChange(category);
  };

  return (
    <FilterContainer>
      {categories.map((category) => (
        <FilterButton
          key={category}
          onClick={() => handleClick(category)}
          active={category === filterCategory}
        >
          {category}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default Filter;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const FilterButton = styled.button`
  outline: none;
  border: none;
  padding: 8px 16px;
  margin-right: 4px;
  font-size: 12px;
  background-color: transparent;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  position: relative;
  cursor: pointer;
  &:before {
    content: "";
    background: rgb(240, 145, 37);
    width: ${(props) => (props.active ? "100%" : "0")};
    height: 1px;
    position: absolute;
    bottom: -1px;
    left: 1px;
    transition: 0.25s ease;
  }
  &:hover:before {
    width: 100%;
  }
`;
