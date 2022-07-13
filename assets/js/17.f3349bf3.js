(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{282:function(a,e,s){"use strict";s.r(e);var n=s(13),t=Object(n.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"estilos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#estilos"}},[a._v("#")]),a._v(" Estilos")]),a._v(" "),e("p",[a._v("Los estilos están construidos con bootstrap y las personalizaciones específicas están escritas en css.")]),a._v(" "),e("h2",{attrs:{id:"responsive-design"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#responsive-design"}},[a._v("#")]),a._v(" Responsive Design")]),a._v(" "),e("p",[a._v('El responsive design se construyó con el sistema de grillas de bootstrap de tal manera que la vista para dispositivos de diferentes tamaños se adapte y sea agradable al usuario. Este sitema de grillas se basa en filas "row" y columnas "col", las columnas pueden tomar desde un ancho 1 - 12.')]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<div class="container">\n  <div class="row">\n    <div class="col">\n      Column\n    </div>\n    <div class="col">\n      Column\n    </div>\n    <div class="col">\n      Column\n    </div>\n  </div>\n</div>\n')])])]),e("h2",{attrs:{id:"estilos-personalizados-en-css"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#estilos-personalizados-en-css"}},[a._v("#")]),a._v(" Estilos Personalizados en CSS")]),a._v(" "),e("h3",{attrs:{id:"customizar-el-carousel-y-sus-elementos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#customizar-el-carousel-y-sus-elementos"}},[a._v("#")]),a._v(" Customizar el carousel y sus elementos")]),a._v(" "),e("p",[a._v("Se modificó el alto de la imagen de carousel y se crearon dos clases para que los captions de cada imagen vaya una a la izquierda y la otra a la derecha.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/*Customización carousel*/\n/*encajar imagen al ancho de la pantalla y alto*/\n.img-carousel {\n    height: 450px;\n    object-fit: cover;\n}\n\n/*alinear texto de caption a la derecha*/\n.caption-img-carousel-right {\n    top: 180px;\n    right: 30px;\n    text-align: right;\n}\n\n/*alinear texto de caption a la izquierda*/\n.caption-img-carousel-left {\n    top: 180px;\n    left: 30px;\n    text-align: left;\n}\n")])])]),e("h3",{attrs:{id:"spinners-para-mostrar-al-usuario-la-carga-de-elementos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spinners-para-mostrar-al-usuario-la-carga-de-elementos"}},[a._v("#")]),a._v(" Spinners Para mostrar al usuario la carga de elementos")]),a._v(" "),e("p",[a._v("Se escribió los siguientes estilos para manejar la petición de categorias y mostrar un spinner mientras carga la obtención de categorías.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/*Spinner Para carga de categorias de api*/\n.spinner {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n  .spinner div {\n    display: inline-block;\n    position: absolute;\n    left: 8px;\n    width: 16px;\n    background: #fff;\n    animation: spinner 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n  }\n  .spinner div:nth-child(1) {\n    left: 8px;\n    animation-delay: -0.24s;\n  }\n  .spinner div:nth-child(2) {\n    left: 32px;\n    animation-delay: -0.12s;\n  }\n  .spinner div:nth-child(3) {\n    left: 56px;\n    animation-delay: 0;\n  }\n  @keyframes spinner {\n    0% {\n      top: 8px;\n      height: 64px;\n    }\n    50%, 100% {\n      top: 24px;\n      height: 32px;\n    }\n  }\n")])])]),e("h3",{attrs:{id:"transiciones-y-hover-effect-sobre-los-cards-de-productos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transiciones-y-hover-effect-sobre-los-cards-de-productos"}},[a._v("#")]),a._v(" Transiciones y hover effect sobre los cards de productos")]),a._v(" "),e("p",[a._v("Los estilos al hacer pasar el mouse sobre el card de producto este se mostrará 125% más grande y con un color más opaco.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/*Spinner Para carga de categorias de api*/\n.spinner {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n  .spinner div {\n    display: inline-block;\n    position: absolute;\n    left: 8px;\n    width: 16px;\n    background: #fff;\n    animation: spinner 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n  }\n  .spinner div:nth-child(1) {\n    left: 8px;\n    animation-delay: -0.24s;\n  }\n  .spinner div:nth-child(2) {\n    left: 32px;\n    animation-delay: -0.12s;\n  }\n  .spinner div:nth-child(3) {\n    left: 56px;\n    animation-delay: 0;\n  }\n  @keyframes spinner {\n    0% {\n      top: 8px;\n      height: 64px;\n    }\n    50%, 100% {\n      top: 24px;\n      height: 32px;\n    }\n  }\n")])])]),e("h3",{attrs:{id:"clases-de-badges-de-descuento-de-card-de-producto"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clases-de-badges-de-descuento-de-card-de-producto"}},[a._v("#")]),a._v(" Clases de badges de descuento de card de producto")]),a._v(" "),e("p",[a._v("Estos estilos permiten que los badges tenan un background color gradiente y un clase para que se oculten los badges.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/*Customizar badge de card product*/\n.badge-custom {\n    background: rgb(6,3,65);\n    background: linear-gradient(90deg, rgba(6,3,65,1) 0%, rgb(180, 174, 174) 100%);\n}\n\n/*Class para esconder badges de descuento*/\n.display_none {\n    display: none;    \n}\n")])])]),e("h3",{attrs:{id:"customizar-swal-alert"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#customizar-swal-alert"}},[a._v("#")]),a._v(" Customizar Swal alert")]),a._v(" "),e("p",[a._v("Estos estilos modifican los estilos por defecto de SweetAlert2, cambiandole los tamaños y colores.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/*Customizar Swal Alert*/\n.swal2-title {\n    color: white !important;\n    font-size: 15px !important;\n}\n.swal-small {\n    height: 60px !important;\n    width: 300px !important;\n}\n\n/*Customizar Swal Alert de añadir a carrito*/\n.swal-small-cart {\n    height: 43px !important;\n    width: 300px !important;\n}\n")])])])])}),[],!1,null,null,null);e.default=t.exports}}]);