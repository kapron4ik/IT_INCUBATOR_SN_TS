(this["webpackJsonpsn-ts"]=this["webpackJsonpsn-ts"]||[]).push([[0],{129:function(e,t,s){},130:function(e,t,s){e.exports={item:"Post_item__2zfpi"}},131:function(e,t,s){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__32ltM"}},14:function(e,t,s){e.exports={nav:"Navbar_nav__aW1LF",item:"Navbar_item__32yWY",active:"Navbar_active__1G4mJ"}},158:function(e,t,s){},23:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__1VBId",dialogsItems:"Dialogs_dialogsItems__3ll10",active:"Dialogs_active__2EsCW",dialog:"Dialogs_dialog__3d8gc",messages:"Dialogs_messages__25uio",message:"Dialogs_message__JX0D7"}},245:function(e,t,s){},289:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),r=(s(158),s(8)),a=s(35),c=s(4),o={dialogs:[{id:1,name:"Vasia"},{id:2,name:"Pavlik"},{id:3,name:"Dunkan"},{id:4,name:"Kim"},{id:5,name:"Dima"}],messages:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442"},{id:2,message:"\u041a\u0430\u043a \u0432\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0434\u043e\u0435\u0445\u0430\u043b\u0438 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443?"},{id:3,message:"\u0414\u0430 \u043a\u0430\u043a \u0438 \u0432\u0447\u0435\u0440\u0430, \u0442\u044b \u0432\u0441\u0435 \u043f\u0440\u0435\u043a\u0440\u0430\u0441\u0442\u043d\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0448\u044c."},{id:4,message:"100\u20b4"},{id:5,message:"\u0419\u043e"}]},u=s(123),l=s.n(u).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"4ea25f42-325c-423b-b922-486c47047752"}}),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return l.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},d=function(e){return l.post("follow/".concat(e))},p=function(e){return l.delete("follow/".concat(e))},g=function(e){return console.warn("Obsolete method. Please use profileAPI object"),b.getProfile(e)},b={getProfile:function(e){return l.get("profile/".concat(e))},getStatus:function(e){return l.get("profile/status/".concat(e))},updateStatus:function(e){return l.put("profile/status/",{status:e})}},h=function(){return l.get("auth/me")},O=function(e,t){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return l.post("auth/login",{email:e,password:t,rememberMe:s})},m=function(){return l.delete("auth/login")},x={posts:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442! \u041a\u0430\u043a \u0434\u0435\u043b\u0430?",likesCount:12},{id:2,message:"\u041f\u0440\u0438\u0432\u0435\u0442! \u042d\u0442\u043e \u043c\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0441\u0442",likesCount:1},{id:3,message:"\u0414\u0430 \u043a\u0430\u043a \u0438 \u0432\u0447\u0435\u0440\u0430, \u0442\u044b \u0432\u0441\u0435 \u043f\u0440\u0435\u043a\u0440\u0430\u0441\u0442\u043d\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0448\u044c.",likesCount:18}],profile:{aboutMe:"string",contacts:{facebook:"string",website:"string",vk:"string",twitter:"string",instagram:"string",youtube:"string",github:"string",mainLink:"string"},lookingForAJob:!0,lookingForAJobDescription:"string",fullName:"string",userId:1,photos:{small:"string",large:"string"}},status:""},f=function(e){return{type:"SET_STATUS",status:e}},A={users:[],pagesSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingIsProgress:[]},S=function(e){return{type:"SET_CURENT_PAGE",currentPage:e}},v=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},E=function(e,t){return{type:"TOGGLE_FOLLOWING_PROGRESS",isFetching:e,userId:t}},M=s(37),w={id:0,email:"",login:"",isAuth:!1},y=function(e){return{type:"SET_USER_DATA",payload:e}},N=function(){return function(e,t){return h().then((function(t){if(0===t.data.resultCode){var s=t.data.data,n=s.id,i=s.login,r=s.email;e(y({id:n,login:i,email:r,isAuth:!0}))}}))}},C=s(124),U=s(122),F={initialized:!1},P=Object(r.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(a.a)(e.posts),[{id:4,message:t.postText,likesCount:0}])});case"SET_USER_PROFILE":return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(c.a)(Object(c.a)({},e),{},{status:t.status});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:t.messageText}])});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(c.a)(Object(c.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(c.a)(Object(c.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(c.a)(Object(c.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(c.a)(Object(c.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(c.a)(Object(c.a)({},e),{},{users:Object(a.a)(t.users)});case"SET_TOTAL_USERS_COUNT":return Object(c.a)(Object(c.a)({},e),{},{totalUsersCount:t.usersCount});case"SET_CURENT_PAGE":return Object(c.a)(Object(c.a)({},e),{},{currentPage:t.currentPage});case"TOGGLE_IS_FETCHING":return Object(c.a)(Object(c.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_FOLLOWING_PROGRESS":return Object(c.a)(Object(c.a)({},e),{},{followingIsProgress:t.isFetching?[].concat(Object(a.a)(e.followingIsProgress),[t.userId]):e.followingIsProgress.filter((function(e){return e!=t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(c.a)(Object(c.a)({},e),t.payload);default:return e}},form:U.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(c.a)(Object(c.a)({},e),{},{initialized:!0});default:return e}}}),T=Object(r.e)(P,Object(r.a)(C.a)),B=s(60),G=s.n(B),I=s(10),k=s(27),Z=s(28),D=s(30),Q=s(29),K=(s(245),s(14)),W=s.n(K),L=s(12),R=s(0),z=function(){return Object(R.jsxs)("nav",{className:W.a.nav,children:[Object(R.jsx)("div",{className:W.a.item,children:Object(R.jsx)(L.b,{to:"/profile",activeClassName:W.a.active,children:"Profile"})}),Object(R.jsx)("div",{className:"".concat(W.a.item," ").concat(W.a.active),children:Object(R.jsx)(L.b,{to:"/dialogs",activeClassName:W.a.active,children:"Messages"})}),Object(R.jsx)("div",{className:W.a.item,children:Object(R.jsx)(L.b,{to:"/users",activeClassName:W.a.active,children:"Users"})}),Object(R.jsx)("div",{className:W.a.item,children:Object(R.jsx)(L.b,{to:"/news",activeClassName:W.a.active,children:"News"})}),Object(R.jsx)("div",{className:W.a.item,children:Object(R.jsx)(L.b,{to:"/music",activeClassName:W.a.active,children:"Music"})}),Object(R.jsx)("div",{className:W.a.item,children:Object(R.jsx)(L.b,{to:"/settings",activeClassName:W.a.active,children:"Settings"})})]})},Y=s(11),q=function(){return Object(R.jsx)("div",{children:"News"})},H=function(){return Object(R.jsx)("div",{children:"Music"})},V=function(){return Object(R.jsx)("div",{children:"Settings"})},J=s(23),X=s.n(J),_=function(e){return Object(R.jsx)("div",{className:X.a.dialog+" "+X.a.active,children:Object(R.jsx)(L.b,{to:"/dialogs/"+e.id,children:e.name})})},$=function(e){return Object(R.jsx)("div",{className:X.a.message,children:e.message})},ee=s(120),te=s(121),se=function(e){if(!e)return"Field is required"},ne=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},ie=s(41),re=s(50),ae=s.n(re),ce=function(e){e.input;var t=e.meta,s=(e.child,Object(ie.a)(e,["input","meta","child"])),n=t.touched&&t.error;return Object(R.jsxs)("div",{className:ae.a.formControl+" "+(n?ae.a.error:""),children:[Object(R.jsx)("div",{children:s.children}),n&&Object(R.jsx)("span",{children:t.error})]})},oe=function(e){var t=e.input,s=(e.meta,e.child,Object(ie.a)(e,["input","meta","child"]));return Object(R.jsx)(ce,Object(c.a)(Object(c.a)({},e),{},{children:Object(R.jsx)("textarea",Object(c.a)(Object(c.a)({},t),s))}))},ue=function(e){var t=e.input,s=(e.meta,e.child,Object(ie.a)(e,["input","meta","child"]));return Object(R.jsx)(ce,Object(c.a)(Object(c.a)({},e),{},{children:Object(R.jsx)("input",Object(c.a)(Object(c.a)({},t),s))}))},le=ne(10),je=Object(te.a)({form:"dialogAddMessageForm"})((function(e){return Object(R.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(R.jsx)(ee.a,{component:oe,name:"newMessageBody",placeholder:"Enter your message",validate:[se,le]}),Object(R.jsx)("div",{children:Object(R.jsx)("button",{children:"Send"})})]})})),de=function(e){var t=e.dialogsPage,s=t.dialogs.map((function(e){return Object(R.jsx)(_,{name:e.name,id:e.id})})),n=t.messages.map((function(e){return Object(R.jsx)($,{message:e.message,id:e.id})}));t.newMessageBody;return Object(R.jsxs)("div",{className:X.a.dialogs,children:[Object(R.jsx)("div",{className:X.a.dialogsItems,children:s}),Object(R.jsxs)("div",{className:X.a.messages,children:[Object(R.jsx)("div",{children:n}),Object(R.jsx)(je,{onSubmit:function(t){e.addMessage(t.newMessageBody)}})]})]})},pe=function(e){return{isAuth:e.auth.isAuth}};var ge=Object(r.d)(Object(I.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMessage:function(t){e({type:"ADD-MESSAGE",messageText:t})}}})),(function(e){return Object(I.b)(pe)((function(t){var s=t.isAuth,n=Object(ie.a)(t,["isAuth"]);return s?Object(R.jsx)(e,Object(c.a)({},n)):Object(R.jsx)(Y.a,{to:"/login"})}))}))(de),be=s(87),he=s.n(be),Oe=s.p+"static/media/user.62312b0f.png",me=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pagesSize),s=[],n=1;n<=t;n++)s.push(n);return Object(R.jsxs)("div",{children:[Object(R.jsx)("div",{children:s.map((function(t){return Object(R.jsx)("span",{className:e.currentPage===t?he.a.selectedPage:"",onClick:function(){e.onPageChanged(t)},children:t})}))}),e.users.map((function(t){return Object(R.jsxs)("div",{children:[Object(R.jsxs)("span",{children:[Object(R.jsx)("div",{children:Object(R.jsx)(L.b,{to:"/profile/"+t.id,children:Object(R.jsx)("img",{src:t.photos.small?t.photos.small:Oe,alt:"avatarPhoto",className:he.a.photo})})}),Object(R.jsx)("div",{children:t.followed?Object(R.jsx)("button",{disabled:e.followingIsProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollowUser(t.id)},children:"Unfollow"}):Object(R.jsx)("button",{disabled:e.followingIsProgress.some((function(e){return e===t.id})),onClick:function(){e.followUser(t.id)},children:"Follow"})})]}),Object(R.jsxs)("span",{children:[Object(R.jsxs)("div",{children:[Object(R.jsx)("span",{children:t.name}),Object(R.jsxs)("span",{children:["u.location.city",",","u.location.country"]})]}),Object(R.jsx)("div",{children:t.status})]})]},t.id)}))]})},xe=s.p+"static/media/Preloader.e891f5b6.svg",fe=function(){return Object(R.jsx)("img",{src:xe,alt:"preloader"})},Ae=function(e){return e.usersPage.users},Se=function(e){return e.usersPage.pagesSize},ve=function(e){return e.usersPage.totalUsersCount},Ee=function(e){return e.usersPage.currentPage},Me=function(e){return e.usersPage.isFetching},we=function(e){return e.usersPage.followingIsProgress},ye=function(e){Object(D.a)(s,e);var t=Object(Q.a)(s);function s(){var e;Object(k.a)(this,s);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).onPageChanged=function(t){e.props.getUsers(t,e.props.pagesSize)},e}return Object(Z.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pagesSize)}},{key:"render",value:function(){return Object(R.jsxs)(R.Fragment,{children:[this.props.isFetching?Object(R.jsx)(fe,{}):null,Object(R.jsx)(me,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,followUser:this.props.followUser,pagesSize:this.props.pagesSize,setCurrentPage:this.props.setCurrentPage,unfollowUser:this.props.unfollowUser,onPageChanged:this.onPageChanged,followingIsProgress:this.props.followingIsProgress})]})}}]),s}(i.a.Component),Ne=Object(r.d)(Object(I.b)((function(e){return{users:Ae(e),pagesSize:Se(e),totalUsersCount:ve(e),currentPage:Ee(e),isFetching:Me(e),followingIsProgress:we(e)}}),{followUser:function(e){return function(t,s){t(E(!0,e)),d(e).then((function(s){t(E(!1,e)),0===s.data.resultCode&&t(function(e){return{type:"FOLLOW",userId:e}}(e))}))}},unfollowUser:function(e){return function(t,s){t(E(!0,e)),p(e).then((function(s){t(E(!1,e)),0===s.data.resultCode&&t(function(e){return{type:"UNFOLLOW",userId:e}}(e))}))}},setCurrentPage:S,toggleFollowingProgress:E,getUsers:function(e,t){return function(s,n){s(v(!0)),j(e,t).then((function(t){s(v(!1)),s(S(e)),s({type:"SET_USERS",users:t.items}),s({type:"SET_TOTAL_USERS_COUNT",usersCount:t.totalCount})}))}}}))(ye),Ce=s(129),Ue=s.n(Ce),Fe=s(88),Pe=s.n(Fe),Te=s(130),Be=s.n(Te),Ge=function(e){return Object(R.jsxs)("div",{className:Be.a.item,children:[Object(R.jsxs)("div",{children:[Object(R.jsx)("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIVFRUWFxUXFxgWFRUXFRcXGBcYFhYVGBcYHSggGBolGxcWITEiJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGjUmICYtLS0vKy8tLS0tKy8tLy8tLS0tLS0tLS0vLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAEcQAAIABAMEBwQHBgQFBQEAAAECAAMRIQQSMQVBUWEGEyIycYGRQlKhsRQjYnLB0fAHM4KSsuE0Q6LCU3N0s/EVNTZjwyT/xAAaAQACAwEBAAAAAAAAAAAAAAADBAECBQAG/8QAMhEAAgIBAwIDBgUEAwAAAAAAAAECAxEEEiExQQVRgRMiMmFxwUKRoeHwFCOx0TNS8f/aAAwDAQACEQMRAD8Ax5EKkPpHaRtmSMyx2kOpHcsccMpHcsPpHaRxBHlh4WHZYN7H2GZ60SrPlz5Qy1K5ipyqe9S1b17QpWKznGC3SfBaEXN4QDyx0pBI7NIJ7S0HeJ7OSmucNdYhlTUavVSw4BpnmFgpNAarLFyt9SRA53wgsth6NJddPZCOWUQkTS8E50Rj4KYIS5jDWckvlLSWn9WY/GLEudI9uc7eLzSPQGkLvXx/CmzTj4Df+OSXqDTgZiirIwHEgw4Sqwcl4nCC4mGWeIzj1qCD5xXXEI+Y5A65yoeVQTBS2Zk7rXroa8oJXqd/WLQpqfDZ0LOUwdIwBY2sAKkmyqBqSdwiV8GUNDQ6GouCCKgjlSNR0RlLNxayylJUslsji7sAcrzAeYqqn3c2o7NPbckCZQbhT+VmX5ARdW5ltFJVbYpsBBIeFiyUhvVxcohiLEyrCVYeIqy6GkQqQ+EBEEkLiI8sWmSG5Y44qNhhDBhovGGROTiFJMTJKiVFiTLEEkHVQonywogky9IWWJMsdywwKkeWO5YkCw4LHHZIssOCRIEhwWJIyNlSCxoPjYADUkxZfEzMMizwcplPYgg1WZQFRTU5gtoZhzRgdb6ca2IgvL23hMUHw2KQGbIcok8AZyBZc/vGlVJ1NDpWEddZthhrKY5oobp5Tw0Z3am2WxbPNmIFplovFiCS8ympsOzoNbmlKaTGKam7Npytu8Is7awySWZEbMpAaoNb3FOIsAaHSvOKWFn9hbUGaZ494xlNpRWD0nh6/vSz5fdFzDYWtybQRlYFefrEWCfNoKD9f2gpJWKe2eTcVccFGfsrNYGg4njwgdg5LSzVGoxd6Ut7R1PCkayVJrQcxA7DbJzSpbZqGgII1r+jGhpdR2bMHxeKW3Bv9h4YS8PJdppDvOUtMNK16t0QEG2XtAU5+cDdvbFcNVqVJOVh3GqS2X7LXNjAl9rTZuGEkhAiuwOUGrlaENc9kdoW5axrOj2N+mYVpTn6xQATvrqj+o+B4wSKlH3zAv5MS8qljrDMsF9oSKnMRQtqODDssPURS6mGk8oV+hVyx1ZUT5IeFiclkQdXHQsTZYREQWICIjMStDGjjiPLDSkPWHkRxAxBEwjirD6RDJG0jsKkKIJyZzLDgsPCw4JDIrkYFjoWJQkOCRxGSILHckTBIWSOK5OYWXV18R8LxjpNGdpgJq7O1QdzsW/GNhNmZEmP7kuY3opjux9lYDGSFaUWw2IAyumYtKLCxy5qlRvF9CIzfELFHGTU8PhnLRlJM3MgBqbMSSaknM1yTyAibCyyVUD3n/qMEJuxPo8wSXucmvEZjcQ7CoBLHJ2HhUkxl2zW3KPQ+GQzc0/L7ovYCVlUCCshIGYeZBKROEKZZ6BrCwi/LYLQwH2ZjGmLJlKaEqoJ4A/jw9d0WMY9RQcrQF2Tmw6S51m7IqpNL6BgaHjp4Ro6NcN9/wD0854t8UPX7G425Jly5ySpQAREli3Glz42EQdDcT1eLVd0wMvwzD4rTzgem0DNmZmoDQGgNaDLmoT58IZsabTFYfj1ifFgD+MaNSexp+Rg3deDYbew1HfxWYP4uy4/mFfOApSNR0ioHlVsGzyz4sAV+I+MZxhF63wKR6fR4KzJDSsTsIjIghYiIhjCJSIiaJOK7CFkiUrHDHEDVWHZYQjscScpCMdMNiCRQo5WFHHAcLDgsPCw9Vg4mMCw4LEgWHhY4giyQssTZY4yxxAM20f/AOeaPe6tPJ3UN8KxlMOrS3Yq1DX/AMGDHSrFzBNEutJYVJigAdo3BzNqSCN3GA0+bRydxoR6Rl6t7pm1o47awnIxbuVd2q11PAUJoANwvXxJieS9pg4P/tUfnATCYrvV3NUfxAflBCTOzMxFgQpHPvV/CM+2Pumz4dPF6+aYVkTTF2XMMCJMyLKYoDeIWUTfdiwFpRoR4iBk5B9GFdygeYYD8DHW2gguT62+cPw8xJklh9qYVO4jMSL+kP6dNcmF4u01F/UeeyWpbX8oJ9HJdcVh13h1J/h7R+UNxSBRYa0PiKa/GBUtHmt2bLQ3rTMpBDEnclCR9qtNNdKp7lgwJo2m2sY+0p6YfCOUlyZizHngAgsrChWoIKgg098j3RU1cHtYTJhkTQsudmIVhaVOpuFe5M+yddxO7X9FMLLl4WX1YoGAZjvZtGJ8xQcABHi+2sZ1eOxEp+1KaaQQfZNqMOArr6+N4YfC7AaI7puHyz+p6G6kGhFDEbCKnRvFzZmaTN7YRayppP1hpcyn98ge1rcVqbxeIixE47W0QMIhYxacRWaJBsjMMYw8iImiSMjgY7WIwYdWOJyOrDSYUNJjicjqwoZWFHHZKqrEgEJREiiCihwLDwsdURIBEEDMsVNp4yXITrJpoD3VF3c8FH46Qts7WTDjLTPOIqsvgNzOfZX5+tMLi3ebMMyY2eYfRR7qj2Vha7UKHC6mjo/D53e9LiP+Ru09qvPmqzAKoBVFF8oPau2rE0ijinpQcLeW7508ofOkkXGooR4i4+UEpuFV1DDQgGh0vwO6EFLfnJq21KppRXAKFjU6EV9P7RqNjdGJ01VdpsuUrA0DFi9CdcgH4xS2HgpZJdqsUPZU6A+8ePhGvwBbU6HfEezXcGrHGWYljZvQTC6zcXOflKlqo9XrGp2f0P2YumHeYeM2c5H8oOX4QMwcyD2CnReMI+RWd1r/ABP8wvgNmYWV+6wmHlnispK+tKxNtPBSsQhlTkDKfIqdKqRdT4RBLmUryNDcGh4HgfGFNxIFKkCpoKkCp4DieUFSQtLL6mN2t0IdW/fBpIApmswUUHb3EAcNfhAXETVFUQUXed7EWqeXAR6Tjm6zDzAO9lYeYFR+EeTTZvbPC/zg9XQDFttpnqHRb/CSvA/1NHjPSjAGZtaegUkdaGNBcjs0A4ktb1jddJeln0HCS5EmhxHVJXeJWYAio3uSbDzNqBu/sr6MFJYxs9usmzaupJzG9RnJ46gcKk6mgqp7cvzJqThJ2/LH3C+G2X9HlYZWpnLuXp7zS2qAd4FAPKB2eNB0iejyeXWt6JT8YyMqbBIc8icZvlvu39i05iBoeWhhEEwWyRPEDGHzmiGLJEZOEx1WiN4aj0icHZLNY4YbmjoMVLZFSOxyFHHZOtKIpoQdCLg+BjqiCiJKmJWW6hr1VjRZgGjcmp7Q1311FQ4c2oLEAipANxXSBUaiNq+ZbU6WdMsMhAivtfFPJkNMQAsCBU6SwbdYRvvQcL1NotlaWMOoCCrAMrAqwOhBsQYNNNppAK5KM05LK8jzw1DFiSXapLE1ZjapJ9IrzZ9WBAvpWCG2MCcK+QktKb905/7bfaHxECXEYk008SPZVWwnWnDoPMwHx0ibATwF6s2NwvAipoBzA3cogSXc1/RiKcBvgcZ7WddT7SPIQ2PNyzXXiK+l/lWNNjdvSMLJRpodixZQqAE2pUmpAAFR6+mF2biz1qM1aFqA8QbX9Y09FmL1cxQ4Vq0IrcWqPKHOpky4C+M6Tph8OMR1ZmVCFFrlrnGZS5FaADUDfQV3wa2TtOZjME02UDh5k2XMEur1yt2lVg9AQCRY0qOdKnHvtqVLmph2D53yAUUZBmNEBqRbTQWiPpT0xxOHMuXIypVczOyJMLXKhAHBVQKbhW/COZQk/Zn0cxsjHCZMlvKRRMV6mgmllKqoAP1gzENUVHY1rSNX0z6IjaU1GGKC9SCjopWYFqamyt9XMOlG1oOF4cBjp2JwQeokzZ0p6FcwClsyqw3rUUNq0raMv+z3oxisPjBOmr1aqrrZ1PWZlKgUQmoBo17dkb475EfM9h2NivrCm4i3iP7Vjyjbs3qJzyxSqMwFdAFNMzcvnG7wuOVJyuzBVDdok0ABsSSdBQxitt4RcVjZ88V6l2UqCCC1EUXGoGYEgfarqbElaq1kijTyttxHyA+EkviHM6ZUqWJGbvTGJ7UxuXAfhHof7PNpsj9Qxqk3tJ9liMwpyIt4gc4zmIARGOlFNPSwA9BSL2wJRSbhhvBkDzBAMBjbuNe3SxVLibTpJM+tI92Q583bL+EZbLGi2mrTJuIygn92gp9knN8QfWBqbPbRiFJzZVauZioq1BwAGsaFTSjyeQUW+i8/8lDNDs8IrHZWFd+6pPgLesG4ITZVeGNEzoQaGxERMsSTkgYmGRMywwrEnDka0dVojEKIwWTJqxyIs0KIwTk0L9GAUIae1wRZAouKbyTFPYGy8POlHrUQEFkZAi1JFmNwTQ6jkRDujuJXEZknM5mpQnLMZZbKe6yFaNSxBqa1B3ERfdZUicjS6r1jqkztsytmBVK5iatmyisecm2uH1PT1Z6rPqwcZBQtKJLGUQAx1aW37tjxIoVJ4oY4Yu7QZWnkowNEcPS4XuMtSNDmz217RMUpkbOlsc6k2ef11ahc0vqUNoYdJqNLmCqML7stPaB3ERgpDKrmWWzAEhHoQrgW37/147Hai9bM6gkrLVBMmEHtPXROQtGf6QKnVtVRQCqgWodFpwvGdrL4zs2JdO5v+F6SdVHtZPryl8vMpYgaxSeTnOXcKZufBfPfy8Yhw2NY0RhVjZTxPA8PGNNsvZ9Fr6cydW84tpdO5SzLoidbq4qGIdX+gAxWFsRv3eI08t0XsLiyUWaNR2X45hof1vh+KlUJihLcy3IAzBxXLxprTnS48Dxhu6OOTNqlng2CtImIs0y0MxRZiozLxFflwraKpCOAHRHAuAyqwB4iojPrPqtZbErW43qeDCJ5GMIgcS8kHdrYjHFFGDajV7d0D09kAvYLxA5bqwYG0eqlq05xmVUDkDvTMozZQBerVoAN8ZzCbWZLhamhtWleVYsbHCzyZzsHcewRQSj7uU7+Z19KDutVS3MY0mklqJ7U8Foq+IImTapKBqqe0x3E8/gN1TRouKBuAA4RFiZ5oWO7dwiudoKFqf14RnOcrHlnoYVV0R2xLMxQzUJGVO0RxYXA8BY+kcwO35MmekxyWAJcKoq7lR2FUeOW5oBckxnMZtEzCVl0pU1Y91eX2jrbneFhZCyxWtzQEnvHgPDkLQ7RXl8sz9Za3BxivUvbR2lOxBzTa5WIph0NUZzQduw6wkit+yKm2pj07D4ZpOAWdMOeeXR3bklT1a10QKXA+8TqY822FOUzjmHaAGQcjUOw4nQcgecembRxifRkzMFQF8xJoAAAL+phq+eGopGHXUksAjFT5aMuVCxe6mYQJNzoHWomt9leF6QdkYeslmmXaqKoFQq5nAFFrQGlTGV2HiGkihXPKcDPKcdlhxynRv0Y3C7O+rVpDVlkrMEtyaaWAY1K66Gotug1qfHInxCLTj6mOx95jn7TfMxUZYMY/AZS1KgihZGpnUE0DWsyk1uIHMsMRkmuBJ5yVGWIysWWWIysWycV8sNIicrDCsTkkipCiSkKOOAGyJUyU/WzSC9CBJViOySCVaYpGVqiwFeeseh4SXhZspZgkyijqGBKAkgioqWqax5ZOx9NLAbzBzontnMokCrMMxvYBS7UpU1NAQLcow708ZR6SqMW/e5NFg5gyzEWuSXNKpXejKHHkCWA5ARycYZs/wDztKicB5dTLKr5BvnDp0aOnf8AaRiatJXyx5gLaRyzmPvSE/0uQfmIy23Jtcq8SWPgth8SPSNZt+X+6f78o/xgMp/mUDzjHTzmmkcAo+bH5iMu2vGof5npdPdu0MV6fz0ItkiWs3tmhp2a6EnW+gO7zMbXCMCKA6fryjJbHw+Zpk4iwBVfOlf9voYsYMOKlT2QSApJFKW7LC6/LwhunWQg9kl6ilvh9lkVZH8g/tTZhYZlF944/wB4yWNQh6aMoBHI1NLeUajZu3tzDN9luy48CKgjnQ+MXMbhcLihZ8szcHokwfde6t4fCNCcVNcGZGTg8MxX0YzD1kkhJls6V041B7y10MObDTh38Qq/xSl/GJ9sbEmSj20zruOW48Rv8vSBnZGlB6RnuiUeM4HFamuhP1K78UT4TK/0wlmrKbrJU1w43kOQRwbMLiGLKZtBQcW/LX5Q1pIqBdiTQDUk7gFG+OenyvefBMbnF5j1NFg+kcuah6whGAJZTo3NTAqfNaYaklUG7RiOfuj4wvogTv0Mweay+Q4vxOg3cYbKxAzpXuBu1XzoTyzZYQ2xjLEOh6BTslVvuXOOnn9Tf7L6Gr/6VMxTCk6oaWoqAkte8tBYswzE+AA31z0nDBhf1/KPRpe01XAohICgmpJsFVRUn+aMFhzXStCTlqL0r2bcaUisLpLkpok790Z9Ov7DpWyZZpmJNLjTNXiCNIN4DZaVFAzkXGdnmUPEZiQviIpOZUhc+JfINyi8xjwAG/8AVoEbc6TYtwkqQv0WXM0p/iGQDtOx9gXFheu+NOm2WPeE/ENLGMls69/sa3au1MPhqJNctNagWRKGecxOgoNK+XjF5123ipOSQsrZ0oJRBMYviXoLZiAeqB8Mw5x5rgtnolSB2jqxuxJ1qxuY1+w+l+Jw9FLdbL91ySQPsvqPiOUGlFzXUzrNJPHBP0V6PzsIs9cY5+kT3X61neYjog7Kl20OYsa+EEcThWTvCx0OqnwO+NZsbb+Hxi5dGIvKmAV8tzDw+ENxOwCtTIYUOsp7yz4HVTEQs2e6zKursUveX8+n+jGEQwpBfE7OuQqsri5lN3gOKH218IHFIZUk+gtjBVKwwrFlkhhSLHFfLCifJCjiTybD4yswZ6FWsOAO4/3jR7F7MygA60dqUTbMRrKJ4MLcjGUm4fKxlnxU8RB3ZM0zU/8Asl0rx5N8PURlNG/lrkNdFOkwQ/R55yqzEq51SYxuswm5BNe0dDY8thNl0N48/wBtYIOBiAB2+zMG4TKa8gwv4g8YL9E9t2OHnTAAoXqmfdUkGWX0AsKA7yQNwB6rMcMS1On3e/H1DeNw/WI8vewOU8HF0byYCPMziczTHpTNu4EhVI8jWPV+qII0ralxU+F4812ngSuOeVSxnZv4WBmj4W8opqEvjC+HSk/7Xm1/r7haVK6rDUOtKnx1PxrFdapJFNSKDxJoPmItbZekungPiB+MVcYcol+6oNeRpQEjh3vhGVUlKSUu7PT3v2dbcV0XAfn9HkaWgGvVyyK/cU1/vGaxsibKbKank2vk+/zrGywO2pDogdjKdVC11U0FNRu9I7j9nCYtQUmqd6m/j+jHppwTWYnj4yafJjJO0moVDGm9WvTyNvMQ2ZLViHyitNaX4Ur41jm1dnmW28a5TvHI/q8U3xX1Y3a1/H41gGezD48iXE4mnZUVJIAAuSTYAcTWDnR/YTPPXDIy/SpiuWc3WSqoW6tae0TRS27NA3BS/o6icw+vcVlKf8qWbdaw3O16DcL76Rc6H7QMnFCaD2lp43zE+tB6QhqrXKLSHNNBr3il9CYMyOCCCVYHWosREqbPXifh+UGelE9HxTtLNRqxFKZjQ08QLHy4GIHVJUvrJ7ZQe6gu7ngBGdHMm9p6WE4xrhO3v/PyFgdnlgFBbIl+07mWvMKTlGg0G4RIdrAVTCqHbRpzdxeIX3jyHnFUtNxNA/1cndKU0qNxmEa+EEOpEtLDSygD000EFhBRfLyyzubTVcdqKmFwQD9ZMYzJmpZ9QOXuL4QPwpadMaeR3rJXdLHd9bt5xb2tNIlFdHmsJQPKmaaRyC2847h6ABRbcPwEM78Ccq1ux+f1/n+S1Kw/E+kTLTQD9eMQM/sjd3j+A5xfwmH4+kFjb5kOrPCFJksSDUilwRY14j843nR3pQRSXiDUaCZvH3+Pj68YyspItJKg3tFNYYG3SQmsSPS8Vg0mqAwrvVgbg7irDSM1tTZhBo9KmyzKUVzuVx7L89D8I70Y2qUIkueybKT7J4eB+EanEyQ6lWAIIoQdCIiLcGeb1eldUn/MnnE6SVJBFCNREDpGm2rs4ghCak/u3Ptb+qY+8Nx3wBeXyvDcZ5M5oqZIUTZY7FskHi88E2Ncym1dQw1U1409REmAxfVus4aaOOK7x4/kI2X7QdgX+mSlsxAnKPZY2EzwawPOh3mMKGytfRteR5+MING7CanHKPQZEtCKHtSZq0NOBuGHMGhECBgGks6PdgaV3FadkjiCL+cd6HY4GuFc8WlE+rJ4i59eEaDaWEMyXUD6yUPNpWpHMqakciYF0eC0XhmaklUJTImU37o8xXW1vWJUVnxkqYTmHVsFJ71VDUDHeQGN9SBepua2KahU8yvqK/MCGT5rJRl1Uhx4jvDzBI8zCliak0u5sUyUoxcvwst7YNhatKE0/XhEaYtSLndD500FrGtQGH3W0MBMS2VidxOnCAxjngbslt5JDishtQIdQa0HP7I/VIvJNIaxZG1saV51FiIDFc7hd2viBekGMModerNmW8s76b18vkeUa+lctnJ53WqPtOPUdice5BEztD4jmDFbZWHQZsRNAaWh7CH/ADpm5T9hTdj5cRD8NhWnzBKrky1aax0lot2c+WnEkc41HRzFSZwnySgEkhZUpTqqyxmViffJdmJ5xXVX7Yg6K90sGUZ3mu7uasxqSd5/AflE0rCi1qnd+QjuPwxlTTLB0AIpwJNB42iKfiWX6tD2z3mGqDgPtGM21ttJHpNEq1CUmsfr6Ltn0+ZcnYpZNFUB5u5B3U4Fom2fgGdzOmnM59FHADdEezNkhVzMLnQE3J4k6kwSw8zKN1YrCKiuBqc5WyTkuOy8v3CEmXSFkL1Ngqi5JAUDiSdIhTEdmpoAeNoEbfm9YolS+1bdcFm1bhRVoK8S0Eim2XlJQjn9CHaLibOllDmSWjDMK0Z3btZa6gAAVhPiCpotjoOQ3mG4NaJSgGWq2NQMpI1pcWiOS2Z+Z/VIlSyxJrv3YQwcwj+8aHBSyaGn64wP2ZspnI0pvg/9Pkp2UBmsPZl3UfefQRznnoEXuonw+GJ0EXerSWKzHVeVbnw/tA0zMRM1YSV91LtThm3HmIdI2fLW9Mx3l+0TzvavlBoSBSUmXP8A1OX/AJct5nOhA8ydPSNlsPHTZ0kMVVSKqwJqbaGoqDam6MirRpuiJ7Mz7w+X/iGspxMzX1f28vsT7UwxMp88ywUt3RYqKggilDaM5tMdsV72VM33qX/CNNtyZYSt8w0PJBdz4Ut/FGWxU3M7NxPw3fCD1+Z5ZrGStkhQ+FBskYOooIKsAysCGUioZTYgjeI8r6VbAGGntKp9U4Lyj9gnT7yG38p3x6uIH7f2UuKk9SxCsDmlP7j8D9k6EQCSyNae7ZLD6HjMt2BBBpMlkEEcRcGPRtl7WE6WmISzCzj3WGo8L+hEYDaWHeW5zKVmSzldTrTf48Qd4NYs7D2n9Hm1J+qmUD8Bwfy+RMLTjk0w50iwQV0ZB9W5Lr9kgHNL/hJHkVihPNRzF/z+FY0RUMGkMQFehRjor+y3ga5TyMZ2YhVirChBIIOoIsR6wran1NDRWLDh3IcLMoMvuVUfdPaX/cP4YoTXBqSDSpFaWtY6aecTiZkmKdxORvA3U+X4mHS5uQkEGlSai4ua+PwgXQczlYbKeUDnvBB9CDxi1IxI1aodbjL7XCg4k2pziPGCW5qKV3kGh86QY6LYNZavjptWlybS1PtztBS16EgeJ+zB6bXFiWrqi1z6YO7ZY4aV9Ht103LMxBG7fLkA8BWp/vAjAYqZLPYalTU1FRXSvpFra2EnK+eeO1Nq+oNb300pUW5iKbzQo0qfZHE8TyG+OVin1I/p/ZxWOfmT4jFMCWJzTnvU+yDbOQLaWAi9srBKgzNrrc7zqWPGB2AlmpbvObknjx/KD2D2fXtOa/Ief5UhabS6Grp4yklnt+S/cmfGCoygkitKWH5+gh0iVMmd0qvHLQnzpU/KC3QnY2HxcwHEMCp7UvDgkVQEDrZuW5qdBw4xQ2d0XnT501Uly80pyrtLcS0lmrCqVI7NVIFBXjER25azjBb+qjua7L0JJexBqxLHxP4X+MPeQstgQAAqs5t7oJvx0iTZ2LNXlTGDPLpR1IIdDWjVFibEekVtsTPqcSw/4RQeL2+ZgvOcMZ3R2b0v4gLgpB6sLvygEnwoSYsSlVWqBnalOCg823AcqmKEp+slK6mh3jdXerDhWJtnbSVxcZaGn2K8A2nlAeeRdOLwvlwaDBSC5CzGJXci9mX50u3maco0mHwyqKAAU4CgHgIzeBn5TQwak4+m8Hx1im5h5V/9QgRDDFZtpDhEEzHk6CkGhIE65F5plI1/RpxKwxmucoJZqngKKPl8YxOy5BnOBoCbn4k+QjcyMLnyhv3csURbai2dx732d3ibPweUYnjFvs4KtfEwRMxpmB57WMzsS192WDc+Z1geYMbR2flpLGlPqjyFzKJ4jUcvAwGMO14xweWkmuv88xQoVY5FyMk9IieLcyQQQurbwL05ePGKrrAi2AL0h2CuLWtknqOxMIsR/wAOZxXnqPUHyjF4N5MxpE1CjD2T+B0ZeBEe4TBlHMwE2/shcXJMo0EwXkudVcXAr7p0PjA5R7ocovcfdkYXYGNzoZDHtyx2PtJw8rDwpF7bCmZK69e+lFmjeV0Sb8Ap8FMZTM6NmAyzJTEMDuZTRlPxEa7BY4HLPUVRwQ6neDZ0Px9KwtKJoRk4vKMtiZocFePzpb4xYwM/OlW1Fj+cSba2Z1M2imstwHltxQnfzGh8IHS2yFxuqR5G4+Z9YXlHsadduWpdmWpGBM+YEUXuSaVyIt2c8gPwg90yxSoZeDk2l4cKTzmaivGg1PFzGm6I7BErZ7T5gpMxQpzXD1qAOBembwyxgtt4N5M+bLmtmZWarH2qmufz1iYNP3RaU91m7shu1drvNyGZQBAVUA1N6VvxNB6RXwOHznM58h8vCIMOhdq7hp4cfEwUkSDFJ4jwh3TwlLl9PIKYKUPIQTdSyMq6lWApxIIEC5M9EsTU+6tz50/GkXJePfRVCDnc+i/mYWabNiG1LDDX7M8O8uVNxIXM+QiWooWJlgkrTUEsFFDwgnsaTNw2zp/Zfrp1VpQl6vSUCRrUAu/nGSw7YjDlpsqcsvPdxOyrKY+9S1DzEMPSfEZOqfFihrVpCM8xgb0ExgqDlTSLOLlLOV1T79jKsosjJp9Mr8kWdnvlxEwdXnKKsrVaB61IJJ1FtKwJ2x0kOIlvKWUFBZe1nrUKwYdnKNQBv3xKu05aymlyJU0EqyhmZKgsCC5C1qb11gRtBMuVgN1GHIaHyqf0IOpRc+Q985qnbB/Xjrn6kWEVjMEtDQMO1yp7Y56DzHCNds/AKFyqAFAoB+cAuj0nsmZvc2+6LD41PmI1uGWwEA1E8ywgugq21KT6v9EQtI5RVzNLPvL8f1+ucaNcMKfqkU8TgeHpAU8DnEuhRTFAioMTSZi3ZmCqLk6nwA3mBc9MppSkJh3V4mp8gT8wIZgkClJh4bSYjLLBlgihIPb5gMNPKCPRLGnDzVSv1bkKwrapsH8a08oFYVKKDvhxmBSGJoAQandTfD9UuMCl9MZxluXU9WxWHExChtvBGqsLhhzBjKbQlHvEANmKuBoHArUcmBDDxjWiYKZq0FK1PDWMnjZ2ZQ3/ABGab5NRZf8AoUQxSeGufJShR2kKGciwU/djMf3jXHFQd55mJZOIMyzyw9N6ijRGZyFq5S7He5oP5RujuKxz0yqQo4KKQuMppdyjtXCFTXcdAaZqcSBA4rFmZc1NzETLFijeWYX9oWyKEY1BZqJPHBtEm+fdPlGZ2Li+qmGW37uZ/pbQH8PSPYEwyzM0t1zI6lXHFSKGPIOkGxmw06ZhXNct5bH25Z7jfgeYMAmuTR09m6OGaNZHWocMe+CWkk+/7SeDD40jP9HdlHEYhkcEIhZ5vEKtgnixovmeEWtkY0zEoT9ZLpU7yBo3j+t8aOVNWvXABetZVnFaBlmgURvutU2Nsx5wvNcDcZtcG8lzBPw3Ii1Nw0t4Ax5X+0PGpOxCoorMljJOYd12HcUDkKVvqabjBvafSKZgpTy1oWmA9VwUGzNTdTh93nTzqXMGpJY/MnUk7zC1cGnuGYJd+gRkkAUFzv4V8YlaZTvvQcAaf3MDGxDmwtyH5w+ThN7GnxMS4+Y9G1viK/0XxtRFsiE+PZX8/lEi4vEPocg+yMv+o9r0MckNIXRSx41qfhErYxTag8yaxRvyQxHOPen6IZLwIrmd6njcn+Y3id0RVJUXoaE3vEXXDh8YXWCKPL6l0oJcEiz6AVqeJpFXG4gEeArEvWDS0V8QAfOJS5Kzk9uMhvZwyog4KvyjSYc6HwjIbKxNVCnvKACPkRyMaLZ+KHdPkfwgFiaY7TJSisGgltHXitKmDiIU/FKoJr+vwgaYTbgqbRkBiDvHygVOQaV/tDMVtQuSqWXQueO8LxPPQc4dKcBbn1IhuvKA5TbL+y55ZSDqpp48/wBcIZhh1+KWV/lo6j782mYL4KBXxpwjkqaqIWGvzO4fGCvRWVKlzTNmkBMOhdmOhnTWsfvdl6D7Qhuvliess2Uyl5L9kb3bk/sMm7KzzOUtd3ixovhm4QFxS0yL7suWPRRDMXixiMIzyyfrBMmMaEVSTVcoGuWuUDjc0vFjaA+sby/pEP1rB4OzKlLd14+5TpCh9I7BgZalrlFTEYQmpoTFbpDteVhpfWTamtpcte/NblwXid0eebQ6RYqawZ57SiDVJUiypTSo1mH71RygDngdq08rOex6ERDGEZvY3TMEhMXlWtlxCCiE8Jq+wftC3hGsMm9yAoGYtXshQKlq8KRKkmDnTKDw0OwiZVLH9ARlOmmxzipOZBWfJq6cWX25fpccxFjH9Mwy0w+DmzF3M7LKRgNCNTQ63pADEdKseDVZWGlgbqMzeua/wgTnEZjVNNY7GGk4goyzk8xxB1B/XCNZs7GJqbypq5XH2T8iDGWxWbOzPl+sZmOUUUMTU0G4XifZeKyEy2PZNwToD/eBvkcF0nw84YgrMYvZcjbmT2T8686xVTDXpSppWgNLRpsUnWSU6wZMh+rmN3ih7yBO8w52GkZ+UQJhIJIqaVFCRUDSpppFdj9A1dkccdR0sDQAg7xoREySPCJsWFK5rgjQjXw8IqUYb/x+K3/0wGdT7Dteoj+JFpgBrETTl3iDHR3oxPxZBqJUs3ztfMouWQalQPaNB4m0AJ4ozBWqoZgpO9QSATTeRSBbecMP7dS+ElXKdLeBt6aR2h4+v9orMOQ8o4HI3+sdtJ3/ACLEySGudeMcw+DdmCKoJOlLeZ5REuLGhpXxgyNpdVJWVKZPpE03JKgS1uczsbLRb30qTFoxbeAVtkIx3dyzj8NLlIklAz4pj9WEFXZjrUbktoeFdRWJZ7PIYy8QnVuNQSKEbmRtGHh4WNoubIxUrCAjBjr8Q4pMxc4HLzEpTRmXzANjVtIeslpj9bNmPNme85rTkoHZQclAil7rSx3CaBaly3dIvz+xDI2yoF6/xAj4kQPxe0xNfIXAXk3e5Cmnz4cY00uSIkOEB/veFFKKfQ2JRlJY3fp+5mQ62yqaUAFENByFo6oDGnrTUQdGw1BLLLA4leyf9N45MwB9pa8MwBYeYg0bEU9k31Bs+WcpCmtrAmkUps9yMrtXtZiNBmplBpxC29eJgw+GA4+d/neB0/C00hyiaAX1PB6b0OlhpQl7hh5cv+J16yZ8HT0hzklJbHVpaV+8BlPxECv2bbYV1EogrMXvA7wahCOVFA8oNzUopHuTZy+RbOvwYQ/W+Tw2rrcbJZ+pVpCh1IUGEjDftA/9zX/pl/qaAGye8/64xyFCcjep+FFebpP8T/SI3af/AB8/9L+IhQoiJF34fqCJfc8vzgViIUKF11KIz20+75iOYP8Afyfvr8xChQeJeXws0PST/FN4L8ozQ7x8W+cchRZlq/gj9C7L/dnwb8Y5L/dn7o+ZjsKKhUevYf8Az/8Akr/2xHiMjf4mOwoRh8U/qHo6R+hLFF+/5woUGh1Caj4TV7A1XxEAdrf4+Z/zWhQovLowC6x+qNFht0G9l6+kKFGZM9NUaBNIrtChQFDDLOF1iWfpChReINgfF6QJnQoUO0gp/CXegH+P/g/3LHoE/Wf/ANR/+EqFCjTh1R43xX/k9CtChQoYMY//2Q=="}),e.message]}),Object(R.jsx)("span",{children:"like"}),e.likesCount]},e.id)},Ie=ne(10),ke=Object(te.a)({form:"profileAddMessageForm"})((function(e){return Object(R.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(R.jsx)(ee.a,{component:oe,name:"newPostText",type:"text",validate:[se,Ie],placeholder:"Post message"}),Object(R.jsx)("div",{children:Object(R.jsx)("button",{children:"Add post"})})]})})),Ze=function(e){var t=e.posts.map((function(e){return Object(R.jsx)(Ge,{message:e.message,likesCount:e.likesCount,id:e.id})}));return Object(R.jsxs)("div",{className:Pe.a.postBlock,children:[Object(R.jsx)("h3",{children:"My posts"}),Object(R.jsx)(ke,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(R.jsx)("div",{className:Pe.a.posts,children:t})]})},De=Object(I.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e({type:"ADD-POST",postText:t})}}}))(Ze),Qe=s(131),Ke=s.n(Qe),We=s(90),Le=function(e){var t=Object(n.useState)(!1),s=Object(We.a)(t,2),i=s[0],r=s[1],a=Object(n.useState)(e.status),c=Object(We.a)(a,2),o=c[0],u=c[1];Object(n.useEffect)((function(){u(e.status)}),[e.status]);return Object(R.jsx)("div",{children:i?Object(R.jsx)("div",{children:Object(R.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(o)},value:o})}):Object(R.jsx)("div",{children:Object(R.jsxs)("span",{onDoubleClick:function(){r(!0)},children:[" ",e.status||"-------"]})})})},Re=function(e){return e.profile?Object(R.jsx)("div",{children:Object(R.jsxs)("div",{className:Ke.a.descriptionBlock,children:[Object(R.jsx)("img",{src:e.profile.photos.large}),Object(R.jsx)(Le,{status:e.status,updateStatus:e.updateStatus}),Object(R.jsx)("div",{children:"ava+description"})]})}):Object(R.jsx)(fe,{})},ze=function(e){return Object(R.jsxs)("div",{className:Ue.a.content,children:[Object(R.jsx)(Re,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(R.jsx)(De,{})]})},Ye=function(e){Object(D.a)(s,e);var t=Object(Q.a)(s);function s(){return Object(k.a)(this,s),t.apply(this,arguments)}return Object(Z.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(R.jsx)(ze,Object(c.a)(Object(c.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(i.a.Component),qe=Object(r.d)(Object(I.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id}}),{getUserProfile:function(e){return function(t,s){g(e).then((function(e){t({type:"SET_USER_PROFILE",profile:e.data})}))}},getStatus:function(e){return function(t,s){b.getStatus(e).then((function(e){t(f(e.data))}))}},updateStatus:function(e){return function(t,s){b.updateStatus(e).then((function(s){0===s.data.resultCode&&t(f(e))}))}}}),Y.f)(Ye),He=s(89),Ve=s.n(He),Je=function(e){return Object(R.jsxs)("header",{className:Ve.a.header,children:[Object(R.jsx)("img",{src:"https://cdn.worldvectorlogo.com/logos/puma-logo.svg"}),Object(R.jsx)("div",{className:Ve.a.login,children:e.isAuth?Object(R.jsxs)("div",{children:[e.login," -",Object(R.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(R.jsx)(L.b,{to:"/login",children:"Login"})})]})},Xe=function(e){Object(D.a)(s,e);var t=Object(Q.a)(s);function s(){return Object(k.a)(this,s),t.apply(this,arguments)}return Object(Z.a)(s,[{key:"render",value:function(){return Object(R.jsx)(Je,Object(c.a)({},this.props))}}]),s}(i.a.Component),_e=Object(I.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){m().then((function(t){0===t.data.resultCode&&e(y({id:0,login:"",email:"",isAuth:!1}))}))}}})(Xe),$e=Object(te.a)({form:"login"})((function(e){return Object(R.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(R.jsxs)("div",{children:[Object(R.jsx)(ee.a,{component:ue,name:"login",validate:[se],type:"text",placeholder:"Login"}),Object(R.jsx)(ee.a,{component:ue,name:"password",validate:[se],type:"password",placeholder:"Password"})]}),Object(R.jsxs)("div",{children:[Object(R.jsx)(ee.a,{component:ue,name:"rememberMe",type:"checkbox"}),"remember me"]}),e.error&&Object(R.jsx)("div",{className:ae.a.formSummaryError,children:e.error}),Object(R.jsx)("div",{children:Object(R.jsx)("button",{children:"Login"})})]})})),et=Object(I.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,s){return function(n){O(e,t,s).then((function(e){if(0===e.data.resultCode)n(N());else{var t=e.data.messages.length>0?e.data.messages[0]:"Some error";n(Object(M.a)("login",{_error:t}))}}))}}})((function(e){return e.isAuth?Object(R.jsx)(Y.a,{to:"/profile"}):Object(R.jsxs)("div",{children:[Object(R.jsx)("h1",{children:"LOGIN"}),Object(R.jsx)($e,{onSubmit:function(t){e.login(t.login,t.password,t.rememberMe)}})]})})),tt=function(e){Object(D.a)(s,e);var t=Object(Q.a)(s);function s(){return Object(k.a)(this,s),t.apply(this,arguments)}return Object(Z.a)(s,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(R.jsxs)("div",{className:"app-wrapper",children:[Object(R.jsx)(_e,{}),Object(R.jsx)(z,{}),Object(R.jsxs)("div",{className:"app-wrapper-content",children:[Object(R.jsx)(Y.b,{path:"/dialogs",render:function(){return Object(R.jsx)(ge,{})}}),Object(R.jsx)(Y.b,{path:"/users",render:function(){return Object(R.jsx)(Ne,{})}}),Object(R.jsx)(Y.b,{path:"/profile/:userId?",render:function(){return Object(R.jsx)(qe,{})}}),Object(R.jsx)(Y.b,{path:"/news",render:function(){return Object(R.jsx)(q,{})}}),Object(R.jsx)(Y.b,{path:"/music",render:function(){return Object(R.jsx)(H,{})}}),Object(R.jsx)(Y.b,{path:"/settings",render:function(){return Object(R.jsx)(V,{})}}),Object(R.jsx)(Y.b,{path:"/login",render:function(){return Object(R.jsx)(et,{})}})]})]}):Object(R.jsx)(fe,{})}}]),s}(i.a.Component),st=Object(r.d)(Y.f,Object(I.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(N());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(tt);G.a.render(Object(R.jsx)(i.a.StrictMode,{children:Object(R.jsx)(I.a,{store:T,children:Object(R.jsx)(L.a,{children:Object(R.jsx)(st,{})})})}),document.getElementById("root")),window.store=T},50:function(e,t,s){e.exports={formControl:"FormsControls_formControl__1tne5",error:"FormsControls_error__1rqki",formSummaryError:"FormsControls_formSummaryError__1FQaA"}},87:function(e,t,s){e.exports={photo:"Users_photo__ChIyN",selectedPage:"Users_selectedPage__1Cs-g"}},88:function(e,t,s){e.exports={postBlock:"MyPosts_postBlock__1XPzO",posts:"MyPosts_posts__1xktw"}},89:function(e,t,s){e.exports={header:"Header_header__Z7jDf",login:"Header_login__fKaYA"}}},[[289,1,2]]]);
//# sourceMappingURL=main.a99d33a0.chunk.js.map