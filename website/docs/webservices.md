---
id: webservices
title: Servicios Web de SUNAT
sidebar_label: Servicios Web
description: Envío de comprobantes a los servicios SOAP de SUNAT. 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Para informar nuestros comprobantes electrónicos (XML) emitidos a SUNAT, disponemos de algunos servicios SOAP a los que necesitamos conectarnos para enviar estos archivos. 

## Credenciales

Para conectarnos a estos servicios, necesitaremos unas credenciales, estas son la misma que la clave SOL.

|Dato          | Relación con clave SOL |
|--------------|------------------------|
| Usuario SOAP | `RUC + Usuario SOL`    |
| Clave SOAP   | `clave SOL`            |

Ejemplo:
- Usuario: `20123456789MODDATOS`
- Clave: `moddatos`

:::tip Usuario Secundario

Es recomendable crear un usuario secundario con solo permisos para procesos de facturación electrónica, y evitar utilizar la clave SOL principal. Puedes encontrar muchos tutoriales en 
internet, pero recuerda que para que el usuario este operativo puede tomar hasta 24 horas despues de su creación. 

:::


## BillService
Este es el principal servicio SOAP, el cual define 3 metodos:

- `sendBill`: Para enviar comprobantes (FAC, BOL, NCR, NDB, RET, PERC, GRM).
- `sendSummary`: Para enviar resumen diario, comuncaiones de baja, reversiones.
- `getStatus`: Consultar el estado del envío de un resumen diario, c. de baja, reversiones.

