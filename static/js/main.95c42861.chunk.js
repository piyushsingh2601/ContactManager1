(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{36:function(e,a,t){e.exports=t(65)},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(31),o=t.n(c),l=t(2),i=t(3),s=t(5),m=t(4),u=t(35),p=t(16),h=t(11),d=t.n(h),b=r.a.createContext(),v=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(p.a)({},e,{contacts:e.contacts.filter((function(e){return e.id!==a.payload}))});case"ADD_CONTACT":return Object(p.a)({},e,{contacts:[a.payload].concat(Object(u.a)(e.contacts))});case"UPDATE_CONTACT":return Object(p.a)({},e,{contacts:e.contacts.map((function(e){return e.id===a.payload.id?e=a.payload:e}))});default:return{state:e}}},E=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={contacts:[],dispatch:function(a){return e.setState((function(e){return v(e,a)}))}},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://jsonplaceholder.typicode.com/users").then((function(a){return e.setState({contacts:a.data})}))}},{key:"render",value:function(){return r.a.createElement(b.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),f=b.Consumer,y=t(12),g=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={showContactInfo:!0},e.onShowClick=function(){e.setState({showContactInfo:!e.state.showContactInfo})},e}return Object(i.a)(t,[{key:"onDeleteClick",value:function(e,a){d.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e)).then((function(t){return a({type:"DELETE_CONTACT",payload:e})}))}},{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,o=a.phone;return r.a.createElement(f,null,(function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{onClick:e.onShowClick,className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,t,l)}),r.a.createElement(y.b,{to:"contact/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"16px"}}))),e.state.showContactInfo?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email : ",c),r.a.createElement("li",{className:"list-group-item"},"Mobile: ",o)):null)}))}}]),t}(n.Component),C=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f,null,(function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"display-4 mb-2"},r.a.createElement("h1",{className:"text-danger"},"Contact List")),a.map((function(e){return r.a.createElement(g,{key:e.id,contact:e})})))}))}}]),t}(n.Component),N=function(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},a),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add Contact")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}),"About"))))))};function j(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager Application"),r.a.createElement("p",{className:"lead"},"Simple Application to Manage Contacts"),r.a.createElement("p",{className:"text-secondary"},"version 1.0.0"))}function O(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, This Page is Not Available"))}var k=t(15),A=t(8),w=t.n(A),S=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{className:"form-control form-control-lg",type:o,name:t,placeholder:c,value:n,onChange:l,required:!0}))};S.prototypes={name:w.a.string.isRequired,type:w.a.string.isRequired,placeholder:w.a.string.isRequired,value:w.a.string.isRequired,label:w.a.string.isRequired,onChange:w.a.func.isRequired},S.defaultProps={type:"text"};var T=S,x=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={name:"",email:"",phone:""},e.onChange=function(a){return e.setState(Object(k.a)({},a.target.name,a.target.value))},e.onSubmit=function(a,t){t.preventDefault();var n=e.state,r={name:n.name,email:n.email,phone:n.phone};d.a.post("https://jsonplaceholder.typicode.com/users",r).then((function(e){return a({type:"ADD_CONTACT",payload:e.data})})),e.setState({name:"",email:"",phone:""}),e.props.history.push("/")},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone;return r.a.createElement(f,null,(function(a){var o=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,o)},r.a.createElement(T,{name:"name",label:"Name",placeholder:"Enter Name",value:t,onChange:e.onChange}),r.a.createElement(T,{name:"email",label:"Email",placeholder:"Enter Email",value:n,type:"email",onChange:e.onChange}),r.a.createElement(T,{name:"phone",label:"Mobile",placeholder:"Enter Contact Number",value:c,onChange:e.onChange}),r.a.createElement("input",{className:"btn btn-light btn-block",type:"submit",value:"Add Contact"}))))}))}}]),t}(n.Component),D=t(20),M=t.n(D),q=t(34),R=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={name:"",email:"",phone:""},e.onChange=function(a){return e.setState(Object(k.a)({},a.target.name,a.target.value))},e.onSubmit=function(a,t){t.preventDefault();var n=e.state,r=n.name,c=n.email,o=n.phone,l=e.props.match.params.id,i={name:r,email:c,phone:o};d.a.put("https://jsonplaceholder.typicode.com/users/".concat(l),i).then((function(e){return a({type:"UPDATE_CONTACT",payload:e.data})})),e.setState({name:"",email:"",phone:""}),e.props.history.push("/")},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(q.a)(M.a.mark((function e(){var a,t,n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,d.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:return t=e.sent,e.next=6,t;case 6:n=e.sent.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone;return r.a.createElement(f,null,(function(a){var o=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,o)},r.a.createElement(T,{name:"name",label:"Name",placeholder:"Enter Name",value:t,onChange:e.onChange}),r.a.createElement(T,{name:"email",label:"Email",placeholder:"Enter Email",value:n,type:"email",onChange:e.onChange}),r.a.createElement(T,{name:"phone",label:"Mobile",placeholder:"Enter Contact Number",value:c,onChange:e.onChange}),r.a.createElement("input",{className:"btn btn-light btn-block",type:"submit",value:"Update Contact"}))))}))}}]),t}(n.Component),P=(t(64),t(13)),_=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={title:"",body:""},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos/1").then((function(e){return e.json()})).then((function(a){return e.setState({title:a.title,body:a.body})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Test Component"))}}]),t}(n.Component),I=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(E,null,r.a.createElement(y.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(N,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(P.c,null,r.a.createElement(P.a,{exact:!0,path:"/",component:C}),r.a.createElement(P.a,{exact:!0,path:"/contact/add",component:x}),r.a.createElement(P.a,{exact:!0,path:"/about",component:j}),r.a.createElement(P.a,{exact:!0,path:"/test",component:_}),r.a.createElement(P.a,{exact:!0,path:"/contact/edit/:id",component:R}),r.a.createElement(P.a,{component:O}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.95c42861.chunk.js.map