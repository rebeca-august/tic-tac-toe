(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(6),u=n.n(s),i=n(7),l=n(2);var o=function(e){var t=e.value,n=e.onClick;return Object(c.jsx)("button",{className:"square ".concat(t),onClick:n,children:t})},j=function(e){var t=e.squares,n=e.onClick;return Object(c.jsx)("div",{className:"board",children:t.map((function(e,t){return Object(c.jsx)(o,{value:e,onClick:function(){return n(t)}},t)}))})},b="playing",O="gameOver",f=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(Array(9).fill(null)),u=Object(l.a)(s,2),o=u[0],f=u[1],d=Object(a.useState)(0),h=Object(l.a)(d,2),m=h[0],p=h[1],g=Object(a.useState)(!0),v=Object(l.a)(g,2),x=v[0],y=v[1],C=Object(a.useState)(null),k=Object(l.a)(C,2),N=k[0],S=k[1];Object(a.useEffect)((function(){(N||9===m)&&r(O)}),[N,m]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j,{squares:o,onClick:function(e){n||r(b);var t=Object(i.a)(o);t[e]||(t[e]=x?"X":"O",S(function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var c=Object(l.a)(t[n],3),a=c[0],r=c[1],s=c[2];if(e[a]&&e[a]===e[r]&&e[a]===e[s])return e[a]}return null}(t)),f(t),y((function(e){return!e})),p((function(e){return e+1})))}}),n===b&&Object(c.jsx)("p",{className:"playerInfo",children:x?"The next player is X":" The next player is O"}),n===O&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{className:"startGameBtn",onClick:function(){r(b),f(Array(9).fill(null)),p(0),S(null),y(!0)},children:"Play again"}),Object(c.jsx)("p",{className:"playerInfo",children:N?"Winner: ".concat(N):"Nobody won. Try again \ud83d\ude0a"})]})]})};n(13);var d=function(){return Object(c.jsx)(f,{className:"game"})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};u.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(d,{className:"app"})}),document.getElementById("root")),h()}},[[14,1,2]]]);
//# sourceMappingURL=main.2c474f29.chunk.js.map