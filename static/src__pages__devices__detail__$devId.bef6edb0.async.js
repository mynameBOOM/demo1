webpackJsonp([2],{CiDW:function(e,t){},FDc8:function(e,t,n){e.exports=n.p+"static/503584-1.6bf1ae48.jpg"},FSyp:function(e,t){},eTbp:function(e,t){e.exports={mainContainer:"mainContainer___3mBo5",itemTitle:"itemTitle___cnPO7",itemId:"itemId___ET_gl"}},"i/KL":function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function p(e,t,n,r){var a=void 0;return Object(oe.a)(e,n,{start:function(){t?(a=e.offsetHeight,e.style.height=0):e.style.height=e.offsetHeight+"px"},active:function(){e.style.height=(t?a:0)+"px"},end:function(){e.style.height="",r()}})}function f(e){return{enter:function(t,n){return p(t,!0,e+"-anim",n)},leave:function(t,n){return p(t,!1,e+"-anim",n)}}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function b(e){var t=e;return Array.isArray(t)||(t=t?[t]:[]),t}Object.defineProperty(t,"__esModule",{value:!0});var E=(n("Jq5H"),n("FSyp"),n("7FLV")),C=(n("fXIP"),n("k608")),g=n("0m1g"),A=(n("zBL0"),n("xYbG")),O=n("lReW"),_=n.n(O),w=n("X/qe"),P=n.n(w),k=n("ChGA"),x=n.n(k),j=n("lUc7"),I=n.n(j),T=n("CIw6"),N=n.n(T),S=n("UZwt"),R=n.n(S),K=(n("CiDW"),n("Jz7S")),D=n.n(K),z=n("+Kjy"),F=n.n(z),L=n("mfP/"),X=n.n(L),H=n("tiLd"),U=n.n(H),G=n("Ui9C"),W=n.n(G),B=n("661i"),J=n.n(B),q=n("BrpO"),M=n.n(q),V=n("iPpx"),Y=n.n(V),Z=n("lnby"),Q=n.n(Z),$=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ee=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),$(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.isActive||e.isActive}},{key:"render",value:function(){var e;if(this._isActived=this.props.forceRender||this._isActived||this.props.isActive,!this._isActived)return null;var t=this.props,n=t.prefixCls,a=t.isActive,i=t.children,o=t.destroyInactivePanel,c=t.forceRender,l=Q()((e={},r(e,n+"-content",!0),r(e,n+"-content-active",a),r(e,n+"-content-inactive",!a),e)),s=c||a||!o?M.a.createElement("div",{className:n+"-content-box"},i):null;return M.a.createElement("div",{className:l,role:"tabpanel"},s)}}]),t}(q.Component);ee.propTypes={prefixCls:Y.a.string,isActive:Y.a.bool,children:Y.a.any,destroyInactivePanel:Y.a.bool,forceRender:Y.a.bool};var te=ee,ne=n("RfX7"),re=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ae=function(e){function t(){return l(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),re(t,[{key:"handleItemClick",value:function(){this.props.onItemClick&&this.props.onItemClick()}},{key:"render",value:function(){var e,t=this.props,n=t.className,r=t.id,a=t.style,i=t.prefixCls,o=t.header,l=t.headerClass,s=t.children,u=t.isActive,p=t.showArrow,f=t.destroyInactivePanel,d=t.disabled,y=t.forceRender,m=Q()(i+"-header",c({},l,l)),h=Q()((e={},c(e,i+"-item",!0),c(e,i+"-item-active",u),c(e,i+"-item-disabled",d),e),n);return M.a.createElement("div",{className:h,style:a,id:r,role:"tablist"},M.a.createElement("div",{className:m,onClick:this.handleItemClick.bind(this),role:"tab","aria-expanded":u},p&&M.a.createElement("i",{className:"arrow"}),o),M.a.createElement(ne.a,{showProp:"isActive",exclusive:!0,component:"",animation:this.props.openAnimation},M.a.createElement(te,{prefixCls:i,isActive:u,destroyInactivePanel:f,forceRender:y},s)))}}]),t}(q.Component);ae.propTypes={className:Y.a.oneOfType([Y.a.string,Y.a.object]),id:Y.a.string,children:Y.a.any,openAnimation:Y.a.object,prefixCls:Y.a.string,header:Y.a.oneOfType([Y.a.string,Y.a.number,Y.a.node]),headerClass:Y.a.string,showArrow:Y.a.bool,isActive:Y.a.bool,onItemClick:Y.a.func,style:Y.a.object,destroyInactivePanel:Y.a.bool,disabled:Y.a.bool,forceRender:Y.a.bool},ae.defaultProps={showArrow:!0,isActive:!1,destroyInactivePanel:!1,onItemClick:function(){},headerClass:"",forceRender:!1};var ie=ae,oe=n("ESR9"),ce=f,le=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),se=function(e){function t(e){m(this,t);var n=h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=n.props,a=r.activeKey,i=r.defaultActiveKey,o=i;return"activeKey"in n.props&&(o=a),n.state={openAnimation:n.props.openAnimation||ce(n.props.prefixCls),activeKey:b(o)},n}return v(t,e),le(t,[{key:"componentWillReceiveProps",value:function(e){"activeKey"in e&&this.setState({activeKey:b(e.activeKey)}),"openAnimation"in e&&this.setState({openAnimation:e.openAnimation})}},{key:"onClickItem",value:function(e){var t=this.state.activeKey;if(this.props.accordion)t=t[0]===e?[]:[e];else{t=[].concat(y(t));var n=t.indexOf(e);n>-1?t.splice(n,1):t.push(e)}this.setActiveKey(t)}},{key:"getItems",value:function(){var e=this,t=this.state.activeKey,n=this.props,r=n.prefixCls,a=n.accordion,i=n.destroyInactivePanel,o=[];return q.Children.forEach(this.props.children,function(n,c){if(n){var l=n.key||String(c),s=n.props,u=s.header,p=s.headerClass,f=s.disabled,d=!1;d=a?t[0]===l:t.indexOf(l)>-1;var y={key:l,header:u,headerClass:p,isActive:d,prefixCls:r,destroyInactivePanel:i,openAnimation:e.state.openAnimation,children:n.props.children,onItemClick:f?null:function(){return e.onClickItem(l)}};o.push(M.a.cloneElement(n,y))}}),o}},{key:"setActiveKey",value:function(e){"activeKey"in this.props||this.setState({activeKey:e}),this.props.onChange(this.props.accordion?e[0]:e)}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.className,a=t.style,i=Q()((e={},d(e,n,!0),d(e,r,!!r),e));return M.a.createElement("div",{className:i,style:a},this.getItems())}}]),t}(q.Component);se.propTypes={children:Y.a.any,prefixCls:Y.a.string,activeKey:Y.a.oneOfType([Y.a.string,Y.a.arrayOf(Y.a.string)]),defaultActiveKey:Y.a.oneOfType([Y.a.string,Y.a.arrayOf(Y.a.string)]),openAnimation:Y.a.object,onChange:Y.a.func,accordion:Y.a.bool,className:Y.a.string,style:Y.a.object,destroyInactivePanel:Y.a.bool},se.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},se.Panel=ie;var ue=se,pe=ue,fe=(ue.Panel,n("zz8w")),de=function(e){function t(){return X()(this,t),W()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return J()(t,e),U()(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,r=void 0===n?"":n,a=e.showArrow,i=void 0===a||a,o=Q()(F()({},t+"-no-arrow",!i),r);return q.createElement(pe.Panel,D()({},this.props,{className:o}))}}]),t}(q.Component),ye=de,me=function(e){function t(){return X()(this,t),W()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return J()(t,e),U()(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,r=void 0===n?"":n,a=e.bordered,i=Q()(F()({},t+"-borderless",!a),r);return q.createElement(pe,D()({},this.props,{className:i}))}}]),t}(q.Component),he=me;me.Panel=ye,me.defaultProps={prefixCls:"ant-collapse",bordered:!0,openAnimation:D()({},fe.a,{appear:function(){}})};var ve=he,be=n("eTbp"),Ee=n.n(be),Ce=n("S6G3");n.d(t,"default",function(){return _e});var ge,Ae,Oe=ve.Panel,_e=(ge=Object(Ce.connect)(function(e){var t=e.detail;return R()({},t)}))(Ae=function(e){function t(){return _()(this,t),I()(this,N()(t).apply(this,arguments))}return x()(t,[{key:"render",value:function(){var e=this.props.data;return M.a.createElement("div",{className:Ee.a.mainContainer},M.a.createElement(E.a,{type:"flex",justify:"center"},M.a.createElement(g.a,{xs:22,sm:22,md:20,lg:18,xl:18},M.a.createElement(A.a,{title:M.a.createElement("div",null,M.a.createElement("div",{style:{fontSize:18}},e.type),M.a.createElement("div",{className:Ee.a.itemTitle},e.name),M.a.createElement("div",{className:Ee.a.itemId},"(".concat(e.id,")"))),bodyStyle:{padding:0},cover:M.a.createElement("img",{alt:"test",src:n("FDc8")})})),M.a.createElement(g.a,{xs:22,sm:22,md:20,lg:18,xl:18},M.a.createElement(ve,{defaultActiveKey:["1"]},e.techData.length>0&&M.a.createElement(Oe,{header:M.a.createElement("div",{className:Ee.a.itemTitle},"TECHNICAL DATA"),key:"1"},M.a.createElement(A.a,{bordered:!1,style:{color:"#001529",fontSize:18}},M.a.createElement("table",null,M.a.createElement("tbody",null,e.techData.map(function(e,t){return M.a.createElement("tr",{key:t},M.a.createElement("td",null,e.label,":"),M.a.createElement("td",{style:{paddingLeft:20}},e.value))}))))),e.standConfig.length>0&&M.a.createElement(Oe,{header:M.a.createElement("div",{className:Ee.a.itemTitle},"STANDARD CONFIGURATION"),key:"2"},e.standConfig.map(function(e,t){return M.a.createElement(A.a,{key:"SC-".concat(t),title:M.a.createElement("div",null,M.a.createElement("div",{style:{fontSize:18}},e.label)),bordered:!1,style:{color:"#001529",fontSize:18}},M.a.createElement("table",null,M.a.createElement("tbody",null,e.value.map(function(e,n){return M.a.createElement("tr",{key:"SC-".concat(t,"-").concat(n)},M.a.createElement("td",null,M.a.createElement(C.a,{type:"check",style:{paddingRight:10}}),e))}))))})),e.extended.length>0&&M.a.createElement(Oe,{header:M.a.createElement("div",{className:Ee.a.itemTitle},"EXTENDED MACHINE ACCESSORIES"),key:"3"},e.extended.map(function(e,t){return M.a.createElement(A.a,{key:"EX-".concat(t),title:M.a.createElement("div",null,M.a.createElement("div",{style:{fontSize:18}},e.label)),bordered:!1,style:{color:"#001529",fontSize:18}},M.a.createElement("table",null,M.a.createElement("tbody",null,e.value.map(function(e,n){return M.a.createElement("tr",{key:"EX-".concat(t,"-").concat(n)},M.a.createElement("td",null,M.a.createElement(C.a,{type:"check",style:{paddingRight:10}}),e))}))))}))))))}}]),P()(t,e),t}(M.a.Component))||Ae}});