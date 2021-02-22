(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),s=n(6),r=n.n(s),i=(n(15),n(9)),u=n(2),l=n.p+"static/media/Vector.8724261e.svg";var p=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{className:"header__logo",src:l,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})})},d=o.a.createContext();var h=function(e){var t=o.a.useContext(d),n=e.card.likes.some((function(e){return e._id===t._id})),c=e.card.owner._id===t._id,s="element__like ".concat(n?"element__like_pressed":""),r="element__basket ".concat(c?"":"element__basket_hidden");return Object(a.jsxs)("article",{className:"element",children:[Object(a.jsx)("img",{onClick:function(){e.onCardClick(e.card)},className:"element__image",src:e.card.link,alt:e.card.name}),Object(a.jsxs)("div",{className:"element__position",children:[Object(a.jsx)("h2",{className:"element__title",children:e.card.name}),Object(a.jsxs)("div",{className:"element__like-number",children:[Object(a.jsx)("button",{onClick:function(){e.onCardLike(e.card)},className:s,type:"button"}),Object(a.jsx)("p",{className:"element__number",children:e.card.likes.length})]})]}),Object(a.jsx)("button",{onClick:function(){e.onCardDelete(e.card)},className:r,type:"button"})]})};var _=function(e){var t=e.handleEditAvatarClick,n=e.handleEditProfileClick,c=e.handleAddPlaceClick,s=e.handleCardClick,r=e.handleLikeClick,i=e.handleCardDelete,u=e.cards,l=o.a.useContext(d);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsx)("div",{onClick:t,className:"profile__avatar-container",children:Object(a.jsx)("img",{className:"profile__avatar",src:l.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsx)("h1",{className:"profile__title",children:l.name}),Object(a.jsx)("button",{onClick:n,className:"profile__edit-button",type:"button"}),Object(a.jsx)("p",{className:"profile__paragraph",children:l.about})]}),Object(a.jsx)("button",{onClick:c,className:"profile__add-button",type:"button"})]}),Object(a.jsx)("section",{className:"elements",children:u.map((function(e){return Object(a.jsx)(h,{card:e,onCardClick:s,onCardLike:r,onCardDelete:i},e._id)}))})]})};var j=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})};var m=function(e){var t=e.name,n=e.title,o=e.isOpen,s=e.onClose,r=e.onOvarlayClose,i=e.onSubmit,u=e.children;return Object(c.useEffect)((function(){if(o){var e=function(e){27===e.keyCode&&s()};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}})),Object(a.jsx)("div",{className:"popup popup_type_".concat(t," ").concat(o&&"popup_opened"),onClick:r,children:Object(a.jsxs)("div",{className:"popup__content",children:[Object(a.jsx)("button",{className:"popup__close",type:"button",onClick:s}),Object(a.jsx)("h3",{className:"popup__title",children:n}),Object(a.jsx)("form",{className:"popup__form popup__form_type_".concat(t),onSubmit:i,name:t,noValidate:!0,children:u})]})})};var b=function(e){var t=e.card,n=e.onClose,o=e.isOpen,s=e.onOvarlayClose;return Object(c.useEffect)((function(){if(o){var e=function(e){27===e.keyCode&&n()};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}})),Object(a.jsx)("div",{className:"popup popup_type_big-photo ".concat(o&&"popup_opened"),onClick:s,children:Object(a.jsxs)("div",{className:"popup__content-photo",children:[Object(a.jsx)("button",{className:"popup__close popup__close_type_close-big-foto",type:"button",onClick:n}),Object(a.jsx)("img",{className:"popup__photo",src:t.link,alt:t.name}),Object(a.jsx)("h3",{className:"popup__caption",children:t.name})]})})},f=n(7),O=n(8),v=new(function(){function e(t){var n=t.address,a=t.token;Object(f.a)(this,e),this._address=n,this._token=a}return Object(O.a)(e,[{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._address,"/cards"),{headers:{authorization:this._token}}).then((function(t){return e._checkAnswerCorrectness(t)}))}},{key:"getUserInformation",value:function(){var e=this;return fetch("".concat(this._address,"/users/me"),{headers:{authorization:this._token}}).then((function(t){return e._checkAnswerCorrectness(t)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._address,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._checkAnswerCorrectness(e)}))}},{key:"removeCard",value:function(e){var t=this;return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._checkAnswerCorrectness(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this;return t?fetch("".concat(this._address,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return n._checkAnswerCorrectness(e)})):fetch("".concat(this._address,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return n._checkAnswerCorrectness(e)}))}},{key:"addUserInfo",value:function(e){var t=this;return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._checkAnswerCorrectness(e)}))}},{key:"addUserAvatar",value:function(e){var t=this;return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._checkAnswerCorrectness(e)}))}},{key:"_checkAnswerCorrectness",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}}]),e}())({address:"https://mesto.nomoreparties.co/v1/cohort-19",token:"369f7f82-3628-418a-9ccf-d1d1496569f6"});var C=function(e){var t=e.isOpen,n=e.onClose,s=e.onOvarlayClose,r=e.onSubmit,i=Object(c.useState)(""),l=Object(u.a)(i,2),p=l[0],h=l[1],_=Object(c.useState)(""),j=Object(u.a)(_,2),b=j[0],f=j[1],O=o.a.useContext(d);return Object(c.useEffect)((function(){h(String(O.name)),f(String(O.about))}),[O]),Object(a.jsxs)(m,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:n,onOvarlayClose:s,onSubmit:function(e){e.preventDefault(),r({name:p,about:b})},children:[Object(a.jsxs)("label",{className:"popup__input-label",htmlFor:"name-input",children:[Object(a.jsx)("input",{id:"name-input",className:"popup__input popup__input_type_name",type:"text",name:"profileName",minLength:"2",maxLength:"40",required:!0,value:p,onChange:function(e){h(e.target.value)}}),Object(a.jsx)("span",{id:"name-input-error",className:"popup__input-error"})]}),Object(a.jsxs)("label",{className:"popup__input-label",htmlFor:"occupation-input",children:[Object(a.jsx)("input",{id:"occupation-input",className:"popup__input popup__input_type_title",type:"text",name:"occupation",minLength:"2",maxLength:"200",required:!0,value:b,onChange:function(e){f(e.target.value)}}),Object(a.jsx)("span",{id:"occupation-input-error",className:"popup__input-error"})]}),Object(a.jsx)("button",{type:"submit",className:"popup__save popup__save_type_edit",value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})};var k=function(e){var t=e.isOpen,n=e.onClose,o=e.onOvarlayClose,s=e.onSubmit,r=Object(c.useRef)(null);return Object(a.jsxs)(m,{name:"update-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,onClose:n,onOvarlayClose:o,onSubmit:function(e){e.preventDefault(),s({avatar:r.current.value}),r.current.value=""},children:[Object(a.jsxs)("label",{className:"popup__input-label",htmlFor:"avatar-input",children:[Object(a.jsx)("input",{ref:r,id:"avatar-input",className:"popup__input popup__input_type_avatar-photo",type:"url",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0443",required:!0}),Object(a.jsx)("span",{id:"avatar-input-error",className:"popup__input-error"})]}),Object(a.jsx)("button",{type:"submit",className:"popup__save popup__save_type_avatar",value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})};var x=function(e){var t=e.isOpen,n=e.onClose,o=e.onOvarlayClose,s=e.onSubmit,r=Object(c.useState)(""),i=Object(u.a)(r,2),l=i[0],p=i[1],d=Object(c.useState)(""),h=Object(u.a)(d,2),_=h[0],j=h[1];return Object(c.useEffect)((function(){!1===t&&(p(""),j(""))}),[t]),Object(a.jsxs)(m,{name:"add-photo",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t,onClose:n,onOvarlayClose:o,onSubmit:function(e){e.preventDefault(),s({name:l,link:_})},children:[Object(a.jsxs)("label",{className:"popup__input-label",htmlFor:"place-input",children:[Object(a.jsx)("input",{onChange:function(e){p(e.target.value)},id:"place-input",className:"popup__input popup__input_type_place",type:"text",name:"place",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",value:l,maxLength:"30",required:!0}),Object(a.jsx)("span",{id:"place-input-error",className:"popup__input-error"})]}),Object(a.jsxs)("label",{className:"popup__input-label",htmlFor:"url-input",children:[Object(a.jsx)("input",{onChange:function(e){j(e.target.value)},id:"url-input",className:"popup__input popup__input_type_photo",type:"url",name:"photo",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:_,required:!0}),Object(a.jsx)("span",{id:"url-input-error",className:"popup__input-error"})]}),Object(a.jsx)("button",{type:"submit",className:"popup__save popup__save_type_photo",value:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})};var y=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)(!1),r=Object(u.a)(s,2),l=r[0],h=r[1],f=Object(c.useState)(!1),O=Object(u.a)(f,2),y=O[0],N=O[1],g=Object(c.useState)(!1),S=Object(u.a)(g,2),E=S[0],L=S[1],A=Object(c.useState)({}),w=Object(u.a)(A,2),T=w[0],P=w[1],D=Object(c.useState)({}),F=Object(u.a)(D,2),z=F[0],I=F[1],U=Object(c.useState)([]),q=Object(u.a)(U,2),J=q[0],B=q[1];function H(){N(!1),o(!1),h(!1),L(!1),P({})}function M(e){e.target.classList.contains("popup")&&H()}return Object(c.useEffect)((function(){v.getUserInformation().then((function(e){I(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438".concat(e))}))}),[]),Object(c.useEffect)((function(){v.getInitialCards().then((function(e){B(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438".concat(e))}))}),[]),Object(a.jsx)("div",{className:"page",children:Object(a.jsx)("div",{className:"page__container",children:Object(a.jsxs)(d.Provider,{value:z,children:[Object(a.jsx)(p,{}),Object(a.jsx)(_,{handleEditAvatarClick:function(){N(!0)},handleEditProfileClick:function(){o(!0)},handleAddPlaceClick:function(){h(!0)},handleCardClick:function(e){P(e),L(!0)},handleLikeClick:function(e){var t=e.likes.some((function(e){return e._id===z._id}));v.changeLikeCardStatus(e._id,!t).then((function(t){var n=J.map((function(n){return n._id===e._id?t:n}));B(n)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438".concat(e))}))},handleCardDelete:function(e){v.removeCard(e._id).then((function(t){var n=J.filter((function(t){return t._id!==e._id}));B(n)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438".concat(e))}))},cards:J}),Object(a.jsx)(j,{}),Object(a.jsx)(b,{card:T,onClose:H,isOpen:E,onOvarlayClose:M}),Object(a.jsx)(C,{isOpen:n,onClose:H,onOvarlayClose:M,onSubmit:function(e){var t=e.name,n=e.about;v.addUserInfo({name:t,about:n}).then((function(e){I(e),H()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438".concat(e))}))}}),Object(a.jsx)(x,{isOpen:l,onClose:H,onOvarlayClose:M,onSubmit:function(e){var t=e.name,n=e.link;v.addCard({name:t,link:n}).then((function(e){B([e].concat(Object(i.a)(J))),H()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438".concat(e))}))}}),Object(a.jsx)(k,{isOpen:y,onClose:H,onOvarlayClose:M,onSubmit:function(e){var t=e.avatar;v.addUserAvatar({avatar:t}).then((function(e){I(e),H()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438".concat(e))}))}}),Object(a.jsx)(m,{name:"delete\u0421ard",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",children:Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{type:"submit",className:"popup__save popup__save_type_delete\u0421ard",children:"\u0414\u0430"})})})]})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),N()}},[[16,1,2]]]);
//# sourceMappingURL=main.4d5466fc.chunk.js.map