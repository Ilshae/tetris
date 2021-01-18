(this["webpackJsonpreact-tetris"]=this["webpackJsonpreact-tetris"]||[]).push([[0],{19:function(n,t,e){},22:function(n,t,e){"use strict";e.r(t);var r=e(1),o=e(0),i=e.n(o),c=e(10),a=e.n(c),u=(e(19),e(2)),d=function(){return Array.from(Array(20),(function(){return new Array(12).fill([0,"clear"])}))},l=function(n,t,e){for(var r=e.x,o=e.y,i=0;i<n.tetromino.length;i+=1)for(var c=0;c<n.tetromino[i].length;c+=1)if(0!==n.tetromino[i][c]&&(!t[i+n.pos.y+o]||!t[i+n.pos.y+o][c+n.pos.x+r]||"clear"!==t[i+n.pos.y+o][c+n.pos.x+r][1]))return!0},s=e(3),f=e(4),p=e.p+"static/media/bg.d63cfd51.png";function x(){var n=Object(s.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px;\n  margin: 0 auto;\n  max-width: 900px;\n  height: 100%;\n  @media(max-width: 1200px) {\n    flex-direction: column;\n    align-items: center;\n  }\n  aside {\n    width: 100%;\n    max-width: 300px;\n    display: block;\n    padding: 0 20px;\n\n    @media(max-width: 1200px) {\n      display: flex;\n      flex-direction: column;\n      margin-top: 30px;\n      div {\n        display: flex;\n        max-width: 300px;\n        text-align: center;\n        justify-content: space-between;\n        div {\n          max-width: 90px;\n        }\n      }    \n    }\n    @media(max-width: 400px) {\n      padding: 0;\n      div {\n        margin-bottom: 10px;\n        div {\n          font-size: 12px;\n          padding: 5px;\n        }      \n      }\n      button {\n        padding: 5px;\n      }\n    }\n  }\n"]);return x=function(){return n},n}function h(){var n=Object(s.a)(["\n  width: 100vw;\n  height: 100vh;\n  background: url(",") #000;\n  background-size: cover;\n  overflow: hidden;\n"]);return h=function(){return n},n}var b=f.a.div(h(),p),m=f.a.div(x());var v=e(8),g={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},j=function(){var n="IJLOSTZ",t=n[Math.floor(Math.random()*n.length)];return g[t]},w=function(n,t){var e=Object(o.useState)(d()),r=Object(u.a)(e,2),i=r[0],c=r[1],a=Object(o.useState)(0),l=Object(u.a)(a,2),s=l[0],f=l[1];return Object(o.useEffect)((function(){f(0);var e=function(e){var r=e.map((function(n){return n.map((function(n){return"clear"===n[1]?[0,"clear"]:n}))}));return n.tetromino.forEach((function(t,e){t.forEach((function(t,o){0!==t&&(r[e+n.pos.y][o+n.pos.x]=[t,"".concat(n.collided?"merged":"clear")])}))})),n.collided?(t(),function(n){return n.reduce((function(t,e){return-1===e.findIndex((function(n){return 0===n[0]}))?(f((function(n){return n+1})),t.unshift(new Array(n[0].length).fill([0,"clear"])),t):(t.push(e),t)}),[])}(r)):r};c((function(n){return e(n)}))}),[n,t]),[i,c,s]};function O(){var n=Object(s.a)(["\n  display: grid;\n  grid-template-rows: repeat(\n    ",",\n    calc(25vw / ",")\n  );\n  grid-template-columns: repeat(",", 1fr);\n  grid-gap: 1px;\n  border: 2px solid #333;\n  width: 100%;\n  max-width: 25vw;\n  background: #111;\n\n  @media (min-width: 1000px) and (max-width: 1200px) {\n    max-width: 30vw;\n    grid-template-rows: repeat(\n      ",",\n      calc(30vw / ",")\n    );\n  }\n  @media (min-width: 800px) and (max-width: 1000px) {\n    max-width: 35vw;\n    grid-template-rows: repeat(\n      ",",\n      calc(35vw / ",")\n    );\n  }\n  @media (min-width: 600px) and (max-width: 800px) {\n    max-width: 40vw;\n    grid-template-rows: repeat(\n      ",",\n      calc(40vw / ",")\n    );\n  }\n  @media (min-width: 400px) and (max-width: 600px) {\n    max-width: 60vw;\n    grid-template-rows: repeat(\n      ",",\n      calc(60vw / ",")\n    );\n  }\n  @media (min-width: 200px) and (max-width: 400px) {\n    max-width: 70vw;\n    grid-template-rows: repeat(\n      ",",\n      calc(70vw / ",")\n    );\n  }\n"]);return O=function(){return n},n}var y=f.a.div(O(),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.width}));function k(){var n=Object(s.a)(["\n  width: auto;\n  background: rgba(",", 0.8);\n  border: ",";\n  border-bottom-color: rgba(",", 0.1);\n  border-right-color: rgba(",", 1);\n  border-top-color: rgba(",", 1);\n  border-left-color: rgba(",", 0.3);\n"]);return k=function(){return n},n}var S=f.a.div(k(),(function(n){return n.color}),(function(n){return 0===n.type?"0px solid":"4px solid"}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color})),I=function(n){var t=n.type;return Object(r.jsx)(S,{type:t,color:g[t].color})},J=i.a.memo(I),E=function(n){var t=n.stage;return Object(r.jsx)(y,{width:t[0].length,height:t.length,children:t.map((function(n){return n.map((function(n,t){return Object(r.jsx)(J,{type:n[0]},t)}))}))})};function A(){var n=Object(s.a)(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center; \n  margin: 0 0 20px 0;\n  padding: 20px;\n  border: 4px solid #333;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  color: ",";\n  background: #000;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 0.8rem;\n"]);return A=function(){return n},n}var L=f.a.div(A(),(function(n){return n.gameOver?"red":"#999"})),z=function(n){var t=n.gameOver,e=n.text;return Object(r.jsx)(L,{gameOver:t,children:e})};function T(){var n=Object(s.a)(["\n  box-sizing: border-box;\n  margin: 0 0 20px 0;\n  padding: 20px;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  border: none;\n  color: white;\n  background: #333;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n  outline: none;\n  cursor: pointer;\n"]);return T=function(){return n},n}var Z=f.a.button(T()),C=function(n){var t=n.callback;return Object(r.jsx)(Z,{onClick:t,children:"Start Game"})},G=function(){var n=Object(o.useState)(null),t=Object(u.a)(n,2),e=t[0],i=t[1],c=Object(o.useState)(!1),a=Object(u.a)(c,2),s=a[0],f=a[1],p=function(){var n=Object(o.useState)({pos:{x:0,y:0},tetromino:g[0].shape,collided:!1}),t=Object(u.a)(n,2),e=t[0],r=t[1],i=function(n,t){var e=n.map((function(t,e){return n.map((function(n){return n[e]}))}));return t>0?e.map((function(n){return n.reverse()})):e.reverse()},c=Object(o.useCallback)((function(){r({pos:{x:4,y:0},tetromino:j().shape,collided:!1})}),[]);return[e,function(n){var t=n.x,e=n.y,o=n.collided;r((function(n){return Object(v.a)(Object(v.a)({},n),{},{pos:{x:n.pos.x+=t,y:n.pos.y+=e},collided:o})}))},c,function(n,t){var o=JSON.parse(JSON.stringify(e));o.tetromino=i(o.tetromino,t);for(var c=o.pos.x,a=1;l(o,n,{x:0,y:0});)if(o.pos.x+=a,(a=-(a+(a>0?1:-1)))>o.tetromino[0].length)return i(o.tetromino,-t),void(o.pos.x=c);r(o)}]}(),x=Object(u.a)(p,4),h=x[0],O=x[1],y=x[2],k=x[3],S=w(h,y),I=Object(u.a)(S,3),J=I[0],A=I[1],L=function(n){var t=Object(o.useState)(0),e=Object(u.a)(t,2),r=e[0],i=e[1],c=Object(o.useState)(0),a=Object(u.a)(c,2),d=a[0],l=a[1],s=Object(o.useState)(0),f=Object(u.a)(s,2),p=f[0],x=f[1],h=[40,100,300,1200],b=Object(o.useCallback)((function(){n>0&&(i((function(t){return t+h[n-1]*(p+1)})),l((function(t){return t+n})))}),[p,h,n]);return Object(o.useEffect)((function(){b()}),[b,n,r]),[r,i,d,l,p,x]}(I[2]),T=Object(u.a)(L,6),Z=T[0],G=T[1],M=T[2],N=T[3],R=T[4],B=T[5];console.log("re-render");var H=function(n){l(h,J,{x:n,y:0})||O({x:n,y:0})},K=function(){M>10*(R+1)&&(B((function(n){return n+1})),i(1e3/(R+1)+200)),l(h,J,{x:0,y:1})?(h.pos.y<1&&(console.log("GAME OVER!!!"),f(!0),i(null)),O({x:0,y:0,collided:!0})):O({x:0,y:1,collided:!1})},P=function(n){var t=n.keyCode;s||(37===t?H(-1):39===t?H(1):40===t?(console.log("interval off"),i(null),K()):38===t&&k(J,1))};return function(n,t){var e=Object(o.useRef)();Object(o.useEffect)((function(){e.current=n}),[n]),Object(o.useEffect)((function(){if(null!==t){var n=setInterval((function(){e.current()}),t);return function(){clearInterval(n)}}}),[t])}((function(){K()}),e),Object(r.jsx)(b,{role:"button",tabIndex:"0",onKeyDown:function(n){return P(n)},onKeyUp:function(n){var t=n.keyCode;s||40===t&&(console.log("interval on"),i(1e3/(R+1)+200))},children:Object(r.jsxs)(m,{children:[Object(r.jsx)(E,{stage:J}),Object(r.jsxs)("aside",{children:[s?Object(r.jsx)(z,{gameOver:s,text:"Game Over"}):Object(r.jsxs)("div",{children:[Object(r.jsx)(z,{text:"Score: ".concat(Z)}),Object(r.jsx)(z,{text:"Rows: ".concat(M)}),Object(r.jsx)(z,{text:"Level: ".concat(R)})]}),Object(r.jsx)(C,{callback:function(){A(d()),i(1e3),y(),f(!1),G(0),N(0),B(0)}})]})]})})},M=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(G,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(r.jsx)(M,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.15782d44.chunk.js.map