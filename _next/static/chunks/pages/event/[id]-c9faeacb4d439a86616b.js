(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[781],{7088:function(e,t,n){"use strict";n.d(t,{C:function(){return a}});var a=function(e){return e.toLowerCase().replace(/\//g,"_").replace(/[\[\]]/g,"").replace(/\s/g,"_")}},3836:function(e,t,n){"use strict";n.d(t,{R:function(){return l}});var a=n(5893);function l(e){var t=e.logoUrl,n=e.name,l=e.description,s=e.address,r=e.url,o=e.isInEventPage;return(0,a.jsxs)("div",{className:"flex flex-col items-start items-stretch mx-auto px-4 max-w-7xl sm:px-6 md:flex-row lg:px-8",children:[(0,a.jsx)("img",{className:"p-8 shadow-dropDownMenu",src:t,alt:"".concat(n,"-logo")}),(0,a.jsxs)("div",{className:"mx-12 pt-6",children:[o&&(0,a.jsx)("span",{className:"text-black_alpha_50 font-semibold",children:"ORGANIZATOR"}),(0,a.jsx)("h3",{className:"text-black text-3xl font-bold",children:n}),(0,a.jsx)("p",{className:"my-8 text-black_alpha_70 font-light",children:l}),(0,a.jsxs)("div",{className:"flex items-center mr-4",children:[(0,a.jsx)("img",{className:"mr-3 rounded-full shadow-eventIcons",src:"/assets/pin.svg",alt:"pin"}),(0,a.jsx)("span",{className:"text-black text-lg font-semibold",children:s})]})]}),(0,a.jsx)("div",{className:"flex items-center justify-center",children:(0,a.jsx)("a",{href:r,onClick:function(){return window.dataLayer.push({event:"organizationSeeMore",category:n})},className:"block my-4 px-8 py-4 whitespace-nowrap bg-orange_alpha_15 rounded-full md:my-0",children:(0,a.jsx)("span",{className:"text-orange text-lg font-bold",children:"Zobacz wi\u0119cej"})})})]})}},5569:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function l(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(t),n.d(t,{default:function(){return c}});var s=n(1163),r=n(7384),o=(n(3836),n(7088)),i=n(5893);var c=function(){var e,t=(0,s.useRouter)(),n=t.query.id,a=(0,r.D)("events").data,c=(0,r.D)("organizations").data,d=null===a||void 0===a?void 0:a.reduce((function(e,t){return[].concat(l(e),l(t.events))}),[]).find((function(e){return(0,o.C)(e.name)===n})),m=(null===c||void 0===c||c.reduce((function(e,t){return[].concat(l(e),l(t.companies))}),[]).find((function(e){return e.id===(null===d||void 0===d?void 0:d.organizerId)})),null===a||void 0===a?void 0:a.find((function(e){return e.name===(null===d||void 0===d?void 0:d.category)}))),u=null===m||void 0===m?void 0:m.events.filter((function(e){return(0,o.C)(e.name)!==n}));return(0,i.jsxs)("div",{className:"flex flex-col items-center px-12",children:[(0,i.jsxs)("div",{className:"flex flex-col items-center mb-12 mt-12 mx-auto md:mb-0 md:p-12",children:[(0,i.jsx)("h2",{className:"my-10 text-black text-5xl font-bold md:text-6xl",children:null===d||void 0===d?void 0:d.name}),(0,i.jsx)("p",{className:"max-w-lg text-center text-black_alpha_70 font-light",children:null===d||void 0===d?void 0:d.description})]}),(0,i.jsxs)("div",{className:"flex flex-col items-start md:flex-row md:items-center",children:[(0,i.jsx)("div",{className:"px-4 py-3 bg-orange_alpha_15 rounded-full xl:mt-0",children:(0,i.jsx)("span",{className:"text-orange font-bold",children:null===d||void 0===d?void 0:d.category})}),(0,i.jsxs)("div",{className:"flex items-center my-5 md:mx-4 md:my-0",children:[(0,i.jsx)("img",{className:"mr-3 rounded-full shadow-eventIcons",src:"/assets/pin.svg",alt:"pin"}),(0,i.jsx)("span",{className:"text-lg font-semibold",children:null===d||void 0===d?void 0:d.place})]}),(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("img",{className:"mr-3 rounded-full shadow-eventIcons",src:"/assets/calendar.svg",alt:"calendar"}),(0,i.jsx)("span",{className:"text-lg font-semibold",children:null===d||void 0===d?void 0:d.time})]})]}),(0,i.jsx)("a",{href:null===d||void 0===d?void 0:d.eventUrl,className:"block mt-8 px-8 py-4 whitespace-nowrap bg-orange_alpha_15 rounded-full",children:(0,i.jsx)("span",{className:"text-orange text-lg font-bold",children:"Przejd\u017a do strony wydarzenia"})}),(0,i.jsx)("div",{className:"custom-scrollbar flex my-16 pb-4 h-32 overflow-x-auto overflow-y-hidden sm:h-80",children:null!==d&&void 0!==d&&d.additionalPhotos?null===d||void 0===d||null===(e=d.additionalPhotos)||void 0===e?void 0:e.map((function(e,t){return(0,i.jsx)("img",{className:"mr-1 object-contain sm:mr-4",src:e,alt:"zdj\u0119cie eventu"},"".concat(d.id,"_").concat(t))})):(0,i.jsx)("img",{className:"mr-1 sm:mr-4",src:null===d||void 0===d?void 0:d.mainPhoto,alt:"zdj\u0119cie eventu"})}),(0,i.jsxs)("h2",{className:"self-start mt-24 text-black text-5xl font-bold tracking-tight md:text-6xl",children:["Inne eventy"," ",(0,i.jsx)("span",{className:"text-transparent bg-gradient-to-r bg-clip-text from-orangeLight to-orange",children:null===d||void 0===d?void 0:d.category})]}),(0,i.jsx)("div",{className:"custom-scrollbar flex my-16 overflow-x-auto overflow-y-hidden",children:null===u||void 0===u?void 0:u.map((function(e){return(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("img",{style:{height:280,width:350},className:"mx-4 object-cover",src:e.mainPhoto,alt:"zdj\u0119cie eventu"}),(0,i.jsxs)("div",{onClick:function(){window.dataLayer.push({event:"eventPageClick",category:eventName}),t.push("/event/".concat(encodeURI((0,o.C)(e.name))))},className:"flex items-center mt-3",children:[(0,i.jsx)("span",{className:"mx-4 hover:text-orange text-3xl font-bold cursor-pointer",children:e.name}),(0,i.jsx)("img",{className:"h-4",src:"/assets/rightArrow.svg",alt:"right arrow"})]})]},e.id)}))})]})}},6839:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/event/[id]",function(){return n(5569)}])}},function(e){e.O(0,[774,888,179],(function(){return t=6839,e(e.s=t);var t}));var t=e.O();_N_E=t}]);