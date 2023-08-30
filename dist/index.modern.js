import{useState as e,useEffect as t}from"react";import r from"styled-components";import{jsxs as i,Fragment as n,jsx as o}from"react/jsx-runtime";import{Link as a}from"react-router-dom";import{Code as l}from"react-content-loader";import{TbFaceIdError as d}from"react-icons/tb";import{FaArrowRight as c}from"react-icons/fa";const m="(min-width: 525px)",s="(min-width: 768px)",p="(min-width: 1024px)",g="(min-width: 1440px)",h="(min-width: 2560px)";let x,u,f,b=e=>e;const w=e=>/*#__PURE__*/i(n,{children:[/*#__PURE__*/o(y,{textAlign:e.textAlign,children:e.subtitle}),/*#__PURE__*/o($,{textAlign:e.textAlign,children:e.title}),/*#__PURE__*/i(A,{children:[e.content,e.link?/*#__PURE__*/o("a",{href:e.link,children:e.linkText}):null]})]}),y=r.h4(x||(x=b`
  color: #f09125;
  text-transform: uppercase;
  text-align: ${0};
  margin: 0.5rem 0;
`),e=>"left"===e.textAlign?"left":"center"),$=r.h2(u||(u=b`
  font-size: 28px;
  text-align: ${0};
  max-width: ${0};
  margin: ${0};
  @media ${0} {
    margin: ${0};
  }
`),e=>"left"===e.textAlign?"left":"center",e=>"left"===e.textAlign?"unset":"650px",e=>"left"===e.textAlign?"0 0 1.5rem 0":"0 auto 1.5rem auto",p,e=>"left"===e.textAlign?"0 0 1.5rem 0":"0 auto 3rem auto"),A=r.div(f||(f=b`
  width: 100%;
  @media ${0} {
    max-width: 65ch;
  }
`),s);let v,k,z=e=>e;const F=({children:e,color:t,name:r,border:i})=>/*#__PURE__*/o(_,{className:r,color:t,border:i,children:/*#__PURE__*/o(j,{children:e})}),_=r.div(v||(v=z`
  background-color: ${0};

  color: ${0};
  border-top: ${0};

  z-index: 5;
  position: relative;
  padding: 5rem 0;

  @media ${0} {
    padding: 8rem 0;
  }
  @media ${0} {
    padding: 9rem 0;
  }
`),e=>"dark"===e.color?"#001C3D":"lightGrey"===e.color?"#FAFBFC":"darkGrey"===e.color?"#F5F6FA":"white",e=>"dark"===e.color?"white":"#091E42",e=>"top"===e.border?"1px solid #d5d5d5":"none",g,h),j=r.div(k||(k=z`
  margin: 0 auto;
  padding: 0 16px;

  @media ${0} {
    max-width: 650px;
  }
  @media ${0} {
    max-width: 800px;
  }
  @media ${0} {
    max-width: 1000px;
  }
  @media ${0} {
    max-width: 1100px;
  }
  @media ${0} {
    max-width: 1300px;
  }
`),m,s,p,g,h);let M,T,C,D,N,R,S,E,J=e=>e;function L(e){const t=function(e){const[t,r,i]=e.split("-");return`${["January","February","March","April","May","June","July","August","September","October","November","December"][Number(r)-1]} ${Number(i)}, ${t}`}(e.date);/*#__PURE__*/return o(P,{to:"/blog/"+e.id,children:/*#__PURE__*/i(B,{children:[/*#__PURE__*/i(U,{children:[/*#__PURE__*/o(G,{children:e.type}),/*#__PURE__*/o(q,{children:t})]}),/*#__PURE__*/o(H,{children:e.title}),/*#__PURE__*/o(O,{children:e.summary})]})})}const P=r(a)(M||(M=J`
  transition: all 0.5s ease;
  padding-right: 0.625rem;
  padding-left: 0.625rem;
  @media ${0} {
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
  }
  &:hover {
    opacity: 0.6;
  }
`),m),B=r.div(T||(T=J`
  max-width: 100%;
  margin-bottom: 50px;
`));r.div(C||(C=J`
  // background-image: url(${0});
  width: 100%;
  height: 150px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 16px;
  background-position: center;
`),e=>e.background);const G=r.h5(D||(D=J`
  font-size: 0.6875rem;
  font-weight: 500;
  color: #6a6788;
  text-transform: uppercase;
  letter-spacing: 1.1px;
  transition: color 0.25s ease;
`)),H=r.h4(N||(N=J`
  font-size: 1.5rem;
  font-weight: 700;
  color: #050038;
  letter-spacing: -0.5px;
  margin: 8px 0;
`)),O=r.p(R||(R=J`
  font-size: 1em;
  font-weight: 600;
  color: rgb(106, 103, 136);
`)),U=r.div(S||(S=J`
  display: flex;
  justify-content: space-between;
`)),q=r.p(E||(E=J`
  font-size: 0.8rem;
  color: rgb(106, 103, 136);
`)),I=e=>/*#__PURE__*/o("section",{children:Array.from({length:e.count},(e,t)=>/*#__PURE__*/o(l,{style:{width:"100%",marginTop:"3rem"}},t))});let K;function Q({errorMessage:e,size:t}){/*#__PURE__*/return i(V,{size:t,children:[e," ",/*#__PURE__*/o(d,{})]})}const V=r.div(K||(K=(e=>e)`
  color: red;
  font-size: 1.2rem;
  text-align: center;
  height: ${0};
  display: flex;
  justify-content: center;
  align-items: center;
`),e=>"small"===e.size?"300px":"50vh");let W;function X(e){/*#__PURE__*/return i(Y,{to:"/blog",align:e.align,children:["Read all articles & news",/*#__PURE__*/o(c,{style:{paddingLeft:"4px"}})]})}const Y=r(a)(W||(W=(e=>e)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${0};
  width: 300px;
  color: var(--dark-blue);
  text-decoration: none;
  padding: 10px 10px;
  border: 2px solid var(--dark-orange);
  border-radius: 4px;
  &:hover {
    border: 2px solid var(--light-blue);
  }
`),e=>"center"==e.align?"0 auto":"100px 0 0 0 "),Z=`${window.env.REACT_APP_DATAHUB_HC_URL}`;let ee;function te(){const[r,n]=e(),[a,l]=e(!0),[d,c]=e(null);return t(()=>(fetch(`${Z}/help_backend/confluence_documents/blog/label/blog/latest/3`).then(e=>{if(e.status>=200&&e.status<300)return e.json();throw new Q("Server Error")}).then(e=>{l(!1),n(e)}).catch(e=>{l(!1),c("Oops! Something went wrong. Please try again later.")}),()=>{n(),l(!0)}),[]),/*#__PURE__*/i(F,{name:"blog",children:[/*#__PURE__*/o(w,{textAlign:"center",subtitle:"Latest articles",title:"Stay tuned for Maastricht Data Repository’s news and useful features"}),d?/*#__PURE__*/o(Q,{errorMessage:d,size:"small"}):a?/*#__PURE__*/o(I,{count:1}):/*#__PURE__*/o(re,{children:r.map((e,t)=>/*#__PURE__*/o(L,{id:e.id,type:e.article_type,title:e.title,date:e.date,summary:e.summary},t))}),/*#__PURE__*/o(X,{align:"center"})]})}const re=r.div(ee||(ee=(e=>e)`
  margin-top: 3rem;
  @media ${0} {
    display: flex;
    justify-content: space-between;
  }
`),m);export{te as SummarySection,w as Title};
//# sourceMappingURL=index.modern.js.map
