(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{26:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),o=a(18),s=a.n(o),l=(a(26),a(9)),i=a(4),u=a(5),h=a(7),d=a(6),m=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchQuerry:""},e.handleChangeQuerry=function(t){e.setState({searchQuerry:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSearch(e.state.searchQuerry)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.searchQuerry;return Object(n.jsx)("div",{children:Object(n.jsx)("header",{className:"Searchbar",children:Object(n.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(n.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleChangeQuerry})]})})})}}]),a}(r.Component),g=a(19),j=a.n(g);function p(){return Object(n.jsx)("div",{children:Object(n.jsx)(j.a,{type:"ThreeDots"})})}function b(e){var t=e.imgUrl,a=e.largeImgUrl,r=e.onOpenModal;return Object(n.jsx)("li",{className:"ImageGalleryItem",children:Object(n.jsx)("img",{src:t,alt:"",className:"ImageGalleryItem-image",onClick:r,"data-url":a})})}function f(e){var t=e.images,a=e.onOpenModal;return Object(n.jsx)("div",{children:Object(n.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(n.jsx)(b,{imgUrl:e.webformatURL,largeImgUrl:e.largeImageURL,onOpenModal:a},e.id)}))})})}var O=a(20),y=a.n(O),v="19312223-5ce613f0baa18ae84872c00fc";function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return y.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(v,"&image_type=photo&orientation=horizontal&per_page=12\n")).then((function(e){return e.data.hits}))}function S(e){var t=e.onClick;return Object(n.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})}var w=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).closeModalByKey=function(t){"Escape"===t.code&&e.props.Onclose()},e.closeModal=function(t){t.target.classList.contains("Overlay")&&e.props.Onclose()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModalByKey)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModalByKey)}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"Overlay",onClick:this.closeModal,children:Object(n.jsx)("div",{className:"Modal",children:this.props.children})})}}]),a}(r.Component),k=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],querry:"",loading:!1,page:1,modal:!1,largeImageUrl:""},e.fetchImages=function(){e.setState({loading:!0,error:null}),x(e.state.querry,e.state.page).then((function(t){return e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.handleSearch=function(t){e.setState({querry:t,images:[],page:1},e.fetchImages)},e.closeModal=function(t){e.setState({modal:!1,largeImageUrl:""})},e.showModal=function(t){var a=t.target.dataset.url;console.log(t.target.dataset),e.setState({modal:!0,largeImageUrl:a})},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.state.images!==t.images&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.modal,r=e.largeImageUrl;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(m,{onSearch:this.handleSearch}),this.error&&Object(n.jsx)("h3",{children:"Error"}),this.state.loading&&Object(n.jsx)(p,{}),a&&Object(n.jsx)(w,{Onclose:this.closeModal,children:Object(n.jsx)("img",{src:r,alt:""})}),Object(n.jsx)(f,{images:t,onOpenModal:this.showModal}),t.length>0?Object(n.jsx)(S,{onClick:this.fetchImages}):null]})}}]),a}(r.Component);s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.4fd7b05b.chunk.js.map