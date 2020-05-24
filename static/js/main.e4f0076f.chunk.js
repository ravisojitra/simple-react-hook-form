(this["webpackJsonpsimple-react-hook-form-example"]=this["webpackJsonpsimple-react-hook-form-example"]||[]).push([[0],{14:function(e,t,r){e.exports=r(22)},22:function(e,t,r){"use strict";r.r(t);r(9);var a=r(0),n=r.n(a),l=r(10),i=r.n(l);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var u=function(e,t){var r,a,n=t.type,l=t.payload;switch(n){case"INPUT_CHANGE":var i=l.key,u=l.value;return o(o({},e),{},{values:o(o({},e.values),{},(r={},r[i]=u,r)),touched:o(o({},e.touched),{},(a={},a[i]=!0,a))});case"VALIDATE_FORM":var c=l.errors||{};return o(o({},e),{},{errors:c});case"RESET_FORM":return o(o({},l),{},{errors:{}});case"SUBMIT_FORM":return o(o({},e),{},{isSubmitted:!0,submitCounter:++e.submitCounter});case"CLEAR_FORM":return o(o({},e),{},{values:o({},l.values),errors:{}});default:return e}},c={validate:!0,validationOnChange:!1,validateSchema:!1},s=function(e,t){void 0===e&&(e={}),void 0===t&&(t=o({},c));var r=function(e){return{values:o({},e),errors:{},touched:{},isSubmitted:!1,submitCounter:0}}(e),l=Object(a.useReducer)(u,r),i=l[0],s=l[1],m=t,v=m.validate,d=m.validationOnChange,b=m.validateSchema;n.a.useEffect((function(){d&&i.isSubmitted&&function(){try{Promise.resolve(h()).then((function(){}))}catch(e){return Promise.reject(e)}}()}),[i.values,d]),n.a.useEffect((function(){i.isSubmitted&&function(){try{Promise.resolve(h()).then((function(e){e&&onSubmit()}))}catch(e){return Promise.reject(e)}}()}),[i.submitCounter,i.isSubmitted]);var h=function(){try{return Promise.resolve(f()).then((function(e){var t=e.isValid,r=e.errors;return s({type:"VALIDATE_FORM",payload:{errors:r}}),t}))}catch(e){return Promise.reject(e)}},f=function(){return new Promise((function(e,t){if(b)try{e({isValid:b.validateSync(i.values,{abortEarly:!1}),errors:{}})}catch(a){var r={};a.inner.forEach((function(e){r[e.path]?r[e.path].push(e.message):r[e.path]=[e.message]})),e({isValid:!1,errors:r})}else e({isValid:!0,errors:{}})}))},p=Object(a.useCallback)((function(e,t){try{return s({type:"INPUT_CHANGE",payload:{key:e,value:t}}),Promise.resolve()}catch(r){return Promise.reject(r)}})),E=Object(a.useCallback)((function(){s({type:"RESET_FORM",payload:o({},r)})}),[r]),y=Object(a.useCallback)((function(){var e=o({},i.values),t=Object.keys(e).forEach((function(t){e[t]=""}));s({type:"CLEAR_FORM",payload:o({},t)})}));return o({handleChange:p,resetForm:E,handleSubmit:Object(a.useCallback)((function(e){try{return v?s({type:"SUBMIT_FORM"}):e(),Promise.resolve()}catch(t){return Promise.reject(t)}})),clearForm:y},i)},m=r(6),v=m.a().shape({name:m.b().min(5,"Name must be minimum of length 5").required("Name is required"),email:m.b().email("Please enter valid email").required("Email is required"),title:m.b().oneOf(["Mr","Mrs","Miss"],"Please Select Title").required(),website:m.b().url("Please enter valid url").required("Website is required.")}),d=function(e){var t=e.label,r=e.placeholder,a=e.type,l=void 0===a?"text":a,i=e.onChange,o=e.value,u=void 0===o?"":o,c=e.error;return n.a.createElement("div",null,n.a.createElement("label",{htmlFor:t},t),n.a.createElement("input",{onChange:function(e){return i&&i(e.currentTarget.value)},name:t,placeholder:r,type:l,value:u}),c&&n.a.createElement("p",{className:"errorText"},c.join("\n")))},b=function(e){var t=e.label,r=e.onChange,a=e.value,l=void 0===a?"":a,i=e.error;return n.a.createElement("div",null,n.a.createElement("label",null,t),n.a.createElement("select",{name:"title",value:l,onChange:function(e){return r&&r(e.target.value)}},n.a.createElement("option",{value:""},"Select ",t),n.a.createElement("option",{value:"Mr"},"Mr"),n.a.createElement("option",{value:"Mrs"},"Mrs"),n.a.createElement("option",{value:"Miss"},"Miss")),i&&n.a.createElement("p",{className:"errorText"},i.join("\n")))},h=function(){var e=Object(a.useMemo)((function(){return{name:"Ravi",email:"",title:"",website:""}})),t=s(e,{validate:!0,validateSchema:v,validationOnChange:!0}),r=t.handleChange,l=t.resetForm,i=t.clearForm,o=t.values,u=t.handleSubmit,c=t.errors,m=function(){console.log("form is valid, Do what you gotta do!")};return n.a.createElement("div",{className:"App"},n.a.createElement("form",null,n.a.createElement(d,{label:"Full Name",placeholder:"Ravi Sojitra",onChange:function(e){return r("name",e)},value:o.name,error:c.name}),n.a.createElement(d,{label:"Email",placeholder:"ravisojitra79@gmail.com",onChange:function(e){return r("email",e)},value:o.email,error:c.email}),n.a.createElement(d,{label:"Website",placeholder:"Your Website",onChange:function(e){return r("website",e)},value:o.website,error:c.website}),n.a.createElement(b,{label:"Title",onChange:function(e){return r("title",e)},value:o.title,error:c.title}),n.a.createElement("div",{className:"buttonContainer"},n.a.createElement("button",{type:"reset",onClick:i},"Clear"),n.a.createElement("button",{type:"reset",onClick:l},"Reset Default"),n.a.createElement("button",{type:"button",className:"submitButton",onClick:function(){return u(m)}},"Submit"))))};i.a.render(n.a.createElement(h,null),document.getElementById("root"))},9:function(e,t,r){}},[[14,1,2]]]);
//# sourceMappingURL=main.e4f0076f.chunk.js.map