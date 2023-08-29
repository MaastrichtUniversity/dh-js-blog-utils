import React from "react";
import { device } from "./assets/breakpoints";
import styled from "styled-components";

const Section = ({ children, color, name, border }) => {
  return (
    <Wrapper className={name} color={color} border={border}>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Section;

const Wrapper = styled.div`
  background-color: ${(props) =>
    props.color === "dark"
      ? "#001C3D"
      : props.color === "lightGrey"
      ? "#FAFBFC"
      : props.color === "darkGrey"
      ? "#F5F6FA"
      : "white"};

  color: ${(props) => (props.color === "dark" ? "white" : "#091E42")};
  border-top: ${(props) =>
    props.border === "top" ? "1px solid #d5d5d5" : "none"};

  z-index: 5;
  position: relative;
  padding: 5rem 0;

  @media ${device.laptopL} {
    padding: 8rem 0;
  }
  @media ${device.desktop} {
    padding: 9rem 0;
  }
`;

const Content = styled.div`
  margin: 0 auto;
  padding: 0 16px;

  @media ${device.mobileL} {
    max-width: 650px;
  }
  @media ${device.tablet} {
    max-width: 800px;
  }
  @media ${device.laptop} {
    max-width: 1000px;
  }
  @media ${device.laptopL} {
    max-width: 1100px;
  }
  @media ${device.desktop} {
    max-width: 1300px;
  }
`;
