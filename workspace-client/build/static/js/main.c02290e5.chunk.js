(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(e){e.exports={Api:{networkError:"Network error occurred",serverError:"Server error occurred"},Main:{title:"Todos"},Navigation:{todos:"Todos"},Todos:{Filter:{search:"Search..."},addNewTodo:"Add new",empty:"No todos found",loading:"Todos are loading...",notFoundDescription:"Todo not found",notFoundHeader:"Not found",unknownError:"Unknown error occurred"}}},172:function(e){e.exports={Api:{networkError:"Geen verbinding",serverError:"Er is een fout opgetreden op de server, probeer later opnieuw"},Main:{title:"Taken"},Navigation:{todos:"Taken"},Todos:{Filter:{search:"Zoeken..."},addNewTodo:"Taak toevoegen",empty:"Geen taken gevonden",loading:"Todos are loading...",notFoundDescription:"Taak niet gevonden",notFoundHeader:"Niet gevonden",refreshed:"De takenlijst is opnieuw opgehaald",unknownError:"Onbekende fout opgetreden"},Todo:{add:"Toevoegen",added:"De taak is toegevoegd",completed:"Voltooid",description:"Omschrijving",save:"Opslaan",notes:"Notities",remove:"Verwijderen",removed:"De taak is verwijderd",saved:"De taak is gewijzigd",title:"Taak"}}},235:function(e,t,n){e.exports=n(397)},397:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(32),i=n.n(o),c=n(37),s=n(45),d=n(20),u=n(53),l=n(16),p=n(11),h=n(12),m=n(14),f=n(13),b=n(15),g="todos/FETCH",E="todos/REFRESH",O=function(e){return{type:"todos/FETCH_FAILURE",payload:{message:e}}},j=function(){return{type:"todos/FETCH_REQUEST"}},v=function(e){return{type:"todos/FETCH_SUCCESS",payload:{todos:e}}},y=n(3),w=n(164),S=n.n(w),k=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleQueryChange=function(e){n.props.search(e.target.value)},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.isLoading,a=e.query,o=e.refresh;return r.a.createElement(y.k,{disablePadding:!0,className:t.filter},r.a.createElement(y.l,{divider:!0},r.a.createElement(y.r,{fullWidth:!0,label:l.a.t("Todos:Filter:search"),className:t.input,value:a,onChange:this.handleQueryChange}),r.a.createElement(y.j,{className:t.refreshIcon,onClick:o,disabled:n},r.a.createElement(S.a,null))))}}]),t}(a.PureComponent),x=Object(d.withStyles)(function(e){return{filter:{width:"100%",backgroundColor:e.palette.background.paper,borderRight:"1px solid ".concat(e.palette.divider)},input:{flex:1}}})(k),C=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(x,{isLoading:this.props.isLoading,query:this.props.query,refresh:this.props.refresh,search:this.props.search})}}]),t}(a.PureComponent),T=Object(c.b)(function(e){return{isLoading:e.todosState.meta.isLoading,query:e.todosState.filter.query}},{refresh:function(){return{type:E}},search:function(e){return{type:"todos/SEARCH",query:e}}})(C),A=n(165),N=Object(A.a)(function(e){return e},function(e,t){return t},function(e,t){return t?e.filter(function(e){return!!e.title.includes(t)||!!e.description.includes(t)}):e}),_=n(8),D=n.n(_),R=n(44),M=n(166),L=n.n(M),U=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.classes,a=t.todo,o=t.selected;return e=a.completed?r.a.createElement(y.b,{className:n.completed},r.a.createElement(L.a,null)):r.a.createElement(y.b,null," "),r.a.createElement(y.l,{divider:!0,button:!0,component:R.a,to:"/todos/".concat(a._id),className:D()(o&&n.active)},e,r.a.createElement(y.o,{primary:a.title,secondary:a.description}))}}]),t}(a.PureComponent),I=Object(d.withStyles)(function(e){return{active:{backgroundColor:e.palette.action.selected},completed:{backgroundColor:u.green[500]}}})(U),F=n(168),H=n.n(F),P=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(y.l,{button:!0,component:R.a,to:"/todos/new"},r.a.createElement(y.m,null,r.a.createElement(y.b,{className:e.addNewTodoIcon},r.a.createElement(H.a,null))),r.a.createElement(y.o,{primary:r.a.createElement(y.t,{variant:"subtitle1",className:e.addNewTodoText},l.a.t("Todos:addNewTodo"))}))}}]),t}(a.PureComponent),V=Object(d.withStyles)(function(e){return{content:{flex:"1",backgroundColor:e.palette.background.paper,borderRight:"1px solid ".concat(e.palette.divider),overflow:"scroll"},addNewTodoIcon:{backgroundColor:e.palette.primary.main},addNewTodoText:{color:e.palette.primary.main}}})(P),Q=n(28),q=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.message;return r.a.createElement("div",{className:t.loading},r.a.createElement(y.d,{size:50}),r.a.createElement(y.t,{className:t.loadingText},n))}}]),t}(a.PureComponent),B=Object(d.withStyles)(function(e){return{loading:Object(Q.a)({},e.mixins.gutters({paddingTop:16,paddingBottom:16,textAlign:"center"})),loadingText:{marginTop:16}}})(q),z=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.classes,a=t.todos,o=t.selectedTodoId;return t.isLoading?r.a.createElement(y.k,{className:n.content},r.a.createElement(B,{message:l.a.t("Todos:loading")})):(e=(e=0===a.length?[r.a.createElement(y.l,{divider:!0,key:"EmptyTodos"},r.a.createElement(y.o,{primary:l.a.t("Todos:empty")}))]:a.map(function(e){return r.a.createElement(I,{key:e._id,todo:e,selected:e._id===o})})).concat(r.a.createElement(V,{key:"AddNew"})),r.a.createElement(y.k,{disablePadding:!0,className:n.content},e))}}]),t}(a.PureComponent),G=Object(d.withStyles)(function(e){return{content:{flex:"1",width:"100%",backgroundColor:e.palette.background.paper,borderRight:"1px solid ".concat(e.palette.divider),overflow:"scroll"},addNewTodoIcon:{backgroundColor:e.palette.primary.main},addNewTodoText:{color:e.palette.primary.main}}})(z),J=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(G,{selectedTodoId:this.props.selectedId,todos:this.props.todos,isLoading:this.props.isLoading})}}]),t}(a.PureComponent),W=Object(c.b)(function(e){return{todos:N(e.todosState.todos,e.todosState.filter.query),isLoading:e.todosState.meta.isLoading}})(J),Y=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.selectedId;return r.a.createElement(y.h,{container:!0,className:t.container},r.a.createElement(T,null),r.a.createElement(W,{selectedId:n}))}}]),t}(a.PureComponent),X=Object(d.withStyles)(function(e){return{container:{height:"100%",backgroundColor:e.palette.background.default,display:"flex",flexDirection:"column"}}})(Y),Z=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.selectedId;return r.a.createElement(X,{selectedId:e})}}]),t}(a.PureComponent),K="todo/ADD",$="todo/FETCH",ee="todo/REMOVE",te="todo/SAVE",ne=function(e,t){return{type:"todo/FETCH_FAILURE",meta:{_id:e},payload:{message:t},error:!0}},ae=function(e){return{type:"todo/FETCH_REQUEST",meta:{_id:e}}},re=function(e){return{type:"todo/FETCH_SUCCESS",payload:{todo:e}}},oe=function(e){return{type:"todo/ADD_FAILURE",payload:{message:e},error:!0}},ie=function(){return{type:"todo/ADD_REQUEST"}},ce=function(e){return{type:"todo/ADD_SUCCESS",payload:{todo:e}}},se=function(e,t){return{type:"todo/SAVE_FAILURE",meta:{_id:e},payload:{message:t},error:!0}},de=function(e){return{type:"todo/SAVE_REQUEST",meta:{_id:e}}},ue=function(e){return{type:"todo/SAVE_SUCCESS",payload:{todo:e}}},le=function(e,t){return{type:"todo/REMOVE_FAILURE",meta:{_id:e},payload:{message:t},error:!0}},pe=function(e){return{type:"todo/REMOVE_REQUEST",meta:{_id:e}}},he=function(e){return{type:"todo/REMOVE_SUCCESS",meta:{_id:e}}},me=function(e){return{type:"todo/MODIFY",todo:e}},fe=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.description,a=e.notes,o=e.changeTitle,i=e.changeDescription,c=e.changeNotes;return r.a.createElement(y.k,{disablePadding:!0},r.a.createElement(y.l,null,r.a.createElement(y.r,{fullWidth:!0,label:l.a.t("Todo:title"),value:t,onChange:o})),r.a.createElement(y.l,null,r.a.createElement(y.r,{fullWidth:!0,label:l.a.t("Todo:description"),value:n,onChange:i})),r.a.createElement(y.l,null,r.a.createElement(y.r,{fullWidth:!0,multiline:!0,label:l.a.t("Todo:notes"),value:a,onChange:c})))}}]),t}(a.PureComponent),be=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleTitleChange=function(e){(0,n.props.modify)({title:e.target.value})},n.handleDescriptionChange=function(e){(0,n.props.modify)({description:e.target.value})},n.handleNotesChange=function(e){(0,n.props.modify)({notes:e.target.value})},n.handleAddClick=function(){(0,n.props.add)()},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.todo,a=e.isAdding;return r.a.createElement("div",{className:t.rootContainer},r.a.createElement(y.p,null,r.a.createElement(fe,{disabled:a,title:n.title,description:n.description,notes:n.notes,changeTitle:this.handleTitleChange,changeDescription:this.handleDescriptionChange,changeNotes:this.handleNotesChange}),r.a.createElement(y.e,null),r.a.createElement(y.l,{justify:"flex-end"},r.a.createElement(y.h,{container:!0,justify:"flex-end"},r.a.createElement(y.c,{variant:"contained",color:"primary",onClick:this.handleAddClick,className:t.button,disabled:a},l.a.t("Todo:add"))))))}}]),t}(a.PureComponent),ge=Object(d.withStyles)(function(e){return{rootContainer:Object(Q.a)({},e.mixins.gutters(),{height:"100%",paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit,backgroundColor:e.palette.background.default,overflow:"scroll"}),button:{margin:e.spacing.unit}}})(be),Ee=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.clear)()}},{key:"render",value:function(){var e=this.props,t=e.todo,n=e.isAdding,a=e.add,o=e.modify;return r.a.createElement(ge,{todo:t,isAdding:n,add:a,modify:o})}}]),t}(a.PureComponent),Oe=Object(c.b)(function(e){return{todo:e.todoState.todo,isAdding:e.todoState.meta.isAdding}},{clear:function(){return{type:"todo/CLEAR"}},add:function(){return{type:K}},modify:me})(Ee),je=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleTitleChange=function(e){(0,n.props.modify)({title:e.target.value})},n.handleDescriptionChange=function(e){(0,n.props.modify)({description:e.target.value})},n.handleNotesChange=function(e){(0,n.props.modify)({notes:e.target.value})},n.handleSaveClick=function(){(0,n.props.save)()},n.handleRemoveClick=function(){(0,n.props.remove)()},n.handleCompletedChange=function(e){(0,n.props.modify)({completed:e.target.checked})},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.todo,a=e.meta,o=!a.isLoaded||a.isLoading||a.isSaving;return r.a.createElement("div",{className:t.rootContainer},r.a.createElement(y.p,null,r.a.createElement(fe,{disabled:o,title:n.title,description:n.description,notes:n.notes,changeTitle:this.handleTitleChange,changeDescription:this.handleDescriptionChange,changeNotes:this.handleNotesChange}),r.a.createElement(y.e,null),r.a.createElement(y.l,{justify:"space-between"},r.a.createElement(y.g,{control:r.a.createElement(y.q,{checked:n.completed,onChange:this.handleCompletedChange,color:"primary"}),label:l.a.t("Todo:completed")}),r.a.createElement(y.h,{container:!0,justify:"flex-end"},r.a.createElement(y.h,{item:!0},r.a.createElement(y.c,{variant:"contained",color:"secondary",onClick:this.handleRemoveClick,className:t.button,disabled:o},l.a.t("Todo:remove"))),r.a.createElement(y.h,{item:!0},r.a.createElement(y.c,{variant:"contained",color:"primary",onClick:this.handleSaveClick,className:t.button,disabled:o},l.a.t("Todo:save")))))))}}]),t}(a.PureComponent),ve=Object(d.withStyles)(function(e){return{rootContainer:Object(Q.a)({},e.mixins.gutters(),{height:"100%",paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit,backgroundColor:e.palette.background.default,overflow:"scroll",boxSizing:"border-box"}),button:{margin:e.spacing.unit}}})(je),ye=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.selectedId,n=e.fetch;t&&n(t)}},{key:"render",value:function(){var e=this.props,t=e.selectedId,n=e.todo,a=e.meta,o=e.save,i=e.remove,c=e.modify;return t?r.a.createElement(ve,{todo:n,meta:a,save:o,remove:i,modify:c}):null}}]),t}(a.PureComponent),we=Object(c.b)(function(e){return{todo:e.todoState.todo,meta:e.todoState.meta}},{fetch:function(e){return{type:$,meta:{_id:e}}},save:function(){return{type:te}},remove:function(){return{type:ee}},modify:me})(ye),Se=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.classes,a=t.selectedId;return t.isNew?e=r.a.createElement(Oe,{key:a}):a&&(e=r.a.createElement(we,{key:a,selectedId:a})),r.a.createElement(y.h,{container:!0,className:n.fullHeight},r.a.createElement(y.i,{smDown:!!e},r.a.createElement(y.h,{item:!0,md:4,xs:12,className:n.fullHeight},r.a.createElement(Z,{selectedId:a}))),r.a.createElement(y.i,{smDown:!e},r.a.createElement(y.h,{item:!0,md:8,xs:12,className:n.fullHeight},e)))}}]),t}(a.PureComponent),ke=Object(d.withStyles)({fullHeight:{height:"100%"}})(Se),xe=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.fetch)()}},{key:"render",value:function(){return r.a.createElement(ke,{selectedId:this.props.selectedId,isNew:this.props.isNew})}}]),t}(a.PureComponent),Ce=Object(c.b)(function(e,t){return{selectedId:t.match.params.id,isNew:"new"===t.match.params.id}},{fetch:function(){return{type:g}}})(xe),Te=n(83),Ae=n.n(Te),Ne=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.isSideMenuOpen,a=e.showSideMenu;return r.a.createElement(y.a,{position:"absolute",className:D()(t.appBar,n&&t.appBarShift)},r.a.createElement(y.s,null,r.a.createElement(y.j,{className:D()(t.menuButton,n&&t.hide),color:"inherit",onClick:a},r.a.createElement(Ae.a,null)),r.a.createElement(y.t,{variant:"h6",color:"inherit",className:t.flex},l.a.t("Main:title"))))}}]),t}(a.PureComponent),_e=Object(d.withStyles)(function(e){return{flex:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:250,width:"calc(100% - ".concat(250,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},hide:{display:"none"}}})(Ne),De=n(169),Re=n.n(De),Me=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.isSideMenuOpen,o=e.hideSideMenu,i=r.a.createElement(y.k,{component:"nav",onClick:o,className:t.menuList},r.a.createElement(y.l,{divider:!0,className:t.menuHeader},r.a.createElement(y.o,null,r.a.createElement(y.t,{variant:"h6"},l.a.t("Main:title"))),r.a.createElement(y.n,null,r.a.createElement(y.j,{className:t.menuIcon},r.a.createElement(Ae.a,null)))),r.a.createElement(y.l,{button:!0,component:R.a,to:"/todos"},r.a.createElement(y.j,{className:t.menuIcon},r.a.createElement(Re.a,null)),r.a.createElement(y.o,{primary:l.a.t("Navigation:todos")})));return r.a.createElement(a.Fragment,null,r.a.createElement(y.i,{xsDown:!0},r.a.createElement(y.f,{variant:"permanent",classes:{paper:D()(t.drawerPaper,!n&&t.drawerPaperClose)},open:n,onClose:o,ModalProps:{keepMounted:!0}},i)),r.a.createElement(y.i,{smUp:!0},r.a.createElement(y.f,{variant:"temporary",classes:{paper:D()(t.drawerPaper,!n&&t.drawerPaperClose)},open:n,onClose:o,ModalProps:{keepMounted:!0}},i)))}}]),t}(a.PureComponent),Le=Object(d.withStyles)(function(e){return{menuList:{width:250,paddingTop:0,flex:1},menuHeader:{"@media (min-width:0px) and (orientation: landscape)":{height:e.mixins.toolbar["@media (min-width:0px) and (orientation: landscape)"].minHeight},"@media (min-width:600px)":{height:e.mixins.toolbar["@media (min-width:600px)"].minHeight},height:e.mixins.toolbar.minHeight},menuIcon:{marginLeft:-8},drawerPaper:{position:"relative",display:"flex",overflow:"hidden",flexDirection:"column",whiteSpace:"nowrap",width:250,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:{overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:8*e.spacing.unit}}})(Me),Ue=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={isSideMenuOpen:!1},n.handleShowSideMenu=function(){n.setState({isSideMenuOpen:!0})},n.handleHideSideMenu=function(){n.setState({isSideMenuOpen:!1})},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.isSideMenuOpen;return r.a.createElement(a.Fragment,null,r.a.createElement(_e,{isSideMenuOpen:e,showSideMenu:this.handleShowSideMenu}),r.a.createElement(Le,{hideSideMenu:this.handleHideSideMenu,isSideMenuOpen:e,showSideMenu:this.handleShowSideMenu}))}}]),t}(a.PureComponent),Ie=n(80),Fe=n.n(Ie),He=n(67),Pe=n.n(He),Ve=n(170),Qe=n.n(Ve),qe=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,notification:{}},n.handleClose=function(){n.setState({open:!1})},n.handleExited=function(){n.props.shift()},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props.notifications,t=this.state,n=t.open,a=t.notification;e.length>1&&n?this.setState({open:!1}):e.length>0&&e[0].key!==a.key&&this.setState({open:!0,notification:e[0]})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.notification,a=t.open,o=n.key,i=n.message;return r.a.createElement(Fe.a,{key:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:a,autoHideDuration:6e3,onClose:this.handleClose,onExited:this.handleExited,message:r.a.createElement("span",{id:"message-id"},i),action:[r.a.createElement(Pe.a,{key:"close","aria-label":"Close",color:"inherit",className:e.close,onClick:this.handleClose},r.a.createElement(Qe.a,null))]})}}]),t}(r.a.Component),Be=Object(d.withStyles)(function(e){return{close:{padding:e.spacing.unit/2}}})(qe),ze="notifications/SHIFT",Ge=function(e){return{type:"notifications/ADD",notification:e}},Je=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(Be,{notifications:this.props.notifications,shift:this.props.shift})}}]),t}(a.PureComponent),We=Object(c.b)(function(e){return{notifications:e.notificationsState.notifications}},{shift:function(){return{type:ze}}})(Je),Ye=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes;return r.a.createElement("div",{className:n.root},r.a.createElement(Ue,null),r.a.createElement(We,null),r.a.createElement("div",{className:n.content},t))}}]),t}(a.PureComponent),Xe=Object(d.withStyles)(function(e){return{root:{overflow:"hidden",position:"absolute",display:"flex",top:0,right:0,bottom:0,left:0,flexGrow:1},content:{"@media (min-width:0px) and (orientation: landscape)":{marginTop:e.mixins.toolbar["@media (min-width:0px) and (orientation: landscape)"].minHeight},"@media (min-width:600px)":{marginTop:e.mixins.toolbar["@media (min-width:600px)"].minHeight},marginTop:e.mixins.toolbar.minHeight,flexGrow:1}}})(Ye),Ze=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(Xe,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/"},r.a.createElement(s.a,{to:"/todos"})),r.a.createElement(s.b,{exact:!0,path:"/todos/:id?",component:Ce})))}}]),t}(a.PureComponent),Ke=Object(s.f)(Ze),$e={en:n(171),nl:n(172)},et=n(33),tt=n(173),nt=Object(et.c)({notifications:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"notifications/ADD":return e.concat(Object(Q.a)({},t.notification,{key:(new Date).getTime()}));case ze:return e.filter(function(e,t){return 0!==t});default:return e}}}),at={isInitial:!0,isLoading:!1,error:""},rt={query:""},ot=Object(et.c)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"todos/FETCH_SUCCESS":return t.payload.todos;case"todo/SAVE_SUCCESS":return e.map(function(e){return e._id===t.payload.todo._id?t.payload.todo:e});case"todo/ADD_SUCCESS":return e.concat(t.payload.todo);case"todo/REMOVE_SUCCESS":return e.filter(function(e){return e._id!==t.meta._id});default:return e}},meta:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"todos/FETCH_REQUEST":return Object(Q.a)({},e,{isInitial:!1,isLoading:!0,error:""});case"todos/FETCH_SUCCESS":return Object(Q.a)({},e,{isLoading:!1});case"todos/FETCH_FAILURE":return Object(Q.a)({},e,{isLoading:!1,error:t.payload.message});default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"todos/SEARCH":return Object(Q.a)({},e,{query:t.query});default:return e}}}),it={title:"",description:"",notes:"",completed:!1},ct={isLoading:!1,isLoaded:!1,isSaving:!1,isAdding:!1,isRemoving:!1,error:""},st=Object(et.c)({todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:case"todo/CLEAR":return it;case"todo/FETCH_SUCCESS":case"todo/SAVE_SUCCESS":return t.payload.todo;case"todo/REMOVE_SUCCESS":return it;case"todo/MODIFY":return Object(Q.a)({},e,t.todo);default:return e}},meta:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return ct;case"todo/FETCH_REQUEST":return Object(Q.a)({},e,{isLoading:!0});case"todo/FETCH_SUCCESS":return Object(Q.a)({},e,{isLoading:!1,isLoaded:!0});case"todo/FETCH_FAILURE":return Object(Q.a)({},e,{isLoading:!1,error:t.payload.message});case"todo/SAVE_REQUEST":return Object(Q.a)({},e,{isSaving:!0,error:""});case"todo/SAVE_SUCCESS":return Object(Q.a)({},e,{isSaving:!1});case"todo/SAVE_FAILURE":return Object(Q.a)({},e,{isSaving:!1,error:t.payload.message});case"todo/ADD_REQUEST":return Object(Q.a)({},e,{isAdding:!0,error:""});case"todo/ADD_SUCCESS":return Object(Q.a)({},e,{isAdding:!1});case"todo/ADD_FAILURE":return Object(Q.a)({},e,{isAdding:!1,error:t.payload.message});case"todo/REMOVE_REQUEST":return Object(Q.a)({},e,{isRemoving:!0,error:""});case"todo/REMOVE_SUCCESS":return Object(Q.a)({},e,{isRemoving:!1});case"todo/REMOVE_FAILURE":return Object(Q.a)({},e,{isRemoving:!1,error:t.payload.message});default:return e}}}),dt=Object(et.c)({notificationsState:nt,todosState:ot,todoState:st}),ut=n(27),lt=n.n(ut),pt=n(17),ht=n(54),mt=function(e){return"/api/todos/".concat(e)},ft=function(){var e=Object(ht.a)(lt.a.mark(function e(){var t;return lt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/todos");case 3:t=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error(l.a.t("Api:networkError"));case 9:if(t.ok){e.next=13;break}throw new Error(l.a.t("Api:serverError"));case 13:return e.abrupt("return",t.json());case 14:case"end":return e.stop()}},e,null,[[0,6]])}));return function(){return e.apply(this,arguments)}}(),bt=function(){var e=Object(ht.a)(lt.a.mark(function e(t){var n;return lt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(mt(t));case 3:n=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error(l.a.t("Api:networkError"));case 9:if(n.ok){e.next=13;break}throw new Error(l.a.t("Api:serverError"));case 13:return e.abrupt("return",n.json());case 14:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),gt=function(){var e=Object(ht.a)(lt.a.mark(function e(t){var n;return lt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:n=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error(l.a.t("Api:networkError"));case 9:if(n.ok){e.next=13;break}throw new Error(l.a.t("Api:serverError"));case 13:return e.abrupt("return",n.json());case 14:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),Et=function(){var e=Object(ht.a)(lt.a.mark(function e(t){var n;return lt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(mt(t._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:n=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error(l.a.t("Api:networkError"));case 9:if(n.ok){e.next=13;break}throw new Error(l.a.t("Api:serverError"));case 13:return e.abrupt("return",n.json());case 14:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),Ot=function(){var e=Object(ht.a)(lt.a.mark(function e(t){var n;return lt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(mt(t),{method:"DELETE"});case 3:n=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error(l.a.t("Api:networkError"));case 9:if(n.ok){e.next=11;break}throw new Error(l.a.t("Api:serverError"));case 11:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),jt=lt.a.mark(yt),vt=lt.a.mark(wt);function yt(){var e,t,n;return lt.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,Object(pt.f)([g,E]);case 3:return e=a.sent,a.next=6,Object(pt.d)(j());case 6:return a.prev=6,a.next=9,Object(pt.b)(ft);case 9:return t=a.sent,a.next=12,Object(pt.d)(v(t));case 12:if(e.type!==E){a.next=15;break}return a.next=15,Object(pt.d)(Ge({message:l.a.t("Todos:refreshed")}));case 15:a.next=24;break;case 17:return a.prev=17,a.t0=a.catch(6),n=a.t0&&a.t0.message?a.t0.message:l.a.t("Todos:unknownError"),a.next=22,Object(pt.d)(O(n));case 22:return a.next=24,Object(pt.d)(Ge({message:n}));case 24:a.next=0;break;case 26:case"end":return a.stop()}},jt,null,[[6,17]])}function wt(){return lt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(pt.a)([yt].map(function(e){return Object(pt.c)(e)}));case 2:case"end":return e.stop()}},vt)}var St=n(39),kt=Object(St.a)(),xt=lt.a.mark(_t),Ct=lt.a.mark(Dt),Tt=lt.a.mark(Rt),At=lt.a.mark(Mt),Nt=lt.a.mark(Lt);function _t(){var e,t,n;return lt.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,Object(pt.f)($);case 3:return e=a.sent,a.next=6,Object(pt.d)(ae(e.meta._id));case 6:return a.prev=6,a.next=9,Object(pt.b)(bt,e.meta._id);case 9:return t=a.sent,a.next=12,Object(pt.d)(re(t));case 12:a.next=22;break;case 14:return a.prev=14,a.t0=a.catch(6),n=a.t0&&a.t0.message?a.t0.message:l.a.t("Todos:unknownError"),a.next=19,Object(pt.d)(ne(e.meta._id,n));case 19:return kt.push("/"),a.next=22,Object(pt.d)(Ge({message:n}));case 22:a.next=0;break;case 24:case"end":return a.stop()}},xt,null,[[6,14]])}function Dt(){var e,t,n;return lt.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,Object(pt.f)(K);case 3:return a.next=5,Object(pt.e)(function(e){return e.todoState.todo});case 5:return e=a.sent,a.next=8,Object(pt.d)(ie());case 8:return a.prev=8,a.next=11,Object(pt.b)(gt,e);case 11:return t=a.sent,a.next=14,Object(pt.d)(ce(t));case 14:return kt.push("/todos/".concat(t._id)),a.next=17,Object(pt.d)(Ge({message:l.a.t("Todo:added")}));case 17:a.next=26;break;case 19:return a.prev=19,a.t0=a.catch(8),n=a.t0&&a.t0.message?a.t0.message:l.a.t("Todos:unknownError"),a.next=24,Object(pt.d)(oe(n));case 24:return a.next=26,Object(pt.d)(Ge({message:n}));case 26:a.next=0;break;case 28:case"end":return a.stop()}},Ct,null,[[8,19]])}function Rt(){var e,t,n;return lt.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,Object(pt.f)(te);case 3:return a.next=5,Object(pt.e)(function(e){return e.todoState.todo});case 5:return e=a.sent,a.next=8,Object(pt.d)(de());case 8:return a.prev=8,a.next=11,Object(pt.b)(Et,e);case 11:return t=a.sent,a.next=14,Object(pt.d)(ue(t));case 14:return a.next=16,Object(pt.d)(Ge({message:l.a.t("Todo:saved")}));case 16:a.next=25;break;case 18:return a.prev=18,a.t0=a.catch(8),n=a.t0&&a.t0.message?a.t0.message:l.a.t("Todos:unknownError"),a.next=23,Object(pt.d)(se(e._id,n));case 23:return a.next=25,Object(pt.d)(Ge({message:n}));case 25:a.next=0;break;case 27:case"end":return a.stop()}},Tt,null,[[8,18]])}function Mt(){var e,t;return lt.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(pt.f)(ee);case 3:return n.next=5,Object(pt.e)(function(e){return e.todoState.todo});case 5:return e=n.sent,n.next=8,Object(pt.d)(pe(e._id));case 8:return n.prev=8,n.next=11,Object(pt.b)(Ot,e._id);case 11:return n.next=13,Object(pt.d)(he(e._id));case 13:return kt.push("/"),n.next=16,Object(pt.d)(Ge({message:l.a.t("Todo:removed")}));case 16:n.next=25;break;case 18:return n.prev=18,n.t0=n.catch(8),t=n.t0&&n.t0.message?n.t0.message:l.a.t("Todos:unknownError"),n.next=23,Object(pt.d)(le(e._id,t));case 23:return n.next=25,Object(pt.d)(Ge({message:t}));case 25:n.next=0;break;case 27:case"end":return n.stop()}},At,null,[[8,18]])}function Lt(){return lt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(pt.a)([_t,Dt,Rt,Mt].map(function(e){return Object(pt.c)(e)}));case 2:case"end":return e.stop()}},Nt)}var Ut=lt.a.mark(It);function It(){return lt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(pt.a)([wt,Lt].map(function(e){return Object(pt.c)(e)}));case 2:case"end":return e.stop()}},Ut)}var Ft=It,Ht=function(){var e=Object(tt.a)(),t=Object(et.d)(Object(et.a)(e)),n=Object(et.e)(dt,t);return e.run(Ft),n};l.a.init({lng:"nl",fallbackLng:"en",resources:$e});var Pt=Object(d.createMuiTheme)({palette:{primary:u.blue},typography:{useNextVariants:!0}}),Vt=Ht(kt);i.a.render(r.a.createElement(c.a,{store:Vt},r.a.createElement(d.MuiThemeProvider,{theme:Pt},r.a.createElement(s.c,{history:kt},r.a.createElement(Ke,null)))),document.getElementById("root"))}},[[235,1,2]]]);
//# sourceMappingURL=main.c02290e5.chunk.js.map