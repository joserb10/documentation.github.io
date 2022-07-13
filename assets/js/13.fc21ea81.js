(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{279:function(n,e,a){"use strict";a.r(e);var t=a(13),r=Object(t.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"uso-de-la-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uso-de-la-api"}},[n._v("#")]),n._v(" Uso de la API")]),n._v(" "),e("h2",{attrs:{id:"endpoint-products"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#endpoint-products"}},[n._v("#")]),n._v(" EndPoint /products")]),n._v(" "),e("p",[n._v('Este endpoint devuelve la siguiente estructura JSON; "totalItems" indica el total de productos que existen con el filtro, "totalPages" la cantidad de paginas de ocho productos cada una, "currentPage" la pagina actual a la que se hizo el request y "products" que muestra un array de productos como resultado de la consulta. Si no se le envía ningún parametro al endpoint se devolverán todas los productos.')]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('    {\n        "totalItems": ,\n        "totalPages": 8,\n        "currentPage": 0,\n        "products": [\n            {\n                "id": 5,\n                "name": "ENERGETICA MR BIG",\n                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",\n                "price": 1490.0,\n                "discount": 20,\n                "category": {\n                    "id": 1,\n                    "name": "bebida energetica"\n                }\n            }\n        ]\n    }\n')])])]),e("h3",{attrs:{id:"parametro-prodcuts-category"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parametro-prodcuts-category"}},[n._v("#")]),n._v(" Parametro /prodcuts?category")]),n._v(" "),e("p",[n._v("Este parametro permite filtrar los productos por categoría. De igual forma si se agrega el parámetro adicional pageNo, que empieza en 0 siendo 0 la primera página, se devolverá la pagina solicitada.")]),n._v(" "),e("p",[n._v("Ejemplo:")]),n._v(" "),e("p",[n._v("API")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("    http://34.205.223.61:8080/products?category=2&pageNo=2\n")])])]),e("p",[n._v("RESPONSE")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('    {\n        "totalItems": 21,\n        "totalPages": 3,\n        "currentPage": 2,\n        "products": [\n            {\n                "id": 88,\n                "name": "PISCO MISTRAL GRAN NOBEL 40°",\n                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/grannobel9104.jpg",\n                "price": 19900.0,\n                "discount": 0,\n                "category": {\n                    "id": 2,\n                    "name": "pisco"\n                }\n            },\n            {\n                "id": 89,\n                "name": "PISCO MISTRAL 40°",\n                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/409346.jpg",\n                "price": 4990.0,\n                "discount": 0,\n                "category": {\n                    "id": 2,\n                    "name": "pisco"\n                }\n            },\n            {\n                "id": 90,\n                "name": "PISCO MISTRAL 46°",\n                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/469463.jpg",\n                "price": 7890.0,\n                "discount": 0,\n                "category": {\n                    "id": 2,\n                    "name": "pisco"\n                }\n            },\n            {\n                "id": 91,\n                "name": "PISCO MISTRAL NOBEL 40°",\n                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/nobel409551.jpg",\n                "price": 19990.0,\n                "discount": 0,\n                "category": {\n                    "id": 2,\n                    "name": "pisco"\n                }\n            },\n            {\n                "id": 92,\n                "name": "PISCO MISTRAL NOBEL 46",\n                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/nobelanejado9639.jpg",\n                "price": 15990.0,\n                "discount": 15,\n                "category": {\n                    "id": 2,\n                    "name": "pisco"\n                }\n            }\n        ]\n    }\n')])])]),e("h3",{attrs:{id:"parametro-prodcuts-text"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parametro-prodcuts-text"}},[n._v("#")]),n._v(" Parametro /prodcuts?text")]),n._v(" "),e("p",[n._v("Este parametro permite filtrar los productos por texto de búsqueda. De igual forma si se agrega el parámetro adicional pageNo, que empieza en 0 siendo 0 la primera página, se devolverá la pagina solicitada.")]),n._v(" "),e("p",[n._v("Ejemplo:")]),n._v(" "),e("p",[n._v("API")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("    http://34.205.223.61:8080/products?text=bebida&pageNo=0\n")])])]),e("p",[n._v("RESPONSE")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('    {\n    "totalItems": 1,\n    "totalPages": 1,\n    "currentPage": 0,\n    "products": [\n        {\n            "id": 68,\n            "name": "Bebida Sprite 1 Lt",\n            "url_image": null,\n            "price": 1250.0,\n            "discount": 10,\n            "category": {\n                "id": 4,\n                "name": "bebida"\n            }\n        }\n    ]\n}\n')])])]),e("h3",{attrs:{id:"parametro-prodcuts-minprice-maxprice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parametro-prodcuts-minprice-maxprice"}},[n._v("#")]),n._v(" Parametro /prodcuts?minPrice=&maxPrice=")]),n._v(" "),e("p",[n._v("Estos parametros permiten filtrar los productos por rango de precios. De igual forma si se agrega el parámetro adicional pageNo, que empieza en 0 siendo 0 la primera página, se devolverá la pagina solicitada.")]),n._v(" "),e("p",[n._v("Ejemplo:")]),n._v(" "),e("p",[n._v("API")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("    http://34.205.223.61:8080/products?minPrice=1000&maxPrice=2000&pageNo=0\n")])])]),e("p",[n._v("RESPONSE")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('    {\n        "totalItems": 17,\n        "totalPages": 3,\n        "currentPage": 0,\n        "products": [\n            {\n                "id": 5,\n                "name": "ENERGETICA MR BIG",\n                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",\n                "price": 1490.0,\n                "discount": 20,\n                "category": {\n                    "id": 1,\n                    "name": "bebida energetica"\n                }\n            },\n            {\n                "id": 6,\n                "name": "ENERGETICA RED BULL",\n                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",\n                "price": 1490.0,\n                "discount": 0,\n                "category": {\n                    "id": 1,\n                    "name": "bebida energetica"\n                }\n            },\n            {\n                "id": 7,\n                "name": "ENERGETICA SCORE",\n                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/logo7698.png",\n                "price": 1290.0,\n                "discount": 0,\n                "category": {\n                    "id": 1,\n                    "name": "bebida energetica"\n                }\n            },\n            {\n                "id": 34,\n                "name": "ENERGETICA MONSTER RIPPER",\n                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/mosterriper0436.jpg",\n                "price": 1990.0,\n                "discount": 0,\n                "category": {\n                    "id": 1,\n                    "name": "bebida energetica"\n                }\n            },\n            {\n                "id": 35,\n                "name": "ENERGETICA MAKKA DRINKS",\n                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/makka-drinks-250ml0455.jpg",\n                "price": 1190.0,\n                "discount": 0,\n                "category": {\n                    "id": 1,\n                    "name": "bebida energetica"\n                }\n            },\n            {\n                "id": 36,\n                "name": "ENERGETICA MONSTER VERDE",\n                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/monsterverde0476.jpg",\n                "price": 1990.0,\n                "discount": 0,\n                "category": {\n                    "id": 1,\n                    "name": "bebida energetica"\n                }\n            },\n            {\n                "id": 37,\n                "name": "COCA COLA ZERO DESECHABLE",\n                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/cocazero9766.jpg",\n                "price": 1490.0,\n                "discount": 0,\n                "category": {\n                    "id": 4,\n                    "name": "bebida"\n                }\n            },\n            {\n                "id": 48,\n                "name": "SPRITE 1 1/2 Lts",\n                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/sprite-lata-33cl5575.jpg",\n                "price": 1500.0,\n                "discount": 0,\n                "category": {\n                    "id": 4,\n                    "name": "bebida"\n                }\n            }\n        ]\n    }\n')])])]),e("h2",{attrs:{id:"endpoint-categories"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#endpoint-categories"}},[n._v("#")]),n._v(" EndPoint /categories")]),n._v(" "),e("p",[n._v('Este endpoint devuelve todas las categorias con la siguiente estructura JSON; "id" indica el identificador de la categoría y "name" el nombre de la categoría. Este endpoint no admite parámetros, ya que sólo envía todos las categorías que existen en la base de datos.')]),n._v(" "),e("p",[n._v("RESPONSE")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('    [\n        {\n            "id": 1,\n            "name": "bebida energetica"\n        },\n        {\n            "id": 2,\n            "name": "pisco"\n        },\n        {\n            "id": 3,\n            "name": "ron"\n        },\n        {\n            "id": 4,\n            "name": "bebida"\n        },\n        {\n            "id": 5,\n            "name": "snack"\n        },\n        {\n            "id": 6,\n            "name": "cerveza"\n        },\n        {\n            "id": 7,\n            "name": "vodka"\n        }\n    ]\n')])])])])}),[],!1,null,null,null);e.default=r.exports}}]);