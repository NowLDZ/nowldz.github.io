(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32],{8276:function(e,t,n){"use strict";n.d(t,{j:function(){return o}});var r=n(7294),a=n(6010),s=n(1163),l=n(7088),i=n(5893);function o(e){var t,n,o,c,d,u=e.events,m=e.name,v=e.singleEvent,f=(0,s.useRouter)(),x=(0,r.useState)(0),h=x[0],p=x[1],g=(0,r.useState)(!1),j=g[0],N=g[1],w=function(){var e,t=(null===v||void 0===v?void 0:v.name)||(null===(e=u[h])||void 0===e?void 0:e.name),n=encodeURI((0,l.C)(t));f.push("/event/".concat(n))};return(0,i.jsxs)("div",{className:(0,a.Z)("flex flex-col mb-24 w-full text-black xl:flex-row",j&&"animate-fadeIn"),onAnimationEnd:function(){return N(!1)},children:[(0,i.jsx)("img",{style:{height:400,width:600},onClick:w,className:"block mr-20 cursor-pointer object-cover",src:(null===v||void 0===v?void 0:v.mainPhoto)||(null===(t=u[h])||void 0===t?void 0:t.mainPhoto),alt:"mainPhoto"}),(0,i.jsxs)("div",{className:"flex flex-col justify-between mx-4 sm:mx-0",children:[(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("div",{className:(0,a.Z)("self-start mb-8 mt-10 px-4 py-3 bg-orange_alpha_15 rounded-full xl:mt-0",!m&&"invisible"),children:(0,i.jsx)("span",{className:"text-orange font-bold",children:m})}),(0,i.jsxs)("div",{onClick:w,className:"flex items-center",children:[(0,i.jsx)("span",{className:"mr-2 hover:text-orange text-5xl font-bold cursor-pointer",children:(null===v||void 0===v?void 0:v.name)||(null===(n=u[h])||void 0===n?void 0:n.name)}),(0,i.jsx)("img",{className:"h-6 cursor-pointer",src:"/assets/rightArrow.svg",alt:"right arrow"})]}),(0,i.jsx)("p",{className:"py-7 text-black_alpha_70 text-base font-light",children:(null===v||void 0===v?void 0:v.description)||(null===(o=u[h])||void 0===o?void 0:o.description)}),(0,i.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,i.jsxs)("div",{className:"flex items-center mr-4",children:[(0,i.jsx)("img",{className:"mr-3 rounded-full shadow-eventIcons",src:"/assets/pin.svg",alt:"pin"}),(0,i.jsx)("span",{className:"text-lg font-semibold",children:(null===v||void 0===v?void 0:v.place)||(null===(c=u[h])||void 0===c?void 0:c.place)})]}),(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("img",{className:"mr-3 rounded-full shadow-eventIcons",src:"/assets/calendar.svg",alt:"calendar"}),(0,i.jsx)("span",{className:"text-lg font-semibold",children:(null===v||void 0===v?void 0:v.time)||(null===(d=u[h])||void 0===d?void 0:d.time)})]})]})]}),v?null:(0,i.jsxs)("div",{className:"flex mt-2",children:[(0,i.jsx)("img",{onClick:function(){N(!0),p(0===h?u.length-1:function(e){return e-1})},className:"mr-3 cursor-pointer transform rotate-180",src:"/assets/orange_navigation_arrow.svg",alt:"navigation arrow"}),(0,i.jsx)("img",{onClick:function(){N(!0),h+1===u.length?p(0):p((function(e){return e+1}))},className:"cursor-pointer",src:"/assets/orange_navigation_arrow.svg",alt:"navigation arrow"})]})]})]})}},7088:function(e,t,n){"use strict";n.d(t,{C:function(){return r}});var r=function(e){return e.toLowerCase().replace(/\//g,"_").replace(/[\[\]]/g,"").replace(/\s/g,"_")}},7696:function(e,t,n){"use strict";n.d(t,{R:function(){return l}});var r=n(7294),a=n(5893);function s(e){var t=e.searchBarPlaceholder,n=e.setSearchValue,s=(0,r.useCallback)((function(e){return n(e.target.value.toLowerCase())}),[n]);return(0,a.jsx)("div",{className:"mt-6 w-full max-w-md",children:(0,a.jsxs)("div",{className:"relative mt-1 rounded-md shadow-sm",children:[(0,a.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:(0,a.jsx)("img",{src:"/assets/search.svg",alt:"search icon",className:"w-5 h-5 text-gray-400","aria-hidden":"true"})}),(0,a.jsx)("input",{type:"text",name:"search",id:"search",onChange:s,className:"block p-4 pl-10 w-full text-center text-black text-lg font-semibold border-gray-300 rounded-md outline-none sm:text-sm md:text-left",placeholder:t})]})})}var l=function(e){var t=e.data,n=e.filterBy,l=e.searchBarPlaceholder,i=(0,r.useState)(""),o=i[0],c=i[1],d=(0,a.jsx)(s,{searchBarPlaceholder:l,setSearchValue:c});return{filteredData:null===t||void 0===t?void 0:t.filter((function(e){return null===e||void 0===e?void 0:e[n].toLowerCase().includes(o)})),searchBar:d}}},5983:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(1163),a=n(7384),s=n(7696),l=n(4586),i=n(8276),o=n(5893);function c(e){var t=e.events;return(0,o.jsx)("div",{className:"mx-0 my-12 max-w-7xl space-y-24 sm:mx-4 sm:my-24 md:mx-12",children:null===t||void 0===t?void 0:t.map((function(e){return(0,o.jsx)(i.j,{singleEvent:e},(0,l.Z)())}))})}var d=n(7088);var u=function(){var e=(0,r.useRouter)().query.id,t=(0,a.D)("events").data.find((function(t){return(0,d.C)(t.name)===e})),n=(0,s.R)({data:null===t||void 0===t?void 0:t.events,filterBy:"name",searchBarPlaceholder:"Wyszukaj ".concat(null===t||void 0===t?void 0:t.name)}),l=n.filteredData,i=n.searchBar;return(0,o.jsxs)("div",{className:"flex flex-col items-center",children:[(0,o.jsxs)("div",{className:"flex flex-col items-center mx-auto my-4 p-3 md:my-12 md:p-12",children:[(0,o.jsx)("h2",{className:"my-10 text-center text-black text-5xl font-bold md:text-left md:text-6xl",children:null===t||void 0===t?void 0:t.name}),(0,o.jsx)("p",{className:"max-w-lg text-center text-black_alpha_70 font-light",children:null===t||void 0===t?void 0:t.description}),i]}),(0,o.jsx)(c,{events:l})]})}},5788:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events/[id]",function(){return n(5983)}])},4586:function(e,t,n){"use strict";var r;n.d(t,{Z:function(){return u}});var a=new Uint8Array(16);function s(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(a)}var l=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=function(e){return"string"===typeof e&&l.test(e)},o=[],c=0;c<256;++c)o.push((c+256).toString(16).substr(1));var d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(o[e[t+0]]+o[e[t+1]]+o[e[t+2]]+o[e[t+3]]+"-"+o[e[t+4]]+o[e[t+5]]+"-"+o[e[t+6]]+o[e[t+7]]+"-"+o[e[t+8]]+o[e[t+9]]+"-"+o[e[t+10]]+o[e[t+11]]+o[e[t+12]]+o[e[t+13]]+o[e[t+14]]+o[e[t+15]]).toLowerCase();if(!i(n))throw TypeError("Stringified UUID is invalid");return n};var u=function(e,t,n){var r=(e=e||{}).random||(e.rng||s)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=r[a];return t}return d(r)}}},function(e){e.O(0,[774,888,179],(function(){return t=5788,e(e.s=t);var t}));var t=e.O();_N_E=t}]);