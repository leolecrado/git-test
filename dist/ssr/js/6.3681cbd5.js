(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{a897:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("q-editor",{attrs:{autofocus:"",dense:e.$q.screen.lt.md,toolbar:[[{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]}],["bold","italic","strike","underline"],["token","hr","link","custom_btn"],["fullscreen"],[{label:e.$q.lang.editor.formatting,icon:e.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:e.$q.lang.editor.fontSize,icon:e.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:e.$q.lang.editor.defaultFont,icon:e.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"],["viewsource"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},on:{keyup:function(n){if(!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter"))return null;n.stopPropagation()}},model:{value:e.text,callback:function(n){e.text=n},expression:"text"}})},o=[],a={name:"editor",props:["value"],computed:{text:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},r=a,l=t("2877"),c=t("d66b"),s=t("eebe"),d=t.n(s),u=Object(l["a"])(r,i,o,!1,null,null,null);n["default"]=u.exports;d()(u,"components",{QEditor:c["a"]})}}]);