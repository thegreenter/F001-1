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
- `xmllint`
- `xsltproc`

Tambien necesitaremos un comprobante XML a validar, utilizaremos el XML creado en la sección anterior.

- [20123456789-01-F001-1.xml](https://fe-primer.greenter.dev/docs/sign#resultado)


