(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{2320:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"q-ma-xl"},t._l(t.data,(function(a){return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-8"},[e("div",{staticClass:"row"},[a.imgSrc?e("q-img",{staticClass:"q-mt-sm",staticStyle:{height:"250px","max-width":"300px"},attrs:{src:a.imgSrc}}):t._e(),e("div",{staticClass:"col q-ml-lg"},[e("div",{staticClass:"row"},[e("div",{domProps:{innerHTML:t._s(a.body)}})])])],1)]),e("div",{staticClass:"col q-my-sm justify-center"},[e("div",{staticClass:"row justify-center"},[e("h3",{staticClass:"q-my-sm col"},[t._v("Acheter")])]),e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"col "},[e("q-btn",{staticClass:"bg-orange",attrs:{label:"-"},on:{click:t.minusOne}}),e("q-btn",{staticClass:"q-mx-md",attrs:{label:t.count}}),e("q-btn",{staticClass:"bg-green",attrs:{label:"+"},on:{click:t.plusOne}})],1)]),e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"col q-my-md "},[e("q-btn",{attrs:{label:t.price+" €"}})],1)]),a.disponible?e("div",{staticClass:"row"},[e("q-btn",{attrs:{label:"Ajouter au panier"},on:{click:function(e){return t.addToCart(a)}}},[e("q-popup-proxy",[e("q-banner",[t._v(t._s(a.nom)+" dans le panier\n              ")])],1)],1)],1):t._e(),a.disponible?t._e():e("div",{staticClass:"row"},[e("q-btn",{attrs:{label:"Ajouter au panier",disable:"",color:"grey"},on:{click:function(e){return t.addToCart(a)}}})],1)])])])})),0)},i=[],n=(e("7f7f"),e("7fc3")),r=e.n(n),o=(e("a73c"),{name:"PageIndex",data:function(){return{url:"/"+this.$route.params.product,count:1,data:[],unitPrice:-1,firstLoad:!0,note:3.5}},computed:{price:function(){return Math.round(this.unitPrice*this.count*100)/100}},methods:{getData:function(){console.log("getting data");var t=this;r.a.database().ref("products").once("value").then((function(a){var e=a.val();for(var s in e){var i=e[s];"/"+t.$route.params.product==i.lien&&t.data.push(i)}}))},minusOne:function(){this.count>1&&(this.count-=1)},plusOne:function(){this.count+=1},getPrice:function(){var t=this,a="/"+this.$route.params.product;r.a.database().ref("products").once("value").then((function(e){var s=e.val();for(var i in s){var n=s[i];n.lien==a&&(t.unitPrice=n.prix)}console.log("new unit price =>",t.unitPrice),console.log("new total price=>",t.price),t.addPaypalScript()}))},addPaypalScript:function(){console.log("adding script ...");var t=document.createElement("script");t.src="https://www.paypal.com/sdk/js?client-id=AYQ3NJHCU4XZD5xkJJVxOX3czOO0uoIVsr8DEVMtEWftZD2jZ7XUanCxy8X7KlLnEjGkfTsQ80dLqkBv&currency=EUR",t.addEventListener("load",this.setLoaded),document.body.appendChild(t)},setLoaded:function(){this.loaded=!0;var t=this.price;console.log("priceToPay =>",t),window.paypal.Buttons({style:{shape:"rect",color:"gold",layout:"vertical",label:"paypal"},createOrder:function(a,e){return e.order.create({purchase_units:[{amount:{value:t}}]})},onApprove:function(t,a){return a.order.capture().then((function(t){alert("Transaction completed by "+t.payer.name.given_name+"!")}))}}).render(this.$refs.paypal)},addToCart:function(t){var a={prixTotal:this.price,prixUnitaire:t.prix,imgSrc:t.imgSrc,nom:t.nom,nombre:this.count,lien:t.lien,id:t.id};if(this.$q.sessionStorage.has("achats")){var e=this.$q.sessionStorage.getItem("achats");e.push(a),this.$q.sessionStorage.set("achats",e)}else this.$q.sessionStorage.set("achats",[a])}},watch:{price:function(t){0==this.firstLoad?this.getPrice():this.firstLoad}},mounted:function(){this.getData(),this.getPrice()}}),c=o,l=e("2877"),u=e("9989"),d=e("068f"),p=e("9c40"),h=e("7cbe"),m=e("54e1"),f=e("eebe"),v=e.n(f),g=Object(l["a"])(c,s,i,!1,null,null,null);a["default"]=g.exports;v()(g,"components",{QPage:u["a"],QImg:d["a"],QBtn:p["a"],QPopupProxy:h["a"],QBanner:m["a"]})}}]);