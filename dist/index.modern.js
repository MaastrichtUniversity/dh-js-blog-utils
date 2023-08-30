import{useState as e,useEffect as t}from"react";import r from"styled-components";import{Link as n}from"react-router-dom";import{Code as i}from"react-content-loader";const o="(min-width: 525px)",a="(min-width: 768px)",l="(min-width: 1024px)",d="(min-width: 1440px)",s="(min-width: 2560px)";let m,c,p,u=e=>e;const g=e=>h(Fragment,null,h(x,{textAlign:e.textAlign},e.subtitle),h(f,{textAlign:e.textAlign},e.title),h(b,null,e.content,e.link?h("a",{href:e.link},e.linkText):null)),x=r.h4(m||(m=u`
  color: #f09125;
  text-transform: uppercase;
  text-align: ${0};
  margin: 0.5rem 0;
`),e=>"left"===e.textAlign?"left":"center"),f=r.h2(c||(c=u`
  font-size: 28px;
  text-align: ${0};
  max-width: ${0};
  margin: ${0};
  @media ${0} {
    margin: ${0};
  }
`),e=>"left"===e.textAlign?"left":"center",e=>"left"===e.textAlign?"unset":"650px",e=>"left"===e.textAlign?"0 0 1.5rem 0":"0 auto 1.5rem auto",l,e=>"left"===e.textAlign?"0 0 1.5rem 0":"0 auto 3rem auto"),b=r.div(p||(p=u`
  width: 100%;
  @media ${0} {
    max-width: 65ch;
  }
`),a);let w,y,$=e=>e;const k=({children:e,color:t,name:r,border:n})=>h(v,{className:r,color:t,border:n},h(A,null,e)),v=r.div(w||(w=$`
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
`),e=>"dark"===e.color?"#001C3D":"lightGrey"===e.color?"#FAFBFC":"darkGrey"===e.color?"#F5F6FA":"white",e=>"dark"===e.color?"white":"#091E42",e=>"top"===e.border?"1px solid #d5d5d5":"none",d,s),A=r.div(y||(y=$`
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
`),o,a,l,d,s);let z,F,j,M,N,S,C,D,J=e=>e;function T(e){const t=function(e){const[t,r,n]=e.split("-");return`${["January","February","March","April","May","June","July","August","September","October","November","December"][Number(r)-1]} ${Number(n)}, ${t}`}(e.date);return h(_,{to:"/blog/"+e.id},h(E,null,h(B,null,h(G,null,e.type),h(L,null,t)),h(O,null,e.title),h(R,null,e.summary)))}const _=r(n)(z||(z=J`
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
`),o),E=r.div(F||(F=J`
  max-width: 100%;
  margin-bottom: 50px;
`));r.div(j||(j=J`
  // background-image: url(${0});
  width: 100%;
  height: 150px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 16px;
  background-position: center;
`),e=>e.background);const G=r.h5(M||(M=J`
  font-size: 0.6875rem;
  font-weight: 500;
  color: #6a6788;
  text-transform: uppercase;
  letter-spacing: 1.1px;
  transition: color 0.25s ease;
`)),O=r.h4(N||(N=J`
  font-size: 1.5rem;
  font-weight: 700;
  color: #050038;
  letter-spacing: -0.5px;
  margin: 8px 0;
`)),R=r.p(S||(S=J`
  font-size: 1em;
  font-weight: 600;
  color: rgb(106, 103, 136);
`)),B=r.div(C||(C=J`
  display: flex;
  justify-content: space-between;
`)),L=r.p(D||(D=J`
  font-size: 0.8rem;
  color: rgb(106, 103, 136);
`)),P=e=>h("section",null,Array.from({length:e.count},(e,t)=>h(i,{key:t,style:{width:"100%",marginTop:"3rem"}})));let U;function q({errorMessage:e,size:t}){return h(H,{size:t},e)}const H=r.div(U||(U=(e=>e)`
  color: red;
  font-size: 1.2rem;
  text-align: center;
  height: ${0};
  display: flex;
  justify-content: center;
  align-items: center;
`),e=>"small"===e.size?"300px":"50vh");let I;function K(e){return h(Q,{to:"/blog",align:e.align},"Read all articles & news")}const Q=r(n)(I||(I=(e=>e)`
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
`),e=>"center"==e.align?"0 auto":"100px 0 0 0 ");let V;function W(){const[r,n]=e(),[i,o]=e(!0),[a,l]=e(null);return t(()=>((({helpCenterUrl:e,label:t})=>{fetch(`${e}/help_backend/confluence_documents/blog/label/${t}/latest/3`).then(e=>{if(e.status>=200&&e.status<300)return e.json();throw new q("Server Error")}).then(e=>{o(!1),n(e)}).catch(e=>{o(!1),l("Oops! Something went wrong. Please try again later.")})})(),()=>{n(),o(!0)}),[]),h(k,{name:"blog"},h(g,{textAlign:"center",subtitle:"Latest articles",title:"Stay tuned for Maastricht Data Repository’s news and useful features"}),a?h(q,{errorMessage:a,size:"small"}):i?h(P,{count:1}):h(X,null,r.map((e,t)=>h(T,{key:t,id:e.id,type:e.article_type,title:e.title,date:e.date,summary:e.summary}))),h(K,{align:"center"}))}const X=r.div(V||(V=(e=>e)`
  margin-top: 3rem;
  @media ${0} {
    display: flex;
    justify-content: space-between;
  }
`),o);export{W as SummarySection,g as Title};
//# sourceMappingURL=index.modern.js.map
