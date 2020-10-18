---
id: baja
title: Comunicaiones de baja
sidebar_label: Dar de baja
---

import useBaseUrl from '@docusaurus/useBaseUrl';

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

## Ejemplo

En este ejemplo daremos de baja una factura y una nota de crédito relacionada a factura.

Datos de los comprobantes

N° | Fecha emisión | Tipo | Serie | Correlativo | Motivo
-|-|-|-|-|-|
1 | 2020-10-15 | 01 | F001 | 111 | ERROR DE SISTEMA
2 | 2020-10-15 | 07 | FC01 | 23  | ERROR EN RUC

### XML

El estructura del XML para una comunicacion de baja.

```xml
<?xml version="1.0" encoding="utf-8"?>
<VoidedDocuments xmlns="urn:sunat:names:specification:ubl:peru:schema:xsd:VoidedDocuments-1" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2" xmlns:sac="urn:sunat:names:specification:ubl:peru:schema:xsd:SunatAggregateComponents-1" xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
    <ext:UBLExtensions>
        <ext:UBLExtension>
            <ext:ExtensionContent/>
        </ext:UBLExtension>
    </ext:UBLExtensions>
    <!-- La versión de UBL -->
    <cbc:UBLVersionID>2.0</cbc:UBLVersionID>
    <!-- La versión de la estructura del documento, SUNAT define 2.0 como valor constante para UBL 2.1 -->
    <cbc:CustomizationID>1.0</cbc:CustomizationID>
    <!-- Identificador RA-<Fecha>-##### -->
    <cbc:ID>RA-20201018-14</cbc:ID>
    <!-- Fecha emisión de comprobantes  -->
    <cbc:ReferenceDate>2020-10-15</cbc:ReferenceDate>
    <!-- Fecha de la comunicación de baja -->
    <cbc:IssueDate>2020-10-18</cbc:IssueDate>
    <cac:Signature>
        <!-- Ruc del firmante -->
        <cbc:ID>20123456789</cbc:ID>
        <cac:SignatoryParty>
        <cac:PartyIdentification>
        <!-- Ruc del firmante -->
            <cbc:ID>20123456789</cbc:ID>
        </cac:PartyIdentification>
        <cac:PartyName>
            <!-- Nombre del firmante -->
            <cbc:Name><![CDATA[MI EMPRESA S.A.C]]></cbc:Name>
        </cac:PartyName>
        </cac:SignatoryParty>
        <cac:DigitalSignatureAttachment>
        <cac:ExternalReference>
            <!-- Referencia del firmante, nada expecífico que SUNAT exija. -->
            <cbc:URI>#EMPRESA-SIGN</cbc:URI>
        </cac:ExternalReference>
        </cac:DigitalSignatureAttachment>
    </cac:Signature>
    <cac:AccountingSupplierParty>
        <cbc:CustomerAssignedAccountID>20123456789</cbc:CustomerAssignedAccountID>
        <!-- Tipo documento emisor: 6 (RUC - Catálogo 06) -->
        <cbc:AdditionalAccountID>6</cbc:AdditionalAccountID>
        <cac:Party>
            <cac:PartyLegalEntity>
                <!-- Razon social del Emisor -->
                <cbc:RegistrationName><![CDATA[MI EMPRESA S.A.C]]></cbc:RegistrationName>
            </cac:PartyLegalEntity>
        </cac:Party>
    </cac:AccountingSupplierParty>
    <sac:VoidedDocumentsLine>
        <!-- Numero secuencial -->
        <cbc:LineID>1</cbc:LineID>
        <!-- Tipo de comprobante -->
        <cbc:DocumentTypeCode>01</cbc:DocumentTypeCode>
        <!-- Serie del comprobante -->
        <sac:DocumentSerialID>F001</sac:DocumentSerialID>
        <!-- Correlativo del comprobante -->
        <sac:DocumentNumberID>111</sac:DocumentNumberID>
        <!-- Motivo de baja -->
        <sac:VoidReasonDescription><![CDATA[ERROR DE SISTEMA]]></sac:VoidReasonDescription>
    </sac:VoidedDocumentsLine>
    <sac:VoidedDocumentsLine>
        <!-- Numero secuencial -->
        <cbc:LineID>2</cbc:LineID>
        <!-- Tipo de comprobante -->
        <cbc:DocumentTypeCode>01</cbc:DocumentTypeCode>
        <!-- Serie del comprobante -->
        <sac:DocumentSerialID>FC01</sac:DocumentSerialID>
        <!-- Correlativo del comprobante -->
        <sac:DocumentNumberID>23</sac:DocumentNumberID>
        <!-- Motivo de baja -->
        <sac:VoidReasonDescription><![CDATA[ERROR EN RUC]]></sac:VoidReasonDescription>
    </sac:VoidedDocumentsLine>
</VoidedDocuments>
```

