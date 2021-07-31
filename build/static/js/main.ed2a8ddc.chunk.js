(this["webpackJsonpproject-issuetracker"]=this["webpackJsonpproject-issuetracker"]||[]).push([[0],{15:function(e,t,a){e.exports={issueCard:"IssueCard_issueCard__26XYe",triangle:"IssueCard_triangle__6Vr3z",cardBox:"IssueCard_cardBox__13c6M",titleContainer:"IssueCard_titleContainer__1JwHZ",title:"IssueCard_title__2uY0Z",textContainer:"IssueCard_textContainer__2hb3I",status:"IssueCard_status__1yivb",persons:"IssueCard_persons__2i8RK"}},46:function(e,t,a){},5:function(e,t,a){e.exports={bg:"Home_bg__1_7aN",head:"Home_head__hgn-a",searchContainer:"Home_searchContainer__gkwG6",searchBar:"Home_searchBar__11Ns3",addBtn:"Home_addBtn__2vve7",confirmMessage:"Home_confirmMessage__1YVpU",message:"Home_message__2Z6hr",btnText:"Home_btnText__2jnp5",formContainer:"Home_formContainer__g7HTr",leftPanel:"Home_leftPanel__2iFHk",modal:"Home_modal__2byto",newIssueBtn:"Home_newIssueBtn__1nQAa",searchBtn:"Home_searchBtn__35spw",newIssue:"Home_newIssue__q-Fwu"}},8:function(e,t,a){e.exports={navigation:"Issues_navigation__2ftaL",title:"Issues_title__20vcg",searchBar:"Issues_searchBar__XZgC2",toolbar:"Issues_toolbar__WLpbG",dropdown:"Issues_dropdown__LFX_D",sortBox:"Issues_sortBox__2gXJr",messageBox:"Issues_messageBox__2E6vT",issueCount:"Issues_issueCount__S_Wiz",addBtn:"Issues_addBtn__2x5D6",issuesContainer:"Issues_issuesContainer__KBCzW",pagination:"Issues_pagination__1qaNE"}},81:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(34),l=a.n(c),i=(a(46),a(7)),o=a(17),r=a(35),d=a(36),u=a(13),m=a(40),j=a(39),h=a(3),b=a(14),p=a(11),g=a.n(p),f=a(8),x=a.n(f),O=a(5),_=a.n(O),C=a(0),v=function(e){return Object(C.jsx)("div",{className:"w-100",children:Object(C.jsxs)("form",{onSubmit:e.handleSubmit,id:"form",children:[e.newSubmit?Object(C.jsx)("i",{className:"fas fa-times float-right text-white",style:{cursor:"pointer"},onClick:e.handleCloseForm}):null,e.editForm?Object(C.jsx)("h1",{className:"mb-3 text-center",children:"Edit issue"}):Object(C.jsx)("h1",{className:"mb-3 text-center ".concat(e.newSubmit?"text-white":"text-dark"," ").concat(_.a.newIssue),children:"New issue"}),e.newSubmit?Object(C.jsxs)("div",{className:"form-group mb-2",children:[Object(C.jsx)("label",{htmlFor:"Project name",children:"Project name:"}),Object(C.jsx)("input",{onChange:e.handleChange,name:"project",type:"text",className:"form-control",required:!0})]}):null,Object(C.jsxs)("div",{className:"form-group mb-2",children:[Object(C.jsx)("label",{htmlFor:"Issue title",children:"Issue title:"}),Object(C.jsx)("input",{onChange:e.handleChange,name:"issue_title",type:"text",className:"form-control",defaultValue:e.editForm?e.title:null,required:!0})]}),Object(C.jsxs)("div",{className:"form-group mb-2",children:[Object(C.jsx)("label",{htmlFor:"Description",children:"Description:"}),Object(C.jsx)("textarea",{onChange:e.handleChange,name:"issue_text",type:"text",className:"form-control",defaultValue:e.editForm?e.description:null,required:!0})]}),Object(C.jsxs)("div",{className:"form-group mb-2",children:[Object(C.jsx)("label",{htmlFor:"Status",children:"Status:"}),Object(C.jsx)("input",{onChange:e.handleChange,name:"status_text",type:"text",className:"form-control",defaultValue:e.editForm?e.status:null})]}),Object(C.jsxs)("div",{className:"form-group mb-2",children:[Object(C.jsx)("label",{htmlFor:"Created by",children:"Created by:"}),Object(C.jsx)("input",{onChange:e.handleChange,name:"created_by",type:"text",className:"form-control",defaultValue:e.editForm?e.created_by:null,required:!0})]}),Object(C.jsxs)("div",{className:"form-group mb-3",children:[Object(C.jsx)("label",{htmlFor:"Assigned to",children:"Assigned to:"}),Object(C.jsx)("input",{onChange:e.handleChange,name:"assigned_to",type:"text",className:"form-control",defaultValue:e.editForm?e.assigned_to:null})]}),Object(C.jsx)("div",{className:_.a.confirmMessage,children:e.message&&e.message.includes("Project name already exists.")?e.message:e.message&&e.message.includes("at least 3 characters")?Object(C.jsx)("span",{className:"text-danger",children:e.message}):null}),Object(C.jsx)("div",{className:"text-center",children:Object(C.jsx)("button",{type:"submit",className:"btn btn-dark",children:e.message&&e.message.includes("Project name already exists.")?"Confirm":"Submit"})})]})})},N=a(41),y=a(15),S=a.n(y),w=a(19),F=function(e){var t=e.issues,a=(e.loading,Object(N.a)(e,["issues","loading"]));return t.map((function(e){return Object(C.jsxs)("div",{className:"col-sm-3 float-left ".concat(S.a.cardBox),children:[Object(C.jsx)("i",{className:S.a.triangle,style:e.open?{borderColor:"transparent #28A745 transparent transparent"}:{borderColor:"transparent #DC3545 transparent transparent"}}),Object(C.jsxs)("div",{className:"".concat(S.a.issueCard," card"),style:e.open?{opacity:"1"}:{opacity:".8"},children:[Object(C.jsx)("div",{className:"card-header p-0",children:Object(C.jsxs)("div",{className:S.a.titleContainer,children:[Object(C.jsx)("h1",{className:S.a.title,children:e.issue_title}),Object(C.jsxs)("div",{className:"float-right",children:[Object(C.jsx)("i",{className:"far fa-edit mr-2 text-primary",style:e.open?{cursor:"pointer"}:{cursor:"default"},"data-tip":"Edit","data-for":"edit","data-tip-disable":!e.open,"data-toggle":e.open?"modal":null,"data-target":"#AddOrEdit",id:e._id,onClick:e.open?a.handleEditClick:null}),Object(C.jsx)(w.a,{place:"bottom",effect:"solid",id:"edit",disable:!e.open}),Object(C.jsx)("i",{className:"far fa-trash-alt mr-2 text-danger",style:{cursor:"pointer"},"data-tip":"Delete","data-for":"delete",id:e._id,onClick:a.handleDelete}),Object(C.jsx)(w.a,{place:"bottom",effect:"solid",id:"delete"}),Object(C.jsx)("i",{className:"far fa-times-circle text-success",style:e.open?{cursor:"pointer"}:{cursor:"default"},onClick:a.handleClose,"data-tip-disable":!e.open,"data-tip":"Close","data-for":"close",id:e._id}),Object(C.jsx)(w.a,{place:"bottom",effect:"solid",id:"close",disable:!e.open})]}),Object(C.jsx)("span",{style:{color:"lightgray",fontFamily:"Quicksand"},children:e.created_on!==e.updated_on?"Updated ".concat(new Date(e.updated_on).toLocaleDateString()):"Created ".concat(new Date(e.created_on).toLocaleDateString())})]})}),Object(C.jsxs)("div",{className:"card-body w-100 h-100 p-0",children:[Object(C.jsx)("div",{className:S.a.textContainer,children:e.issue_text}),Object(C.jsxs)("div",{className:S.a.status,children:[Object(C.jsx)("b",{children:"Status:"})," ",e.status_text]})]}),Object(C.jsxs)("div",{className:"".concat(S.a.persons," py-2 card-footer bg-white"),children:[Object(C.jsxs)("span",{id:"created_by",children:["Created by ",e.created_by]}),Object(C.jsx)("br",{}),Object(C.jsxs)("span",{children:["Assigned to ",e.assigned_to]})]})]})]},e._id)}))},I=function(e){for(var t=e.issuesPerPage,a=e.totalIssues,s=e.paginate,n=[],c=1;c<=Math.ceil(a/t);c++)n.push(c);var l=document.querySelectorAll(".page-item");return l&&l.forEach((function(e){e.addEventListener("click",(function(){l.forEach((function(e){return e.classList.remove("active")})),this.classList.add("active")}))})),Object(C.jsx)("ul",{className:"pagination",children:n.map((function(e){return Object(C.jsx)("li",{className:"page-item ".concat(1===e?"active":""),children:Object(C.jsx)("a",{onClick:function(){return s(e)},href:"#!",className:"page-link",children:e})},e)}))})},k=a(38),B=a.n(k),E=function(){var e=Object(h.f)(),t=Object(s.useState)(!1),a=Object(b.a)(t,2),n=a[0],c=a[1],l=Object(s.useState)([]),r=Object(b.a)(l,2),d=r[0],u=r[1],m=Object(s.useState)({all:0,open:0,closed:0}),j=Object(b.a)(m,2),p=j[0],f=j[1],O=Object(s.useState)({}),_=Object(b.a)(O,2),N=_[0],y=_[1],S=Object(s.useState)(!1),w=Object(b.a)(S,2),k=w[0],E=w[1],P=Object(s.useState)(""),L=Object(b.a)(P,2),D=L[0],T=L[1],H=Object(s.useState)(!1),V=Object(b.a)(H,2),A=V[0],q=V[1],M=Object(s.useState)(1),J=Object(b.a)(M,2),X=J[0],Z=J[1],z=Object(s.useState)(12),W=Object(b.a)(z,1)[0],Y=X*W,G=Y-W,K=d.slice(G,Y),Q=Object(s.useCallback)((function(t){g.a.get("/api/issues/".concat(e.project)).then((function(e){var a=0,s=0;A&&!t||(u(e.data),c(!1)),e.data.length&&e.data[0].hasOwnProperty("issue_title")?(e.data.map((function(e){return e.open?a+=1:s+=1})),f({all:e.data.length,open:a,closed:s})):f({all:0,open:0,closed:0})})).catch((function(e){return console.log(e)}))}),[e.project]);Object(s.useEffect)((function(){c(!0),Q()}),[Q]);var U=function(e){y((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(o.a)({},e.target.name,e.target.value))}))},R=function(){g.a.get("/search",{params:{project:e.project,issue_title:N.issue_title}}).then((function(e){e.data.length?(Z(1),u(e.data),q(!0),c(!1),document.getElementById("search-form").reset()):0===e.data.length?(u([]),q(!1),c(!1)):0===e.data.length&&A&&(q(!1),Q(!0))})).catch((function(e){return console.log(e)}))},$=function(t){g.a.delete("/api/issues/".concat(e.project),{params:{id:t.target.id,project:e.project}}).then((function(e){"All issues deleted."===e.data?(Q(),f({all:0,open:0,closed:0})):A?(R(),Q()):Q(),document.getElementById("confirm-delete").classList.add("d-none"),document.getElementById("delete-all").classList.remove("d-none"),document.getElementById("add-issue").classList.remove("d-none"),T(e.data),setTimeout((function(){T("")}),2500)})).catch((function(e){return console.log(e)}))},ee=function(t){q(!1),c(!0),g.a.get("/api/issues/".concat(e.project),{params:{open:t.target.id}}).then((function(e){e.data&&(Z(1),u(e.data),c(!1))})).catch((function(e){return console.log(e)}))},te=N.issue_title,ae=N.issue_text,se=N.created_by,ne=N.assigned_to,ce=N.status_text;return Object(C.jsxs)("div",{children:[Object(C.jsxs)("nav",{className:"".concat(x.a.navigation," navbar navbar-expand-md navbar-dark"),children:[Object(C.jsx)("a",{className:"navbar-brand ".concat(x.a.title),href:"/",children:"Project Issue Tracker"}),Object(C.jsx)("div",{className:"navbar-nav ".concat(x.a.searchBar),children:Object(C.jsxs)("form",{className:"d-flex",id:"search-form",onSubmit:function(e){e.preventDefault(),c(!0),R()},children:[Object(C.jsx)("input",{type:"text",onChange:U,name:"issue_title",placeholder:"Search",className:"form-control"}),Object(C.jsx)("button",{className:"btn",type:"submit",children:Object(C.jsx)("i",{className:"fas fa-search text-light"})})]})})]}),Object(C.jsxs)("div",{className:x.a.toolbar,children:[Object(C.jsxs)("div",{className:"".concat(x.a.dropdown," dropdown"),children:[Object(C.jsxs)("button",{className:"btn btn-primary dropdown-toggle",type:"button","data-toggle":"dropdown",children:["Sort",Object(C.jsx)("span",{className:"caret"})]}),Object(C.jsxs)("ul",{className:"dropdown-menu",children:[Object(C.jsxs)("li",{onClick:ee,children:["(",p?p.all:"0",") All issues"]}),Object(C.jsxs)("li",{onClick:ee,id:"true",children:["(",p?p.open:"0",") Open"]}),Object(C.jsxs)("li",{onClick:ee,id:"false",children:["(",p?p.closed:"0",") Closed"]})]})]}),Object(C.jsxs)("div",{className:x.a.sortBox,children:[Object(C.jsx)("span",{className:"mr-2",children:"Sort: "}),Object(C.jsx)("span",{className:"".concat(x.a.issueCount," bg-dark"),onClick:ee,children:p?p.all:"0"}),Object(C.jsx)("span",{className:"mr-2",children:"All issues"}),Object(C.jsx)("span",{className:"".concat(x.a.issueCount," bg-success"),onClick:ee,id:"true",children:p?p.open:"0"}),Object(C.jsx)("span",{className:"mr-2",children:"Open"}),Object(C.jsx)("span",{className:"".concat(x.a.issueCount," bg-danger"),onClick:ee,id:"false",children:p?p.closed:"0"}),Object(C.jsx)("span",{className:"mr-2",children:"Closed"})]}),Object(C.jsxs)("div",{className:x.a.messageBox,children:[Object(C.jsxs)("div",{className:"d-none",id:"confirm-delete",children:[Object(C.jsx)("button",{className:"btn btn-outline-danger mx-3",onClick:$,children:"Confirm"}),Object(C.jsx)("button",{onClick:function(){document.getElementById("confirm-delete").classList.add("d-none"),document.getElementById("delete-all").classList.remove("d-none"),document.getElementById("add-issue").classList.remove("d-none")},className:"btn btn-link text-dark",children:"Cancel"})]}),Object(C.jsx)("span",{className:"text-danger mr-3",children:D.includes("deleted")||D.includes("No issues found")?D:null}),Object(C.jsx)("i",{className:"".concat(x.a.addBtn," fas fa-plus-square mr-3"),"data-toggle":"modal","data-target":"#AddOrEdit",onClick:function(e){E(!1),document.getElementById("form").reset()},id:"add-issue"}),Object(C.jsx)("button",{className:"btn btn-danger",id:"delete-all",onClick:function(){document.getElementById("confirm-delete").classList.remove("d-none"),document.getElementById("delete-all").classList.add("d-none"),document.getElementById("add-issue").classList.add("d-none")},children:"Delete all"})]})]}),Object(C.jsx)("div",{className:x.a.issuesContainer,children:n?Object(C.jsx)("div",{className:"d-flex align-items-center justify-content-center",style:{height:"50vh"},children:Object(C.jsx)(B.a,{color:"white"})}):d.length?Object(C.jsx)(F,{issues:K,handleEditClick:function(t){E(!0),g.a.get("/api/issues/".concat(e.project),{params:{id:t.target.id}}).then((function(e){if(!1===e.data.open)return null;y(Object(i.a)(Object(i.a)({},e.data[0]),{},{id:t.target.id}))}))},handleDelete:$,handleClose:function(t){g.a.put("/api/issues/".concat(e.project),{open:"false"},{params:{id:t.target.id}}).then((function(t){A?R():g.a.get("/api/issues/".concat(e.project)).then((function(e){u(e.data)})).catch((function(e){return console.log(e)})),f({all:p.all,open:p.open-1,closed:p.closed+1})})).catch((function(e){console.log(e)}))}}):Object(C.jsx)("div",{className:"d-flex align-items-center justify-content-center text-center",style:{height:"50vh"},children:"No issues found."})}),Object(C.jsx)("div",{className:x.a.pagination,children:Object(C.jsx)(I,{issuesPerPage:W,totalIssues:d.length,paginate:function(e){Z(e)}})}),Object(C.jsx)("div",{className:"modal fade",id:"AddOrEdit",children:Object(C.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(C.jsxs)("div",{className:"modal-content",children:[Object(C.jsxs)("div",{className:"modal-body",children:[Object(C.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:"\xd7"}),Object(C.jsx)(v,{editForm:k,handleChange:U,handleSubmit:k?function(t){t.preventDefault(),g.a.put("/api/issues/".concat(e.project),Object(i.a)(Object(i.a)({},N),{},{project:e.project}),{params:{id:N.id}}).then((function(e){"Issue successfully edited."===e.data?(A?R():Q(),T(e.data),setTimeout((function(){T("")}),2500)):(T(e.data),setTimeout((function(){T("")}),2500))})).catch((function(e){return console.log(e)}))}:function(t){t.preventDefault(),g.a.post("/api/issues/".concat(e.project),Object(i.a)(Object(i.a)({},N),{},{confirm:!0,project:e.project})).then((function(e){"New issue added!"===e.data?(Q(),T(e.data),setTimeout((function(){T("")}),2500)):T(e.data[0])})).catch((function(e){return console.log(e)}))},message:D,title:te,description:ae,created_by:se,assigned_to:ne,status:ce})]}),Object(C.jsxs)("div",{className:"p-3",children:[D&&D.includes("edited")||D.includes("added")?Object(C.jsx)("span",{className:"float-left text-success",children:D}):D&&D.includes("at least 3 characters")?Object(C.jsx)("span",{className:"float-left text-danger",children:D}):null,Object(C.jsx)("button",{type:"button",className:"btn btn-outline-secondary float-right","data-dismiss":"modal",children:"Close"})]})]})})})]})},P=function(e){return Object(C.jsxs)("div",{className:_.a.bg,children:[Object(C.jsxs)("div",{className:_.a.leftPanel,id:"left-panel",children:[Object(C.jsx)("h1",{className:_.a.head,children:"issue tracker"}),Object(C.jsxs)("form",{className:"".concat(_.a.searchContainer," shadow"),onSubmit:e.handleProjectSearch,children:[Object(C.jsx)("input",{type:"text",onChange:e.handleSearchChange,placeholder:"Project name...",className:"form-control ".concat(_.a.searchBar)}),Object(C.jsx)("input",{className:"btn btn-primary",id:_.a.searchBtn,type:"submit",value:"Search"})]}),Object(C.jsx)("p",{className:_.a.message,children:e.message&&e.message.includes("does not exist")?e.message:""}),Object(C.jsxs)("div",{className:_.a.addBtn,children:[Object(C.jsx)("i",{className:"fas fa-folder-plus mr-2 text-primary"}),Object(C.jsx)("span",{className:_.a.btnText,onClick:e.handleViewForm,children:"Start a new issue"})]}),Object(C.jsx)("button",{onClick:e.handleToggle,type:"button",className:"btn btn-primary",id:_.a.newIssueBtn,children:"New Issue"})]}),e.viewForm?Object(C.jsx)("div",{className:_.a.modal,id:"modal-form",children:Object(C.jsx)("div",{className:_.a.formContainer,children:Object(C.jsx)(v,{newSubmit:!0,message:e.message,handleChange:e.handleFormChange,handleSubmit:e.handleSubmit,handleCloseForm:e.handleCloseForm})})}):null]})},L=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={confirm:!1,search:"",message:"",viewForm:!1},s.handleSearchChange=s.handleSearchChange.bind(Object(u.a)(s)),s.handleFormChange=s.handleFormChange.bind(Object(u.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(u.a)(s)),s.handleProjectSearch=s.handleProjectSearch.bind(Object(u.a)(s)),s.handleViewForm=s.handleViewForm.bind(Object(u.a)(s)),s.handleToggle=s.handleToggle.bind(Object(u.a)(s)),s.handleCloseForm=s.handleCloseForm.bind(Object(u.a)(s)),s}return Object(d.a)(a,[{key:"handleViewForm",value:function(){this.setState({viewForm:!0})}},{key:"handleToggle",value:function(){this.setState({viewForm:!0}),document.getElementById("left-panel").classList.add("d-none")}},{key:"handleCloseForm",value:function(){this.setState({viewForm:!1}),document.getElementById("left-panel").classList.remove("d-none")}},{key:"handleSearchChange",value:function(e){this.setState({search:e.target.value})}},{key:"handleProjectSearch",value:function(e){var t=this;e.preventDefault(),g.a.get("/search",{params:{project:this.state.search}}).then((function(e){e.data.length<1?(t.setState({message:"Project does not exist."}),setTimeout((function(){t.setState({message:""})}),3e3)):t.props.history.push("/projects-issues/".concat(t.state.search))}))}},{key:"handleFormChange",value:function(e){this.setState(Object(o.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),g.a.post("/api/issues/add",this.state).then((function(e){e.data.includes("exists.")?t.setState({message:e.data,confirm:!0}):e.data[0].includes("Issue title")?t.setState({message:e.data}):(t.props.history.push("/projects-issues/".concat(t.state.project)),t.setState({confirm:!1,message:""}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(C.jsxs)(h.c,{children:[Object(C.jsx)(h.a,{exact:!0,path:"/",render:function(t){return Object(C.jsx)(P,Object(i.a)(Object(i.a)({},t),{},{handleProjectSearch:e.handleProjectSearch,handleSearchChange:e.handleSearchChange,handleViewForm:e.handleViewForm,handleToggle:e.handleToggle,handleCloseForm:e.handleCloseForm,handleFormChange:e.handleFormChange,handleSubmit:e.handleSubmit,viewForm:e.state.viewForm,message:e.state.message}))}}),Object(C.jsx)(h.a,{exact:!0,path:"/projects-issues/:project",render:function(t){return Object(C.jsx)(E,Object(i.a)(Object(i.a)({},t),{},{project:e.state.search,handleFormChange:e.handleFormChange}))}})]})}}]),a}(n.a.Component),D=Object(h.g)(L),T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,83)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),s(e),n(e),c(e),l(e)}))},H=(a(76),a(77),a(18));l.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(H.a,{children:Object(C.jsx)(D,{})})}),document.getElementById("root")),T()}},[[81,1,2]]]);
//# sourceMappingURL=main.ed2a8ddc.chunk.js.map