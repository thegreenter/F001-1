(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{102:function(e,a,n){"use strict";var t=n(0),r=Object(t.createContext)(void 0);a.a=r},103:function(e,a,n){"use strict";var t=n(0),r=n(102);a.a=function(){var e=Object(t.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},110:function(e,a,n){"use strict";var t=n(0),r=n.n(t),c=n(103),o=n(97),l=n(52),i=n.n(l),s=37,b=39;a.a=function(e){var a=e.block,n=e.children,l=e.defaultValue,m=e.values,u=e.groupId,d=Object(c.a)(),p=d.tabGroupChoices,O=d.setTabGroupChoices,j=Object(t.useState)(l),v=j[0],h=j[1];if(null!=u){var g=p[u];null!=g&&g!==v&&m.some((function(e){return e.value===g}))&&h(g)}var f=function(e){h(e),null!=u&&O(u,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a})},m.map((function(e){var a=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===a,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":v===a}),key:a,ref:function(e){return N.push(e)},onKeyDown:function(e){return function(e,a,n){switch(n.keyCode){case b:!function(e,a){var n=e.indexOf(a)+1;e[n]?e[n].focus():e[0].focus()}(e,a);break;case s:!function(e,a){var n=e.indexOf(a)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,a)}}(N,e.target,e)},onFocus:function(){return f(a)},onClick:function(){return f(a)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},t.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},111:function(e,a,n){"use strict";var t=n(0),r=n.n(t);a.a=function(e){return r.a.createElement("div",null,e.children)}},79:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return i})),n.d(a,"metadata",(function(){return s})),n.d(a,"rightToc",(function(){return b})),n.d(a,"default",(function(){return u}));var t=n(2),r=n(6),c=(n(0),n(95)),o=n(110),l=n(111),i={id:"validation",title:"Validar el comprobante electr\xf3nico",sidebar_label:"Validaci\xf3n"},s={unversionedId:"validation",id:"validation",isDocsHomePage:!1,title:"Validar el comprobante electr\xf3nico",description:"Para verificar que nuestros comprobantes sean v\xe1lidos, existen 2 tipos de validaciones:",source:"@site/docs/validation.md",permalink:"/docs/validation",editUrl:"https://github.com/thegreenter/F001-1/edit/master/website/docs/validation.md",sidebar_label:"Validaci\xf3n",sidebar:"docs",previous:{title:"Firma Digital",permalink:"/docs/sign"},next:{title:"Servicios Web de SUNAT",permalink:"/docs/webservices"}},b=[{value:"Herramientas",id:"herramientas",children:[]},{value:"Validaci\xf3n de Esquema (XSD)",id:"validaci\xf3n-de-esquema-xsd",children:[{value:"<code>xmllint</code>",id:"xmllint",children:[]},{value:"Errores",id:"errores",children:[]}]},{value:"Validaci\xf3n de contenido (XSL)",id:"validaci\xf3n-de-contenido-xsl",children:[{value:"<code>xsltproc</code>",id:"xsltproc",children:[]},{value:"Errores",id:"errores-1",children:[]}]}],m={rightToc:b};function u(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},m,n,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Para verificar que nuestros comprobantes sean v\xe1lidos, existen 2 tipos de validaciones:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Validaci\xf3n de esquema (UBL 2.1 - ",Object(c.b)("a",Object(t.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/XML_Schema_(W3C)"}),"XSD"),")"),Object(c.b)("li",{parentName:"ol"},"Validaci\xf3n de contenido (Reglas de validaci\xf3n de SUNAT - ",Object(c.b)("a",Object(t.a)({parentName:"li"},{href:"https://es.wikipedia.org/wiki/Extensible_Stylesheet_Language"}),"XSL"),")")),Object(c.b)("h2",{id:"herramientas"},"Herramientas"),Object(c.b)("p",null,"Para completar esta secci\xf3n necesitaremos utilizar algunas herramientas."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(t.a)({parentName:"li"},{href:"http://xmlsoft.org/xmllint.html"}),Object(c.b)("inlineCode",{parentName:"a"},"xmllint"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(t.a)({parentName:"li"},{href:"http://xmlsoft.org/XSLT/xsltproc.html"}),Object(c.b)("inlineCode",{parentName:"a"},"xsltproc")))),Object(c.b)("p",null,"Tambien necesitaremos un comprobante XML a validar, utilizaremos el XML creado en la secci\xf3n anterior."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(t.a)({parentName:"li"},{href:"https://fe-primer.greenter.dev/docs/sign#resultado"}),"20123456789-01-F001-1.xml"))),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Windows")),Object(c.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Puedes descargar las herramientas desde este ",Object(c.b)("a",{href:"https://github.com/thegreenter/F001-1/releases/download/v1.0/tools.zip",target:"_blank"},"enlace"),"."))),Object(c.b)("h2",{id:"validaci\xf3n-de-esquema-xsd"},"Validaci\xf3n de Esquema (XSD)"),Object(c.b)("p",null,"Para verificar que el XML construido cumple con el esquema del est\xe1ndar UBL, debemos primero contar con los archivos XSD (",Object(c.b)("inlineCode",{parentName:"p"},"XML Schema Definition"),") que describe los elementos que puede contener el comprobante XML, para el caso de SUNAT esto se pueden descargar desde ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://cpe.sunat.gob.pe/sites/default/files/inline-files/2.1.zip"}),"aqu\xed"),"."),Object(c.b)("p",null,"Esta ser\xe1 la estructura del directorio de trabajo."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),"/\n\u251c\u2500\u2500 2.1/\n\u2502   \u251c\u2500 common/\n\u2502   \u2514\u2500 maindoc/\n\u2502       \u251c\u2500 ...\n\u2502       \u2514\u2500 UBL-Invoice-2.1.xsd\n\u2502\n\u251c\u2500\u2500 20123456789-01-F001-1.xml\n")),Object(c.b)("h3",{id:"xmllint"},Object(c.b)("inlineCode",{parentName:"h3"},"xmllint")),Object(c.b)("p",null,"Esta herramienta nos permitir\xe1 validar el comprobante XML, con el esquema XSD relacionado. En este caso validaremos una factura, el archivo xml ser\xe1 ",Object(c.b)("inlineCode",{parentName:"p"},"20123456789-01-F001-1.xml")," y el esquema XSD, ",Object(c.b)("inlineCode",{parentName:"p"},"UBL-Invoice-2.1.xsd"),"."),Object(c.b)("p",null,"Comando para validar el comprobante XML con su esquema XSD."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"xmllint --schema ./2.1/maindoc/UBL-Invoice-2.1.xsd 20123456789-01-F001-1.xml --noout\n")),Object(c.b)("p",null,"Resultado:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"20123456789-01-F001-1.xml validates\n")),Object(c.b)("p",null,"Par\xe1metros:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"--schema"),": Indica la ruta del archivo XSD. "),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"--noout"),": Solo muestra los errores encontrados.")),Object(c.b)("h3",{id:"errores"},"Errores"),Object(c.b)("p",null,"Como nuestro comprobante XML fue elaborado correctamente, no tenemos errores, as\xed que para probar escenarios de error, haremos algunos cambios en el XML."),Object(c.b)(o.a,{defaultValue:"caso1",values:[{label:"Caso 1",value:"caso1"},{label:"Caso 2",value:"caso2"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"caso1",mdxType:"TabItem"},Object(c.b)("p",null,"Eliminaremos el nodo ",Object(c.b)("inlineCode",{parentName:"p"},"cbc:PriceAmount")," (Valor venta unitario)."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml",metastring:"{2}","{2}":!0}),'    <cac:Price>\n      \x3c!-- <cbc:PriceAmount currencyID="PEN">50</cbc:PriceAmount> --\x3e\n    </cac:Price>\n  </cac:InvoiceLine>\n</Invoice>\n')),Object(c.b)("p",null,"Volvemos a ejecutar la validaci\xf3n"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"xmllint --schema ./2.1/maindoc/UBL-Invoice-2.1.xsd 20123456789-01-F001-1.xml --noout\n")),Object(c.b)("p",null,"Resultado:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"20123456789-01-F001-1.xml:190: element Price: Schemas validity error : Element '{urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2}Price': Missing child element(s). Expected is ( {urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2}PriceAmount ).\n20123456789-01-F001-1.xml fails to validate\n")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Podemos interpretar del mensaje que falta el elemento ",Object(c.b)("inlineCode",{parentName:"em"},"PriceAmount")," en el nodo ",Object(c.b)("inlineCode",{parentName:"em"},"Price"),"."))),Object(c.b)(l.a,{value:"caso2",mdxType:"TabItem"},Object(c.b)("p",null,"Eliminaremos el atributo ",Object(c.b)("inlineCode",{parentName:"p"},"currencyID")," (Moneda) en el nodo ",Object(c.b)("inlineCode",{parentName:"p"},"cbc:PayableAmount")," (Importe total)."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml",metastring:"{4}","{4}":!0}),'  <cac:LegalMonetaryTotal>\n    <cbc:LineExtensionAmount currencyID="PEN">100.00</cbc:LineExtensionAmount>\n    <cbc:TaxInclusiveAmount currencyID="PEN">118.00</cbc:TaxInclusiveAmount>\n    <cbc:PayableAmount>118.00</cbc:PayableAmount>\n  </cac:LegalMonetaryTotal>\n')),Object(c.b)("p",null,"Volvemos a ejecutar la validaci\xf3n"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"xmllint --schema ./2.1/maindoc/UBL-Invoice-2.1.xsd 20123456789-01-F001-1.xml --noout\n")),Object(c.b)("p",null,"Resultado:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"20123456789-01-F001-1.xml:138: element PayableAmount: Schemas validity error : Element '{urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2}PayableAmount': The attribute 'currencyID' is required but missing.\n20123456789-01-F001-1.xml fails to validate\n")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"En este caso el atributo ",Object(c.b)("inlineCode",{parentName:"em"},"currencyID")," es requerido y nos muestra el error.")))),Object(c.b)("h2",{id:"validaci\xf3n-de-contenido-xsl"},"Validaci\xf3n de contenido (XSL)"),Object(c.b)("p",null,"La validaci\xf3n de contenido de nuestro comprobante XML, proviene de las ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://cpe.sunat.gob.pe/node/88#item-1"}),"Reglas de validaci\xf3n - SUNAT"),", en la cual se define valores, formatos, c\xe1lculos que deberia cumplir el comprobante electr\xf3nico, y que en general son propios de la tributaci\xf3n peruana; por ejemplo que la serie inicie con ",Object(c.b)("inlineCode",{parentName:"p"},"F")," para facturas, el c\xe1lculo del IGV sea correcto, que los codigos de cat\xe1logo utilizados se encuentren en la lista definida por SUNAT, etc."),Object(c.b)("p",null,"Las reglas de validaci\xf3n que SUNAT presenta en un archivo excel, ha sido representada en archivos XSL para poder utilizarlos program\xe1ticamente, SUNAT la pone a disposici\xf3n en este ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://cpe.sunat.gob.pe/node/88#item-3"}),"enlace"),", pero no esta completo; existe otra forma de obtener estos archivos XSL, y es descargando el facturador ",Object(c.b)("strong",{parentName:"p"},"SFS")," de SUNAT, los archivos ",Object(c.b)("inlineCode",{parentName:"p"},"XSL")," se encontraran en la carpeta ",Object(c.b)("inlineCode",{parentName:"p"},"sunat_archivos\\sfs\\VALI\\commons"),"."),Object(c.b)("p",null,"Esta ser\xe1 la estructura del directorio de trabajo."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),"/\n\u251c\u2500\u2500 sunat_archivos/sfs/VALI/commons/\n\u2502       \u251c\u2500 cpe/\n\u2502       \u2502   \u2514\u2500 catalogo/\n\u2502       \u251c\u2500 error/\n\u2502       \u2502   \u251c\u2500 error_utils.xsl\n\u2502       \u2502   \u2514\u2500 validate_utils.xsl\n\u2502       \u2514\u2500 xsl/validation/2.X/\n\u2502           \u251c\u2500 ...\n\u2502           \u2514\u2500 ValidaExprRegFactura-2.0.1.xsl\n\u2502\n\u251c\u2500\u2500 20123456789-01-F001-1.xml\n")),Object(c.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(c.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"XSLT Patch")),Object(c.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Aunque los archivos XSL que SUNAT expone siguen la version ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.w3.org/TR/xslt-10/"}),"XSLT 1.0"),", no es totalmente compatible, para este ejemplo hemos corregido el XSL de factura y los xsl referenciados, puedes descargarlo ",Object(c.b)("a",{href:"https://github.com/thegreenter/F001-1/releases/download/v1.0/xsl-validation.zip",target:"_blank"},"aqu\xed"),".",Object(c.b)("br",{parentName:"p"}),"\n","Si necesitas todos los XSL estandarizados puedes ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://web.facebook.com/thegreenter"}),"contactarnos"),"."))),Object(c.b)("h3",{id:"xsltproc"},Object(c.b)("inlineCode",{parentName:"h3"},"xsltproc")),Object(c.b)("p",null,"Esta herramienta nos permitir\xe1 validar el comprobante XML, con el archivo XSL seg\xfan el tipo de comprobante. En este ejemplo validaremos una factura, el archivo xml ser\xe1 ",Object(c.b)("inlineCode",{parentName:"p"},"20123456789-01-F001-1.xml")," y el archivo XSL, ",Object(c.b)("inlineCode",{parentName:"p"},"ValidaExprRegFactura-2.0.1.xsl"),"."),Object(c.b)("p",null,"Comando para validar el comprobante XML usando las reglas de validaci\xf3n SUNAT."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"xsltproc --noout --stringparam nombreArchivoEnviado 20123456789-01-F001-1.xml sunat_archivos/sfs/VALI/commons/xsl/validation/2.X/ValidaExprRegFactura-2.0.1.xsl 20123456789-01-F001-1.xml\n")),Object(c.b)("p",null,"Par\xe1metros:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"--noout"),": Solo muestra los errores."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"--stringparam"),": Par\xe1metros utilizados en el archivo XSL, SUNAT requiere el par\xe1metro ",Object(c.b)("inlineCode",{parentName:"li"},"nombreArchivoEnviado")," que es el nombre del comprobante xml. ")),Object(c.b)("h3",{id:"errores-1"},"Errores"),Object(c.b)("p",null,"El comprobante XML utilizado no contiene errores, haremos algunos cambios en el XML para conseguirlo."),Object(c.b)(o.a,{defaultValue:"caso1",values:[{label:"Moneda inv\xe1lida",value:"caso1"},{label:"Total impuestos incorrecto",value:"caso2"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"caso1",mdxType:"TabItem"},Object(c.b)("p",null,"La moneda utilizada era ",Object(c.b)("inlineCode",{parentName:"p"},"PEN"),", la cambiaremos por ",Object(c.b)("inlineCode",{parentName:"p"},"BTC"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml",metastring:"{4}","{4}":!0}),' <cbc:DocumentCurrencyCode\n        listID="ISO 4217 Alpha"\n        listName="Currency"\n        listAgencyName="United Nations Economic Commission for Europe">BTC</cbc:DocumentCurrencyCode>\n')),Object(c.b)("p",null,"Ejecutar la validaci\xf3n."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"xsltproc --noout --stringparam nombreArchivoEnviado 20123456789-01-F001-1.xml sunat_archivos/sfs/VALI/commons/xsl/validation/2.X/ValidaExprRegFactura-2.0.1.xsl 20123456789-01-F001-1.xml\n")),Object(c.b)("p",null,"Resultado:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),' error: : errorCode 3088: Valor no se encuentra en el catalogo: 02 (nodo: "Invoice/cbc:DocumentCurrencyCode" valor: "BTC")\n')),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"C\xf3digo ",Object(c.b)("inlineCode",{parentName:"em"},"3088"),": ",Object(c.b)("strong",{parentName:"em"},"El valor ingresado como moneda del comprobante no es valido (catalogo nro 02).")))),Object(c.b)(l.a,{value:"caso2",mdxType:"TabItem"},Object(c.b)("p",null,"La suma total de impuestos era ",Object(c.b)("inlineCode",{parentName:"p"},"18.00"),", la cambiaremos por ",Object(c.b)("inlineCode",{parentName:"p"},"5.00"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml",metastring:"{2}","{2}":!0}),'  <cac:TaxTotal>\n    <cbc:TaxAmount currencyID="PEN">5.00</cbc:TaxAmount>\n    <cac:TaxSubtotal>\n      <cbc:TaxableAmount currencyID="PEN">100.00</cbc:TaxableAmount>\n      <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>\n      <cac:TaxCategory>\n        <cac:TaxScheme>\n          <cbc:ID\n                schemeName="Codigo de tributos"\n                schemeAgencyName="PE:SUNAT"\n                schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo05">1000</cbc:ID>\n          <cbc:Name>IGV</cbc:Name>\n          <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>\n        </cac:TaxScheme>\n      </cac:TaxCategory>\n    </cac:TaxSubtotal>\n  </cac:TaxTotal>\n  <cac:LegalMonetaryTotal>\n    <cbc:LineExtensionAmount currencyID="PEN">100.00</cbc:LineExtensionAmount>\n    <cbc:TaxInclusiveAmount currencyID="PEN">118.00</cbc:TaxInclusiveAmount>\n    <cbc:PayableAmount currencyID="PEN">118.00</cbc:PayableAmount>\n  </cac:LegalMonetaryTotal>\n')),Object(c.b)("p",null,"Ejecutar la validaci\xf3n."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"xsltproc --noout --stringparam nombreArchivoEnviado 20123456789-01-F001-1.xml sunat_archivos/sfs/VALI/commons/xsl/validation/2.X/ValidaExprRegFactura-2.0.1.xsl 20123456789-01-F001-1.xml\n")),Object(c.b)("p",null,"Resultado:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'4301INFO : errorCode 4301 (nodo: "cac:TaxTotal/cbc:TaxAmount" valor: "5.00")\n')),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"C\xf3digo ",Object(c.b)("inlineCode",{parentName:"em"},"4301"),": **La sumatoria de impuestos globales no corresponde al monto total de impuestos."),"**"))),Object(c.b)("p",null,"Todas las validaciones se pueden constatar con en el archivo ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://cpe.sunat.gob.pe/node/88#item-3"}),"excel de Reglas de validaci\xf3n"),", y all\xed podremos tener mayor informaci\xf3n de cada codigo de error y como resolverlo."))}u.isMDXComponent=!0},95:function(e,a,n){"use strict";n.d(a,"a",(function(){return m})),n.d(a,"b",(function(){return p}));var t=n(0),r=n.n(t);function c(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){c(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var a=r.a.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},m=function(e){var a=b(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=b(n),d=t,p=m["".concat(o,".").concat(d)]||m[d]||u[d]||c;return n?r.a.createElement(p,l(l({ref:a},s),{},{components:n})):r.a.createElement(p,l({ref:a},s))}));function p(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97:function(e,a,n){"use strict";function t(e){var a,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(n=t(e[a]))&&(r&&(r+=" "),r+=n);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(a=t(e))&&(r&&(r+=" "),r+=a);return r}}}]);