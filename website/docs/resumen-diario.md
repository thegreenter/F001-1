---
id: resumen_diario
title: Resumen diario de Boletas
sidebar_label: Resumen diario
---

Para comunicar la emisión de boletas y notas de crédito/débito relacionadas, SUNAT a definido un esquema XML nombrado como Resumen diario de Boletas `SummaryDocuments`. En este documento se pueden informar varios comprobantes siempre que hayan sido emitidos en el mismo día.

:::note Boleta Invididual

Según la normativa xxx, es posible comunicar a SUNAT boletas electrónicas de forma individual, de las misma forma que se envían las facturas.

:::

## Comprobantes permitidos
Los tipos de comprobantes que pueden incluirse en un resumen diario, son los siguientes.

Tipo  | Descripción
-|-|
03| Boletas
07| Nota de credéito relacionada a boletas
08| Nota de débito relacionada a boletas

## Información requerida

Necesitamos incluir la siguiente información por cada comprobante a enviar en el resumen diario.

- Tipo de comprobante
- Serie y correlativo del comprobante
- Datos del receptor
- Impuestos globales
- Totales
- Documento de referencia (si es NCR, NDB)
- Datos de percepción (si aplica)
- Estado

Sobre este último campo `Estado`, se utiliza para determinar según su valor si el comprobante:
- `1`: Se esta informando por primera vez.
- `2`: Se informó previamente y se quiere editar sus valores. 
- `3`: Se quiere anular el comprobante

Adicionalmente necesitamos un identificador de este documento, que sigue el siguiente patrón: 
`RC-<Fecha>-<Correlativo>`
- `RC`: Valor constante
- `<Fecha>`: Fecha del resumen diario en formato `YYYYMMDD`.
- `<Correlativo>`: Correlativo definido por el emisor, puede contener hasta 5 digitos.
