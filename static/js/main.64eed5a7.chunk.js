(this["webpackJsonpe-directory"]=this["webpackJsonpe-directory"]||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(16),s=n.n(c),i=(n(22),n(0));var l=function(e){var t=e.children;return Object(i.jsx)("div",{className:"wrapper",children:t})},d=n(3),j=n(4),h=n(6),o=n(5),u=(n(24),function(e){Object(h.a)(n,e);var t=Object(o.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"header",children:Object(i.jsx)("h1",{children:"Employee Directory"})})}}]),n}(a.Component)),b=n(17),m=n.n(b),O=function(){return m.a.get("https://randomuser.me/api/1.3/?results=25&nat=us")};var p=function(e){var t=e.handleInputData;return Object(i.jsx)("div",{className:"searchbox",children:Object(i.jsx)("form",{className:"form-inline",children:Object(i.jsx)("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){return t(e)}})})})};n(43);var v=function(e){var t=e.handleInputData;return Object(i.jsx)("nav",{className:"navbar navbar-expand navbar-light bg-light",children:Object(i.jsx)("div",{className:"navbar-collapse row",id:"navbarNav",children:Object(i.jsx)(p,{handleInputData:t})})})};var f=function(e){var t=e.users;function n(e){var t=e.split("-"),n=t[0];return[t[1],t[2].split("T")[0],n].join("/")}return Object(i.jsx)("tbody",{children:void 0!==t[0].name&&void 0!==t[0].phone?t.map((function(e){var t=e.login,a=e.name,r=e.picture,c=e.phone,s=e.email,l=e.dob;return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(i.jsx)("img",{src:r.large,alt:"profile image for "+a.first+" "+a.last,className:"img-responsive"})}),Object(i.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[a.first," ",a.last]}),Object(i.jsx)("td",{"data-th":"Phone",className:"align-middle",children:c}),Object(i.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(i.jsx)("a",{href:"mailto:"+s,target:"__blank",children:s})}),Object(i.jsx)("td",{"data-th":"DOB",className:"align-middle",children:n(l.date)})]},t.uuid)})):Object(i.jsx)(i.Fragment,{})})};var x=function(e){var t=e.headings,n=e.users;return Object(i.jsx)("div",{className:"render-table mt-5",children:Object(i.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(i.jsx)("thead",{children:Object(i.jsx)("tr",{children:t.map((function(e){var t=e.name,n=e.width;return Object(i.jsxs)("th",{className:"col",style:{width:n},children:[t,Object(i.jsx)("span",{className:"pointer"})]},t)}))})}),Object(i.jsx)(f,{users:n})]})})},g=(n(44),function(e){Object(h.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={users:[{}],order:"descend",filteredUsers:[{}]},e.headings=[{name:"Image",width:"15%"},{name:"Name",width:"25%"},{name:"Phone",width:"20%"},{name:"Email",width:"25%"},{name:"DOB",width:"15%"}],e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){e.setState({users:t.data.results,filteredUsers:t.data.results})}))}},{key:"render",value:function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(v,{handleInputData:this.handleInputData}),Object(i.jsx)("div",{className:"render-data",children:Object(i.jsx)(x,{headings:this.headings,users:this.state.filteredUsers,handleSort:this.handleSort})})]})}}]),n}(a.Component)),N=function(e){Object(h.a)(n,e);var t=Object(o.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(g,{})})}}]),n}(a.Component);n(45);var y=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(l,{children:[Object(i.jsx)(u,{}),Object(i.jsx)(N,{})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};n(46);s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root")),w()}},[[47,1,2]]]);
//# sourceMappingURL=main.64eed5a7.chunk.js.map