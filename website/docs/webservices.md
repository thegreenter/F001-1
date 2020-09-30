---
id: webservices
title: Servicios Web de SUNAT
sidebar_label: Servicios Web
description: Envío de comprobantes a los servicios SOAP de SUNAT. 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Después de generar el comprobante electrónico (XML), necesitamos informarlo a SUNAT. Para ello disponemos de algunos servicios SOAP a los que necesitamos conectarnos para enviar nuestros archivos. 


## BillService
Este es el principal servicio SOAP, el cual define 3 metodos:

- `sendBill`: Para enviar comprobantes (FAC, BOL, NCR, NDB, RET, PERC, GRM).
- `sendSummary`: Para enviar resumen diario, comuncaiones de baja, reversiones.
- `getStatus`: Consultar el estado del envio de un resumen diario, c. de baja, reversiones.

Para ver el detalle de los métodos, puedes revisar el [Manual del Programador - SUNAT](http://contenido.app.sunat.gob.pe/insc/ComprobantesDePago+Electronicos/eFacturas+d+sistemas+contrib/Act23dic2014/Manual+de+autorizacion.pdf)


Existen 3 endpoint del mismo servicio para diferentes comprobantes.

1. Facturas, Boletas, notas de crédito, débito, Resumen diario de boletas, Comunicacion de bajas
2. Retención, Percepción, Resumen de Reversiones
3. Guia de Remisión

### Endpoints

SUNAT dispone de servicios para prueba (**BETA**) y envío a producción:


<Tabs
  defaultValue="beta"
  values={[
    {label: 'BETA', value: 'beta'},
    {label: 'Produción', value: 'prod'}
  ]}>
  <TabItem value="beta">

| Servicio               | Ruta                                                                            |
|------------------------|---------------------------------------------------------------------------------|
| Factura                | https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService?wsdl               |
| Retención y Percepción | https://e-beta.sunat.gob.pe/ol-ti-itemision-otroscpe-gem-beta/billService?wsdl  |
| Guia                   | https://e-beta.sunat.gob.pe/ol-ti-itemision-guia-gem-beta/billService?wsdl      |
 
  </TabItem>
  <TabItem value="prod">

| Servicio               | Ruta                                                                            |
|------------------------|---------------------------------------------------------------------------------|
| Factura                | https://e-factura.sunat.gob.pe/ol-ti-itcpfegem/billService?wsdl                 |
| Retención y Percepción | https://e-factura.sunat.gob.pe/ol-ti-itemision-otroscpe-gem/billService?wsdl    |
| Guia                   | https://e-guiaremision.sunat.gob.pe/ol-ti-itemision-guia-gem/billService?wsdl   |

  </TabItem>
</Tabs>


## BillConsultService

Este servicio se utiliza para consultar el estado de comprobantes previamente enviados y obtener el `CDR`, tener en cuenta que solo esta habilitado para facturas y notas de crédito, débito releacionadas.

Métodos SOAP:

- `getStatusCdr`: Para obtener el CDR, si el comprobante fue previamente procesado.

### Endpoints

El servicio solo esta disponible en produción.

| Servicio               | Ruta                                                                            |
|------------------------|---------------------------------------------------------------------------------|
| Consulta CDR           | https://e-factura.sunat.gob.pe/ol-it-wsconscpegem/billConsultService?wsdl       |


## Envío de Factura

En este ejemplo, enviaremos la factura electrónica construida en los ejemplos anteriores.

### Nomenclatura

SUNAT exige que el nombre del archivo XML siga un formato específico. 

```
{RUC}-{TIPO_DOC}-{SERIE}-{CORRELATIVO}.xml
```
| Sigla          | Descripción                       |
|----------------|-----------------------------------|
|`RUC`         | Ruc del emisor                    |
|`TIPO_DOC`    | Tipo de Comprobante (Catálogo 01) |
|`SERIE`       | Serie del comprobante             |
|`CORRELATIVO` | Correlativo del comprobante       |

Ejemplos:
- `20123456789-01-F001-4.xml` (Factura)
- `20123456789-07-F001-5.xml` (Nota de crédito relacionada a Factura)
- `20123456789-03-B001-8.xml` (Boleta)
- `20123456789-07-B001-9.xml` (Nota de crédito relacionada a Boleta)
- `20123456789-09-T001-1.xml` (Guía de Remisión)
- `20123456789-40-P001-2.xml` (Percepcion)
