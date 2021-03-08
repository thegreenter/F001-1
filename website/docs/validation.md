---
id: validation
title: Validar el comprobante electrónico
sidebar_label: Validación
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Para verificar que nuestros comprobantes sean válidos, existen 2 tipos de validaciones:

1. Validación de esquema (UBL 2.1 - [XSD](https://en.wikipedia.org/wiki/XML_Schema_(W3C)))
2. Validación de contenido (Reglas de validación de SUNAT - [XSL](https://es.wikipedia.org/wiki/Extensible_Stylesheet_Language))

## Herramientas
Para completar esta sección necesitaremos utilizar algunas herramientas.
- [xmllint](http://xmlsoft.org/xmllint.html)
- [xsltproc](http://xmlsoft.org/XSLT/xsltproc.html)

Tambien necesitaremos un comprobante XML a validar, utilizaremos el XML creado en la sección anterior.

- [20123456789-01-F001-1.xml](https://fe-primer.greenter.dev/docs/sign#resultado)

:::tip Windows

Puedes descargar las herramientas desde este <a href="https://github.com/thegreenter/F001-1/releases/download/v1.0/tools.zip" target="_blank">enlace</a>.

:::

## Validación de Esquema (XSD)

Para verificar que el XML construido cumple con el esquema del estándar UBL, debemos primero contar con los archivos XSD (`XML Schema Definition`) que describe los elementos que puede contener el comprobante XML, para el caso de SUNAT esto se pueden descargar desde [aquí](https://cpe.sunat.gob.pe/sites/default/files/inline-files/2.1.zip).

Esta será la estructura del directorio de trabajo.
```
/
├── 2.1/
│   ├─ common/
│   └─ maindoc/
│       ├─ ...
│       └─ UBL-Invoice-2.1.xsd
│
├── 20123456789-01-F001-1.xml
```

### `xmllint`
Esta herramienta nos permitirá validar el comprobante XML, con el esquema XSD relacionado. En este caso validaremos una factura, el archivo xml será `20123456789-01-F001-1.xml` y el esquema XSD, `UBL-Invoice-2.1.xsd`.

Comando para validar el comprobante XML con su esquema XSD.
```bash
xmllint --schema ./2.1/maindoc/UBL-Invoice-2.1.xsd 20123456789-01-F001-1.xml --noout
```
Resultado:
```bash
20123456789-01-F001-1.xml validates
```

Parámetros:
- `--schema`: Indica la ruta del archivo XSD. 
- `--noout`: Solo muestra los errores encontrados.

### Errores
Como nuestro comprobante XML fue elaborado correctamente, no tenemos errores, así que para probar escenarios de error, haremos algunos cambios en el XML.

<Tabs
  defaultValue="caso1"
  values={[
    {label: 'Caso 1', value: 'caso1'},
    {label: 'Caso 2', value: 'caso2'},
  ]}>
  <TabItem value="caso1">

Eliminaremos el nodo `cbc:PriceAmount` (Valor venta unitario).

```xml {2}
    <cac:Price>
      <!-- <cbc:PriceAmount currencyID="PEN">50</cbc:PriceAmount> -->
    </cac:Price>
  </cac:InvoiceLine>
</Invoice>
```

Volvemos a ejecutar la validación

```bash
xmllint --schema ./2.1/maindoc/UBL-Invoice-2.1.xsd 20123456789-01-F001-1.xml --noout
```
Resultado:
```bash
20123456789-01-F001-1.xml:190: element Price: Schemas validity error : Element '{urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2}Price': Missing child element(s). Expected is ( {urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2}PriceAmount ).
20123456789-01-F001-1.xml fails to validate
```

_Podemos interpretar del mensaje que falta el elemento `PriceAmount` en el nodo `Price`._
  </TabItem>
  <TabItem value="caso2">

Eliminaremos el atributo `currencyID` (Moneda) en el nodo `cbc:PayableAmount` (Importe total).

```xml {4}
  <cac:LegalMonetaryTotal>
    <cbc:LineExtensionAmount currencyID="PEN">100.00</cbc:LineExtensionAmount>
    <cbc:TaxInclusiveAmount currencyID="PEN">118.00</cbc:TaxInclusiveAmount>
    <cbc:PayableAmount>118.00</cbc:PayableAmount>
  </cac:LegalMonetaryTotal>
```

Volvemos a ejecutar la validación

```bash
xmllint --schema ./2.1/maindoc/UBL-Invoice-2.1.xsd 20123456789-01-F001-1.xml --noout
```
Resultado:
```bash
20123456789-01-F001-1.xml:138: element PayableAmount: Schemas validity error : Element '{urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2}PayableAmount': The attribute 'currencyID' is required but missing.
20123456789-01-F001-1.xml fails to validate
```

_En este caso el atributo `currencyID` es requerido y nos muestra el error._
  </TabItem>
</Tabs>


## Validación de contenido (XSL)

La validación de contenido de nuestro comprobante XML, proviene de las [Reglas de validación - SUNAT](https://cpe.sunat.gob.pe/node/88#item-1), en la cual se define valores, formatos, cálculos que deberia cumplir el comprobante electrónico, y que en general son propios de la tributación peruana; por ejemplo que la serie inicie con `F` para facturas, el cálculo del IGV sea correcto, que los codigos de catálogo utilizados se encuentren en la lista definida por SUNAT, etc.

Las reglas de validación que SUNAT presenta en un archivo excel, ha sido representada en archivos XSL para poder utilizarlos programáticamente, SUNAT la pone a disposición en este [enlace](https://cpe.sunat.gob.pe/node/88#item-3), pero no esta completo; existe otra forma de obtener estos archivos XSL, y es descargando el facturador **SFS** de SUNAT, los archivos `XSL` se encontraran en la carpeta `sunat_archivos\sfs\VALI\commons`.


Esta será la estructura del directorio de trabajo.
```
/
├── sunat_archivos/sfs/VALI/commons/
│       ├─ cpe/
│       │   └─ catalogo/
│       ├─ error/
│       │   ├─ error_utils.xsl
│       │   └─ validate_utils.xsl
│       └─ xsl/validation/2.X/
│           ├─ ...
│           └─ ValidaExprRegFactura-2.0.1.xsl
│
├── 20123456789-01-F001-1.xml
```

:::warning XSLT Patch

Aunque los archivos XSL que SUNAT ofrece siguen la version [XSLT 1.0](https://www.w3.org/TR/xslt-10/), no es totalmente compatible, para este ejemplo hemos corregido el XSL de factura y los xsl referenciados, puedes descargarlo <a href="https://github.com/thegreenter/F001-1/releases/download/v1.0/xsl-validation.zip" target="_blank">aquí</a>.    

:::

### `xsltproc`
Esta herramienta nos permitirá validar el comprobante XML, con el archivo XSL según el tipo de comprobante. En este ejemplo validaremos una factura, el archivo xml será `20123456789-01-F001-1.xml` y el archivo XSL, `ValidaExprRegFactura-2.0.1.xsl`.

Comando para validar el comprobante XML usando las reglas de validación SUNAT.
```bash
xsltproc --noout --stringparam nombreArchivoEnviado 20123456789-01-F001-1.xml sunat_archivos/sfs/VALI/commons/xsl/validation/2.X/ValidaExprRegFactura-2.0.1.xsl 20123456789-01-F001-1.xml
```

Parámetros:
- `--noout`: Solo muestra los errores.
- `--stringparam`: Parámetros utilizados en el archivo XSL, SUNAT requiere el parámetro `nombreArchivoEnviado` que es el nombre del comprobante xml. 

### Errores
El comprobante XML utilizado no contiene errores, haremos algunos cambios en el XML para conseguirlo.

<Tabs
  defaultValue="caso1"
  values={[
    {label: 'Moneda inválida', value: 'caso1'},
    {label: 'Total impuestos incorrecto', value: 'caso2'},
  ]}>
  <TabItem value="caso1">

La moneda utilizada era `PEN`, la cambiaremos por `BTC`.

```xml {4}
 <cbc:DocumentCurrencyCode
        listID="ISO 4217 Alpha"
        listName="Currency"
        listAgencyName="United Nations Economic Commission for Europe">BTC</cbc:DocumentCurrencyCode>
```

Ejecutando la validación.
```bash
xsltproc --noout --stringparam nombreArchivoEnviado 20123456789-01-F001-1.xml sunat_archivos/sfs/VALI/commons/xsl/validation/2.X/ValidaExprRegFactura-2.0.1.xsl 20123456789-01-F001-1.xml
```

Resultado:
```bash
 error: : errorCode 3088: Valor no se encuentra en el catalogo: 02 (nodo: "Invoice/cbc:DocumentCurrencyCode" valor: "BTC")
```

Según los códigos de retorno de SUNAT:

Código | Descripción |
-|-|
**3088** | El valor ingresado como moneda del comprobante no es valido (catalogo nro 02). |

  </TabItem>
  <TabItem value="caso2">

La suma total de impuestos era `18.00`, la cambiaremos por `5.00`.

```xml {2}
  <cac:TaxTotal>
    <cbc:TaxAmount currencyID="PEN">5.00</cbc:TaxAmount>
    <cac:TaxSubtotal>
      <cbc:TaxableAmount currencyID="PEN">100.00</cbc:TaxableAmount>
      <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>
      <cac:TaxCategory>
        <cac:TaxScheme>
          <cbc:ID
                schemeName="Codigo de tributos"
                schemeAgencyName="PE:SUNAT"
                schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo05">1000</cbc:ID>
          <cbc:Name>IGV</cbc:Name>
          <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>
        </cac:TaxScheme>
      </cac:TaxCategory>
    </cac:TaxSubtotal>
  </cac:TaxTotal>
  <cac:LegalMonetaryTotal>
    <cbc:LineExtensionAmount currencyID="PEN">100.00</cbc:LineExtensionAmount>
    <cbc:TaxInclusiveAmount currencyID="PEN">118.00</cbc:TaxInclusiveAmount>
    <cbc:PayableAmount currencyID="PEN">118.00</cbc:PayableAmount>
  </cac:LegalMonetaryTotal>
```

Ejecutar la validación.
```bash
xsltproc --noout --stringparam nombreArchivoEnviado 20123456789-01-F001-1.xml sunat_archivos/sfs/VALI/commons/xsl/validation/2.X/ValidaExprRegFactura-2.0.1.xsl 20123456789-01-F001-1.xml
```

Resultado:
```bash
4301INFO : errorCode 4301 (nodo: "cac:TaxTotal/cbc:TaxAmount" valor: "5.00")
```

Según los códigos de retorno de SUNAT:

Código | Descripción |
-|-|
**4301** | La sumatoria de impuestos globales no corresponde al monto total de impuestos. |

  </TabItem>
</Tabs>


Todas las validaciones se pueden constatar con en el archivo [excel de Reglas de validación](https://cpe.sunat.gob.pe/node/88#item-3), allí podremos tener mayor información de cada codigo de error y como resolverlo.
