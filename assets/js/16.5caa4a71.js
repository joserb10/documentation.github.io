(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{280:function(a,e,n){"use strict";n.r(e);var o=n(13),i=Object(o.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"deployment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[a._v("#")]),a._v(" Deployment")]),a._v(" "),e("h2",{attrs:{id:"aws-instance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aws-instance"}},[a._v("#")]),a._v(" AWS Instance")]),a._v(" "),e("p",[a._v("Para el despliegue de la aplicación se usó amazon web services con una cuenta gratuita, donde se lanzó una instancia EC2 con el sistema operativo Ubuntu, se activo los puertos http, https, para todos los origenes de forma que la aplicación web sea accesibles. Así también se configuró una ip elástica para la instancia, de tal modo que al reiniciar la instancia no se modifique la ipv4 pública.")]),a._v(" "),e("h2",{attrs:{id:"configuracion-de-entorno-virtual-ubuntu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuracion-de-entorno-virtual-ubuntu"}},[a._v("#")]),a._v(" Configuración de entorno virtual Ubuntu")]),a._v(" "),e("p",[a._v("Se ingresó a la máquina virtual a través de putty con el uso de una llave par de claves .PPK, se actualizó el sistema operativo y se instaló nginx como servidor web y unzip para poder descomprimir el proyecto en el servidor.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    ssudo apt-get update\n    sudo apt-get install nginx\n    sudo apt install unzip\n")])])]),e("h2",{attrs:{id:"configuracion-de-nginx-para-deploy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuracion-de-nginx-para-deploy"}},[a._v("#")]),a._v(" Configuración de nginx para deploy")]),a._v(" "),e("p",[a._v('Se configuró el archivo de condiguración por defecto de nginx para que la aplicación web que lea tenga el root: "/home/ubuntu" lugar donde se copió el proyecto comprimido y se descomprimió con unzip. Se copió el proyecto comprimido usando filezilla en "/home/ubuntu".')]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    cd /home/ubuntu/\n    sudo unzip tienda_online.zip\n")])])]),e("h2",{attrs:{id:"configuracion-de-dominio-con-route-53"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuracion-de-dominio-con-route-53"}},[a._v("#")]),a._v(" Configuración de dominio con Route 53")]),a._v(" "),e("h3",{attrs:{id:"obtencion-dominio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#obtencion-dominio"}},[a._v("#")]),a._v(" Obtención dominio")]),a._v(" "),e("p",[a._v('Se obtuvo el dominio "tiendaonlinebsale.soy.pe" a través de aqphost de forma gratuita.')]),a._v(" "),e("h3",{attrs:{id:"creacion-de-zona-alojada"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creacion-de-zona-alojada"}},[a._v("#")]),a._v(" Creación de Zona Alojada")]),a._v(" "),e("p",[a._v('Se creó una zona alojada en aws con el nombre de dominio adquirido y se le creó dos registros adicionales.\nEl primero con el nombre original "tiendaonlinebsale.soy.pe" configurado con la ip del servidor web y el segundo con "www.tiendaonlinebsale.soy.pe".')]),a._v(" "),e("h3",{attrs:{id:"asignacion-de-dns-a-dominio-en-aqphost"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#asignacion-de-dns-a-dominio-en-aqphost"}},[a._v("#")]),a._v(" Asignación de dns a dominio en aqphost")]),a._v(" "),e("p",[a._v("Se estableció los siguientes 4 nombres de servidor:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Name Server 1: ns-736.awsdns-28.net\nName Server 1: ns-36.awsdns-04.com\nName Server 1: ns-1216.awsdns-24.org\nName Server 1: ns-1943.awsdns-50.co.uk\n")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);