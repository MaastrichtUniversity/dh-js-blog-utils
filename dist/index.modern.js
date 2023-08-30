import{useState as e,useEffect as t}from"react";import n from"styled-components";import{Link as r}from"react-router-dom";import{Code as i}from"react-content-loader";const o="(min-width: 525px)",a="(min-width: 768px)",l="(min-width: 1024px)",d="(min-width: 1440px)",s="(min-width: 2560px)";let m,c,p,u=e=>e;const g=e=>h(Fragment,null,h(x,{textAlign:e.textAlign},e.subtitle),h(f,{textAlign:e.textAlign},e.title),h(b,null,e.content,e.link?h("a",{href:e.link},e.linkText):null)),x=n.h4(m||(m=u`
  color: #f09125;
  text-transform: uppercase;
  text-align: ${0};
  margin: 0.5rem 0;
`),e=>"left"===e.textAlign?"left":"center"),f=n.h2(c||(c=u`
  font-size: 28px;
  text-align: ${0};
  max-width: ${0};
  margin: ${0};
  @media ${0} {
    margin: ${0};
  }
`),e=>"left"===e.textAlign?"left":"center",e=>"left"===e.textAlign?"unset":"650px",e=>"left"===e.textAlign?"0 0 1.5rem 0":"0 auto 1.5rem auto",l,e=>"left"===e.textAlign?"0 0 1.5rem 0":"0 auto 3rem auto"),b=n.div(p||(p=u`
  width: 100%;
  @media ${0} {
    max-width: 65ch;
  }
`),a);let w,y,$=e=>e;const A=({children:e,color:t,name:n,border:r})=>h(v,{className:n,color:t,border:r},h(k,null,e)),v=n.div(w||(w=$`
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
`),e=>"dark"===e.color?"#001C3D":"lightGrey"===e.color?"#FAFBFC":"darkGrey"===e.color?"#F5F6FA":"white",e=>"dark"===e.color?"white":"#091E42",e=>"top"===e.border?"1px solid #d5d5d5":"none",d,s),k=n.div(y||(y=$`
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
`),o,a,l,d,s);let z,F,_,j,M,T,C,D,N=e=>e;function R(e){const t=function(e){const[t,n,r]=e.split("-");return`${["January","February","March","April","May","June","July","August","September","October","November","December"][Number(n)-1]} ${Number(r)}, ${t}`}(e.date);return h(S,{to:"/blog/"+e.id},h(E,null,h(G,null,h(J,null,e.type),h(H,null,t)),h(P,null,e.title),h(B,null,e.summary)))}const S=n(r)(z||(z=N`
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
`),o),E=n.div(F||(F=N`
  max-width: 100%;
  margin-bottom: 50px;
`));n.div(_||(_=N`
  // background-image: url(${0});
  width: 100%;
  height: 150px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 16px;
  background-position: center;
`),e=>e.background);const J=n.h5(j||(j=N`
  font-size: 0.6875rem;
  font-weight: 500;
  color: #6a6788;
  text-transform: uppercase;
  letter-spacing: 1.1px;
  transition: color 0.25s ease;
`)),P=n.h4(M||(M=N`
  font-size: 1.5rem;
  font-weight: 700;
  color: #050038;
  letter-spacing: -0.5px;
  margin: 8px 0;
`)),B=n.p(T||(T=N`
  font-size: 1em;
  font-weight: 600;
  color: rgb(106, 103, 136);
`)),G=n.div(C||(C=N`
  display: flex;
  justify-content: space-between;
`)),H=n.p(D||(D=N`
  font-size: 0.8rem;
  color: rgb(106, 103, 136);
`)),L=e=>h("section",null,Array.from({length:e.count},(e,t)=>h(i,{key:t,style:{width:"100%",marginTop:"3rem"}})));let O;function U({errorMessage:e,size:t}){return h(q,{size:t},e)}const q=n.div(O||(O=(e=>e)`
  color: red;
  font-size: 1.2rem;
  text-align: center;
  height: ${0};
  display: flex;
  justify-content: center;
  align-items: center;
`),e=>"small"===e.size?"300px":"50vh");let I;function K(e){return h(Q,{to:"/blog",align:e.align},"Read all articles & news")}const Q=n(r)(I||(I=(e=>e)`
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
`),e=>"center"==e.align?"0 auto":"100px 0 0 0 "),V=`${window.env.REACT_APP_DATAHUB_HC_URL}`;let W;function X(){const[n,r]=e(),[i,o]=e(!0),[a,l]=e(null);return t(()=>(fetch(`${V}/help_backend/confluence_documents/blog/label/blog/latest/3`).then(e=>{if(e.status>=200&&e.status<300)return e.json();throw new U("Server Error")}).then(e=>{o(!1),r(e)}).catch(e=>{o(!1),l("Oops! Something went wrong. Please try again later.")}),()=>{r(),o(!0)}),[]),h(A,{name:"blog"},h(g,{textAlign:"center",subtitle:"Latest articles",title:"Stay tuned for Maastricht Data Repository’s news and useful features"}),a?h(U,{errorMessage:a,size:"small"}):i?h(L,{count:1}):h(Y,null,n.map((e,t)=>h(R,{key:t,id:e.id,type:e.article_type,title:e.title,date:e.date,summary:e.summary}))),h(K,{align:"center"}))}const Y=n.div(W||(W=(e=>e)`
  margin-top: 3rem;
  @media ${0} {
    display: flex;
    justify-content: space-between;
  }
`),o);export{X as SummarySection,g as Title};
//# sourceMappingURL=index.modern.js.map
