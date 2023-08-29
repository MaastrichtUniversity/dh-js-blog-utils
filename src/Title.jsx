import React from "react";
import styled from "styled-components";
import { device } from "./assets/breakpoints";

const Title = (props) => {
  return (
    <>
      <Subtitle textAlign={props.textAlign}>{props.subtitle}</Subtitle>
      <PrimaryTitle textAlign={props.textAlign}>{props.title}</PrimaryTitle>
      <Content>
        {props.content}
        {props.link ? <a href={props.link}>{props.linkText}</a> : null}
      </Content>
    </>
  );
};

export default Title;

const Subtitle = styled.h4`
  color: #f09125;
  text-transform: uppercase;
  text-align: ${(props) => (props.textAlign === "left" ? "left" : "center")};
  margin: 0.5rem 0;
`;

const PrimaryTitle = styled.h2`
  font-size: 28px;
  text-align: ${(props) => (props.textAlign === "left" ? "left" : "center")};
  max-width: ${(props) => (props.textAlign === "left" ? "unset" : "650px")};
  margin: ${(props) =>
    props.textAlign === "left" ? "0 0 1.5rem 0" : "0 auto 1.5rem auto"};
  @media ${device.laptop} {
    margin: ${(props) =>
      props.textAlign === "left" ? "0 0 1.5rem 0" : "0 auto 3rem auto"};
  }
`;

const Content = styled.div`
  width: 100%;
  @media ${device.tablet} {
    max-width: 65ch;
  }
`;
