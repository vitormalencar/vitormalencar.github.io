(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1Mdp":function(t,e,i){i("eM6i"),i("hHhE"),i("2Spj"),i("V+eJ"),i("a1Th"),i("h7Nl"),i("Btvt"),i("91GP"),i("HAE/"),Object.defineProperty(e,"__esModule",{value:!0});var n=i("q1tI");function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}var s=n.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},n.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),a=n.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},n.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function r(t){if(7===t.length)return t;for(var e="#",i=1;i<4;i+=1)e+=t[i]+t[i];return e}function h(t,e,i,n,o){return function(t,e,i,n,o){var s=(t-i)/(e-i);if(0===s)return n;if(1===s)return o;for(var a="#",r=1;r<6;r+=2){var h=parseInt(n.substr(r,2),16),l=parseInt(o.substr(r,2),16),c=Math.round((1-s)*h+s*l).toString(16);1===c.length&&(c="0"+c),a+=c}return a}(t,e,i,r(n),r(o))}var l=function(t){function e(e){t.call(this,e);var i=e.height,n=e.width,o=e.checked;this.t=e.handleDiameter||i-2,this.i=Math.max(n-i,n-(i+this.t)/2),this.o=Math.max(0,(i-this.t)/2),this.state={s:o?this.i:this.o},this.n=0,this.e=0,this.h=this.h.bind(this),this.r=this.r.bind(this),this.a=this.a.bind(this),this.c=this.c.bind(this),this.l=this.l.bind(this),this.u=this.u.bind(this),this.f=this.f.bind(this),this.p=this.p.bind(this),this.b=this.b.bind(this),this.g=this.g.bind(this),this.v=this.v.bind(this),this.w=this.w.bind(this)}return t&&(e.__proto__=t),((e.prototype=Object.create(t&&t.prototype)).constructor=e).prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({s:this.props.checked?this.i:this.o})},e.prototype.k=function(t){this.y.focus(),this.setState({C:t,M:!0,m:Date.now()})},e.prototype.x=function(t){var e=this.state,i=e.C,n=e.s,o=(this.props.checked?this.i:this.o)+t-i;e.R||t===i||this.setState({R:!0});var s=Math.min(this.i,Math.max(this.o,o));s!==n&&this.setState({s:s})},e.prototype.S=function(t){var e=this.state,i=e.s,n=e.R,o=e.m,s=this.props.checked,a=(this.i+this.o)/2,r=Date.now()-o;!n||r<250?this.T(t):s?a<i?this.setState({s:this.i}):this.T(t):i<a?this.setState({s:this.o}):this.T(t),this.setState({R:!1,M:!1}),this.n=Date.now()},e.prototype.h=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.k(t.clientX),window.addEventListener("mousemove",this.r),window.addEventListener("mouseup",this.a))},e.prototype.r=function(t){t.preventDefault(),this.x(t.clientX)},e.prototype.a=function(t){this.S(t),window.removeEventListener("mousemove",this.r),window.removeEventListener("mouseup",this.a)},e.prototype.c=function(t){this.$=null,this.k(t.touches[0].clientX)},e.prototype.l=function(t){this.x(t.touches[0].clientX)},e.prototype.u=function(t){t.preventDefault(),this.S(t)},e.prototype.p=function(t){50<Date.now()-this.n&&(this.T(t),50<Date.now()-this.e&&this.setState({M:!1}))},e.prototype.b=function(){this.e=Date.now()},e.prototype.g=function(){this.setState({M:!0})},e.prototype.v=function(){this.setState({M:!1})},e.prototype.w=function(t){this.y=t},e.prototype.f=function(t){t.preventDefault(),this.y.focus(),this.T(t),this.setState({M:!1})},e.prototype.T=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.disabled,i=t.className,s=t.offColor,a=t.onColor,r=t.offHandleColor,l=t.onHandleColor,c=t.checkedIcon,u=t.uncheckedIcon,d=t.boxShadow,p=t.activeBoxShadow,f=t.height,m=t.width,b=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&-1===e.indexOf(n)&&(i[n]=t[n]);return i}(t,["disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","boxShadow","activeBoxShadow","height","width","handleDiameter"]),v=this.state,g=v.s,w=v.R,y=v.M,k={position:"relative",display:"inline-block",textAlign:"left",opacity:e?.5:1,direction:"ltr",borderRadius:f/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},E={height:f,width:m,margin:Math.max(0,(this.t-f)/2),position:"relative",background:h(g,this.i,this.o,s,a),borderRadius:f/2,cursor:e?"default":"pointer",WebkitTransition:w?null:"background 0.25s",MozTransition:w?null:"background 0.25s",transition:w?null:"background 0.25s"},x={height:f,width:Math.min(1.5*f,m-(this.t+f)/2+1),position:"relative",opacity:(g-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},M={height:f,width:Math.min(1.5*f,m-(this.t+f)/2+1),position:"absolute",opacity:1-(g-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},S={height:this.t,width:this.t,background:h(g,this.i,this.o,r,l),display:"inline-block",cursor:e?"default":"pointer",borderRadius:"50%",position:"absolute",transform:"translateX("+g+"px)",top:Math.max(0,(f-this.t)/2),outline:0,boxShadow:y?p:d,border:0,WebkitTransition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"};return n.createElement("div",{className:i,style:k},n.createElement("div",{className:"react-switch-bg",style:E,onClick:e?null:this.f,onMouseDown:function(t){return t.preventDefault()}},c&&n.createElement("div",{style:x},c),u&&n.createElement("div",{style:M},u)),n.createElement("div",{className:"react-switch-handle",style:S,onClick:function(t){return t.preventDefault()},onMouseDown:e?null:this.h,onTouchStart:e?null:this.c,onTouchMove:e?null:this.l,onTouchEnd:e?null:this.u,onTouchCancel:e?null:this.v}),n.createElement("input",o({},{type:"checkbox",role:"switch",disabled:e,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},b,{ref:this.w,onFocus:this.g,onBlur:this.v,onKeyUp:this.b,onChange:this.p})))},e}(n.Component);l.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:s,checkedIcon:a,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=l},RXBc:function(t,e,i){"use strict";i.r(e);i("0mN4"),i("tUrg"),i("f3/d");var n=i("9eSz"),o=i.n(n),s=i("q1tI"),a=i.n(s),r=i("/MKj"),h=i("PfQb"),l=i("vrFN"),c=i("ohBo"),u=i.n(c),d=i("vOnD").c.div.withConfig({displayName:"ThemeSwitch__SwitchContainer",componentId:"sc-5snbcd-0"})(["display:flex;position:absolute;top:20px;right:20px;"]),p=Object(r.b)((function(t){return{isDarkMode:t.theme.isDarkMode}}),{toggleTheme:function(){return{type:"TOGGLE_THEME"}}})((function(t){var e=t.isDarkMode,i=t.toggleTheme,n=e,o=e?"rgba(255, 255, 255, 0.6)":"rgba(55, 53, 47, 0.6)";return a.a.createElement(d,null,a.a.createElement("label",{htmlFor:"theme-switcher",style:{marginRight:"12px",display:"flex",alignItems:"center"}},a.a.createElement("svg",{viewBox:"0 0 50 50",width:"25"},a.a.createElement("path",{fill:o,d:"m24.90625 3.96875c-.042969.007813-.085937.019531-.125.03125-.464844.105469-.792969.523438-.78125 1v6c-.003906.359375.183594.695313.496094.878906.3125.179688.695312.179688 1.007812 0 .3125-.183593.5-.519531.496094-.878906v-6c.011719-.289062-.105469-.566406-.3125-.761719-.210937-.199218-.496094-.296875-.78125-.269531zm-14.25 5.875c-.375.066406-.675781.339844-.78125.703125-.105469.367188.003906.757813.28125 1.015625l4.25 4.25c.242188.296875.628906.433594 1.003906.347656.371094-.085937.664063-.378906.75-.75.085938-.375-.050781-.761718-.347656-1.003906l-4.25-4.25c-.207031-.222656-.507812-.335937-.8125-.3125-.03125 0-.0625 0-.09375 0zm28.375 0c-.226562.03125-.4375.144531-.59375.3125l-4.25 4.25c-.296875.242188-.433594.628906-.347656 1.003906.085937.371094.378906.664063.75.75.375.085938.761719-.050781 1.003906-.347656l4.25-4.25c.3125-.296875.402344-.761719.21875-1.152344-.1875-.394531-.601562-.621093-1.03125-.566406zm-14.125 5.15625c-.03125.007813-.0625.019531-.09375.03125-.0625.003906-.125.015625-.1875.03125-.011719.011719-.019531.019531-.03125.03125-5.304687.226563-9.59375 4.546875-9.59375 9.90625 0 5.503906 4.496094 10 10 10s10-4.496094 10-10c0-5.339844-4.253906-9.644531-9.53125-9.90625-.035156 0-.058594-.03125-.09375-.03125-.101562-.039062-.207031-.058594-.3125-.0625-.019531 0-.042969 0-.0625 0-.03125 0-.0625 0-.09375 0zm.03125 2h.0625.09375c4.375.050781 7.90625 3.613281 7.90625 8 0 4.421875-3.578125 8-8 8-4.417969 0-8-3.578125-8-8 0-4.398437 3.546875-7.964844 7.9375-8zm-20.21875 7c-.550781.078125-.9375.589844-.859375 1.140625s.589844.9375 1.140625.859375h6c.359375.003906.695313-.183594.878906-.496094.179688-.3125.179688-.695312 0-1.007812-.183593-.3125-.519531-.5-.878906-.496094h-6c-.03125 0-.0625 0-.09375 0s-.0625 0-.09375 0-.0625 0-.09375 0zm34 0c-.550781.078125-.9375.589844-.859375 1.140625s.589844.9375 1.140625.859375h6c.359375.003906.695313-.183594.878906-.496094.179688-.3125.179688-.695312 0-1.007812-.183593-.3125-.519531-.5-.878906-.496094h-6c-.03125 0-.0625 0-.09375 0s-.0625 0-.09375 0-.0625 0-.09375 0zm-23.71875 9.875c-.226562.03125-.4375.144531-.59375.3125l-4.25 4.25c-.296875.242188-.433594.628906-.347656 1.003906.085937.371094.378906.664063.75.75.375.085938.761719-.050781 1.003906-.347656l4.25-4.25c.296875-.285156.386719-.726562.226563-1.105469-.15625-.378906-.535157-.621093-.945313-.613281-.03125 0-.0625 0-.09375 0zm19.6875 0c-.375.066406-.675781.339844-.78125.703125-.105469.367188.003906.757813.28125 1.015625l4.25 4.25c.242188.296875.628906.433594 1.003906.347656.371094-.085937.664063-.378906.75-.75.085938-.375-.050781-.761718-.347656-1.003906l-4.25-4.25c-.1875-.199219-.445312-.308594-.71875-.3125-.03125 0-.0625 0-.09375 0s-.0625 0-.09375 0zm-9.78125 4.09375c-.042969.007813-.085937.019531-.125.03125-.464844.105469-.792969.523438-.78125 1v6c-.003906.359375.183594.695313.496094.878906.3125.179688.695312.179688 1.007812 0 .3125-.183593.5-.519531.496094-.878906v-6c.011719-.289062-.105469-.566406-.3125-.761719-.210937-.199218-.496094-.296875-.78125-.269531z"}))),a.a.createElement(u.a,{id:"theme-switcher",onChange:function(){return i()},checked:n,onColor:"#5e6ad2",offColor:"#D4D4CE",onHandleColor:"#FFFFFF",offHandleColor:"#FFFFFF",uncheckedIcon:!1,checkedIcon:!1,height:45,width:80,handleDiameter:34,role:"checkbox","aria-checked":n,"aria-label":"toggle theme"}),a.a.createElement("label",{htmlFor:"theme-switcher",style:{marginLeft:"12px",display:"flex",alignItems:"center"}},a.a.createElement("svg",{viewBox:"0 0 50 50",width:"22.5"},a.a.createElement("path",{fill:o,d:"m31 4c-11.585937 0-21 9.414063-21 21 0 11.585938 9.414063 21 21 21 2.988281 0 5.828125-.632812 8.402344-1.757812.363281-.160157.597656-.519532.597656-.917969 0-.398438-.234375-.757813-.597656-.917969-6.707031-2.929687-11.402344-9.609375-11.402344-17.40625s4.695313-14.476562 11.402344-17.40625c.363281-.160156.597656-.519531.597656-.917969 0-.398437-.234375-.757812-.597656-.917968-2.574219-1.125-5.414063-1.757813-8.402344-1.757813zm0 2c1.984375 0 3.855469.398438 5.65625.96875-6.300781 3.625-10.65625 10.25-10.65625 18.03125s4.355469 14.40625 10.65625 18.03125c-1.800781.570313-3.671875.96875-5.65625.96875-10.503906 0-19-8.496094-19-19s8.496094-19 19-19z"}))))}));i.d(e,"pageQuery",(function(){return f}));var f="4213808755";e.default=Object(r.b)(null)((function(t){var e=t.location,i=t.data,n=i.avatar,s=i.site.siteMetadata||[],r=s.talks,c=s.projects,u=s.experiences,d=s.social,f=function(t){var e=t.title,i=t.itens;return a.a.createElement("div",null,a.a.createElement("h2",null,e),a.a.createElement("hr",null),i.map((function(t){return a.a.createElement("a",{key:t.name,href:t.link,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("h3",null,t.name),a.a.createElement("p",null,t.description))})))};return a.a.createElement(h.a,{location:e,title:"Vitor Alencar"},a.a.createElement(l.a,{title:"Home",url:"https://www.vitormalencar.com/"}),a.a.createElement(p,null),a.a.createElement(o.a,{alt:"vitor",fixed:n.childImageSharp.fixed,style:{marginBottom:0,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),a.a.createElement("h1",null,"Hey, I'm Vitor Alencar a Front-end Engineer working at Taxfix based in Berlin."),a.a.createElement("div",{style:{marginTop:"-20px"}},d.map((function(t){return a.a.createElement("a",{key:t.name,style:{fontWeight:300,fontSize:"14px",marginRight:"20px",fontFamily:"Merriweather",textTransform:"uppercase"},href:t.link},t.name)}))),a.a.createElement(f,{title:"Talks",itens:r}),a.a.createElement(f,{title:"Projects",itens:c}),a.a.createElement(f,{title:"Experiences",itens:u}))}))},ohBo:function(t,e,i){t.exports=i("1Mdp")}}]);
//# sourceMappingURL=component---src-pages-index-js-4c64b219271e420a224d.js.map