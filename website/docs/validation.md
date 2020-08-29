---
id: validation
title: Validar el comprobante electrónico
sidebar_label: Validación
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Para comprobar que nuestros comprobantes sean válidos, existen 2 tipos de validaciones:

1. Validación de esquema (UBL 2.1 - [XSD](https://en.wikipedia.org/wiki/XML_Schema_(W3C)))
2. Validación de contenido (Reglas de validación de SUNAT - [XSL](https://es.wikipedia.org/wiki/Extensible_Stylesheet_Language))

## Herramientas
Para completar esta sección necesitaremos utilizar algunas herramientas.
- [`xmllint`](http://xmlsoft.org/xmllint.html)
- [`xsltproc`](http://xmlsoft.org/XSLT/xsltproc.html)

Tambien necesitaremos un comprobante XML a validar, utilizaremos el XML creado en la sección anterior.

- [20123456789-01-F001-1.xml](https://fe-primer.greenter.dev/docs/sign#resultado)

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
xmllint --schema ./ 2.1/maindoc/UBL-Invoice-2.1.xsd 20123456789-01-F001-1.xml --noout
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
xmllint --schema ./ 2.1/maindoc/UBL-Invoice-2.1.xsd 20123456789-01-F001-1.xml --noout
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
xmllint --schema ./ 2.1/maindoc/UBL-Invoice-2.1.xsd 20123456789-01-F001-1.xml --noout
```
Resultado:
```bash
20123456789-01-F001-1.xml:138: element PayableAmount: Schemas validity error : Element '{urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2}PayableAmount': The attribute 'currencyID' is required but missing.
20123456789-01-F001-1.xml fails to validate
```

_En este caso el atributo `currencyID` es requerido y nos muestra el error._
  </TabItem>
</Tabs>


