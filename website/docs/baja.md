---
id: baja
title: Comunicaiones de baja
sidebar_label: Dar de baja
---

Para anular o dar de baja un comprobante electrónico, SUNAT a definido un esquema XML nombrado como `VoidedDocuments`. En este documento se pueden informar varios comprobantes siempre que hayan sido emitidos en la misma fecha.

:::note Versión UBL

Aunque este documento (`VoidedDocuments`) no forma parte del estándar UBL, SUNAT a decido asignarle la version `UBL 2.0`

:::

## Comprobantes permitidos
Los tipos de comprobantes principales que pueden darse de baja utilizando este documento, son los siguientes.

Tipo  | Descripción
-|-|
01| Facturas
07| Nota de creéito relacionada a facturas
08| Nota de débito relacionada a facturas

:::warning Baja de Boletas

Las boletas y notas de crédito/débito relacionadas deben darse de baja utilizando el documento de resumen diario.

:::

## Información requerida

Necesitamos incluir la siguiente información por cada comprobante a dar de baja.

- Tipo de comprobante
- Serie del comprobante
- Correlativo del comprobante
- Motivo de baja

Adicionalmente necesitamos un identificador de este documento, que sigue el siguiente patrón: 
`RA-<Fecha>-<Correlativo>`
- `RA`: Valor constante
- `<Fecha>`: Fecha de la comunicación de baja en formato `YYYYMMDD`.
- `<Correlativo>`: Correlativo definido por el emisor, puede contener hasta 5 digitos.
