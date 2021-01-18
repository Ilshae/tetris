(this["webpackJsonpreact-tetris"]=this["webpackJsonpreact-tetris"]||[]).push([[0],{19:function(n,t,e){},22:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(0),o=e.n(i),c=e(10),a=e.n(c),u=(e(19),e(4)),d=function(){return Array.from(Array(20),(function(){return new Array(12).fill([0,"clear"])}))},l=function(n,t,e){for(var r=e.x,i=e.y,o=0;o<n.tetromino.length;o+=1)for(var c=0;c<n.tetromino[o].length;c+=1)if(0!==n.tetromino[o][c]&&(!t[o+n.pos.y+i]||!t[o+n.pos.y+i][c+n.pos.x+r]||"clear"!==t[o+n.pos.y+i][c+n.pos.x+r][1]))return!0},f=e(2),s=e(3),x=e.p+"static/media/bg.d63cfd51.png";function p(){var n=Object(f.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px;\n  margin: 0 auto;\n  max-width: 900px;\n  height: 100%;\n  @media(max-width: 1200px) {\n    flex-direction: column;\n    align-items: center;\n  }\n  aside {\n    width: 100%;\n    max-width: 300px;\n    display: block;\n    padding: 0 20px;\n\n    @media(max-width: 1200px) {\n      display: flex;\n      flex-direction: column-reverse;\n      margin-top: 10px;\n      div {\n        display: flex;\n        max-width: 300px;\n        text-align: center;\n        justify-content: space-between;\n        div {\n          max-width: 90px;\n        }\n      }    \n    }\n    @media(max-width: 400px) {\n      padding: 0;\n      div {\n        div {\n          font-size: 12px;\n        }      \n      }\n    }\n  }\n"]);return p=function(){return n},n}function h(){var n=Object(f.a)(["\n  width: 100px;\n  padding: 20px;\n  margin: 2px;\n  font-size: 40px;\n  font-weight: bold;\n  background-color: #333;\n  border: 1px solid black;\n  color: white;\n  \n  &:active{\n    border: 1px solid white;\n  }\n\n  @media (min-width: 800px) and (max-width: 1000px) {\n    width: 80px;\n    height: 80px;\n    font-size: 35px;\n  }\n  @media (min-width: 600px) and (max-width: 800px) {\n    width: 75px;\n    height: 75px;\n    font-size: 30px;\n  }\n  @media (min-width: 400px) and (max-width: 600px) {\n    width: 70px;\n    height: 70px;\n    font-size: 25px;\n  }\n  @media (max-width: 400px) {\n    width: 60px;\n    height: 60px;\n    font-size: 20px;\n  }\n"]);return h=function(){return n},n}function b(){var n=Object(f.a)(["\n  margin: 0 auto;\n"]);return b=function(){return n},n}function m(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center!important;\n  max-width: 300px!important;\n  margin-bottom: 10px;\n"]);return m=function(){return n},n}function w(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n"]);return w=function(){return n},n}function j(){var n=Object(f.a)(["\n  width: 100vw;\n  min-height: 100vh;\n  background: url(",") #000;\n  background-size: cover;\n  overflow: hidden;\n"]);return j=function(){return n},n}var v=s.a.div(j(),x),g=s.a.div(w()),O=s.a.div(m()),y=s.a.div(b()),k=s.a.button(h()),S=s.a.div(p());var A=e(8),z={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},I=function(){var n="IJLOSTZ",t=n[Math.floor(Math.random()*n.length)];return z[t]},J=function(n,t){var e=Object(i.useState)(d()),r=Object(u.a)(e,2),o=r[0],c=r[1],a=Object(i.useState)(0),l=Object(u.a)(a,2),f=l[0],s=l[1];return Object(i.useEffect)((function(){s(0);var e=function(e){var r=e.map((function(n){return n.map((function(n){return"clear"===n[1]?[0,"clear"]:n}))}));return n.tetromino.forEach((function(t,e){t.forEach((function(t,i){0!==t&&(r[e+n.pos.y][i+n.pos.x]=[t,"".concat(n.collided?"merged":"clear")])}))})),n.collided?(t(),function(n){return n.reduce((function(t,e){return-1===e.findIndex((function(n){return 0===n[0]}))?(s((function(n){return n+1})),t.unshift(new Array(n[0].length).fill([0,"clear"])),t):(t.push(e),t)}),[])}(r)):r};c((function(n){return e(n)}))}),[n,t]),[o,c,f]};function E(){var n=Object(f.a)(["\n  display: grid;\n  grid-template-rows: repeat(\n    ",",\n    calc(25vw / ",")\n  );\n  grid-template-columns: repeat(",", 1fr);\n  grid-gap: 1px;\n  border: 2px solid #333;\n  width: 100%;\n  max-width: 25vw;\n  background: #111;\n\n  @media (min-width: 1000px) and (max-width: 1200px) {\n    max-width: 30vw;\n    grid-template-rows: repeat(\n      ",",\n      calc(30vw / ",")\n    );\n  }\n  @media (min-width: 800px) and (max-width: 1000px) {\n    max-width: 35vw;\n    grid-template-rows: repeat(\n      ",",\n      calc(35vw / ",")\n    );\n  }\n  @media (min-width: 600px) and (max-width: 800px) {\n    max-width: 40vw;\n    grid-template-rows: repeat(\n      ",",\n      calc(40vw / ",")\n    );\n  }\n  @media (min-width: 400px) and (max-width: 600px) {\n    max-width: 60vw;\n    grid-template-rows: repeat(\n      ",",\n      calc(60vw / ",")\n    );\n  }\n  @media (max-width: 400px) {\n    max-width: 70vw;\n    grid-template-rows: repeat(\n      ",",\n      calc(70vw / ",")\n    );\n  }\n"]);return E=function(){return n},n}var L=s.a.div(E(),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.width}));function C(){var n=Object(f.a)(["\n  width: auto;\n  background: rgba(",", 0.8);\n  border: ",";\n  border-bottom-color: rgba(",", 0.1);\n  border-right-color: rgba(",", 1);\n  border-top-color: rgba(",", 1);\n  border-left-color: rgba(",", 0.3);\n"]);return C=function(){return n},n}var T=s.a.div(C(),(function(n){return n.color}),(function(n){return 0===n.type?"0px solid":"4px solid"}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color})),Z=function(n){var t=n.type;return Object(r.jsx)(T,{type:t,color:z[t].color})},R=o.a.memo(Z),D=function(n){var t=n.stage;return Object(r.jsx)(L,{width:t[0].length,height:t.length,children:t.map((function(n){return n.map((function(n,t){return Object(r.jsx)(R,{type:n[0]},t)}))}))})};function G(){var n=Object(f.a)(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center; \n  margin: 0 0 20px 0;\n  padding: 20px;\n  border: 4px solid #333;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  color: ",";\n  background: #000;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 0.8rem;\n"]);return G=function(){return n},n}var M=s.a.div(G(),(function(n){return n.gameOver?"red":"#999"})),U=function(n){var t=n.gameOver,e=n.text;return Object(r.jsx)(M,{gameOver:t,children:e})};function B(){var n=Object(f.a)(["\n  box-sizing: border-box;\n  margin: 0 0 20px 0;\n  padding: 20px;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  border: none;\n  color: white;\n  background: #333;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n  outline: none;\n  cursor: pointer;\n"]);return B=function(){return n},n}var H=s.a.button(B()),K=function(n){var t=n.callback;return Object(r.jsx)(H,{onClick:t,children:"Start Game"})},N=function(){var n=Object(i.useState)(null),t=Object(u.a)(n,2),e=t[0],o=t[1],c=Object(i.useState)(!1),a=Object(u.a)(c,2),f=a[0],s=a[1],x=function(){var n=Object(i.useState)({pos:{x:0,y:0},tetromino:z[0].shape,collided:!1}),t=Object(u.a)(n,2),e=t[0],r=t[1],o=function(n,t){var e=n.map((function(t,e){return n.map((function(n){return n[e]}))}));return t>0?e.map((function(n){return n.reverse()})):e.reverse()},c=Object(i.useCallback)((function(){r({pos:{x:4,y:0},tetromino:I().shape,collided:!1})}),[]);return[e,function(n){var t=n.x,e=n.y,i=n.collided;r((function(n){return Object(A.a)(Object(A.a)({},n),{},{pos:{x:n.pos.x+=t,y:n.pos.y+=e},collided:i})}))},c,function(n,t){var i=JSON.parse(JSON.stringify(e));i.tetromino=o(i.tetromino,t);for(var c=i.pos.x,a=1;l(i,n,{x:0,y:0});)if(i.pos.x+=a,(a=-(a+(a>0?1:-1)))>i.tetromino[0].length)return o(i.tetromino,-t),void(i.pos.x=c);r(i)}]}(),p=Object(u.a)(x,4),h=p[0],b=p[1],m=p[2],w=p[3],j=J(h,m),E=Object(u.a)(j,3),L=E[0],C=E[1],T=function(n){var t=Object(i.useState)(0),e=Object(u.a)(t,2),r=e[0],o=e[1],c=Object(i.useState)(0),a=Object(u.a)(c,2),d=a[0],l=a[1],f=Object(i.useState)(0),s=Object(u.a)(f,2),x=s[0],p=s[1],h=[40,100,300,1200],b=Object(i.useCallback)((function(){n>0&&(o((function(t){return t+h[n-1]*(x+1)})),l((function(t){return t+n})))}),[x,h,n]);return Object(i.useEffect)((function(){b()}),[b,n,r]),[r,o,d,l,x,p]}(E[2]),Z=Object(u.a)(T,6),R=Z[0],G=Z[1],M=Z[2],B=Z[3],H=Z[4],N=Z[5],P=function(n){l(h,L,{x:n,y:0})||b({x:n,y:0})},W=function(){M>10*(H+1)&&(N((function(n){return n+1})),o(1e3/(H+1)+200)),l(h,L,{x:0,y:1})?(h.pos.y<1&&(console.log("GAME OVER!!!"),s(!0),o(null)),b({x:0,y:0,collided:!0})):b({x:0,y:1,collided:!1})},V=function(n){var t=n.key;f||("ArrowLeft"===t?P(-1):"ArrowRight"===t?P(1):"ArrowDown"===t?(console.log("interval off"),o(null),W()):"ArrowUp"===t&&w(L,1))};return function(n,t){var e=Object(i.useRef)();Object(i.useEffect)((function(){e.current=n}),[n]),Object(i.useEffect)((function(){if(null!==t){var n=setInterval((function(){e.current()}),t);return function(){clearInterval(n)}}}),[t])}((function(){W()}),e),Object(r.jsx)(v,{role:"button",tabIndex:"0",onKeyDown:function(n){return V(n)},onKeyUp:function(n){var t=n.keyCode;f||40===t&&(console.log("interval on"),o(1e3/(H+1)+200))},children:Object(r.jsxs)(S,{children:[Object(r.jsx)(D,{stage:L}),Object(r.jsxs)("aside",{children:[Object(r.jsx)(K,{callback:function(){C(d()),o(1e3),m(),s(!1),G(0),B(0),N(0)}}),f?Object(r.jsx)(U,{gameOver:f,text:"Game Over"}):Object(r.jsxs)("div",{children:[Object(r.jsx)(U,{text:"Score: ".concat(R)}),Object(r.jsx)(U,{text:"Rows: ".concat(M)}),Object(r.jsx)(U,{text:"Level: ".concat(H)})]}),Object(r.jsxs)(g,{children:[Object(r.jsx)(y,{children:Object(r.jsx)(k,{onClick:function(n){n.key="ArrowUp",V(n)},children:"\u21e7"})}),Object(r.jsxs)(O,{children:[Object(r.jsx)(k,{onClick:function(n){n.key="ArrowLeft",V(n)},children:"\u21e6"}),Object(r.jsx)(k,{onClick:function(n){n.key="ArrowDown",V(n)},children:"\u21e9"}),Object(r.jsx)(k,{onClick:function(n){n.key="ArrowRight",V(n)},children:"\u21e8"})]})]})]})]})})},P=function(){return Object(r.jsx)(N,{})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(r.jsx)(P,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.a85da3f3.chunk.js.map