### Firma

Seguiremos la guía de la sección [firma](sign.md), el resultado del documento firmado se puede descargar <a href={useBaseUrl('file/20123456789-RA-20201018-1.xml')} target="'_blank'">aquí</a>.

### Envio a SUNAT.

Primero definiremos la nomenclatura de este documento, tendremos en cuenta la referencia de la seccion anterior de [webservices](webservices.md#Nomenclatura). 

`{RUC}-RA-{FECHA}-{CORRELATIVO}.xml`

| Sigla        | Descripción                |
|--------------|----------------------------|
|`RUC`         | Ruc del emisor             |
|`FECHA`       | Fecha generación del documento (formato: `YYYYMMDD`) |
|`CORRELATIVO` | Correlativo del documento (máxima longitud: `5`)  |

El proceso de comunicar a SUNAT es un proceso asíncrono, eso quiere decir que no obtendremos la respuesta de SUNAT en la petición inicial sino que tendremos que hacer una segunda petición para saber el resultado.
Los métodos `SOAP` a utilizar son:

- `sendSummary`: Envío de la comunicación de baja.
- `getStatus`: Obtener el resultado de la comunicación de baja.

Realizaremos la compresión del archivo xml, con nombre: `20123456789-RA-20201018-1.zip`, y
a continuación la incluiremos en la trama SOAP, muy similar al envío de factura.

```xml title="./trama.xml" {11,13,14}
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
      <ns1:sendSummary>
        <fileName>20123456789-RA-20201018-1.zip</fileName>
        <contentFile>ZIP_BASE_64</contentFile>
      </ns1:sendSummary>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

Ahora invocaremos el servicio SOAP utilizando `curl`.

```bash
curl -X POST -H "Content-Type: text/xml" --data-binary @trama.xml \
 https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
    <soap-env:Header/>
    <soap-env:Body>
        <br:sendSummaryResponse xmlns:br="http://service.sunat.gob.pe">
            <ticket>1603058796047</ticket>
        </br:sendSummaryResponse>
    </soap-env:Body>
</soap-env:Envelope>
```

Obtendrémos como resultado un número de `ticket` = **1603058796047**, que nos servirá para consultar el CDR de la comunicación de baja, con la siguiente trama:

```xml title="./status.xml" {11,13,14}
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
      <ns1:getStatus>
        <ticket>1603058796047</ticket>
      </ns1:getStatus>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

Invocando el servicio SOAP.
```bash
curl -X POST -H "Content-Type: text/xml" --data-binary @status.xml \
 https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService
```

El resultado será el siguiente.

```xml {6}
<?xml version="1.0" encoding="UTF-8"?>
<S:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
    <S:Body>
        <ns2:getStatusResponse xmlns:ns2="http://service.sunat.gob.pe">
            <status>
                <content>ZIP_BASE64_RESPONSE</content>
                <statusCode>0</statusCode>
            </status>
        </ns2:getStatusResponse>
    </S:Body>
</S:Envelope>
```

Referencia sobre `statusCode`:

statusCode | Descripcion
-|-|
0| Proceso correctamente, el campo `content` contendrá el resultado
98| En proceso, necesitas volver a consultar
99| Proceso con errores, el campo `content` contendrá el resultado

Guardamos el valor de la marca `ZIP_BASE64_RESPONSE` en un archivo `response.txt`, para proceder a decodificarlo y obtener el ZIP que contiene la respuesta.

```bash
base64 -d response.txt > result.zip
```

En `result.zip` ubicaremos el XML del CDR donde nos indicar que el documento fue aceptado. Más informacion sobre CDR en la sección de [webservices](webservices.md#CDR).
