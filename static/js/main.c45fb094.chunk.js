(this["webpackJsonptask-management"]=this["webpackJsonptask-management"]||[]).push([[0],[,,,,,,,function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(9),l=a.n(i),r=(a(14),a(6)),o=a(2),m=a(3),c=a(1),u=a(5),b=a(4),h=(a(15),a(16),function(e){var t=e.onRouteChange;return e.isSignedIn?s.a.createElement("nav",{className:"nav-bar"},s.a.createElement("h1",{className:"logo"},"TaskIT"),s.a.createElement("ul",{className:"main-nav"},s.a.createElement("li",{className:"link dim pointer",onClick:function(){return t("signin")}},"Log Out"))):s.a.createElement("nav",{className:"nav-bar"},s.a.createElement("h1",{className:"logo"},"TaskIT"),s.a.createElement("ul",{className:"main-nav"},s.a.createElement("li",{className:"link dim pointer mr4",onClick:function(){return t("signin")}},"Sign In"),s.a.createElement("li",{className:"link dim pointer",onClick:function(){return t("resgister")}},"Register")))}),d=function(e){var t=e.name;return s.a.createElement("div",{className:"f3 mv2"},"Hello ".concat(t,", nice to have you back :)"))},p=(a(7),function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isAddAnotherTaskOn:!1,title:""},n.onInputChange=n.onInputChange.bind(Object(c.a)(n)),n.onClickAddAnotherTask=n.onClickAddAnotherTask.bind(Object(c.a)(n)),n.onSubmitForm=n.onSubmitForm.bind(Object(c.a)(n)),n.onClickX=n.onClickX.bind(Object(c.a)(n)),n}return Object(m.a)(a,[{key:"onInputChange",value:function(e){this.setState({title:e.target.value})}},{key:"onClickAddAnotherTask",value:function(){this.setState({isAddAnotherTaskOn:!0})}},{key:"onClickX",value:function(){this.setState({isAddAnotherTaskOn:!1})}},{key:"onSubmitForm",value:function(e){e.preventDefault(),this.props.onSubmitNewTask(this.state.title,this.props.list_id),this.setState({isAddAnotherTaskOn:!1,title:""})}},{key:"render",value:function(){return s.a.createElement("div",null,!1===this.state.isAddAnotherTaskOn?s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("button",{onClick:this.onClickAddAnotherTask,type:"button",className:"f7 link dim br2 pa1 ml3 dib black"},"+ Add another task"))):s.a.createElement("form",{onSubmit:this.onSubmitForm,className:"br2"},s.a.createElement("div",{className:"br2 container"},s.a.createElement("div",{className:"item1"},s.a.createElement("input",{className:"f6 pa1 w-100",type:"text",placeholder:"Enter task title",onChange:this.onInputChange})),s.a.createElement("div",{className:"item2"},s.a.createElement("button",{className:"f7 mv1 pa1 br2 dim bg-green",type:"submit"},"Submit")),s.a.createElement("div",{className:"f6 pa1 br2 dim bg-grey black item3"},s.a.createElement("button",{onClick:this.onClickX},"X")))))}}]),a}(n.Component)),g=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onInputChange=function(e){n.setState({title:e.target.value})},n.onClickAddAnotherList=function(){n.setState({isAddAnotherListOn:!0})},n.onclickX=function(){n.setState({isAddAnotherListOn:!1})},n.onSubmitForm=function(e){e.preventDefault(),n.props.onSubmitNewList(n.state.title),n.setState({isAddAnotherListOn:!1,title:""})},n.state={isAddAnotherListOn:!1,title:""},n.onInputChange=n.onInputChange.bind(Object(c.a)(n)),n.onClickAddAnotherList=n.onClickAddAnotherList.bind(Object(c.a)(n)),n.onSubmitForm=n.onSubmitForm.bind(Object(c.a)(n)),n.onclickX=n.onclickX.bind(Object(c.a)(n)),n}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,!1===this.state.isAddAnotherListOn?s.a.createElement("div",{className:""},s.a.createElement("button",{onClick:this.onClickAddAnotherList,type:"button",className:"f7 link dim br2 pa1 ml3 dib black"},"+ Add another list")):s.a.createElement("form",{onSubmit:this.onSubmitForm,className:"br2"},s.a.createElement("div",{className:"br2 container bg-moon-gray"},s.a.createElement("div",{className:"item1"},s.a.createElement("input",{className:"f6 pa1 w-100",type:"text",placeholder:"Enter list title",onChange:this.onInputChange})),s.a.createElement("div",{className:"item2"},s.a.createElement("button",{className:"f7 mv1 pa1 br2 dim bg-green",type:"submit"},"Submit")),s.a.createElement("div",{className:"f6 pa1 br2 dim bg-grey black item3"},s.a.createElement("button",{onClick:this.onclickX},"X")))))}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isChangeListNameOn:!1,title:""},n.onInputChange=n.onInputChange.bind(Object(c.a)(n)),n.onClickChangeListName=n.onClickChangeListName.bind(Object(c.a)(n)),n.onSubmitForm=n.onSubmitForm.bind(Object(c.a)(n)),n.onClickX=n.onClickX.bind(Object(c.a)(n)),n}return Object(m.a)(a,[{key:"onInputChange",value:function(e){this.setState({title:e.target.value})}},{key:"onClickChangeListName",value:function(){this.setState({isChangeListNameOn:!0})}},{key:"onClickX",value:function(){this.setState({isChangeListNameOn:!1})}},{key:"onSubmitForm",value:function(e){e.preventDefault(),this.props.onSubmitChangeListName(this.state.title,this.props.list_id),this.setState({isChangeListNameOn:!1,title:""})}},{key:"render",value:function(){return s.a.createElement("div",null,!1===this.state.isChangeListNameOn?s.a.createElement("div",null,s.a.createElement("button",{type:"button",onClick:this.onClickChangeListName,className:"f7 link dim br2 pa1 ml3 dib black bg-grey"},"change list name")):s.a.createElement("form",{onSubmit:this.onSubmitForm,className:"br2"},s.a.createElement("div",{className:"br2 container"},s.a.createElement("div",{className:"item1"},s.a.createElement("input",{className:"f6 pa1 w-100",type:"text",placeholder:"Enter new list title",onChange:this.onInputChange})),s.a.createElement("div",{className:"item2"},s.a.createElement("button",{className:"f7 mv1 pa1 br2 dim bg-green",type:"submit"},"Submit")),s.a.createElement("div",{className:"f6 pa1 br2 dim bg-grey black item3"},s.a.createElement("button",{onClick:this.onClickX},"X")))))}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isChangeTaskNameOn:!1,title:""},n.onInputChange=n.onInputChange.bind(Object(c.a)(n)),n.onClickChangeTaskName=n.onClickChangeTaskName.bind(Object(c.a)(n)),n.onSubmitForm=n.onSubmitForm.bind(Object(c.a)(n)),n.onClickX=n.onClickX.bind(Object(c.a)(n)),n}return Object(m.a)(a,[{key:"onInputChange",value:function(e){this.setState({title:e.target.value})}},{key:"onClickChangeTaskName",value:function(){this.setState({isChangeTaskNameOn:!0})}},{key:"onClickX",value:function(){this.setState({isChangeTaskNameOn:!1})}},{key:"onSubmitForm",value:function(e){e.preventDefault(),this.props.onSubmitChangeTaskName(this.state.title,this.props.task_id),this.setState({isChangeTaskNameOn:!1,title:""})}},{key:"render",value:function(){return s.a.createElement("div",null,!1===this.state.isChangeTaskNameOn?s.a.createElement("div",null,s.a.createElement("button",{type:"button",onClick:this.onClickChangeTaskName,className:"f7 link dim br2 pa1 ml3 dib black"},"change task name")):s.a.createElement("form",{onSubmit:this.onSubmitForm,className:"br2"},s.a.createElement("div",{className:"br2 container"},s.a.createElement("div",{className:"item1"},s.a.createElement("input",{className:"f7 pa1 w-100",type:"text",placeholder:"Enter new task title",onChange:this.onInputChange})),s.a.createElement("div",{className:"item2"},s.a.createElement("button",{className:"f7 mv1 pa1 br2 dim bg-green",type:"submit"},"Submit")),s.a.createElement("div",{className:"f6 pa1 br2 dim bg-grey black item3"},s.a.createElement("button",{onClick:this.onClickX},"X")))))}}]),a}(n.Component),N=(a(17),function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"onSubmitNewList",value:function(e){this.props.SubmitNewList(e)}},{key:"onSubmitNewTask",value:function(e,t){this.props.SubmitNewTask(e,t)}},{key:"onSubmitChangeListName",value:function(e,t){this.props.SubmitNewListName(e,t)}},{key:"onSubmitChangeTaskName",value:function(e,t){this.props.SubmitNewTaskName(e,t)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"flex"},s.a.createElement("ul",{className:"flex"},this.props.lists.map((function(t,a){return s.a.createElement("div",{key:t.list_id,className:"mh2 br2"},s.a.createElement("li",{className:"flex-column list br2"},s.a.createElement("div",{className:"mb1"},t.title,s.a.createElement("button",{type:"button",onClick:function(){return e.props.deleteList(t.list_id)},className:"f7 link dim br2 pa1 ml3 dib white bg-red"},"delete"),s.a.createElement(k,{onSubmitChangeListName:e.onSubmitChangeListName.bind(e),list_id:t.list_id})),s.a.createElement("ul",{className:"flex flex-column"},e.props.tasks.map((function(a){return a.list_id===t.list_id?s.a.createElement("li",{key:a.task_id,className:"task br2 mh2 mb1"},a.title,s.a.createElement("button",{type:"button",onClick:function(){return e.props.deleteTask(a.task_id)},className:"f7 link dim br2 pa1 ml3 dib white bg-red"},"delete"),s.a.createElement(f,{className:"mh2 pa0",onSubmitChangeTaskName:e.onSubmitChangeTaskName.bind(e),list_id:t.list_id,task_id:a.task_id})):null})),s.a.createElement("div",{id:a,className:"task br2 mh2 mb2 pt1"},s.a.createElement(p,{onSubmitNewTask:e.onSubmitNewTask.bind(e),list_id:t.list_id})))))}))),s.a.createElement(g,{onSubmitNewList:this.onSubmitNewList.bind(this)}))}}]),a}(n.Component)),v=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("http://localhost:3000/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){if("wrong credentials"===e)return console.log("wrong credentials");e.first_name&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={signInEmail:"",signInPassword:""},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80 center"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{onClick:function(){return e.props.onRouteChange("register")},className:"f6 link dim black pointer db"},"Register")))))}}]),a}(n.Component),C=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onFirstNameChange=function(e){n.setState({first_name:e.target.value})},n.onLastNameChange=function(e){n.setState({last_name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onSubmitRegister=function(){fetch("http://localhost:3000/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.email,password:n.state.password,first_name:n.state.first_name,last_name:n.state.last_name})}).then((function(e){return e.json()})).then((function(e){n.props.loadUser(e),n.props.onRouteChange("home")}))},n.state={email:"",password:"",first_name:"",last_name:""},n}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80 center"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"First Name"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"first_name",id:"first_name",onChange:this.onFirstNameChange})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Last Name"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"last_name",id:"last_name",onChange:this.onLastNameChange})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitRegister,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),a}(n.Component),E={route:"signin",isSignedIn:!1,user:{first_name:"",last_name:"",email:"",lists:[],tasks:[],joined:""}},S=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onRouteChange=function(t){"signin"===t||"register"===t?e.setState(E):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.loadUser=function(t){e.setState({user:{first_name:t.first_name,last_name:t.last_name,email:t.email,lists:t.lists,tasks:t.tasks}})},e.SubmitNewList=function(t){fetch("http://localhost:3000/lists",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.user.email,title:t})}).then((function(e){return e.json()})).then((function(t){e.setState({user:Object(r.a)(Object(r.a)({},e.state.user),{},{lists:t})})}))},e.SubmitNewTask=function(t,a){fetch("http://localhost:3000/tasks",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.user.email,title:t,list_id:a})}).then((function(e){return e.json()})).then((function(t){e.setState({user:Object(r.a)(Object(r.a)({},e.state.user),{},{tasks:t})})}))},e.deleteTask=function(t){fetch("http://localhost:3000/tasks",{method:"delete",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.user.email,task_id:t})}).then((function(e){return e.json()})).then((function(t){e.setState({user:Object(r.a)(Object(r.a)({},e.state.user),{},{tasks:t})})}))},e.deleteList=function(t){fetch("http://localhost:3000/lists",{method:"delete",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.user.email,list_id:t})}).then((function(e){return e.json()})).then((function(t){e.setState({user:Object(r.a)(Object(r.a)({},e.state.user),{},{lists:t})})}))},e.SubmitNewListName=function(t,a){fetch("http://localhost:3000/lists",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.user.email,list_id:a,new_title:t})}).then((function(e){return e.json()})).then((function(t){e.setState({user:Object(r.a)(Object(r.a)({},e.state.user),{},{lists:t})})}))},e.SubmitNewTaskName=function(t,a){fetch("http://localhost:3000/tasks",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.user.email,task_id:a,new_title:t})}).then((function(e){return e.json()})).then((function(t){e.setState({user:Object(r.a)(Object(r.a)({},e.state.user),{},{tasks:t})})}))},e.state={route:"signin",isSignedIn:!1,user:{first_name:"",last_name:"",email:"",lists:[],tasks:[],joined:""}},e.SubmitNewList=e.SubmitNewList.bind(Object(c.a)(e)),e.SubmitNewTask=e.SubmitNewTask.bind(Object(c.a)(e)),e.deleteTask=e.deleteTask.bind(Object(c.a)(e)),e.deleteList=e.deleteList.bind(Object(c.a)(e)),e.onRouteChange=e.onRouteChange.bind(Object(c.a)(e)),e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.route,n=e.user;return s.a.createElement("div",{className:"App"},s.a.createElement(h,{onRouteChange:this.onRouteChange,isSignedIn:t}),"home"===a?s.a.createElement("div",null,s.a.createElement(d,{name:n.first_name}),s.a.createElement(N,{lists:n.lists,tasks:n.tasks,SubmitNewTask:this.SubmitNewTask,SubmitNewList:this.SubmitNewList,SubmitNewListName:this.SubmitNewListName,SubmitNewTaskName:this.SubmitNewTaskName,deleteTask:this.deleteTask,deleteList:this.deleteList})):"signin"===a?s.a.createElement(v,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}):s.a.createElement(C,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(18);l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.c45fb094.chunk.js.map