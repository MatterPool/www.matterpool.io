(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+QRC":function(e,t,n){"use strict";var a=n("E9nw"),o="Copy to clipboard: #{key}, Enter";e.exports=function(e,t){var n,r,i,c,s,l,u=!1;t||(t={}),n=t.debug||!1;try{if(i=a(),c=document.createRange(),s=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",function(n){n.stopPropagation(),t.format&&(n.preventDefault(),n.clipboardData.clearData(),n.clipboardData.setData(t.format,e))}),document.body.appendChild(l),c.selectNodeContents(l),s.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),u=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),r=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:o),window.prompt(r,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(c):s.removeAllRanges()),l&&document.body.removeChild(l),i()}return u}},"2mql":function(e,t,n){"use strict";var a=n("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return a.isMemo(e)?i:c[e.$$typeof]||o}c[a.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,a){if("string"!==typeof n){if(m){var o=f(n);o&&o!==m&&e(t,o,a)}var i=u(n);d&&(i=i.concat(d(n)));for(var c=s(t),g=s(n),h=0;h<i.length;++h){var b=i[h];if(!r[b]&&(!a||!a[b])&&(!g||!g[b])&&(!c||!c[b])){var y=p(n,b);try{l(t,b,y)}catch(v){}}}return t}return t}},E9nw:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],a=0;a<e.rangeCount;a++)n.push(e.getRangeAt(a));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},RNiq:function(e,t,n){"use strict";n.r(t);var a=n("0iUn"),o=n("sLSF"),r=n("MI3g"),i=n("a7VT"),c=n("Tit0"),s=n("q1tI"),l=n.n(s),u=n("AT/M"),d=n("hfKm"),p=n.n(d);function f(e,t,n){return t in e?p()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=n("+QRC"),g=n.n(m),h=n("wx14"),b=n("Ff2n");n("17x9");function y(e){var t,n,a="";if(e)if("object"===typeof e)if(e.push)for(t=0;t<e.length;t++)e[t]&&(n=y(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(n=y(t))&&(a&&(a+=" "),a+=n);else"boolean"===typeof e||e.call||(a&&(a+=" "),a+=e);return a}var v=function(){for(var e,t=0,n="";t<arguments.length;)(e=y(arguments[t++]))&&(n&&(n+=" "),n+=e);return n},x=n("2mql"),w=n.n(x),E=n("q4lC");var C=function(e){var t=e.theme,n=e.name,a=e.props;if(!t||!t.props||!t.props[n])return a;var o,r=t.props[n];for(o in r)void 0===a[o]&&(a[o]=r[o]);return a},S=n("zGT9"),O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){var a=t.defaultTheme,o=t.withTheme,r=void 0!==o&&o,i=t.name,c=Object(b.a)(t,["defaultTheme","withTheme","name"]),s=i,u=Object(E.a)(e,Object(h.a)({defaultTheme:a,Component:n,name:i||n.displayName,classNamePrefix:s},c)),d=l.a.forwardRef(function(e,t){e.classes;var o,c=e.innerRef,s=Object(b.a)(e,["classes","innerRef"]),d=u(e),p=s;return("string"===typeof i||r)&&(o=Object(S.a)()||a,i&&(p=C({theme:o,name:i,props:s})),r&&!p.theme&&(p.theme=o)),l.a.createElement(n,Object(h.a)({ref:c||t,classes:d},p))});return d.defaultProps=n.defaultProps,w()(d,n),d}},j=n("cNwE");var k=function(e,t){return O(e,Object(h.a)({defaultTheme:j.a},t))};function N(e){return e.charAt(0).toUpperCase()+e.slice(1)}var L={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},T=l.a.forwardRef(function(e,t){var n=e.align,a=void 0===n?"inherit":n,o=e.classes,r=e.className,i=e.color,c=void 0===i?"initial":i,s=e.component,u=e.display,d=void 0===u?"initial":u,p=e.gutterBottom,f=void 0!==p&&p,m=e.noWrap,g=void 0!==m&&m,y=e.paragraph,x=void 0!==y&&y,w=e.variant,E=void 0===w?"body1":w,C=e.variantMapping,S=void 0===C?L:C,O=Object(b.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),j=s||(x?"p":S[E]||L[E])||"span";return l.a.createElement(j,Object(h.a)({className:v(o.root,r,"inherit"!==E&&o[E],"initial"!==c&&o["color".concat(N(c))],g&&o.noWrap,f&&o.gutterBottom,x&&o.paragraph,"inherit"!==a&&o["align".concat(N(a))],"initial"!==d&&o["display".concat(N(d))]),ref:t},O))}),R=k(function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}},{name:"MuiTypography"})(T),M=[0,1,2,3,4,5,6,7,8,9,10],P=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function D(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var z=l.a.forwardRef(function(e,t){var n=e.alignContent,a=void 0===n?"stretch":n,o=e.alignItems,r=void 0===o?"stretch":o,i=e.classes,c=e.className,s=e.component,u=void 0===s?"div":s,d=e.container,p=void 0!==d&&d,f=e.direction,m=void 0===f?"row":f,g=e.item,y=void 0!==g&&g,x=e.justify,w=void 0===x?"flex-start":x,E=e.lg,C=void 0!==E&&E,S=e.md,O=void 0!==S&&S,j=e.sm,k=void 0!==j&&j,N=e.spacing,L=void 0===N?0:N,T=e.wrap,R=void 0===T?"wrap":T,M=e.xl,P=void 0!==M&&M,D=e.xs,z=void 0!==D&&D,A=e.zeroMinWidth,H=void 0!==A&&A,B=Object(b.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),I=v(i.root,c,p&&[i.container,0!==L&&i["spacing-xs-".concat(String(L))]],y&&i.item,H&&i.zeroMinWidth,"row"!==m&&i["direction-xs-".concat(String(m))],"wrap"!==R&&i["wrap-xs-".concat(String(R))],"stretch"!==r&&i["align-items-xs-".concat(String(r))],"stretch"!==a&&i["align-content-xs-".concat(String(a))],"flex-start"!==w&&i["justify-xs-".concat(String(w))],!1!==z&&i["grid-xs-".concat(String(z))],!1!==k&&i["grid-sm-".concat(String(k))],!1!==O&&i["grid-md-".concat(String(O))],!1!==C&&i["grid-lg-".concat(String(C))],!1!==P&&i["grid-xl-".concat(String(P))]);return l.a.createElement(u,Object(h.a)({className:I,ref:t},B))}),A=k(function(e){return Object(h.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return M.forEach(function(a){var o=e.spacing(a);0!==o&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(D(o,2)),width:"calc(100% + ".concat(D(o),")"),"& > $item":{padding:D(o,2)}})}),n}(e,"xs"),{},e.breakpoints.keys.reduce(function(t,n){return function(e,t,n){var a={};P.forEach(function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var o="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:o,flexGrow:0,maxWidth:o}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===n?Object(h.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t},{}))},{name:"MuiGrid"})(z),H=n("rePB"),B=n("wpWl"),I=n("i8i4"),W=n.n(I);var $=function(e){return e&&e.ownerDocument||document};function V(e,t){"function"===typeof e?e(t):e&&(e.current=t)}function F(e,t){return l.a.useMemo(function(){return null==e&&null==t?null:function(n){V(e,n),V(t,n)}},[e,t])}var U="undefined"!==typeof window?l.a.useLayoutEffect:l.a.useEffect;function _(e){var t=l.a.useRef(e);return U(function(){t.current=e}),l.a.useCallback(function(){return t.current.apply(void 0,arguments)},[])}function Z(e){return e.substring(2).toLowerCase()}var q=l.a.forwardRef(function(e,t){var n=e.children,a=e.mouseEvent,o=void 0===a?"onClick":a,r=e.touchEvent,i=void 0===r?"onTouchEnd":r,c=e.onClickAway,s=l.a.useRef(!1),u=l.a.useRef(null),d=l.a.useRef(!1);l.a.useEffect(function(){return d.current=!0,function(){d.current=!1}},[]);var p=F(u,t),f=l.a.useCallback(function(e){V(p,W.a.findDOMNode(e))},[p]),m=F(n.ref,f),g=_(function(e){if(d.current)if(s.current)s.current=!1;else if(u.current){var t=$(u.current);t.documentElement&&t.documentElement.contains(e.target)&&!u.current.contains(e.target)&&c(e)}}),h=l.a.useCallback(function(){s.current=!0},[]);return l.a.useEffect(function(){if(!1!==i){var e=Z(i),t=$(u.current);return t.addEventListener(e,g),t.addEventListener("touchmove",h),function(){t.removeEventListener(e,g),t.removeEventListener("touchmove",h)}}},[g,h,i]),l.a.useEffect(function(){if(!1!==o){var e=Z(o),t=$(u.current);return t.addEventListener(e,g),function(){t.removeEventListener(e,g)}}},[g,o]),l.a.createElement(l.a.Fragment,null,l.a.cloneElement(n,{ref:m}))});function G(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(e,t){return null==t?e:function(){for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];e.apply(this,a),t.apply(this,a)}},function(){})}var X=n("zLVn"),J=n("dI71"),Q=!1,K=l.a.createContext(null),Y="unmounted",ee="exited",te="entering",ne="entered",ae=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var o,r=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?r?(o=ee,a.appearStatus=te):o=ne:o=t.unmountOnExit||t.mountOnEnter?Y:ee,a.state={status:o},a.nextCallback=null,a}Object(J.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===Y?{status:ee}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==te&&n!==ne&&(t=te):n!==te&&n!==ne||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!==typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=W.a.findDOMNode(this);t===te?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===ee&&this.setState({status:Y})},n.performEnter=function(e,t){var n=this,a=this.props.enter,o=this.context?this.context.isMounting:t,r=this.getTimeouts(),i=o?r.appear:r.enter;!t&&!a||Q?this.safeSetState({status:ne},function(){n.props.onEntered(e)}):(this.props.onEnter(e,o),this.safeSetState({status:te},function(){n.props.onEntering(e,o),n.onTransitionEnd(e,i,function(){n.safeSetState({status:ne},function(){n.props.onEntered(e,o)})})}))},n.performExit=function(e){var t=this,n=this.props.exit,a=this.getTimeouts();n&&!Q?(this.props.onExit(e),this.safeSetState({status:"exiting"},function(){t.props.onExiting(e),t.onTransitionEnd(e,a.exit,function(){t.safeSetState({status:ee},function(){t.props.onExited(e)})})})):this.safeSetState({status:ee},function(){t.props.onExited(e)})},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var a=null==t&&!this.props.addEndListener;e&&!a?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===Y)return null;var t=this.props,n=t.children,a=Object(X.a)(t,["children"]);if(delete a.in,delete a.mountOnEnter,delete a.unmountOnExit,delete a.appear,delete a.enter,delete a.exit,delete a.timeout,delete a.addEndListener,delete a.onEnter,delete a.onEntering,delete a.onEntered,delete a.onExit,delete a.onExiting,delete a.onExited,"function"===typeof n)return l.a.createElement(K.Provider,{value:null},n(e,a));var o=l.a.Children.only(n);return l.a.createElement(K.Provider,{value:null},l.a.cloneElement(o,a))},t}(l.a.Component);function oe(){}ae.contextType=K,ae.propTypes={},ae.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:oe,onEntering:oe,onEntered:oe,onExit:oe,onExiting:oe,onExited:oe},ae.UNMOUNTED=0,ae.EXITED=1,ae.ENTERING=2,ae.ENTERED=3,ae.EXITING=4;var re=ae;function ie(e,t){var n=e.timeout,a=e.style,o=void 0===a?{}:a;return{duration:o.transitionDuration||"number"===typeof n?n:n[t.mode]||0,delay:o.transitionDelay}}function ce(e){return"scale(".concat(e,", ").concat(Math.pow(e,2),")")}var se={entering:{opacity:1,transform:ce(1)},entered:{opacity:1,transform:"none"}},le=l.a.forwardRef(function(e,t){var n=e.children,a=e.in,o=e.onEnter,r=e.onExit,i=e.style,c=e.timeout,s=void 0===c?"auto":c,u=Object(b.a)(e,["children","in","onEnter","onExit","style","timeout"]),d=l.a.useRef(),p=l.a.useRef(),f=F(n.ref,t),m=Object(S.a)()||j.a;return l.a.useEffect(function(){return function(){clearTimeout(d.current)}},[]),l.a.createElement(re,Object(h.a)({appear:!0,in:a,onEnter:function(e,t){!function(e){e.scrollTop}(e);var n,a=ie({style:i,timeout:s},{mode:"enter"}),r=a.duration,c=a.delay;"auto"===s?(n=m.transitions.getAutoHeightDuration(e.clientHeight),p.current=n):n=r,e.style.transition=[m.transitions.create("opacity",{duration:n,delay:c}),m.transitions.create("transform",{duration:.666*n,delay:c})].join(","),o&&o(e,t)},onExit:function(e){var t,n=ie({style:i,timeout:s},{mode:"exit"}),a=n.duration,o=n.delay;"auto"===s?(t=m.transitions.getAutoHeightDuration(e.clientHeight),p.current=t):t=a,e.style.transition=[m.transitions.create("opacity",{duration:t,delay:o}),m.transitions.create("transform",{duration:.666*t,delay:o||.333*t})].join(","),e.style.opacity="0",e.style.transform=ce(.75),r&&r(e)},addEndListener:function(e,t){"auto"===s&&(d.current=setTimeout(t,p.current||0))},timeout:"auto"===s?null:s},u),function(e,t){return l.a.cloneElement(n,Object(h.a)({style:Object(h.a)({opacity:0,transform:ce(.75),visibility:"exited"!==e||a?void 0:"hidden"},se[e],{},i,{},n.props.style),ref:f},t))})});le.muiSupportAuto=!0;var ue=le,de=l.a.forwardRef(function(e,t){var n=e.classes,a=e.className,o=e.component,r=void 0===o?"div":o,i=e.square,c=void 0!==i&&i,s=e.elevation,u=void 0===s?1:s,d=Object(b.a)(e,["classes","className","component","square","elevation"]);return l.a.createElement(r,Object(h.a)({className:v(n.root,n["elevation".concat(u)],a,!c&&n.rounded),ref:t},d))}),pe=k(function(e){var t={};return e.shadows.forEach(function(e,n){t["elevation".concat(n)]={boxShadow:e}}),Object(h.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius}},t)},{name:"MuiPaper"})(de),fe=n("ye/S"),me=l.a.forwardRef(function(e,t){var n=e.action,a=e.classes,o=e.className,r=e.message,i=e.role,c=void 0===i?"alert":i,s=Object(b.a)(e,["action","classes","className","message","role"]);return l.a.createElement(pe,Object(h.a)({component:R,variant:"body2",variantMapping:{body1:"div",body2:"div"},role:c,square:!0,elevation:6,className:v(a.root,o),ref:t},s),l.a.createElement("div",{className:a.message},r),n?l.a.createElement("div",{className:a.action},n):null)}),ge=k(function(e){var t="light"===e.palette.type?.8:.98,n=Object(fe.b)(e.palette.background.default,t);return{root:Object(H.a)({color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288}),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}},{name:"MuiSnackbarContent"})(me),he=l.a.forwardRef(function(e,t){var n=e.action,a=e.anchorOrigin,o=(a=void 0===a?{vertical:"bottom",horizontal:"center"}:a).vertical,r=a.horizontal,i=e.autoHideDuration,c=e.children,s=e.classes,u=e.className,d=e.ClickAwayListenerProps,p=e.ContentProps,f=e.disableWindowBlurListener,m=void 0!==f&&f,g=e.message,y=e.onClose,x=e.onEnter,w=e.onEntered,E=e.onEntering,C=e.onExit,S=e.onExited,O=e.onExiting,j=e.onMouseEnter,k=e.onMouseLeave,L=e.open,T=e.resumeHideDuration,R=e.TransitionComponent,M=void 0===R?ue:R,P=e.transitionDuration,D=void 0===P?{enter:B.b.enteringScreen,exit:B.b.leavingScreen}:P,z=e.TransitionProps,A=Object(b.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),H=l.a.useRef(),I=l.a.useState(!0),W=I[0],$=I[1],V=_(function(){y.apply(void 0,arguments)}),F=_(function(e){V&&null!=e&&(clearTimeout(H.current),H.current=setTimeout(function(){V(null,"timeout")},e))});l.a.useEffect(function(){return L&&F(i),function(){clearTimeout(H.current)}},[L,i,F]);var U=function(){clearTimeout(H.current)},Z=l.a.useCallback(function(){null!=i&&F(null!=T?T:.5*i)},[i,T,F]);return l.a.useEffect(function(){if(!m&&L)return window.addEventListener("focus",Z),window.addEventListener("blur",U),function(){window.removeEventListener("focus",Z),window.removeEventListener("blur",U)}},[m,Z,L]),!L&&W?null:l.a.createElement(q,Object(h.a)({onClickAway:function(e){y&&y(e,"clickaway")}},d),l.a.createElement("div",Object(h.a)({className:v(s.root,s["anchorOrigin".concat(N(o)).concat(N(r))],u),onMouseEnter:function(e){j&&j(e),U()},onMouseLeave:function(e){k&&k(e),Z()},ref:t},A),l.a.createElement(M,Object(h.a)({appear:!0,in:L,onEnter:G(function(){$(!1)},x),onEntered:w,onEntering:E,onExit:C,onExited:G(function(){$(!0)},S),onExiting:O,timeout:D,direction:"top"===o?"down":"up"},z),c||l.a.createElement(ge,Object(h.a)({message:g,action:n},p)))))}),be=k(function(e){var t={top:8},n={bottom:8},a={justifyContent:"flex-end"},o={justifyContent:"flex-start"},r={top:24},i={bottom:24},c={right:24},s={left:24},l={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(h.a)({},t,Object(H.a)({},e.breakpoints.up("sm"),Object(h.a)({},r,{},l))),anchorOriginBottomCenter:Object(h.a)({},n,Object(H.a)({},e.breakpoints.up("sm"),Object(h.a)({},i,{},l))),anchorOriginTopRight:Object(h.a)({},t,{},a,Object(H.a)({},e.breakpoints.up("sm"),Object(h.a)({left:"auto"},r,{},c))),anchorOriginBottomRight:Object(h.a)({},n,{},a,Object(H.a)({},e.breakpoints.up("sm"),Object(h.a)({left:"auto"},i,{},c))),anchorOriginTopLeft:Object(h.a)({},t,{},o,Object(H.a)({},e.breakpoints.up("sm"),Object(h.a)({right:"auto"},r,{},s))),anchorOriginBottomLeft:Object(h.a)({},n,{},o,Object(H.a)({},e.breakpoints.up("sm"),Object(h.a)({right:"auto"},i,{},s)))}},{flip:!1,name:"MuiSnackbar"})(he);var ye=l.a.createContext(),ve=l.a.forwardRef(function(e,t){var n=e.classes,a=e.className,o=e.component,r=void 0===o?"table":o,i=e.padding,c=void 0===i?"default":i,s=e.size,u=void 0===s?"medium":s,d=e.stickyHeader,p=void 0!==d&&d,f=Object(b.a)(e,["classes","className","component","padding","size","stickyHeader"]),m=l.a.useMemo(function(){return{padding:c,size:u,stickyHeader:p}},[c,u,p]);return l.a.createElement(ye.Provider,{value:m},l.a.createElement(r,Object(h.a)({ref:t,className:v(n.root,a,p&&n.stickyHeader)},f)))}),xe=k(function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(h.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}},{name:"MuiTable"})(ve);var we=l.a.createContext(),Ee={variant:"body"},Ce=l.a.forwardRef(function(e,t){var n=e.classes,a=e.className,o=e.component,r=void 0===o?"tbody":o,i=Object(b.a)(e,["classes","className","component"]);return l.a.createElement(we.Provider,{value:Ee},l.a.createElement(r,Object(h.a)({className:v(n.root,a),ref:t},i)))}),Se=k({root:{display:"table-row-group"}},{name:"MuiTableBody"})(Ce),Oe=l.a.forwardRef(function(e,t){var n,a=e.align,o=void 0===a?"inherit":a,r=e.classes,i=e.className,c=e.component,s=e.padding,u=e.scope,d=e.size,p=e.sortDirection,f=e.variant,m=Object(b.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),g=l.a.useContext(ye),y=l.a.useContext(we);n=c||(y&&"head"===y.variant?"th":"td");var x=u;!x&&y&&"head"===y.variant&&(x="col");var w=s||(g&&g.padding?g.padding:"default"),E=d||(g&&g.size?g.size:"medium"),C=f||y&&y.variant,S=null;return p&&(S="asc"===p?"ascending":"descending"),l.a.createElement(n,Object(h.a)({ref:t,className:v(r.root,r[C],i,"inherit"!==o&&r["align".concat(N(o))],"default"!==w&&r["padding".concat(N(w))],"medium"!==E&&r["size".concat(N(E))],{head:g&&g.stickyHeader&&r.stickyHeader}[C]),"aria-sort":S,scope:x},m))}),je=k(function(e){return{root:Object(h.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(fe.e)(Object(fe.c)(e.palette.divider,1),.88):Object(fe.a)(Object(fe.c)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}},{name:"MuiTableCell"})(Oe),ke=l.a.forwardRef(function(e,t){var n=e.classes,a=e.className,o=e.component,r=void 0===o?"div":o,i=Object(b.a)(e,["classes","className","component"]);return l.a.createElement(r,Object(h.a)({ref:t,className:v(n.root,a)},i))}),Ne=k({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(ke),Le={variant:"head"},Te=l.a.forwardRef(function(e,t){var n=e.classes,a=e.className,o=e.component,r=void 0===o?"thead":o,i=Object(b.a)(e,["classes","className","component"]);return l.a.createElement(we.Provider,{value:Le},l.a.createElement(r,Object(h.a)({className:v(n.root,a),ref:t},i)))}),Re=k({root:{display:"table-header-group"}},{name:"MuiTableHead"})(Te),Me=l.a.forwardRef(function(e,t){var n=e.classes,a=e.className,o=e.component,r=void 0===o?"tr":o,i=e.hover,c=void 0!==i&&i,s=e.selected,u=void 0!==s&&s,d=Object(b.a)(e,["classes","className","component","hover","selected"]),p=l.a.useContext(we);return l.a.createElement(r,Object(h.a)({ref:t,className:v(n.root,a,p&&{head:n.head,footer:n.footer}[p.variant],c&&n.hover,u&&n.selected)},d))}),Pe=k(function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$selected":{backgroundColor:"light"===e.palette.type?"rgba(0, 0, 0, 0.04)":"rgba(255, 255, 255, 0.08)"},"&$hover:hover":{backgroundColor:"light"===e.palette.type?"rgba(0, 0, 0, 0.07)":"rgba(255, 255, 255, 0.14)"}},selected:{},hover:{},head:{},footer:{}}},{name:"MuiTableRow"})(Me),De=n("UXZV"),ze=n.n(De);function Ae(){return(Ae=ze.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var He=l.a.forwardRef(function(e,t){var n=e.children,a=e.classes,o=e.className,r=e.color,i=void 0===r?"inherit":r,c=e.component,s=void 0===c?"svg":c,u=e.fontSize,d=void 0===u?"default":u,p=e.htmlColor,f=e.titleAccess,m=e.viewBox,g=void 0===m?"0 0 24 24":m,y=Object(b.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return l.a.createElement(s,Object(h.a)({className:v(a.root,o,"inherit"!==i&&a["color".concat(N(i))],"default"!==d&&a["fontSize".concat(N(d))]),focusable:"false",viewBox:g,color:p,"aria-hidden":f?"false":"true",role:f?"img":"presentation",ref:t},y),n,f?l.a.createElement("title",null,f):null)});He.muiName="SvgIcon";var Be=k(function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}},{name:"MuiSvgIcon"})(He),Ie=l.a.createElement,We=function(e){return Ie(Be,Ae({},e,{viewBox:"0 0 37 37"}),Ie("path",{d:"M10.6436 1.75089V3.39693H32.6181C33.1119 3.39693 33.4411 3.72613 33.4411 4.21994V26.1945C33.4411 26.6883 33.1119 27.0175 32.6181 27.0175H10.6436C10.1498 27.0175 9.82056 26.6883 9.82056 26.1945V4.21994C9.82056 3.72613 10.1498 3.39693 10.6436 3.39693V1.75089V0.104858C8.33913 0.104858 6.52849 1.9155 6.52849 4.21994V26.1945C6.52849 28.4989 8.33913 30.3096 10.6436 30.3096H32.6181C34.9226 30.3096 36.7332 28.4989 36.7332 26.1945V4.21994C36.7332 1.9155 34.9226 0.104858 32.6181 0.104858H10.6436V1.75089Z",fill:"#085AF6"}),Ie("path",{d:"M27.0216 32.9433H4.55324C4.22403 32.9433 3.97713 32.6964 3.97713 32.3672V9.81651C3.97713 8.91119 3.23641 8.17047 2.33109 8.17047C1.42577 8.17047 0.685059 8.91119 0.685059 9.81651V32.2849C0.685059 34.4247 2.4134 36.153 4.55324 36.153H27.0216C27.9269 36.153 28.6676 35.4123 28.6676 34.507C28.6676 33.684 27.9269 32.9433 27.0216 32.9433Z",fill:"#085AF6"}))},$e=l.a.createElement,Ve=function(e){return $e(Be,Ae({},e,{viewBox:"0 0 47 65"}),$e("g",{clipPath:"url(#clip0)"},$e("path",{d:"M23.5321 0L0.0641479 24.0303L23.5321 48.0606L47 24.0303L23.5321 0ZM11.7981 24.0303L23.5321 12.0152L35.2661 24.0303L23.5321 36.0455L11.7981 24.0303Z",fill:"#085AF6"}),$e("path",{d:"M33.0218 26.7222L30.2005 29.5455L30.0723 29.6768L27.1869 32.6313L26.8663 32.303L29.7517 29.3485C29.7517 29.3485 29.7517 29.3485 29.8158 29.2828L29.8799 29.2172C29.8799 29.2172 29.8799 29.2172 29.944 29.1515L32.7653 26.2626L33.0218 26.7222Z",fill:"#DCE0DF"}),$e("path",{d:"M23.4679 16.9394L0 40.9697L23.4679 65L46.9359 40.9697L23.4679 16.9394ZM11.734 40.9697L23.4679 28.9545L35.2019 40.9697L23.4679 52.9848L11.734 40.9697Z",fill:"#085AF6"}),$e("path",{d:"M40.2674 34.1414L37.4461 37.0303L37.3179 37.1616L34.4325 40.1162L32.8295 38.4748L35.7149 35.5202C35.7149 35.5202 35.7149 35.5202 35.779 35.4546L35.8431 35.3889C35.8431 35.3889 35.8431 35.3889 35.9072 35.3232L38.7285 32.4344L40.2674 34.1414Z",fill:"#174184"}),$e("path",{d:"M32.8294 26.5252L30.0082 29.4141L29.8799 29.5454L26.9945 32.5L25.3274 30.8586L28.2128 27.904C28.2128 27.904 28.2128 27.904 28.2769 27.8384L28.341 27.7727C28.341 27.7727 28.341 27.7727 28.4052 27.7071L31.2264 24.8182L32.8294 26.5252Z",fill:"#174184"}),$e("path",{d:"M14.1705 38.4747L16.9918 35.5859L17.1201 35.4545L20.0055 32.5L21.6085 34.1414L18.7231 37.096C18.7231 37.096 18.7231 37.096 18.6589 37.1616L18.5948 37.2273C18.5948 37.2273 18.5948 37.2273 18.5307 37.2929L15.7094 40.1818L14.1705 38.4747Z",fill:"#174184"}),$e("path",{d:"M6.66846 30.7929L9.48974 27.904L9.61798 27.7727L12.5034 24.8182L14.1064 26.4596L11.221 29.4141C11.221 29.4141 11.221 29.4141 11.1569 29.4798V29.5454C11.1569 29.5454 11.1569 29.5454 11.0927 29.6111L8.27146 32.5L6.66846 30.7929Z",fill:"#174184"})),$e("defs",null,$e("clipPath",{id:"clip0"},$e("rect",{width:"47",height:"65",fill:"white"}))))},Fe=k(function(e){var t,n=e.palette.colors;return{root:{},grow:{flexGrow:"1"},header:{padding:"24px",maxWidth:"1440px",margin:"0 auto"},logoIcon:{height:"64px",width:"64px",display:"inline-block"},logoLabel:(t={display:"inline-block",lineHeight:"64px",verticalAlign:"center"},f(t,"verticalAlign","top"),f(t,"fontWeight","bold"),f(t,"fontSize","30px"),t),hero:{maxWidth:"1440px",padding:"24px",width:"100%",margin:"0 auto",marginTop:"64px"},heroDetail:{},heroTitle:{fontSize:"54px",lineHeight:"66px",fontWeight:"bold",color:n.black},heroSubtitle:{fontSize:"40px",lineHeight:"50px",color:n.black,marginTop:"43px"},heroImage:{width:"100%",height:"568px",backgroundSize:"100%",backgroundPosition:"center",backgroundRepeat:"no-repeat"},configuration:{background:"#F2F2F2",width:"100%",paddingTop:"50px",paddingBottom:"50px"},paper:{background:"white",borderRadius:"7px",padding:"16px",border:"1px solid #BDBDBD",width:"100%"},configurationTitle:{fontSize:"24px",lineHeight:"30px",fontWeight:"bold",color:"black"},configurationField:{background:"#F2F2F2",borderRadius:"7px",border:"1px solid #BDBDBD",padding:"8px",marginTop:"8px",display:"flex",cursor:"pointer"},configurationFieldLabel:{flexGrow:"1",fontSize:"20px",lineHeight:"24px",color:"#696969",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},configSubtitle:{fontSize:"40px",lineHeight:"50px",color:"black",marginTop:"16px"},configTitle:{fontSize:"48px",lineHeight:"55px",color:"black",fontWeight:"bold"},gridContainer:{maxWidth:"100%",width:"1440px",margin:"0 auto"},copyIcon:{height:"24px",width:"24px"},body:{width:"100%",paddingTop:"50px",paddingBottom:"50px"},stats:{display:"flex"},stat:{margin:"20px"},statValue:{fontSize:"40px",lineHeight:"50px",textAlign:"center",color:"black"},statLabel:{fontSize:"24px",lineHeight:"30px",textAlign:"center",color:"black"},ticker:{display:"flex"},tickerSymbol:{fonstSize:"20px",lineHeight:"45px",color:"#696969",textAlign:"center"},tickerImage:{marginRight:"8px"},table:{width:"1440px",maxWidth:"100%",margin:"24px auto"}}}),Ue=l.a.createElement;function _e(e,t,n,a){return{height:e,time:t,blockhash:n,reward:a}}var Ze=[_e(613130,"2019-12-14 23:09","0000000000000000036db3b34a0d5facf60b7a71534f44d45dd703d82ef92c84","12.50430257 BSV"),_e(613130,"2019-12-14 23:09","0000000000000000036db3b34a0d5facf60b7a71534f44d45dd703d82ef92c84","12.50430257 BSV"),_e(613130,"2019-12-14 23:09","0000000000000000036db3b34a0d5facf60b7a71534f44d45dd703d82ef92c84","12.50430257 BSV"),_e(613130,"2019-12-14 23:09","0000000000000000036db3b34a0d5facf60b7a71534f44d45dd703d82ef92c84","12.50430257 BSV"),_e(613130,"2019-12-14 23:09","0000000000000000036db3b34a0d5facf60b7a71534f44d45dd703d82ef92c84","12.50430257 BSV"),_e(613130,"2019-12-14 23:09","0000000000000000036db3b34a0d5facf60b7a71534f44d45dd703d82ef92c84","12.50430257 BSV"),_e(613130,"2019-12-14 23:09","0000000000000000036db3b34a0d5facf60b7a71534f44d45dd703d82ef92c84","12.50430257 BSV")],qe=Fe(function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return n=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c))),f(Object(u.a)(n),"state",{snackbarOpen:!1}),n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return Ue("div",{className:e.root},Ue("div",{className:e.header},Ue("div",{className:e.logo},Ue(Ve,{className:e.logoIcon}),Ue(R,{className:e.logoLabel},"MATTERPOOL"))),Ue(A,{container:!0,spacing:3,className:e.hero},Ue(A,{item:!0,sm:12,md:6},Ue(R,{className:e.heroTitle},"Welcome to the MatterPool Mining Pool"),Ue(R,{className:e.heroSubtitle},"Profit from your compute.",Ue("br",null),"Mine SHA-256.")),Ue(A,{item:!0,xs:12,sm:12,md:6},Ue("div",{className:e.heroImage,style:{backgroundImage:"url(/static/hero.png)"}}))),Ue("div",{className:e.configuration},Ue(A,{container:!0,spacing:4,className:e.gridContainer},Ue(A,{item:!0,xs:12,sm:12,md:6},Ue("div",{className:e.paper},Ue(R,{className:e.configurationTitle},"Url",Ue("span",{style:{marginLeft:"4px",fontWeight:"400"}},"(sha256)")),Ue("div",{className:e.configurationField,onClick:this.handleClickCopy.bind(this)},Ue(R,{className:e.configurationFieldLabel},"stratum+tcp://matterpool.io:420"),Ue(We,{className:e.copyIcon})))),Ue(A,{item:!0,xs:12,sm:12,md:6},Ue(R,{className:e.configTitle},"Configuration"),Ue(R,{className:e.configSubtitle},"Configure your SHA-256 miners with the information provided.")))),Ue("div",{className:e.body},Ue("div",{className:e.ticker},Ue("div",{className:e.grow}),Ue("img",{className:e.tickerImage,src:"/static/bsv.png"}),Ue(R,{className:e.tickerSymbol},"BSV"),Ue("div",{className:e.grow})),Ue("div",{className:e.stats},Ue("div",{className:e.grow}),Ue("div",{className:e.stat},Ue(R,{className:e.statValue},"4.18Eh/s"),Ue(R,{className:e.statLabel},"Pool Hashrate")),Ue("div",{className:e.grow}),Ue("div",{className:e.stat},Ue(R,{className:e.statValue},"209,500"),Ue(R,{className:e.statLabel},"Active Workers")),Ue("div",{className:e.grow})),Ue(Ne,{className:e.table},Ue(xe,{className:e.table,"aria-label":"simple table"},Ue(Re,null,Ue(Pe,null,Ue(je,null,"Height"),Ue(je,{align:"right"},"Time"),Ue(je,{align:"right"},"Block Hash"),Ue(je,{align:"right"},"Reward"))),Ue(Se,null,Ze.map(function(e,t){return Ue(Pe,f({key:e.name},"key",t),Ue(je,{align:"right"},e.height),Ue(je,{align:"right"},e.time),Ue(je,{align:"right"},e.blockhash),Ue(je,{align:"right"},e.reward))}))))),Ue(be,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:this.state.snackbarOpen,autoHideDuration:1e3,onClose:this.handleCloseSnackbar.bind(this),message:Ue("span",{id:"message-id"},"Copied to Clipboard")}))}},{key:"handleClickCopy",value:function(){g()("stratum+tcp://matterpool.io:420"),this.setState({snackbarOpen:!0})}},{key:"handleCloseSnackbar",value:function(){this.setState({snackbarOpen:!1})}}]),t}(l.a.Component)),Ge=l.a.createElement,Xe=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return Ge(qe,null)}}]),t}(l.a.Component);t.default=Xe},TOwV:function(e,t,n){"use strict";e.exports=n("qT12")},qT12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a="function"===typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,r=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,c=a?Symbol.for("react.strict_mode"):60108,s=a?Symbol.for("react.profiler"):60114,l=a?Symbol.for("react.provider"):60109,u=a?Symbol.for("react.context"):60110,d=a?Symbol.for("react.async_mode"):60111,p=a?Symbol.for("react.concurrent_mode"):60111,f=a?Symbol.for("react.forward_ref"):60112,m=a?Symbol.for("react.suspense"):60113,g=a?Symbol.for("react.suspense_list"):60120,h=a?Symbol.for("react.memo"):60115,b=a?Symbol.for("react.lazy"):60116,y=a?Symbol.for("react.fundamental"):60117,v=a?Symbol.for("react.responder"):60118,x=a?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case d:case p:case i:case s:case c:case m:return e;default:switch(e=e&&e.$$typeof){case u:case f:case l:return e;default:return t}}case b:case h:case r:return t}}}function E(e){return w(e)===p}t.typeOf=w,t.AsyncMode=d,t.ConcurrentMode=p,t.ContextConsumer=u,t.ContextProvider=l,t.Element=o,t.ForwardRef=f,t.Fragment=i,t.Lazy=b,t.Memo=h,t.Portal=r,t.Profiler=s,t.StrictMode=c,t.Suspense=m,t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===p||e===s||e===c||e===m||e===g||"object"===typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===h||e.$$typeof===l||e.$$typeof===u||e.$$typeof===f||e.$$typeof===y||e.$$typeof===v||e.$$typeof===x)},t.isAsyncMode=function(e){return E(e)||w(e)===d},t.isConcurrentMode=E,t.isContextConsumer=function(e){return w(e)===u},t.isContextProvider=function(e){return w(e)===l},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return w(e)===f},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===b},t.isMemo=function(e){return w(e)===h},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===s},t.isStrictMode=function(e){return w(e)===c},t.isSuspense=function(e){return w(e)===m}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,0]]]);