import{useState as e,useEffect as t}from"react";import r from"styled-components";import{Link as n}from"react-router-dom";import{Code as i}from"react-content-loader";import{TbFaceIdError as o}from"react-icons/tb";import{FaArrowRight as a}from"react-icons/fa";const l="(min-width: 525px)",d="(min-width: 768px)",s="(min-width: 1024px)",m="(min-width: 1440px)",c="(min-width: 2560px)";let p,u,g,x=e=>e;const f=e=>h(Fragment,null,h(b,{textAlign:e.textAlign},e.subtitle),h(w,{textAlign:e.textAlign},e.title),h(y,null,e.content,e.link?h("a",{href:e.link},e.linkText):null)),b=r.h4(p||(p=x`
  color: #f09125;
  text-transform: uppercase;
  text-align: ${0};
  margin: 0.5rem 0;
`),e=>"left"===e.textAlign?"left":"center"),w=r.h2(u||(u=x`
  font-size: 28px;
  text-align: ${0};
  max-width: ${0};
  margin: ${0};
  @media ${0} {
    margin: ${0};
  }
`),e=>"left"===e.textAlign?"left":"center",e=>"left"===e.textAlign?"unset":"650px",e=>"left"===e.textAlign?"0 0 1.5rem 0":"0 auto 1.5rem auto",s,e=>"left"===e.textAlign?"0 0 1.5rem 0":"0 auto 3rem auto"),y=r.div(g||(g=x`
  width: 100%;
  @media ${0} {
    max-width: 65ch;
  }
`),d);let $,A,v=e=>e;const k=({children:e,color:t,name:r,border:n})=>h(z,{className:r,color:t,border:n},h(F,null,e)),z=r.div($||($=v`
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
`),e=>"dark"===e.color?"#001C3D":"lightGrey"===e.color?"#FAFBFC":"darkGrey"===e.color?"#F5F6FA":"white",e=>"dark"===e.color?"white":"#091E42",e=>"top"===e.border?"1px solid #d5d5d5":"none",m,c),F=r.div(A||(A=v`
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
`),l,d,s,m,c);let _,j,M,T,C,D,N,R,S=e=>e;function E(e){const t=function(e){const[t,r,n]=e.split("-");return`${["January","February","March","April","May","June","July","August","September","October","November","December"][Number(r)-1]} ${Number(n)}, ${t}`}(e.date);return h(J,{to:"/blog/"+e.id},h(L,null,h(H,null,h(P,null,e.type),h(O,null,t)),h(B,null,e.title),h(G,null,e.summary)))}const J=r(n)(_||(_=S`
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
`),l),L=r.div(j||(j=S`
  max-width: 100%;
  margin-bottom: 50px;
`));r.div(M||(M=S`
  // background-image: url(${0});
  width: 100%;
  height: 150px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 16px;
  background-position: center;
`),e=>e.background);const P=r.h5(T||(T=S`
  font-size: 0.6875rem;
  font-weight: 500;
  color: #6a6788;
  text-transform: uppercase;
  letter-spacing: 1.1px;
  transition: color 0.25s ease;
`)),B=r.h4(C||(C=S`
  font-size: 1.5rem;
  font-weight: 700;
  color: #050038;
  letter-spacing: -0.5px;
  margin: 8px 0;
`)),G=r.p(D||(D=S`
  font-size: 1em;
  font-weight: 600;
  color: rgb(106, 103, 136);
`)),H=r.div(N||(N=S`
  display: flex;
  justify-content: space-between;
`)),O=r.p(R||(R=S`
  font-size: 0.8rem;
  color: rgb(106, 103, 136);
`)),U=e=>h("section",null,Array.from({length:e.count},(e,t)=>h(i,{key:t,style:{width:"100%",marginTop:"3rem"}})));let q;function I({errorMessage:e,size:t}){return h(K,{size:t},e," ",h(o,null))}const K=r.div(q||(q=(e=>e)`
  color: red;
  font-size: 1.2rem;
  text-align: center;
  height: ${0};
  display: flex;
  justify-content: center;
  align-items: center;
`),e=>"small"===e.size?"300px":"50vh");let Q;function V(e){return h(W,{to:"/blog",align:e.align},"Read all articles & news",h(a,{style:{paddingLeft:"4px"}}))}const W=r(n)(Q||(Q=(e=>e)`
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
`),e=>"center"==e.align?"0 auto":"100px 0 0 0 "),X=`${window.env.REACT_APP_DATAHUB_HC_URL}`;let Y;function Z(){const[r,n]=e(),[i,o]=e(!0),[a,l]=e(null);return t(()=>(fetch(`${X}/help_backend/confluence_documents/blog/label/blog/latest/3`).then(e=>{if(e.status>=200&&e.status<300)return e.json();throw new I("Server Error")}).then(e=>{o(!1),n(e)}).catch(e=>{o(!1),l("Oops! Something went wrong. Please try again later.")}),()=>{n(),o(!0)}),[]),h(k,{name:"blog"},h(f,{textAlign:"center",subtitle:"Latest articles",title:"Stay tuned for Maastricht Data Repository’s news and useful features"}),a?h(I,{errorMessage:a,size:"small"}):i?h(U,{count:1}):h(ee,null,r.map((e,t)=>h(E,{key:t,id:e.id,type:e.article_type,title:e.title,date:e.date,summary:e.summary}))),h(V,{align:"center"}))}const ee=r.div(Y||(Y=(e=>e)`
  margin-top: 3rem;
  @media ${0} {
    display: flex;
    justify-content: space-between;
  }
`),l);export{Z as SummarySection,f as Title};
//# sourceMappingURL=index.modern.js.map
