(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(65)},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),i=a(21),l=a(10),s=a(11),u=a(13),m=a(12),p=a(14),d=a(32),h=a(1),g=a(15),f=a.n(g),b=(a(18),a(19),a(2)),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={headlinesNews:[],isLoading:!0,errors:null},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"getUsers",value:function(e){var t=this;f.a.get("https://newsapi.org/v2/top-headlines",{params:{country:e,apiKey:"b1f8f098191a4ab5ae0581b74565cbf3"}}).then(function(e){return e.data.articles.map(function(e){return{title:"".concat(e.title),description:"".concat(e.description),author:"".concat(e.author),newsurl:"".concat(e.url),url:"".concat(e.urlToImage),content:"".concat(e.content)}})}).then(function(e){t.setState({headlinesNews:e,isLoading:!1})}).catch(function(e){return t.setState({error:e,isLoading:!1})})}},{key:"componentDidMount",value:function(){this.getUsers("us")}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.headlinesNews;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.c.Row,{cards:!0,deck:!0},t?r.a.createElement("p",null,"Loading..."):a.map(function(e){var t=e.title,a=(e.description,e.author),n=e.newsurl,c=e.url,o=e.content;return r.a.createElement(b.c.Col,{md:4},r.a.createElement(b.a,{title:t,imgSrc:c,avatarImgSrc:"https://tabler.github.io/tabler/demo/faces/female/18.jpg",authorName:a,description:o,postUrl:n,iconHref:n,url:n,profileHref:n}))})))}}]),t}(r.a.Component),E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={headlinesNews:[],isLoading:!0,errors:null,urlParams:a.props.match.params},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"getUsers",value:function(e){var t=this;f.a.get("https://newsapi.org/v2/everything",{params:{q:e,apiKey:"49ec45d262b4417b942ac9c9b5324cd5"}}).then(function(e){return e.data.articles.map(function(e){return{title:"".concat(e.title),description:"".concat(e.description.substr(0,50)),author:"".concat(e.author),newsurl:"".concat(e.url),url:"".concat(e.urlToImage),content:"".concat(e.content)}})}).then(function(e){t.setState({headlinesNews:e,isLoading:!1})}).catch(function(e){return t.setState({error:e,isLoading:!1})})}},{key:"componentWillReceiveProps",value:function(e){if(e.match.params!==this.props.match.params){var t=e.match.params;this.getUsers(t),this.setState({urlParams:t})}}},{key:"componentDidMount",value:function(){var e=this.props.match.params.name;this.getUsers(e)}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.headlinesNews;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.c.Row,{cards:!0,deck:!0},t?r.a.createElement("p",null,"Loading..."):a.map(function(e){var t=e.title,a=(e.description,e.author),n=e.newsurl,c=e.url,o=e.content;return r.a.createElement(b.c.Col,{md:4},r.a.createElement(b.a,{title:t,imgSrc:c,avatarImgSrc:"https://tabler.github.io/tabler/demo/faces/female/18.jpg",authorName:a,description:o,postUrl:n,iconHref:n,url:n,profileHref:n}))})))}}]),t}(r.a.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e;return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{position:"fixed",zIndex:"10",background:"#f1e9e9de",width:"100%",height:"80px"}},r.a.createElement(b.b,null,r.a.createElement("ul",{className:""},r.a.createElement(b.d.H4,null,"Falcon"),r.a.createElement(b.e,null,r.a.createElement(b.e.Item,(e={to:"http://www.example.com",value:"Home"},Object(i.a)(e,"to","/categories/latest"),Object(i.a)(e,"active",!0),e)),r.a.createElement(b.e.Item,{value:"Bitcoin",to:"/categories/covid"},"Covid-19"),r.a.createElement(b.e.Item,{icon:"globe",value:"WSJ",to:"/categories/WSJ"}),r.a.createElement(b.e.Item,{icon:"globe",to:"/categories/Google"},"Google"),r.a.createElement(b.e.Item,{icon:"globe",to:"/categories/Technology"},"Technology"),r.a.createElement(b.e.Item,{icon:"globe",to:"/categories/India"},"India"),r.a.createElement(b.e.Item,{icon:"globe",to:"/categories/Canada"},"Canada"),r.a.createElement(b.e.Item,{icon:"globe",to:"/categories/World"},"World"))))),r.a.createElement("div",{style:{marginLeft:"20px",position:"absolute",marginTop:"120px",marginRight:"20px"}},r.a.createElement(d.a,null,r.a.createElement("div",{className:""},r.a.createElement(h.a,{exact:!0,path:"/",component:v}),r.a.createElement(h.a,{path:"/categories/:name",component:E}))))))}}]),t}(r.a.Component);a(63),a(64);o.a.render(r.a.createElement(function(){return r.a.createElement(w,null)},null),document.querySelector("#root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.69aa992c.chunk.js.map