Para ver el detalle de los métodos, puedes revisar el [Manual del Programador - SUNAT](http://contenido.app.sunat.gob.pe/insc/ComprobantesDePago+Electronicos/eFacturas+d+sistemas+contrib/Act23dic2014/Manual+de+autorizacion.pdf)


Existen 3 endpoints del mismo servicio para diferentes comprobantes.

1. Facturas, Boletas, notas de crédito, débito, Resumen diario de boletas, Comunicacion de bajas
2. Retención, Percepción, Resumen de Reversiones
3. Guia de Remisión

### Endpoints

SUNAT dispone de servicios para prueba (**BETA**) y producción:

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

- `getStatus`: Consultar el estado de un comprobante previamente enviado.
- `getStatusCdr`: Para obtener el CDR, si el comprobante fue previamente procesado.

### Endpoints

El servicio solo esta disponible en produción.

| Servicio               | Ruta                                                                       |
|------------------------|----------------------------------------------------------------------------|
| Consulta CDR           | https://e-factura.sunat.gob.pe/ol-it-wsconscpegem/billConsultService?wsdl  |


## Nomenclatura

SUNAT exige que el nombre del archivo XML siga un formato específico. 

```
{RUC}-{TIPO_DOC}-{SERIE}-{CORRELATIVO}.xml
```
| Sigla        | Descripción                       |
|--------------|-----------------------------------|
|`RUC`         | Ruc del emisor                    |
|`TIPO_DOC`    | Tipo de Comprobante (Catálogo 01) |
|`SERIE`       | Serie del comprobante             |
|`CORRELATIVO` | Correlativo del comprobante       |

Ejemplos:
- `20123456789-01-F001-4.xml` (Factura)
- `20123456789-07-F001-5.xml` (Nota de crédito relacionada a Factura)
- `20123456789-03-B001-8.xml` (Boleta)
- `20123456789-07-B001-9.xml` (Nota de crédito relacionada a Boleta)
- `20123456789-09-T001-155.xml` (Guía de Remisión)
- `20123456789-40-P001-222.xml` (Percepcion)

Adicionalmente, hay una diferencia con respecto al resumen diario, comunicaciones de baja y resumen de reversiones, que siguen 
el siguiente formato.

```
{RUC}-{TIPO}-{FECHA}-{CORRELATIVO}.xml
```
| Sigla        | Descripción                |
|--------------|----------------------------|
|`RUC`         | Ruc del emisor             |
|`TIPO_DOC`    | Tipo documento (`RC`: Resumen diario, `RA`: C. de baja, `RR`: Reversiones ) |
|`SERIE`       | Fecha generación del documento (formato: `YYYYMMDD`) |
|`CORRELATIVO` | Correlativo del documento (máxima longitud: `5`)  |

Ejemplos:
- `20123456789-RC-20200930-211.xml` (Resumen diario de boletas)
- `20123456789-RA-20200929-433.xml` (Comunicación de bajas)
- `20123456789-RR-20201001-11122.xml` (Resumen de reversiones)

## Zip

Antes de ejecutar el servicio SOAP, SUNAT necesita que el archivo xml (factura) sea comprimido en formato `zip`. Para ello podemos utlizar cualquier programa de escritorio (7z, winrar, etc) o en linea de comandos, como el siguiente ejemplo.

```bash
zip 20123456789-01-F001-1.zip 20123456789-01-F001-1.xml
```

> El nombre del archivo `zip` es el mismo que el nombre del `xml`.

## Ejemplo

En este ejemplo, enviaremos la factura electrónica construida en las secciones anteriores, puedes descargarlo desde este <a href={useBaseUrl('file/20123456789-01-F001-1.xml')} target="'_blank'">enlace</a>.

> Debemos tener nuestro comprobante en formato zip: `20123456789-01-F001-1.zip`

### sendBill

Para enviar el zip en la trama SOAP, necesitamos codificar el archivo en formato `base64`.

Podemos usar el siguiente comando:
```bash
base64 20123456789-01-F001-1.zip
``` 

En la siguiente trama reemplazar el resultado en la marca `ZIP_BASE_64`, además estamos incluyendo el nombre del archivo y la cabecera de seguridad donde se incluye las credenciales (clave SOL).

```xml title="./sendbill.xml" {13}
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://service.sunat.gob.pe" xmlns:ns2="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
   <SOAP-ENV:Header>
      <ns2:Security>
         <ns2:UsernameToken>
            <ns2:Username>20123456789MODDATOS</ns2:Username>
            <o:Password xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">moddatos</o:Password>
         </ns2:UsernameToken>
      </ns2:Security>
   </SOAP-ENV:Header>
   <SOAP-ENV:Body>
      <ns1:sendBill>
        <fileName>20123456789-01-F001-1.zip</fileName>
        <contentFile>ZIP_BASE_64</contentFile>
      </ns1:sendBill>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

Ahora podemos invocar el servicio SOAP, utilizaremos `curl` para esta operación.

```bash
curl -X POST -H "Content-Type: text/xml" --data-binary @trama.xml \
 https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService
```

El resultado será el siguiente.

```xml {6}
<?xml version="1.0" encoding="UTF-8"?>
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
<soap-env:Header/>
<soap-env:Body>
    <br:sendBillResponse xmlns:br="http://service.sunat.gob.pe">
        <applicationResponse>ZIP_BASE64_RESPONSE</applicationResponse>
    </br:sendBillResponse>
</soap-env:Body>
</soap-env:Envelope>
```

Guardamos el valor de la marca `ZIP_BASE64_RESPONSE` en un archivo `response.txt`, para proceder a decodificarlo y obtener el ZIP que contiene la respuesta.

```bash
base64 -d response.txt > result.zip
```

### CDR

Dentro del archivo zip decodificado (`result.zip`), encontraremos un archivo xml que representa el CDR (Comprobante de recepción).

```xml title="R-20123456789-01-F001-123.xml" {46}
<?xml version="1.0" encoding="UTF-8"?>
<ar:ApplicationResponse xmlns:ar="urn:oasis:names:specification:ubl:schema:xsd:ApplicationResponse-2" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
   <ext:UBLExtensions>
      <ext:UBLExtension>
         <ext:ExtensionContent>
            <Signature xmlns="http://www.w3.org/2000/09/xmldsig#">
               <!-- Omitido para ejemplo -->
            </Signature>
         </ext:ExtensionContent>
      </ext:UBLExtension>
   </ext:UBLExtensions>
   <cbc:ID>1601506416977</cbc:ID>
   <cbc:IssueDate>2020-09-24T11:38:45</cbc:IssueDate>
   <cbc:IssueTime>00:00:00</cbc:IssueTime>
   <cbc:ResponseDate>2020-09-30</cbc:ResponseDate>
   <cbc:ResponseTime>17:53:36</cbc:ResponseTime>
   <cac:Signature>
      <cbc:ID>SignSUNAT</cbc:ID>
      <cac:SignatoryParty>
         <cac:PartyIdentification>
            <cbc:ID>20131312955</cbc:ID>
         </cac:PartyIdentification>
         <cac:PartyName>
            <cbc:Name>SUNAT</cbc:Name>
         </cac:PartyName>
      </cac:SignatoryParty>
      <cac:DigitalSignatureAttachment>
         <cac:ExternalReference>
            <cbc:URI>#SignSUNAT</cbc:URI>
         </cac:ExternalReference>
      </cac:DigitalSignatureAttachment>
   </cac:Signature>
   <cac:SenderParty>
      <cac:PartyIdentification>
         <cbc:ID>20131312955</cbc:ID>
      </cac:PartyIdentification>
   </cac:SenderParty>
   <cac:ReceiverParty>
      <cac:PartyIdentification>
         <cbc:ID>20123456789</cbc:ID>
      </cac:PartyIdentification>
   </cac:ReceiverParty>
   <cac:DocumentResponse>
      <cac:Response>
         <cbc:ReferenceID>F001-123</cbc:ReferenceID>
         <cbc:ResponseCode>0</cbc:ResponseCode>
         <cbc:Description>La Factura numero F001-123, ha sido aceptada</cbc:Description>
      </cac:Response>
      <cac:DocumentReference>
         <cbc:ID>F001-123</cbc:ID>
      </cac:DocumentReference>
      <cac:RecipientParty>
         <cac:PartyIdentification>
            <cbc:ID>6-20000000001</cbc:ID>
         </cac:PartyIdentification>
      </cac:RecipientParty>
   </cac:DocumentResponse>
</ar:ApplicationResponse>
```

Prestaremos especial atención al valor del nodo `cbc:ResponseCode`, que contiene el código de respuesta, y que nos permitirá saber si el comprobante fue aceptado o rechazado.

Codigo      | Descripcion     | Acción               |
------------|-----------------|----------------------|
0           | Aceptado        | -                    |
2000 a 3999 | Rechazado       | Emitir nueva factura |

En ocasiones el CDR contendrá observaciones en el comprobante.
```xml
<!-- ... -->
<cbc:ResponseTime>18:38:20</cbc:ResponseTime>
<cbc:Note>4287 - El precio unitario de la operación que está informando difiere de los cálculos realizados en base a la información remitida - Error en la linea: 1 (nodo: "/Invoice/cac:InvoiceLine/cac:PricingReference/cac:AlternativeConditionPrice/cbc:PriceAmount", valor:"100")</cbc:Note>
<cbc:Note>4309 - La sumatoria de valor de venta no corresponde a los importes consignados - (nodo: "/Invoice/cac:LegalMonetaryTotal/cbc:LineExtensionAmount", valor:"300.00")</cbc:Note>
<cac:Signature>
<!-- ... -->
```

Estas observaciones deberán ser corregidas en posteriores emisiones.
