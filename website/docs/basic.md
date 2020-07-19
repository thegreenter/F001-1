---
id: basic
title: Conceptos Básicos
sidebar_label: Conceptos
---

La facturación electrónica implica conocer algunos aspectos que difieren de la facturación tradicional, antes de empezar la implementación.

## Comprobantes electrónicos
Hay una lista de comprobantes que se pueden emitir electrónicamente, aunque no todos se pueden emitir desde los sistemas del contribuyente (SEE).


|Compobante                      |  SEE  |
|--------------------------------|-------|
| Factura                        |  ✅   |
| Boleta                         |  ✅   |
| Nota de crédito                |  ✅   |
| Nota de débito                 |  ✅   |
| Comprobante de Retención       |  ✅   |
| Comprobante de Percepción      |  ✅   |
| Recibo por honorarios          |  ➖   |
| Recibo de servicios públicos   |  ✅   |
| Guía de remisión               |  ✅   |
| Liquidación de compra          |  ➖   |

## Series y correlativos
Al emitir comprobantes electrónicos ya no necesita autorizar o informar a SUNAT las series que utilizará, pero debe seguir ciertos criterios que verá a continuación, en el caso de los correlativos siguen siendo numéricos.

### Factura
La serie de facturas empiezan con la letra `F`, seguido de 3 caracterse alfanumericos.   
Ejemplos válidos e inválidos:

- ✔️ `F001` 
- ✔️ `FAAA`
- ✔️ `FB01`
- ❌ `0001`
- ❌ `B001`
- ❌ `F03`

:::tip Notas de Crédito y Débito

Si una nota de credito/debito se emite referenciando a una factura, esta debe cumplir con el mismo formato de serie, es decir para el caso de Facturas, sus notas de credito/debito deben tener series que empiecen con la letra `F`.

:::


### Boleta de Venta
La serie de boletas de venta empiezan con la letra `B`, seguido de 3 caracterse alfanumericos.   
Ejemplos válidos e inválidos:

- ✔️ `B001` 
- ✔️ `BAAZ`
- ✔️ `BA03`
- ❌ `0001`
- ❌ `F001`
- ❌ `B01`

:::tip Notas de Crédito y Débito
Si una nota de credito/debito se emite referenciando a una boleta, esta debe cumplir con el mismo formato de serie, es decir para el caso de Facturas, sus notas de credito/debito deben tener series que empiecen con la letra `B`.
:::

## Firma digital
Los comprobantes electrónicos técnicamente son archivos en formato XML, que siguen las especificaciones de **OASIS Universal Business Language (UBL)**, existen varias versiones, actualmente SUNAT exige utilizar la versión [UBL v2.1](http://www.datypic.com/sc/ubl21/ss.html).

Además de generar estos archivos XML, se necesita firmarlos digitalmente con un certificado digital válido; existen varias herramientas para realizar esta firma y también diferentes proveedores que ofrecen este certificado, y que veremos más adelante.

## Envío a SUNAT

SUNAT expone varios `webservices` basados en `SOAP` (para pruebas y producción), para recepcionar los comprobantes electrónicos de las empresas, aunque previamente tendremos que comprimir nuestros comprobantes (XML firmados) en formato `zip`, ya que es la entrada de datos que espera el webservices.

:::caution Plazos

Los comprobantes deberian ser comunicados a SUNAT lo mas pronto posible, posterior a su emisión, aunque tienen **un plazo de 7 dias**.

:::

## Terceras partes
Sunat ha delegado cierta responsibilidad sobre algunas empresas para llevar a cabo el proceso de facturación electrónica en el pais, hay una clasificacion de esto.

### Proveedor de Servicios Electrónicos (PSE)
En la práctica utilizan sus certificados digitales para firmar los comprobantes electrónicos (XML) de otras empresas, esto quiere decir que la empresa no tendra que adquirir un certificado digital por su cuenta.   
Además guian en la implementación de la `FE` en los sistemas del contribuyente, muchos de ellos ofrecen formatos alternativos a los XML (`json`, `text`) para el envío desde los sistemas de sus clientes, posteriormente ellos se encargaran de generar los archivos XML, firmarlos, enviarlos a SUNAT y cumplir con otras obligaciones que exige SUNAT.   

### Operador de Servicios Electrónicos (OSE)
Ayuda a SUNAT en la recepción de los comprobantes electrónicos, en teoria mantiene la interoperabilidad con los `webservices` expuestos por SUNAT, de modo que el proceso de cambiar de un operador a otro seria muy sencillo. 