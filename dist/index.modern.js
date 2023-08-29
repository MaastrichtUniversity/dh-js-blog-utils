import 'react';
import styled from 'styled-components';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

const size = {
  mobileM: "375px",
  mobileL: "525px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};
const device = {
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`
};

let _ = t => t,
  _t,
  _t2,
  _t3;
const Title = props => {
  return /*#__PURE__*/jsxs(Fragment, {
    children: [/*#__PURE__*/jsx(Subtitle, {
      textAlign: props.textAlign,
      children: props.subtitle
    }), /*#__PURE__*/jsx(PrimaryTitle, {
      textAlign: props.textAlign,
      children: props.title
    }), /*#__PURE__*/jsxs(Content, {
      children: [props.content, props.link ? /*#__PURE__*/jsx("a", {
        href: props.link,
        children: props.linkText
      }) : null]
    })]
  });
};
const Subtitle = styled.h4(_t || (_t = _`
  color: #f09125;
  text-transform: uppercase;
  text-align: ${0};
  margin: 0.5rem 0;
`), props => props.textAlign === "left" ? "left" : "center");
const PrimaryTitle = styled.h2(_t2 || (_t2 = _`
  font-size: 28px;
  text-align: ${0};
  max-width: ${0};
  margin: ${0};
  @media ${0} {
    margin: ${0};
  }
`), props => props.textAlign === "left" ? "left" : "center", props => props.textAlign === "left" ? "unset" : "650px", props => props.textAlign === "left" ? "0 0 1.5rem 0" : "0 auto 1.5rem auto", device.laptop, props => props.textAlign === "left" ? "0 0 1.5rem 0" : "0 auto 3rem auto");
const Content = styled.div(_t3 || (_t3 = _`
  width: 100%;
  @media ${0} {
    max-width: 65ch;
  }
`), device.tablet);

export { Title };
//# sourceMappingURL=index.modern.js.map
