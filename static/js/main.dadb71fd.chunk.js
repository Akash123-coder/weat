(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(6),s=c.n(n),a=(c(12),c(1)),r=c(5),i=c.n(r),j=c(7),u=c(2),b=(c(4),c(0));var o=function(e){var t=e.temp;console.log(t),console.log(typeof t);var c=t-273.15;return c=c.toFixed(2),console.log(c),Object(b.jsx)("div",{id:"weather_wrapper",children:Object(b.jsxs)("div",{class:"weatherCard",children:[Object(b.jsxs)("div",{class:"currentTemp",children:[Object(b.jsxs)("span",{class:"temp",children:[e.name,"\xb0"]}),Object(b.jsx)("span",{class:"location",children:c})]}),Object(b.jsxs)("div",{class:"currentWeather",children:[e.humid>50&&Object(b.jsx)("span",{class:"conditions",children:"\uf01d"}),e.humid<50&&Object(b.jsx)("span",{class:"conditions",children:"\uf00d"}),Object(b.jsxs)("div",{class:"info",children:[Object(b.jsxs)("span",{class:"wind",children:[e.pressure,"bar"]}),Object(b.jsxs)("span",{class:"rain",children:[e.humid,"%"]})]})]})]})})},l=(c(15),0);var d=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),r=Object(u.a)(s,2),d=r[0],p=r[1],O=Object(a.useState)(""),h=Object(u.a)(O,2),m=h[0],x=h[1],f=Object(a.useState)(""),v=Object(u.a)(f,2),g=v[0],w=v[1],S=Object(a.useState)(""),k=Object(u.a)(S,2),y=k[0],N=k[1],C=Object(a.useState)(""),E=Object(u.a)(C,2),F=E[0],I=E[1],J=Object(a.useState)(""),T=Object(u.a)(J,2),W=T[0],_=T[1],q=Object(a.useState)(""),A=Object(u.a)(q,2),B=A[0],D=A[1],L=Object(a.useRef)(),R=m.toLowerCase();function z(){return(z=Object(j.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(R,"&appid=45ab389e935d7d9f54159c706fdda7b7"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(c=e.sent,console.log(c.length),t.ok){e.next=11;break}return n(!1),p(!0),e.abrupt("return");case 11:if(0!=c.length){e.next=15;break}return e.abrupt("return");case 15:w(c.name),N(c.main.temp),I(c.main.temp_max),_(c.main.humidity),D(c.main.pressure);case 20:p(!1);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){l>=1&&function(){z.apply(this,arguments)}(),l++}),[R]),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x(L.current.value)},children:[Object(b.jsx)("div",{className:"bet",children:Object(b.jsx)("input",{type:"text",ref:L})}),Object(b.jsx)("div",{className:"met",onClick:function(){n(!0)},children:Object(b.jsx)("button",{className:"button",children:"Temperature"})}),d&&Object(b.jsx)("p",{className:"inv",children:"Invalid City Name!!!!"}),c&&Object(b.jsx)(o,{name:g,temp:y,max:F,humid:W,pressure:B})]})};var p=function(){return Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)("div",{className:"bet",children:Object(b.jsx)("h1",{children:"Weather App"})}),Object(b.jsx)(d,{})]})};s.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))},4:function(e,t,c){}},[[16,1,2]]]);
//# sourceMappingURL=main.dadb71fd.chunk.js.map