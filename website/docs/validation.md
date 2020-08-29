---
id: validation
title: Validar el comprobante electrónico
sidebar_label: Validación
---

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
Esta herramienta nos permitirá validar el comprobante XML, con el esquema XSD relacionado. En este caso validaremos una factura, el archivo xml sera `20123456789-01-F001-1.xml` y el esquema XSD, `UBL-Invoice-2.1.xsd`.

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
