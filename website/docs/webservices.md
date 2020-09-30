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

Para ver el detalle de los métodos, puedes revisar el [Manual del Programdor - SUNAT](http://contenido.app.sunat.gob.pe/insc/ComprobantesDePago+Electronicos/eFacturas+d+sistemas+contrib/Act23dic2014/Manual+de+autorizacion.pdf)


Existen 3 endpoint del mismo servicio para diferentes comprobantes.

- Facturas, Boletas, notas de crédito, débito, Resumen diario de boletas, Comunicacion de bajas
- Retención, Percepción, Resumen de Reversiones
- Guia de Remisión

### Endpoints

SUNAT dispone de servicios para prueba (**BETA**) y envío a producción:


<Tabs
  defaultValue="apple"
  values={[
    {label: 'BETA', value: 'beta'},
    {label: 'Produción', value: 'prod'},
    {label: 'Banana', value: 'banana'},
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
</Tabs>;


## BillConsultService

Este servicio se utiliza para consultar el estado de comprobantes previamente enviados y obtener el `CDR`, tener en cuenta que solo esta habilitado para Facturas y notas de crédito, débito releacionadas.

El servicio solo esta disponible en produción.

| Servicio               | Ruta                                                                            |
|------------------------|---------------------------------------------------------------------------------|
| Consulta CDR           | https://e-factura.sunat.gob.pe/ol-it-wsconscpegem/billConsultService?wsdl       |

