(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{163:function(e,n,c){"use strict";c.r(n),c.d(n,"frontMatter",(function(){return r})),c.d(n,"metadata",(function(){return s})),c.d(n,"rightToc",(function(){return l})),c.d(n,"default",(function(){return b}));var a=c(2),t=c(9),i=(c(0),c(170)),o=c(172),r={id:"sign",title:"Firma Digital",sidebar_label:"Firma Digital"},s={id:"sign",isDocsHomePage:!1,title:"Firma Digital",description:"Una de las partes principales del proceso, es la firma digital utilizando un certificado que debe tener finalidad para firma de documentos.",source:"@site/docs/sign.md",permalink:"/docs/sign",editUrl:"https://github.com/thegreenter/F001-1/edit/master/website/docs/sign.md",sidebar_label:"Firma Digital",sidebar:"docs",previous:{title:"Factura Electr\xf3nica",permalink:"/docs/factura"},next:{title:"Validar el comprobante electr\xf3nico",permalink:"/docs/validation"}},l=[{value:"Herramientas.",id:"herramientas",children:[]},{value:"Certificado",id:"certificado",children:[]},{value:"Canonicalizaci\xf3n (c14n)",id:"canonicalizaci\xf3n-c14n",children:[]},{value:"Valor Resumen",id:"valor-resumen",children:[]},{value:"Valor de Firma",id:"valor-de-firma",children:[]},{value:"Verificaci\xf3n",id:"verificaci\xf3n",children:[]}],m={rightToc:l};function b(e){var n=e.components,c=Object(t.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},m,c,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Una de las partes principales del proceso, es la firma digital utilizando un certificado que debe tener finalidad para firma de documentos."),Object(i.b)("p",null,"Para archivos XML esto se conoce como firma envolvente (",Object(i.b)("inlineCode",{parentName:"p"},"enveloped-signature"),"), donde se firma una cadena de texto dentro del mismo documento XML."),Object(i.b)("h2",{id:"herramientas"},"Herramientas."),Object(i.b)("p",null,"Para realizar este procediminto, necesitamos algunas herramientas. . Esto incluye los siguientes ejecutables"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"xmllint")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"openssl"))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Windows")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Puedes descargar estas herramientas en este ",Object(i.b)("a",{href:"https://github.com/thegreenter/F001-1/releases/download/v1.0/tools.zip",target:"_blank"},"enlace"),"."))),Object(i.b)("h2",{id:"certificado"},"Certificado"),Object(i.b)("p",null,"Como vimos en ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/requirements"}),"requerimientos"),", necesitamos un certificado digital, para este ejemplo puedes descargarlo desde ",Object(i.b)("a",{href:Object(o.a)("files/certificates.zip")},"aqu\xed"),"."),Object(i.b)("h2",{id:"canonicalizaci\xf3n-c14n"},"Canonicalizaci\xf3n (c14n)"),Object(i.b)("p",null,"Necesitamos la representacion can\xf3nica del XML, esto permite preservar solo el contenido que puede variar en el XML, excluyendo cosas como comentarios o tipos de codificaci\xf3n del archivo."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Para nuestro caso usaremos la ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/TR/2001/REC-xml-c14n-20010315"}),"version c14n 1.0"))),Object(i.b)("p",null,"Esto seria un resumen de los cosas que se tienen que tener en cuenta para satisfacer ",Object(i.b)("inlineCode",{parentName:"p"},"c14n"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Archivos en format ",Object(i.b)("inlineCode",{parentName:"li"},"UTF-8")),Object(i.b)("li",{parentName:"ul"},"Fin de linea ",Object(i.b)("inlineCode",{parentName:"li"},"LF")),Object(i.b)("li",{parentName:"ul"},"Valores de atributos normalizados (por ejemplo quitar el salto de linae entre atributos)."),Object(i.b)("li",{parentName:"ul"},"Se elimina ",Object(i.b)("inlineCode",{parentName:"li"},"CDATA"),", solo se mantiene el contenido."),Object(i.b)("li",{parentName:"ul"},"Se elimina la declaracion xml, al incio del documento: ",Object(i.b)("inlineCode",{parentName:"li"},'<?xml version="1.0" encoding="utf-8"?>'),"."),Object(i.b)("li",{parentName:"ul"},"Se eliminan los comentarios."),Object(i.b)("li",{parentName:"ul"},"Se normalizan los espacios en blancos entre los elementos del documento."),Object(i.b)("li",{parentName:"ul"},"Los elementos vac\xedos se convierten en pares de etiquetas de inicio y fin: ",Object(i.b)("inlineCode",{parentName:"li"},"<ab />")," seria ",Object(i.b)("inlineCode",{parentName:"li"},"<ab></ab>"),".")),Object(i.b)("p",null,"Pero gracias a herramientas existentes podemos hacerlo ejecutando un solo comando; utilizaremos\nnuestro xml de la secci\xf3n ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/factura"}),"anterior")," y con ",Object(i.b)("inlineCode",{parentName:"p"},"xmllint")," ejecutaremos:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"xmllint --c14n 20123456789-01-F001-1.xml > 20123456789-01-F001-1_c14.xml\n")),Object(i.b)("p",null,"Con ello tendremos nuestro xml can\xf3nico, esto seria el contenido de ",Object(i.b)("inlineCode",{parentName:"p"},"20123456789-01-F001-1_c14.xml"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2">\n  <ext:UBLExtensions>\n    <ext:UBLExtension>\n      <ext:ExtensionContent>\n      </ext:ExtensionContent>\n    </ext:UBLExtension>\n  </ext:UBLExtensions>\n  <cbc:UBLVersionID>2.1</cbc:UBLVersionID>\n  <cbc:CustomizationID>2.0</cbc:CustomizationID>\n  <cbc:ID>F001-1</cbc:ID>\n  <cbc:IssueDate>2020-07-21</cbc:IssueDate>\n  <cbc:InvoiceTypeCode listAgencyName="PE:SUNAT" listID="0101" listName="Tipo de Documento" listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo01">01</cbc:InvoiceTypeCode>\n  <cbc:Note languageLocaleID="1000">CIENTO DIECIOCHO CON 00 /100 SOLES</cbc:Note>\n  <cbc:DocumentCurrencyCode listAgencyName="United Nations Economic Commission for Europe" listID="ISO 4217 Alpha" listName="Currency">PEN</cbc:DocumentCurrencyCode>\n  <cac:Signature>\n    <cbc:ID>20123456789</cbc:ID>\n    <cac:SignatoryParty>\n      <cac:PartyIdentification>\n        <cbc:ID>20123456789</cbc:ID>\n      </cac:PartyIdentification>\n      <cac:PartyName>\n        <cbc:Name>MI EMPRESA S.A.C</cbc:Name>\n      </cac:PartyName>\n    </cac:SignatoryParty>\n    <cac:DigitalSignatureAttachment>\n      <cac:ExternalReference>\n        <cbc:URI>#EMPRESA-SIGN</cbc:URI>\n      </cac:ExternalReference>\n    </cac:DigitalSignatureAttachment>\n  </cac:Signature>\n  <cac:AccountingSupplierParty>\n    <cac:Party>\n      <cac:PartyIdentification>\n        <cbc:ID schemeAgencyName="PE:SUNAT" schemeID="6" schemeName="Documento de Identidad" schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">20123456789</cbc:ID>\n      </cac:PartyIdentification>\n      <cac:PartyName>\n        <cbc:Name>MI EMPRESA</cbc:Name>\n      </cac:PartyName>\n      <cac:PartyLegalEntity>\n        <cbc:RegistrationName>MI EMPRESA S.A.C</cbc:RegistrationName>\n        <cac:RegistrationAddress>\n          <cbc:ID schemeAgencyName="PE:INEI" schemeName="Ubigeos">150101</cbc:ID>\n          <cbc:AddressTypeCode>0000</cbc:AddressTypeCode>\n          <cbc:CitySubdivisionName>CASUARINAS</cbc:CitySubdivisionName>\n          <cbc:CityName>LIMA</cbc:CityName>\n          <cbc:CountrySubentity>LIMA</cbc:CountrySubentity>\n          <cbc:District>LIMA</cbc:District>\n          <cac:AddressLine>\n            <cbc:Line>Av. Park 211</cbc:Line>\n          </cac:AddressLine>\n          <cac:Country>\n            <cbc:IdentificationCode listAgencyName="United Nations Economic Commission for Europe" listID="ISO 3166-1" listName="Country">PE</cbc:IdentificationCode>\n          </cac:Country>\n        </cac:RegistrationAddress>\n      </cac:PartyLegalEntity>\n    </cac:Party>\n  </cac:AccountingSupplierParty>\n  <cac:AccountingCustomerParty>\n    <cac:Party>\n      <cac:PartyIdentification>\n        <cbc:ID schemeAgencyName="PE:SUNAT" schemeID="6" schemeName="Documento de Identidad" schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">20603343710</cbc:ID>\n      </cac:PartyIdentification>\n      <cac:PartyLegalEntity>\n        <cbc:RegistrationName>NEGOCIOS S.A.C.</cbc:RegistrationName>\n        <cac:RegistrationAddress>\n          <cbc:ID>150101</cbc:ID>\n          <cac:AddressLine>\n            <cbc:Line>AV. OLIVAR NRO. 425 </cbc:Line>\n          </cac:AddressLine>\n          <cac:Country>\n            <cbc:IdentificationCode listAgencyName="United Nations Economic Commission for Europe" listID="ISO 3166-1" listName="Country">PE</cbc:IdentificationCode>\n          </cac:Country>\n        </cac:RegistrationAddress>\n      </cac:PartyLegalEntity>\n    </cac:Party>\n  </cac:AccountingCustomerParty>\n  <cac:TaxTotal>\n    <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>\n    <cac:TaxSubtotal>\n      <cbc:TaxableAmount currencyID="PEN">100.00</cbc:TaxableAmount>\n      <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>\n      <cac:TaxCategory>\n        <cac:TaxScheme>\n          <cbc:ID schemeAgencyName="PE:SUNAT" schemeName="Codigo de tributos" schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo05">1000</cbc:ID>\n          <cbc:Name>IGV</cbc:Name>\n          <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>\n        </cac:TaxScheme>\n      </cac:TaxCategory>\n    </cac:TaxSubtotal>\n  </cac:TaxTotal>\n  <cac:LegalMonetaryTotal>\n    <cbc:LineExtensionAmount currencyID="PEN">100.00</cbc:LineExtensionAmount>\n    <cbc:TaxInclusiveAmount currencyID="PEN">118.00</cbc:TaxInclusiveAmount>\n    <cbc:PayableAmount currencyID="PEN">118.00</cbc:PayableAmount>\n  </cac:LegalMonetaryTotal>\n  <cac:InvoiceLine>\n    <cbc:ID>1</cbc:ID>\n    <cbc:InvoicedQuantity unitCode="NIU" unitCodeListAgencyName="United Nations Economic Commission for Europe" unitCodeListID="UN/ECE rec 20">2</cbc:InvoicedQuantity>\n    <cbc:LineExtensionAmount currencyID="PEN">100.00</cbc:LineExtensionAmount>\n    <cac:PricingReference>\n      <cac:AlternativeConditionPrice>\n        <cbc:PriceAmount currencyID="PEN">59</cbc:PriceAmount>\n        <cbc:PriceTypeCode listAgencyName="PE:SUNAT" listName="Tipo de Precio" listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo16">01</cbc:PriceTypeCode>\n      </cac:AlternativeConditionPrice>\n    </cac:PricingReference>\n    <cac:TaxTotal>\n      <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>\n      <cac:TaxSubtotal>\n        <cbc:TaxableAmount currencyID="PEN">100.00</cbc:TaxableAmount>\n        <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>\n        <cac:TaxCategory>\n          <cbc:Percent>18</cbc:Percent>\n          <cbc:TaxExemptionReasonCode listAgencyName="PE:SUNAT" listName="Afectacion del IGV" listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo07">10</cbc:TaxExemptionReasonCode>\n          <cac:TaxScheme>\n            <cbc:ID schemeAgencyName="PE:SUNAT" schemeName="Codigo de tributos" schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo05">1000</cbc:ID>\n            <cbc:Name>IGV</cbc:Name>\n            <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>\n          </cac:TaxScheme>\n        </cac:TaxCategory>\n      </cac:TaxSubtotal>\n    </cac:TaxTotal>\n    <cac:Item>\n      <cbc:Description>TIJERAS - PRUEBA DE SISTEMAS</cbc:Description>\n      <cac:SellersItemIdentification>\n        <cbc:ID>P001</cbc:ID>\n      </cac:SellersItemIdentification>\n      <cac:CommodityClassification>\n        <cbc:ItemClassificationCode listAgencyName="GS1 US" listID="UNSPSC" listName="Item Classification">44121618</cbc:ItemClassificationCode>\n      </cac:CommodityClassification>\n    </cac:Item>\n    <cac:Price>\n      <cbc:PriceAmount currencyID="PEN">50</cbc:PriceAmount>\n    </cac:Price>\n  </cac:InvoiceLine>\n</Invoice>\n')),Object(i.b)("h2",{id:"valor-resumen"},"Valor Resumen"),Object(i.b)("p",null,"Es el hash generado a partir del contenido de nuestro XML can\xf3nico (",Object(i.b)("inlineCode",{parentName:"p"},"c14n"),"), utilizaremos el algoritmo ",Object(i.b)("inlineCode",{parentName:"p"},"sha1"),", y para obtener este resultado ejecutaremos con ",Object(i.b)("inlineCode",{parentName:"p"},"openssl"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"openssl dgst -sha1 -binary 20123456789-01-F001-1_c14.xml  | openssl enc -base64\n# output:\n# Z5ohtioRKAsJTIote7n2BPYweik=\n")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Representaci\xf3n impresa")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Este es el valor que se incluiye en la parte inferior de la representaci\xf3n impresa y esta incluido en el c\xf3digo QR.\n",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"http://www.sunat.gob.pe/legislacion/superin/2018/anexoA-113-2018.pdf"}),"Ver SUNAT - Anexo N. 6"))))),Object(i.b)("h2",{id:"valor-de-firma"},"Valor de Firma"),Object(i.b)("p",null,"En este punto, se realizar\xe1 la firma utilizando el certificado digital; definiremos el siguiente fragmento de XML ",Object(i.b)("inlineCode",{parentName:"p"},"<ds:SignedInfo>"),", aqu\xed se define los algoritmos utilizados y adem\xe1s incluye el ",Object(i.b)("strong",{parentName:"p"},"Valor Resumen")," generado en el paso anterior."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Archivo: ",Object(i.b)("em",{parentName:"p"},"sign-node.xml"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:"{9}","{9}":!0}),'<ds:SignedInfo xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2">\n  <ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"></ds:CanonicalizationMethod>\n  <ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"></ds:SignatureMethod>\n  <ds:Reference URI="">\n    <ds:Transforms>\n      <ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"></ds:Transform>\n    </ds:Transforms>\n    <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod>\n    <ds:DigestValue>Z5ohtioRKAsJTIote7n2BPYweik=</ds:DigestValue>\n  </ds:Reference>\n</ds:SignedInfo>\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},'Uri=""')," en ",Object(i.b)("inlineCode",{parentName:"p"},"<ds:Reference>")," indica que se firmar\xe1 todo el comprobante y no un nodo, y  en ",Object(i.b)("inlineCode",{parentName:"p"},'<DigestMethod Algorithm="...">')," ubicamos el algoritmo utilizado (",Object(i.b)("inlineCode",{parentName:"p"},"sha1"),") para generar el valor resumen."))),Object(i.b)("p",null,"Ahora utilizando el algoritmo ",Object(i.b)("inlineCode",{parentName:"p"},"sha1")," que se indica en ",Object(i.b)("inlineCode",{parentName:"p"},"<SignatureMethod>"),", procedemos a obtener el valor de la firma con ",Object(i.b)("inlineCode",{parentName:"p"},"openssl"),", codificado en ",Object(i.b)("inlineCode",{parentName:"p"},"base64"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"openssl dgst -sha1 -sign private.key sign-node.xml | openssl enc -base64\n# output:\n# AsuimaYXwnrBFqftXUCDkh9e8Hkwl9ohB9Nj687rLYRwFzWQWHvg2V6u3YgUZLw6\n# CyHo3wcDm2MIF2V923cjIeniGBIBeer1YnLA8nX1prRPODM+DfFmwZ1rR12jVqcH\n# tydjB1yypi3h/fj6yBTOBenunFw2B1EEsn/9nuMuC0CMgcD/lxZXGgnWajDXcFaD\n# vXJ2U8sXWJVZANyuzhBzZmE086e9F+v+aOEa2UUzD8ldZ6N0+Jwr8VqVkcUVIjst\n# LP+Ond+OkyPdSxx2Hp4oNlwp2clf0fmC4NtQOrlXEEYcr3NPi5szfxZY//E+XITw\n# Mo9NSFs/+bHaOR2EjPZrkg==\n")),Object(i.b)("p",null,"Ahora necesitamos incluir este resultado en el xml original, adem\xe1s incluiremos el certificado (",Object(i.b)("inlineCode",{parentName:"p"},"certificate.cer"),"), para que terceros pueden verificar la integridad del comprobante electr\xf3nico."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Archivo: ",Object(i.b)("em",{parentName:"p"},"20123456789-01-F001-1.xml"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:"{18, 21}","{18,":!0,"21}":!0}),'<?xml version="1.0" encoding="utf-8"?>\n<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2">\n  <ext:UBLExtensions>\n    <ext:UBLExtension>\n      <ext:ExtensionContent>\n      <ds:Signature Id="FePrimerSign">\n<ds:SignedInfo>\n  <ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"></ds:CanonicalizationMethod>\n  <ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"></ds:SignatureMethod>\n  <ds:Reference URI="">\n    <ds:Transforms>\n      <ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"></ds:Transform>\n    </ds:Transforms>\n    <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod>\n    <ds:DigestValue>Z5ohtioRKAsJTIote7n2BPYweik=</ds:DigestValue>\n  </ds:Reference>\n</ds:SignedInfo>\n<ds:SignatureValue>AsuimaYXwnrBFqftXUCDkh9e8Hkwl9ohB9Nj687rLYRwFzWQWHvg2V6u3YgUZLw6 CyHo3wcDm2MIF2V923cjIeniGBIBeer1YnLA8nX1prRPODM+DfFmwZ1rR12jVqcH tydjB1yypi3h/fj6yBTOBenunFw2B1EEsn/9nuMuC0CMgcD/lxZXGgnWajDXcFaD vXJ2U8sXWJVZANyuzhBzZmE086e9F+v+aOEa2UUzD8ldZ6N0+Jwr8VqVkcUVIjst LP+Ond+OkyPdSxx2Hp4oNlwp2clf0fmC4NtQOrlXEEYcr3NPi5szfxZY//E+XITw Mo9NSFs/+bHaOR2EjPZrkg==</ds:SignatureValue>\n<ds:KeyInfo>\n  <ds:X509Data>\n    <ds:X509Certificate>MIID6zCCAtOgAwIBAgIUJB9kdlrtEuCWZW/hB+k6bt/FL7AwDQYJKoZIhvcNAQELBQAwgYQxCzAJBgNVBAYTAlBFMQ0wCwYDVQQIDARMSU1BMQ0wCwYDVQQHDARMSU1BMRgwFgYDVQQKDA9JTU0gQ09SUE9SQVRJT04xCzAJBgNVBAsMAklUMQwwCgYDVQQDDANJTU0xIjAgBgkqhkiG9w0BCQEWE2dpYW5zYWxleEBnbWFpbC5jb20wHhcNMjAwNzE5MjIwNDM2WhcNMzAwNTI4MjIwNDM2WjCBhDELMAkGA1UEBhMCUEUxDTALBgNVBAgMBExJTUExDTALBgNVBAcMBExJTUExGDAWBgNVBAoMD0lNTSBDT1JQT1JBVElPTjELMAkGA1UECwwCSVQxDDAKBgNVBAMMA0lNTTEiMCAGCSqGSIb3DQEJARYTZ2lhbnNhbGV4QGdtYWlsLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMjdt0KR5Bb/nIH1dGMKBkYlSHeScl5Go+KD4LEKDwi4hFcKvOI7XbNk1QoFmcKIPJuZvpBpqaadNRKidqAPxbrzMF+yxXI7QwlsVgweW+L64bXCtX4AlnRaCCIx0SrXYUrktVWWlQpaJGvF7n3Mbge+8P9jkyQ7XlAuVVRN2wk40G1UPWMYRVaVjas4JPh7eTft1B6R1d1njM5/dD3UJ0qSfgjw5b8FJae6Up5eEDAfcjkJihqVBtQHXI8yEHMRqx22OF8VsT+AsrylYGDpDesCz9WrF0cWpg3XNT1YUV5YfwqCNBK4vN++5qgA9Q+MYmE+KdZ0mFmMZxlm6NOeQfUCAwEAAaNTMFEwHQYDVR0OBBYEFLEP+8lmc8esD3bMYoSivwthb6gHMB8GA1UdIwQYMBaAFLEP+8lmc8esD3bMYoSivwthb6gHMA8GA1UdEwEB/wQFMAMBAf8wDQYJKoZIhvcNAQELBQADggEBACsrChqr7MpgEN0I+IqmgG4Kd4M5BBiz7jabnXMwcQfeduLL1RV7JkbI4EWF+SSpjpdojM35bxb8lyA43GpiFIaEAWa2frUJi/hXxvTn5eojwi6FU0zs7mHBHUSU+aOjBp/6TTnGR8LEemSJ1o7shaxHTaquNOHol/JV0QFTCn1hMPo44jpNwiDOngKDAc9TvQ3YUIURGrrE3j35c5KNGr4wDjjcjFky4OBhFRALU+9ff/Gergv03xyUDnfMtzYNomM15xO0jYou8FeQd7vzyh56ekJpI+EkX3YM/zABa/5NwXSpNK79gaWxS1SSuXrCZU4pqnVVy96V1zq5t1umbvA=</ds:X509Certificate>\n  </ds:X509Data>\n</ds:KeyInfo>\n</ds:Signature></ext:ExtensionContent>\n    </ext:UBLExtension>\n  </ext:UBLExtensions>\n  <cbc:UBLVersionID>2.1</cbc:UBLVersionID>\n  <cbc:CustomizationID>2.0</cbc:CustomizationID>\n  <cbc:ID>F001-1</cbc:ID>\n  <cbc:IssueDate>2020-07-21</cbc:IssueDate>\n  <cbc:InvoiceTypeCode\n        listID="0101"\n        listAgencyName="PE:SUNAT"\n        listName="Tipo de Documento"\n        listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo01">01</cbc:InvoiceTypeCode>\n  <cbc:Note languageLocaleID="1000"><![CDATA[CIENTO DIECIOCHO CON 00 /100 SOLES]]></cbc:Note>\n  <cbc:DocumentCurrencyCode\n        listID="ISO 4217 Alpha"\n        listName="Currency"\n        listAgencyName="United Nations Economic Commission for Europe">PEN</cbc:DocumentCurrencyCode>\n  <cac:Signature>\n    <cbc:ID>20123456789</cbc:ID>\n    <cac:SignatoryParty>\n      <cac:PartyIdentification>\n        <cbc:ID>20123456789</cbc:ID>\n      </cac:PartyIdentification>\n      <cac:PartyName>\n        <cbc:Name><![CDATA[MI EMPRESA S.A.C]]></cbc:Name>\n      </cac:PartyName>\n    </cac:SignatoryParty>\n    <cac:DigitalSignatureAttachment>\n      <cac:ExternalReference>\n        <cbc:URI>#EMPRESA-SIGN</cbc:URI>\n      </cac:ExternalReference>\n    </cac:DigitalSignatureAttachment>\n  </cac:Signature>\n  <cac:AccountingSupplierParty>\n    <cac:Party>\n      <cac:PartyIdentification>\n        <cbc:ID\n            schemeID="6"\n            schemeName="Documento de Identidad"\n            schemeAgencyName="PE:SUNAT"\n            schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">20123456789</cbc:ID>\n      </cac:PartyIdentification>\n      <cac:PartyName>\n        <cbc:Name><![CDATA[MI EMPRESA]]></cbc:Name>\n      </cac:PartyName>\n      <cac:PartyLegalEntity>\n        <cbc:RegistrationName><![CDATA[MI EMPRESA S.A.C]]></cbc:RegistrationName>\n        <cac:RegistrationAddress>\n          <cbc:ID schemeName="Ubigeos"\n                  schemeAgencyName="PE:INEI">150101</cbc:ID>\n          <cbc:AddressTypeCode>0000</cbc:AddressTypeCode>\n          <cbc:CitySubdivisionName>CASUARINAS</cbc:CitySubdivisionName>\n          <cbc:CityName>LIMA</cbc:CityName>\n          <cbc:CountrySubentity>LIMA</cbc:CountrySubentity>\n          <cbc:District>LIMA</cbc:District>\n          <cac:AddressLine>\n            <cbc:Line><![CDATA[Av. Park 211]]></cbc:Line>\n          </cac:AddressLine>\n          <cac:Country>\n            <cbc:IdentificationCode\n                listID="ISO 3166-1"\n                listName="Country"\n                listAgencyName="United Nations Economic Commission for Europe">PE</cbc:IdentificationCode>\n          </cac:Country>\n        </cac:RegistrationAddress>\n      </cac:PartyLegalEntity>\n    </cac:Party>\n  </cac:AccountingSupplierParty>\n  <cac:AccountingCustomerParty>\n    <cac:Party>\n      <cac:PartyIdentification>\n        <cbc:ID\n            schemeID="6"\n            schemeName="Documento de Identidad"\n            schemeAgencyName="PE:SUNAT"\n            schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">20603343710</cbc:ID>\n      </cac:PartyIdentification>\n      <cac:PartyLegalEntity>\n        <cbc:RegistrationName><![CDATA[NEGOCIOS S.A.C.]]></cbc:RegistrationName>\n        <cac:RegistrationAddress>\n          <cbc:ID>150101</cbc:ID>\n          <cac:AddressLine>\n            <cbc:Line><![CDATA[AV. OLIVAR NRO. 425 ]]></cbc:Line>\n          </cac:AddressLine>\n          <cac:Country>\n            <cbc:IdentificationCode\n                listID="ISO 3166-1"\n                listName="Country"\n                listAgencyName="United Nations Economic Commission for Europe">PE</cbc:IdentificationCode>\n          </cac:Country>\n        </cac:RegistrationAddress>\n      </cac:PartyLegalEntity>\n    </cac:Party>\n  </cac:AccountingCustomerParty>\n  <cac:TaxTotal>\n    <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>\n    <cac:TaxSubtotal>\n      <cbc:TaxableAmount currencyID="PEN">100.00</cbc:TaxableAmount>\n      <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>\n      <cac:TaxCategory>\n        <cac:TaxScheme>\n          <cbc:ID\n                schemeName="Codigo de tributos"\n                schemeAgencyName="PE:SUNAT"\n                schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo05">1000</cbc:ID>\n          <cbc:Name>IGV</cbc:Name>\n          <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>\n        </cac:TaxScheme>\n      </cac:TaxCategory>\n    </cac:TaxSubtotal>\n  </cac:TaxTotal>\n  <cac:LegalMonetaryTotal>\n    <cbc:LineExtensionAmount currencyID="PEN">100.00</cbc:LineExtensionAmount>\n    <cbc:TaxInclusiveAmount currencyID="PEN">118.00</cbc:TaxInclusiveAmount>\n    <cbc:PayableAmount currencyID="PEN">118.00</cbc:PayableAmount>\n  </cac:LegalMonetaryTotal>\n  <cac:InvoiceLine>\n    <cbc:ID>1</cbc:ID>\n    <cbc:InvoicedQuantity\n        unitCode="NIU"\n        unitCodeListID="UN/ECE rec 20"\n        unitCodeListAgencyName="United Nations Economic Commission for Europe">2</cbc:InvoicedQuantity>\n    <cbc:LineExtensionAmount currencyID="PEN">100.00</cbc:LineExtensionAmount>\n    <cac:PricingReference>\n      <cac:AlternativeConditionPrice>\n        <cbc:PriceAmount currencyID="PEN">59</cbc:PriceAmount>\n        <cbc:PriceTypeCode\n            listName="Tipo de Precio"\n            listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo16"\n            listAgencyName="PE:SUNAT">01</cbc:PriceTypeCode>\n      </cac:AlternativeConditionPrice>\n    </cac:PricingReference>\n    <cac:TaxTotal>\n      <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>\n      <cac:TaxSubtotal>\n        <cbc:TaxableAmount currencyID="PEN">100.00</cbc:TaxableAmount>\n        <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>\n        <cac:TaxCategory>\n          <cbc:Percent>18</cbc:Percent>\n          <cbc:TaxExemptionReasonCode\n                listName="Afectacion del IGV"\n                listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo07"\n                listAgencyName="PE:SUNAT">10</cbc:TaxExemptionReasonCode>\n          <cac:TaxScheme>\n            <cbc:ID\n                schemeName="Codigo de tributos"\n                schemeAgencyName="PE:SUNAT"\n                schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo05">1000</cbc:ID>\n            <cbc:Name>IGV</cbc:Name>\n            <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>\n          </cac:TaxScheme>\n        </cac:TaxCategory>\n      </cac:TaxSubtotal>\n    </cac:TaxTotal>\n    <cac:Item>\n      <cbc:Description><![CDATA[TIJERAS - PRUEBA DE SISTEMAS]]></cbc:Description>\n      <cac:SellersItemIdentification>\n        <cbc:ID>P001</cbc:ID>\n      </cac:SellersItemIdentification>\n      <cac:CommodityClassification>\n        <cbc:ItemClassificationCode\n          listID="UNSPSC"\n          listAgencyName="GS1 US"\n          listName="Item Classification">44121618</cbc:ItemClassificationCode>\n      </cac:CommodityClassification>\n    </cac:Item>\n    <cac:Price>\n      <cbc:PriceAmount currencyID="PEN">50</cbc:PriceAmount>\n    </cac:Price>\n  </cac:InvoiceLine>\n</Invoice>\n')),Object(i.b)("h2",{id:"verificaci\xf3n"},"Verificaci\xf3n"),Object(i.b)("p",null,"Podemos verificar la firma, y con ello saber si un comprobante ha sido alterado, utilizando ",Object(i.b)("inlineCode",{parentName:"p"},"xmlsec"),", el comando seria el siguiente:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"xmlsec verify 20123456789-01-F001-1.xml\n")))}b.isMDXComponent=!0},170:function(e,n,c){"use strict";c.d(n,"a",(function(){return b})),c.d(n,"b",(function(){return p}));var a=c(0),t=c.n(a);function i(e,n,c){return n in e?Object.defineProperty(e,n,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[n]=c,e}function o(e,n){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),c.push.apply(c,a)}return c}function r(e){for(var n=1;n<arguments.length;n++){var c=null!=arguments[n]?arguments[n]:{};n%2?o(Object(c),!0).forEach((function(n){i(e,n,c[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):o(Object(c)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(c,n))}))}return e}function s(e,n){if(null==e)return{};var c,a,t=function(e,n){if(null==e)return{};var c,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)c=i[a],n.indexOf(c)>=0||(t[c]=e[c]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)c=i[a],n.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(t[c]=e[c])}return t}var l=t.a.createContext({}),m=function(e){var n=t.a.useContext(l),c=n;return e&&(c="function"==typeof e?e(n):r(r({},n),e)),c},b=function(e){var n=m(e.components);return t.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},u=t.a.forwardRef((function(e,n){var c=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=m(c),u=a,p=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return c?t.a.createElement(p,r(r({ref:n},l),{},{components:c})):t.a.createElement(p,r({ref:n},l))}));function p(e,n){var c=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=c.length,o=new Array(i);o[0]=u;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var l=2;l<i;l++)o[l]=c[l];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,c)}u.displayName="MDXCreateElement"},171:function(e,n,c){"use strict";var a=c(0),t=c(54);n.a=function(){return Object(a.useContext)(t.a)}},172:function(e,n,c){"use strict";c.d(n,"a",(function(){return i}));c(76);var a=c(171),t=c(175);function i(e,n){var c=void 0===n?{}:n,i=c.forcePrependBaseUrl,o=void 0!==i&&i,r=c.absolute,s=void 0!==r&&r,l=Object(a.a)().siteConfig,m=(l=void 0===l?{}:l).baseUrl,b=void 0===m?"/":m,d=l.url;if(!e)return e;if(o)return b+e;if(!Object(t.a)(e))return e;var u=b+e.replace(/^\//,"");return s?d+u:u}},175:function(e,n,c){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}c.d(n,"a",(function(){return a}))}}]);