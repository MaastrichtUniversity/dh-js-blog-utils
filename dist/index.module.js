import 'react';
import styled from 'styled-components';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}

var size = {
  mobileM: "375px",
  mobileL: "525px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};
var device = {
  mobileM: "(min-width: " + size.mobileM + ")",
  mobileL: "(min-width: " + size.mobileL + ")",
  tablet: "(min-width: " + size.tablet + ")",
  laptop: "(min-width: " + size.laptop + ")",
  laptopL: "(min-width: " + size.laptopL + ")",
  desktop: "(min-width: " + size.desktop + ")"
};

var _templateObject, _templateObject2, _templateObject3;
var Title = function Title(props) {
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
var Subtitle = styled.h4(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  color: #f09125;\n  text-transform: uppercase;\n  text-align: ", ";\n  margin: 0.5rem 0;\n"])), function (props) {
  return props.textAlign === "left" ? "left" : "center";
});
var PrimaryTitle = styled.h2(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  font-size: 28px;\n  text-align: ", ";\n  max-width: ", ";\n  margin: ", ";\n  @media ", " {\n    margin: ", ";\n  }\n"])), function (props) {
  return props.textAlign === "left" ? "left" : "center";
}, function (props) {
  return props.textAlign === "left" ? "unset" : "650px";
}, function (props) {
  return props.textAlign === "left" ? "0 0 1.5rem 0" : "0 auto 1.5rem auto";
}, device.laptop, function (props) {
  return props.textAlign === "left" ? "0 0 1.5rem 0" : "0 auto 3rem auto";
});
var Content = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  @media ", " {\n    max-width: 65ch;\n  }\n"])), device.tablet);

export { Title };
//# sourceMappingURL=index.module.js.map
