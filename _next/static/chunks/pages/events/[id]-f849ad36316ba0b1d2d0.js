(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32],{8276:function(e,n,t){"use strict";t.d(n,{j:function(){return i}});var r=t(7294),a=t(6010),s=t(1163),l=t(7088),o=t(5893);function i(e){var n,t,i,c,d,u=e.events,m=e.name,v=e.singleEvent,f=(0,s.useRouter)(),x=(0,r.useState)(0),h=x[0],p=x[1],g=(0,r.useState)(!1),j=g[0],w=g[1],N=function(){var e,n=(null===v||void 0===v?void 0:v.name)||(null===(e=u[h])||void 0===e?void 0:e.name),t=encodeURI((0,l.C)(n));console.warn(t),f.push("/event/".concat(t))};return(0,o.jsxs)("div",{className:(0,a.Z)("flex flex-col mb-24 w-full text-black xl:flex-row",j&&"animate-fadeIn"),onAnimationEnd:function(){return w(!1)},children:[(0,o.jsx)("img",{style:{height:400,width:600},onClick:N,className:"block mr-20 cursor-pointer object-cover",src:(null===v||void 0===v?void 0:v.mainPhoto)||(null===(n=u[h])||void 0===n?void 0:n.mainPhoto),alt:"mainPhoto"}),(0,o.jsxs)("div",{className:"flex flex-col justify-between mx-4 sm:mx-0",children:[(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsx)("div",{className:(0,a.Z)("self-start mb-8 mt-10 px-4 py-3 bg-orange_alpha_15 rounded-full xl:mt-0",!m&&"invisible"),children:(0,o.jsx)("span",{className:"text-orange font-bold",children:m})}),(0,o.jsxs)("div",{onClick:N,className:"flex items-center",children:[(0,o.jsx)("span",{className:"mr-2 hover:text-orange text-5xl font-bold cursor-pointer",children:(null===v||void 0===v?void 0:v.name)||(null===(t=u[h])||void 0===t?void 0:t.name)}),(0,o.jsx)("img",{className:"h-6 cursor-pointer",src:"/assets/rightArrow.svg",alt:"right arrow"})]}),(0,o.jsx)("p",{className:"py-7 text-black_alpha_70 text-base font-light",children:(null===v||void 0===v?void 0:v.description)||(null===(i=u[h])||void 0===i?void 0:i.description)}),(0,o.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,o.jsxs)("div",{className:"flex items-center mr-4",children:[(0,o.jsx)("img",{className:"mr-3 rounded-full shadow-eventIcons",src:"/assets/pin.svg",alt:"pin"}),(0,o.jsx)("span",{className:"text-lg font-semibold",children:(null===v||void 0===v?void 0:v.place)||(null===(c=u[h])||void 0===c?void 0:c.place)})]}),(0,o.jsxs)("div",{className:"flex items-center",children:[(0,o.jsx)("img",{className:"mr-3 rounded-full shadow-eventIcons",src:"/assets/calendar.svg",alt:"calendar"}),(0,o.jsx)("span",{className:"text-lg font-semibold",children:(null===v||void 0===v?void 0:v.time)||(null===(d=u[h])||void 0===d?void 0:d.time)})]})]})]}),v?null:(0,o.jsxs)("div",{className:"flex mt-2",children:[(0,o.jsx)("img",{onClick:function(){w(!0),p(0===h?u.length-1:function(e){return e-1})},className:"mr-3 cursor-pointer transform rotate-180",src:"/assets/orange_navigation_arrow.svg",alt:"navigation arrow"}),(0,o.jsx)("img",{onClick:function(){w(!0),h+1===u.length?p(0):p((function(e){return e+1}))},className:"cursor-pointer",src:"/assets/orange_navigation_arrow.svg",alt:"navigation arrow"})]})]})]})}},7088:function(e,n,t){"use strict";t.d(n,{C:function(){return r}});var r=function(e){return e.toLowerCase().replace(/\//g,"_").replace(/[\[\]]/g,"").replace(/\s/g,"_")}},7696:function(e,n,t){"use strict";t.d(n,{R:function(){return l}});var r=t(7294),a=t(5893);function s(e){var n=e.searchBarPlaceholder,t=e.setSearchValue,s=(0,r.useCallback)((function(e){return t(e.target.value.toLowerCase())}),[t]);return(0,a.jsx)("div",{className:"mt-6 w-full max-w-md",children:(0,a.jsxs)("div",{className:"relative mt-1 rounded-md shadow-sm",children:[(0,a.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:(0,a.jsx)("img",{src:"/assets/search.svg",alt:"search icon",className:"w-5 h-5 text-gray-400","aria-hidden":"true"})}),(0,a.jsx)("input",{type:"text",name:"search",id:"search",onChange:s,className:"block p-4 pl-10 w-full text-center text-black text-lg font-semibold border-gray-300 rounded-md outline-none sm:text-sm md:text-left",placeholder:n})]})})}var l=function(e){var n=e.data,t=e.filterBy,l=e.searchBarPlaceholder,o=(0,r.useState)(""),i=o[0],c=o[1],d=(0,a.jsx)(s,{searchBarPlaceholder:l,setSearchValue:c});return{filteredData:null===n||void 0===n?void 0:n.filter((function(e){return null===e||void 0===e?void 0:e[t].toLowerCase().includes(i)})),searchBar:d}}},5983:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(1163),a=t(7793),s=t(7696),l=t(4586),o=t(8276),i=t(5893);function c(e){var n=e.events;return(0,i.jsx)("div",{className:"mx-0 my-12 max-w-7xl space-y-24 sm:mx-4 sm:my-24 md:mx-12",children:null===n||void 0===n?void 0:n.map((function(e){return(0,i.jsx)(o.j,{singleEvent:e},(0,l.Z)())}))})}var d=t(7088);var u=function(){var e=(0,r.useRouter)().query.id,n=(0,a.D)("events").data,t=n.find((function(n){return(0,d.C)(n.name)===e}));console.warn(e,n);var l=(0,s.R)({data:null===t||void 0===t?void 0:t.events,filterBy:"name",searchBarPlaceholder:"Wyszukaj ".concat(null===t||void 0===t?void 0:t.name)}),o=l.filteredData,u=l.searchBar;return(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsxs)("div",{className:"flex flex-col items-center mx-auto my-4 p-3 md:my-12 md:p-12",children:[(0,i.jsx)("h2",{className:"my-10 text-center text-black text-5xl font-bold md:text-left md:text-6xl",children:null===t||void 0===t?void 0:t.name}),(0,i.jsx)("p",{className:"max-w-lg text-center text-black_alpha_70 font-light",children:null===t||void 0===t?void 0:t.description}),u]}),(0,i.jsx)(c,{events:o})]})}},5788:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events/[id]",function(){return t(5983)}])},4586:function(e,n,t){"use strict";var r;t.d(n,{Z:function(){return u}});var a=new Uint8Array(16);function s(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(a)}var l=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var o=function(e){return"string"===typeof e&&l.test(e)},i=[],c=0;c<256;++c)i.push((c+256).toString(16).substr(1));var d=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(i[e[n+0]]+i[e[n+1]]+i[e[n+2]]+i[e[n+3]]+"-"+i[e[n+4]]+i[e[n+5]]+"-"+i[e[n+6]]+i[e[n+7]]+"-"+i[e[n+8]]+i[e[n+9]]+"-"+i[e[n+10]]+i[e[n+11]]+i[e[n+12]]+i[e[n+13]]+i[e[n+14]]+i[e[n+15]]).toLowerCase();if(!o(t))throw TypeError("Stringified UUID is invalid");return t};var u=function(e,n,t){var r=(e=e||{}).random||(e.rng||s)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){t=t||0;for(var a=0;a<16;++a)n[t+a]=r[a];return n}return d(r)}}},function(e){e.O(0,[774,888,179],(function(){return n=5788,e(e.s=n);var n}));var n=e.O();_N_E=n}]);