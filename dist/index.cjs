var n=require("react"),e=require("styled-components"),t=require("react/jsx-runtime"),r=require("react-router-dom"),i=require("react-content-loader"),a=require("react-icons/tb"),o=require("react-icons/fa");function l(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var d=/*#__PURE__*/l(e);function u(n,e){return e||(e=n.slice(0)),n.raw=e,n}var c,s,x,f,m,p,g,h,b,w,j,y,v,A="(min-width: 525px)",k="(min-width: 768px)",z="(min-width: 1024px)",F="(min-width: 1440px)",S="(min-width: 2560px)",q=function(n){/*#__PURE__*/return t.jsxs(t.Fragment,{children:[/*#__PURE__*/t.jsx(_,{textAlign:n.textAlign,children:n.subtitle}),/*#__PURE__*/t.jsx(T,{textAlign:n.textAlign,children:n.title}),/*#__PURE__*/t.jsxs(C,{children:[n.content,n.link?/*#__PURE__*/t.jsx("a",{href:n.link,children:n.linkText}):null]})]})},_=d.default.h4(c||(c=u(["\n  color: #f09125;\n  text-transform: uppercase;\n  text-align: ",";\n  margin: 0.5rem 0;\n"])),function(n){return"left"===n.textAlign?"left":"center"}),T=d.default.h2(s||(s=u(["\n  font-size: 28px;\n  text-align: ",";\n  max-width: ",";\n  margin: ",";\n  @media "," {\n    margin: ",";\n  }\n"])),function(n){return"left"===n.textAlign?"left":"center"},function(n){return"left"===n.textAlign?"unset":"650px"},function(n){return"left"===n.textAlign?"0 0 1.5rem 0":"0 auto 1.5rem auto"},z,function(n){return"left"===n.textAlign?"0 0 1.5rem 0":"0 auto 3rem auto"}),C=d.default.div(x||(x=u(["\n  width: 100%;\n  @media "," {\n    max-width: 65ch;\n  }\n"])),k),E=function(n){/*#__PURE__*/return t.jsx(L,{className:n.name,color:n.color,border:n.border,children:/*#__PURE__*/t.jsx(M,{children:n.children})})},L=d.default.div(f||(f=u(["\n  background-color: ",";\n\n  color: ",";\n  border-top: ",";\n\n  z-index: 5;\n  position: relative;\n  padding: 5rem 0;\n\n  @media "," {\n    padding: 8rem 0;\n  }\n  @media "," {\n    padding: 9rem 0;\n  }\n"])),function(n){return"dark"===n.color?"#001C3D":"lightGrey"===n.color?"#FAFBFC":"darkGrey"===n.color?"#F5F6FA":"white"},function(n){return"dark"===n.color?"white":"#091E42"},function(n){return"top"===n.border?"1px solid #d5d5d5":"none"},F,S),M=d.default.div(m||(m=u(["\n  margin: 0 auto;\n  padding: 0 16px;\n\n  @media "," {\n    max-width: 650px;\n  }\n  @media "," {\n    max-width: 800px;\n  }\n  @media "," {\n    max-width: 1000px;\n  }\n  @media "," {\n    max-width: 1100px;\n  }\n  @media "," {\n    max-width: 1300px;\n  }\n"])),A,k,z,F,S);function R(n){var e,r,i,a=(r=(e=n.date.split("-"))[0],i=e[2],["January","February","March","April","May","June","July","August","September","October","November","December"][Number(e[1])-1]+" "+Number(i)+", "+r);/*#__PURE__*/return t.jsx(D,{to:"/blog/"+n.id,children:/*#__PURE__*/t.jsxs(N,{children:[/*#__PURE__*/t.jsxs(H,{children:[/*#__PURE__*/t.jsx(P,{children:n.type}),/*#__PURE__*/t.jsx(O,{children:a})]}),/*#__PURE__*/t.jsx(B,{children:n.title}),/*#__PURE__*/t.jsx(G,{children:n.summary})]})})}var D=d.default(r.Link)(p||(p=u(["\n  transition: all 0.5s ease;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  @media "," {\n    flex: 0 0 33.3333%;\n    max-width: 33.3333%;\n  }\n  &:hover {\n    opacity: 0.6;\n  }\n"])),A),N=d.default.div(g||(g=u(["\n  max-width: 100%;\n  margin-bottom: 50px;\n"])));d.default.div(h||(h=u(["\n  // background-image: url(",");\n  width: 100%;\n  height: 150px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  margin-bottom: 16px;\n  background-position: center;\n"])),function(n){return n.background});var J,P=d.default.h5(b||(b=u(["\n  font-size: 0.6875rem;\n  font-weight: 500;\n  color: #6a6788;\n  text-transform: uppercase;\n  letter-spacing: 1.1px;\n  transition: color 0.25s ease;\n"]))),B=d.default.h4(w||(w=u(["\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #050038;\n  letter-spacing: -0.5px;\n  margin: 8px 0;\n"]))),G=d.default.p(j||(j=u(["\n  font-size: 1em;\n  font-weight: 600;\n  color: rgb(106, 103, 136);\n"]))),H=d.default.div(y||(y=u(["\n  display: flex;\n  justify-content: space-between;\n"]))),O=d.default.p(v||(v=u(["\n  font-size: 0.8rem;\n  color: rgb(106, 103, 136);\n"]))),U=function(n){/*#__PURE__*/return t.jsx("section",{children:Array.from({length:n.count},function(n,e){/*#__PURE__*/return t.jsx(i.Code,{style:{width:"100%",marginTop:"3rem"}},e)})})};function I(n){/*#__PURE__*/return t.jsxs(Q,{size:n.size,children:[n.errorMessage," ",/*#__PURE__*/t.jsx(a.TbFaceIdError,{})]})}var K,Q=d.default.div(J||(J=u(["\n  color: red;\n  font-size: 1.2rem;\n  text-align: center;\n  height: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),function(n){return"small"===n.size?"300px":"50vh"});function V(n){/*#__PURE__*/return t.jsxs(X,{to:"/blog",align:n.align,children:["Read all articles & news",/*#__PURE__*/t.jsx(o.FaArrowRight,{style:{paddingLeft:"4px"}})]})}var W,X=d.default(r.Link)(K||(K=u(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: ",";\n  width: 300px;\n  color: var(--dark-blue);\n  text-decoration: none;\n  padding: 10px 10px;\n  border: 2px solid var(--dark-orange);\n  border-radius: 4px;\n  &:hover {\n    border: 2px solid var(--light-blue);\n  }\n"])),function(n){return"center"==n.align?"0 auto":"100px 0 0 0 "}),Y=""+window.env.REACT_APP_DATAHUB_HC_URL,Z=d.default.div(W||(W=u(["\n  margin-top: 3rem;\n  @media "," {\n    display: flex;\n    justify-content: space-between;\n  }\n"])),A);exports.SummarySection=function(){var e=n.useState(),r=e[0],i=e[1],a=n.useState(!0),o=a[0],l=a[1],d=n.useState(null),u=d[0],c=d[1];return n.useEffect(function(){return fetch(Y+"/help_backend/confluence_documents/blog/label/blog/latest/3").then(function(n){if(n.status>=200&&n.status<300)return n.json();throw new I("Server Error")}).then(function(n){l(!1),i(n)}).catch(function(n){l(!1),c("Oops! Something went wrong. Please try again later.")}),function(){i(),l(!0)}},[]),/*#__PURE__*/t.jsxs(E,{name:"blog",children:[/*#__PURE__*/t.jsx(q,{textAlign:"center",subtitle:"Latest articles",title:"Stay tuned for Maastricht Data Repository’s news and useful features"}),u?/*#__PURE__*/t.jsx(I,{errorMessage:u,size:"small"}):o?/*#__PURE__*/t.jsx(U,{count:1}):/*#__PURE__*/t.jsx(Z,{children:r.map(function(n,e){/*#__PURE__*/return t.jsx(R,{id:n.id,type:n.article_type,title:n.title,date:n.date,summary:n.summary},e)})}),/*#__PURE__*/t.jsx(V,{align:"center"})]})},exports.Title=q;
//# sourceMappingURL=index.cjs.map
