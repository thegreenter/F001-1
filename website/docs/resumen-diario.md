---
id: resumen_diario
title: Resumen diario de Boletas
sidebar_label: Resumen diario
---

Para comunicar la emisión de boletas y notas de crédito/débito relacionadas, SUNAT a definido un esquema XML nombrado como Resumen diario de Boletas `SummaryDocuments`. En este documento se pueden informar varios comprobantes siempre que hayan sido emitidos en el mismo día.

:::note Boleta Invididual

Según la resolución [N.° 114 -2019/SUNAT Art. 12](http://www.sunat.gob.pe/legislacion/superin/2019/114-2019.pdf), es posible comunicar a SUNAT boletas electrónicas de forma individual, de las misma forma que se envían las facturas.

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
- Fecha de Emisión
- Moneda
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

## Ejemplo

En este ejemplo comunicaremos la emisión de una boleta y una nota de crédito relacionada a boleta, y tambien la anulación de boleta en el mismo dia.

Datos de los comprobantes

Campo | Boleta 1 | Nota Credito 1 | Boleta 2
-|-|-|-|
Tipo | 03 | 07 | 03
Numero | B001-22 | BC01-3 | BA01-11
Fecha | 2020-10-20 | 2020-10-20 | 2020-10-20
Moneda | Soles (PEN) | Soles (PEN) | Soles (PEN)
DNI Receptor | 33224567 | 44112576 | 00538572
Documento Afectado | - | B001-15 | -  
Total Gravadas | 1000 | 100 | 200
IGV | 180 | 18 | 36
Total | 1180 | 118 | 236
Estado | 1 | 1 | 3 

### XML

```xml
<?xml version="1.0" encoding="utf-8"?>
<SummaryDocuments xmlns="urn:sunat:names:specification:ubl:peru:schema:xsd:SummaryDocuments-1" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2" xmlns:sac="urn:sunat:names:specification:ubl:peru:schema:xsd:SunatAggregateComponents-1">
    <ext:UBLExtensions>
        <ext:UBLExtension>
            <ext:ExtensionContent/>
        </ext:UBLExtension>
    </ext:UBLExtensions>
    <!-- La versión de UBL (no hay versión 2.1 para resumen) -->
    <cbc:UBLVersionID>2.0</cbc:UBLVersionID>
    <!-- La versión de la estructura del documento definida por SUNAT -->
    <cbc:CustomizationID>1.1</cbc:CustomizationID>
    <!-- Identificador RC-<Fecha>-##### -->
    <cbc:ID>RC-20201022-33221</cbc:ID>
    <!-- Fecha emisión de comprobantes  -->
    <cbc:ReferenceDate>2020-10-20</cbc:ReferenceDate>
    <cbc:IssueDate>2020-10-22</cbc:IssueDate>
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
     <!-- Boleta 1 -->
    <sac:SummaryDocumentsLine>
        <!-- Numero secuencial -->
        <cbc:LineID>1</cbc:LineID>
        <!-- Tipo comprobante (03: Boleta) - catálogo 01 -->
        <cbc:DocumentTypeCode>03</cbc:DocumentTypeCode>
        <!-- Serie-Correlativo del comprobante -->
        <cbc:ID>B001-22</cbc:ID>
        <cac:AccountingCustomerParty>
            <!-- Numero documento del receptor -->
            <cbc:CustomerAssignedAccountID>33224567</cbc:CustomerAssignedAccountID>
            <!-- Tipo documento (1: DNI) - catálogo 06 -->
            <cbc:AdditionalAccountID>1</cbc:AdditionalAccountID>
        </cac:AccountingCustomerParty>
        <cac:Status>
            <!-- Estado del comprobante (1: Adicionar) - catálogo 19 -->
            <cbc:ConditionCode>1</cbc:ConditionCode>
        </cac:Status>
        <!-- Total del comprobante -->
        <sac:TotalAmount currencyID="PEN">1180.00</sac:TotalAmount>
        <!-- Total Gravado -->
        <sac:BillingPayment>
            <!-- Monto total Gravado -->
            <cbc:PaidAmount currencyID="PEN">1000.00</cbc:PaidAmount>
            <!-- Identificador de Total (01: Gravado) - catalogo 11 -->
            <cbc:InstructionID>01</cbc:InstructionID>
        </sac:BillingPayment>
        <!-- IGV -->
        <cac:TaxTotal>
            <!-- Monto IGV -->
            <cbc:TaxAmount currencyID="PEN">180.00</cbc:TaxAmount>
            <cac:TaxSubtotal>
                <!-- Mismo Monto IGV -->
                <cbc:TaxAmount currencyID="PEN">180.00</cbc:TaxAmount>
                <cac:TaxCategory>
                    <!-- Codigos constantes para IGV -->
                    <cac:TaxScheme>
                        <cbc:ID>1000</cbc:ID>
                        <cbc:Name>IGV</cbc:Name>
                        <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>
                    </cac:TaxScheme>
                </cac:TaxCategory>
            </cac:TaxSubtotal>
        </cac:TaxTotal>
    </sac:SummaryDocumentsLine>
     <!-- Nota Crédito 1 -->
    <sac:SummaryDocumentsLine>
        <!-- Numero secuencial -->
        <cbc:LineID>2</cbc:LineID>
        <!-- Tipo comprobante (07: Nota de crédito) - catálogo 01 -->
        <cbc:DocumentTypeCode>07</cbc:DocumentTypeCode>
        <!-- Serie-Correlativo del comprobante -->
        <cbc:ID>BC01-3</cbc:ID>
        <cac:AccountingCustomerParty>
            <!-- Numero documento del receptor -->
            <cbc:CustomerAssignedAccountID>44112576</cbc:CustomerAssignedAccountID>
            <!-- Tipo documento (1: DNI) - catálogo 06 -->
            <cbc:AdditionalAccountID>1</cbc:AdditionalAccountID>
        </cac:AccountingCustomerParty>
        <!-- Documento relacionado: Boleta afectada -->
        <cac:BillingReference>
            <cac:InvoiceDocumentReference>
                <!-- Serie-Correlativo de boleta afectada -->
                <cbc:ID>B001-15</cbc:ID>
                <!-- Tipo comprobante afectado (03: Boleta) - catálogo 01 -->
                <cbc:DocumentTypeCode>03</cbc:DocumentTypeCode>
            </cac:InvoiceDocumentReference>
        </cac:BillingReference>
        <cac:Status>
            <!-- Estado del comprobante (1: Adicionar) - catálogo 19 -->
            <cbc:ConditionCode>1</cbc:ConditionCode>
        </cac:Status>
        <!-- Total del comprobante -->
        <sac:TotalAmount currencyID="PEN">118.00</sac:TotalAmount>
        <!-- Total Gravado -->
        <sac:BillingPayment>
            <!-- Monto total Gravado -->
            <cbc:PaidAmount currencyID="PEN">100.00</cbc:PaidAmount>
            <!-- Identificador de Total (01: Gravado) - catalogo 11 -->
            <cbc:InstructionID>01</cbc:InstructionID>
        </sac:BillingPayment>
        <!-- IGV -->
        <cac:TaxTotal>
            <!-- Monto IGV -->
            <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>
            <cac:TaxSubtotal>
                <!-- Mismo Monto IGV -->
                <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>
                <cac:TaxCategory>
                    <!-- Codigos constantes para IGV -->
                    <cac:TaxScheme>
                        <cbc:ID>1000</cbc:ID>
                        <cbc:Name>IGV</cbc:Name>
                        <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>
                    </cac:TaxScheme>
                </cac:TaxCategory>
            </cac:TaxSubtotal>
        </cac:TaxTotal>
    </sac:SummaryDocumentsLine>
     <!-- Boleta 3 -->
    <sac:SummaryDocumentsLine>
        <!-- Numero secuencial -->
        <cbc:LineID>3</cbc:LineID>
        <!-- Tipo comprobante (03: Boleta) - catálogo 01 -->
        <cbc:DocumentTypeCode>03</cbc:DocumentTypeCode>
        <!-- Serie-Correlativo del comprobante -->
        <cbc:ID>BA01-11</cbc:ID>
        <cac:AccountingCustomerParty>
            <!-- Numero documento del receptor -->
            <cbc:CustomerAssignedAccountID>00538572</cbc:CustomerAssignedAccountID>
            <!-- Tipo documento (1: DNI) - catálogo 06 -->
            <cbc:AdditionalAccountID>1</cbc:AdditionalAccountID>
        </cac:AccountingCustomerParty>
        <cac:Status>
            <!-- Estado del comprobante (3: Anulado) - catálogo 19 -->
            <cbc:ConditionCode>3</cbc:ConditionCode>
        </cac:Status>
        <!-- Total del comprobante -->
        <sac:TotalAmount currencyID="PEN">236.00</sac:TotalAmount>
        <!-- Total Gravado -->
        <sac:BillingPayment>
            <!-- Monto total Gravado -->
            <cbc:PaidAmount currencyID="PEN">200.00</cbc:PaidAmount>
            <!-- Identificador de Total (01: Gravado) - catalogo 11 -->
            <cbc:InstructionID>01</cbc:InstructionID>
        </sac:BillingPayment>
        <!-- IGV -->
        <cac:TaxTotal>
            <!-- Monto IGV -->
            <cbc:TaxAmount currencyID="PEN">36.00</cbc:TaxAmount>
            <cac:TaxSubtotal>
                <!-- Mismo Monto IGV -->
                <cbc:TaxAmount currencyID="PEN">36.00</cbc:TaxAmount>
                <cac:TaxCategory>
                    <!-- Codigos constantes para IGV -->
                    <cac:TaxScheme>
                        <cbc:ID>1000</cbc:ID>
                        <cbc:Name>IGV</cbc:Name>
                        <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>
                    </cac:TaxScheme>
                </cac:TaxCategory>
            </cac:TaxSubtotal>
        </cac:TaxTotal>
    </sac:SummaryDocumentsLine>
</SummaryDocuments>
```

### Firma

Seguiremos la guía de la sección [firma](sign.md), el resultado del documento firmado se puede descargar <a href={useBaseUrl('file/20123456789-RC-20201022-33221.xml')} target="'_blank'">aquí</a>.

### Envio a SUNAT.

Primero definiremos la nomenclatura de este documento, tendremos en cuenta la referencia de la seccion anterior de [webservices](webservices.md#Nomenclatura). 

`{RUC}-RC-{FECHA}-{CORRELATIVO}.xml`

| Sigla        | Descripción                |
|--------------|----------------------------|
|`RUC`         | Ruc del emisor             |
|`FECHA`       | Fecha generación del resumen (formato: `YYYYMMDD`) |
|`CORRELATIVO` | Correlativo del documento (máxima longitud: `5`)  |

El proceso de comunicar a SUNAT es un proceso asíncrono, eso quiere decir que no obtendremos la respuesta de SUNAT en la petición inicial sino que tendremos que hacer una segunda petición para saber el resultado.
Los métodos `SOAP` a utilizar son:

- `sendSummary`: Envío del resumen diario.
- `getStatus`: Obtener el resultado del resumen diario.

Realizaremos la compresión del archivo xml, con nombre: `20123456789-RC-20201022-33221.zip`, y
a continuación la incluiremos en la trama SOAP, similar al envío de factura.

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
        <fileName>20123456789-RC-20201022-33221.zip</fileName>
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
            <ticket>1603506008386</ticket>
        </br:sendSummaryResponse>
    </soap-env:Body>
</soap-env:Envelope>
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
