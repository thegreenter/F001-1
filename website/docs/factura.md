---
id: factura
title: Factura Electrónica
sidebar_label: Factura
---

En esta sección empezaremos la elaboración de los comprobantes electrónicos (archivos `XML`), 
basados en el estandar `UBL 2.1`.

Una factura se representa con un nodo raiz xml `<Invoice>`, cuya especificación podemos encontrarla [aquí](http://www.datypic.com/sc/ubl21/t-ns39_InvoiceType.html). 

## Datos de la Factura

Utilizaremos un ejemplo básico para elaborar esta primera factura.

**Factura**

| Campo                  |  Valor       |
|------------------------|-------------:|
| Numero                 | F001-1       |
| Fecha de Emisión       | 21/07/2020   |
| Moneda                 | PEN          |
| Emisor RUC             | 20123456789  |
| Receptor RUC           | 20603343710  |
| Operaciones Gravadas   | S/ 100.00    |
| Valor Venta            | S/ 100.00    |
| IGV                    | S/ 18.00     |
| Importe Total          | S/ 118.00    |


**Detalle**    

| Campo                  |  Valor             |
|------------------------|-------------------:|
| Codigo                 | P001               |
| Descripcíon            | Tijeraas           |
| Unidad de Medida       | Unidad             |
| Cantidad               | 2                  |
| Precio                 | S/ 50.00           |
| Valor venta            | S/ 100.00          |
| Tipo de afectación IGV | Gravado, oneroso   |
| IGV                    | S/ 18.00           |

## XML
Con los datos de arriba esta sería la representación en XML.

```xml
<?xml version="1.0" encoding="utf-8"?>
<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"
xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"
xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"
xmlns:ds="http://www.w3.org/2000/09/xmldsig#"
xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2">
  <ext:UBLExtensions>
    <ext:UBLExtension>
      <ext:ExtensionContent>
      <!-- Aqui ira la firma digital -->
      </ext:ExtensionContent>
    </ext:UBLExtension>
  </ext:UBLExtensions>
  <!-- La versión de UBL -->
  <cbc:UBLVersionID>2.1</cbc:UBLVersionID>
  <!-- La versión de la estructura del documento, SUNAT define 2.0 como valor constante para UBL 2.1 -->
  <cbc:CustomizationID>2.0</cbc:CustomizationID>
  <!-- El numero de la factura -->
  <cbc:ID>F001-1</cbc:ID>
  <!-- La fecha de emisión -->
  <cbc:IssueDate>2020-07-21</cbc:IssueDate>
  <!-- El tipo de comprobante: 01 (Factura - Catálogo 01)
       Tipo de operación: @listID = 0101 (Venta interna - Catálogo 51)
  -->
  <cbc:InvoiceTypeCode
        listID="0101"
        listAgencyName="PE:SUNAT"
        listName="Tipo de Documento"
        listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo01">01</cbc:InvoiceTypeCode>
  <!-- Leyendas: @languageLocaleID = 1000 (Importe total en letras - Catálogo 52) -->
  <cbc:Note languageLocaleID="1000"><![CDATA[CIENTO DIECIOCHO CON 00 /100 SOLES]]></cbc:Note>
  <!-- La moneda del comprobante -->
  <cbc:DocumentCurrencyCode
        listID="ISO 4217 Alpha"
        listName="Currency"
        listAgencyName="United Nations Economic Commission for Europe">PEN</cbc:DocumentCurrencyCode>
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
  <!-- Datos del emisor -->
  <cac:AccountingSupplierParty>
    <cac:Party>
      <cac:PartyIdentification>
        <!-- Ruc del Emisor -->
        <!-- Tipo documento: @schemeID = 6 (RUC - Catálogo 06) -->
        <cbc:ID
            schemeID="6"
            schemeName="Documento de Identidad"
            schemeAgencyName="PE:SUNAT"
            schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">20123456789</cbc:ID>
      </cac:PartyIdentification>
      <cac:PartyName>
        <!-- Nombre comercial del Emisor -->
        <cbc:Name><![CDATA[MI EMPRESA]]></cbc:Name>
      </cac:PartyName>
      <cac:PartyLegalEntity>
        <!-- Razon social del Emisor -->
        <cbc:RegistrationName><![CDATA[MI EMPRESA S.A.C]]></cbc:RegistrationName>
        <!-- Datos de la dirección del Emisor -->
        <cac:RegistrationAddress>
          <!-- Codigo de Ubigeo -->
          <cbc:ID schemeName="Ubigeos"
                  schemeAgencyName="PE:INEI">150101</cbc:ID>
          <!-- Código asignado por la SUNAT para el establecimiento anexo declarado en el RUC, 0000 si no tiene -->
          <cbc:AddressTypeCode>0000</cbc:AddressTypeCode>
          <!-- Urbanización -->
          <cbc:CitySubdivisionName>CASUARINAS</cbc:CitySubdivisionName>
          <!-- Provincia -->
          <cbc:CityName>LIMA</cbc:CityName>
          <!-- Departamento -->
          <cbc:CountrySubentity>LIMA</cbc:CountrySubentity>
          <!-- Distrito -->
          <cbc:District>LIMA</cbc:District>
          <cac:AddressLine>
            <!-- Dirección completa detallada -->
            <cbc:Line><![CDATA[Av. Park 211]]></cbc:Line>
          </cac:AddressLine>
          <cac:Country>
            <!-- Codigo del pais -->
            <cbc:IdentificationCode
                listID="ISO 3166-1"
                listName="Country"
                listAgencyName="United Nations Economic Commission for Europe">PE</cbc:IdentificationCode>
          </cac:Country>
        </cac:RegistrationAddress>
      </cac:PartyLegalEntity>
    </cac:Party>
  </cac:AccountingSupplierParty>
  <!-- Datos del receptor -->
  <cac:AccountingCustomerParty>
    <cac:Party>
      <cac:PartyIdentification>
        <!-- Documento del receptor -->
        <!-- Tipo documento: @schemeID = 6 (RUC - Catálogo 06) -->
        <cbc:ID 
            schemeID="6"
            schemeName="Documento de Identidad"
            schemeAgencyName="PE:SUNAT"
            schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">20603343710</cbc:ID>
      </cac:PartyIdentification>
      <cac:PartyLegalEntity>
        <!-- Razon social del receptor -->
        <cbc:RegistrationName><![CDATA[NEGOCIOS S.A.C.]]></cbc:RegistrationName>
        <cac:RegistrationAddress>
          <cbc:ID>150101</cbc:ID>
          <cac:AddressLine>
            <!-- Dirección completa del receptor -->
            <cbc:Line><![CDATA[AV. OLIVAR NRO. 425 ]]></cbc:Line>
          </cac:AddressLine>
          <cac:Country>
            <!-- Codigo del pais -->
            <cbc:IdentificationCode
                listID="ISO 3166-1"
                listName="Country"
                listAgencyName="United Nations Economic Commission for Europe">PE</cbc:IdentificationCode>
          </cac:Country>
        </cac:RegistrationAddress>
      </cac:PartyLegalEntity>
    </cac:Party>
  </cac:AccountingCustomerParty>
  <cac:TaxTotal>
    <!-- Total impuestos -->
    <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>
    <!-- Sumatoria de los detalle por cada Operaciones Gravadas/Inafectas/Exoneradas -->
    <cac:TaxSubtotal>
      <!-- Sum. valor venta (gravadas) -->
      <cbc:TaxableAmount currencyID="PEN">100.00</cbc:TaxableAmount>
      <!-- Sum. IGV (gravadas) -->
      <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>
      <cac:TaxCategory>
        <cac:TaxScheme>
          <!-- Tipo de tributo: 1000 (IGV Impuesto General a las Ventas - Catálogo 05)  -->
          <cbc:ID
                schemeName="Codigo de tributos"
                schemeAgencyName="PE:SUNAT"
                schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo05">1000</cbc:ID>
          <cbc:Name>IGV</cbc:Name>
          <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>
        </cac:TaxScheme>
      </cac:TaxCategory>
    </cac:TaxSubtotal>
  </cac:TaxTotal>
  <cac:LegalMonetaryTotal>
    <!-- Total valor venta -->
    <cbc:LineExtensionAmount currencyID="PEN">100.00</cbc:LineExtensionAmount>
    <!-- Total precio venta -->
    <cbc:TaxInclusiveAmount currencyID="PEN">118.00</cbc:TaxInclusiveAmount>
    <!-- Importe total de la venta -->
    <cbc:PayableAmount currencyID="PEN">118.00</cbc:PayableAmount>
  </cac:LegalMonetaryTotal>
  <!-- Detalles -->
  <cac:InvoiceLine>
    <!-- Número de orden del detalle -->
    <cbc:ID>1</cbc:ID>
    <!-- Cantidad del producto/servicio -->
    <!-- Unidad de medida: @unitCode = NIU (Unidad - Catálogo 03) -->
    <cbc:InvoicedQuantity
        unitCode="NIU"
        unitCodeListID="UN/ECE rec 20"
        unitCodeListAgencyName="United Nations Economic Commission for Europe">2</cbc:InvoicedQuantity>
    <!-- Valor venta -->
    <cbc:LineExtensionAmount currencyID="PEN">100.00</cbc:LineExtensionAmount>
    <cac:PricingReference>
      <cac:AlternativeConditionPrice>
        <!-- Precio venta unitario -->
        <cbc:PriceAmount currencyID="PEN">59</cbc:PriceAmount>
        <!-- Tipo de precio: 01 (Precio unitario con IGV - Catálogo 16)  -->
        <cbc:PriceTypeCode
            listName="Tipo de Precio"
            listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo16"
            listAgencyName="PE:SUNAT">01</cbc:PriceTypeCode>
      </cac:AlternativeConditionPrice>
    </cac:PricingReference>
    <cac:TaxTotal>
      <!-- Total impuesto detalle -->
      <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>
      <cac:TaxSubtotal>
        <!-- Valor base para calcular el igv detalle -->
        <cbc:TaxableAmount currencyID="PEN">100.00</cbc:TaxableAmount>
        <!-- IGV -->
        <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>
        <cac:TaxCategory>
          <!-- Tasa de IGV: 18% -->
          <cbc:Percent>18</cbc:Percent>
          <!-- Tipo de Afectacion IGV: 10 (Gravado, Operación Onerosa - Catálogo 07)  -->
          <cbc:TaxExemptionReasonCode
                listName="Afectacion del IGV"
                listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo07"
                listAgencyName="PE:SUNAT">10</cbc:TaxExemptionReasonCode>
          <cac:TaxScheme>
            <!-- Tipo de tributo: 1000 (IGV Impuesto General a las Ventas - Catálogo 05)  -->
            <cbc:ID
                schemeName="Codigo de tributos"
                schemeAgencyName="PE:SUNAT"
                schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo05">1000</cbc:ID>
            <cbc:Name>IGV</cbc:Name>
            <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>
          </cac:TaxScheme>
        </cac:TaxCategory>
      </cac:TaxSubtotal>
    </cac:TaxTotal>
    <cac:Item>
      <!-- Descripción del producto/servicio -->
      <cbc:Description><![CDATA[TIJERAS - PRUEBA DE SISTEMAS]]></cbc:Description>
      <cac:SellersItemIdentification>
        <!-- Codigo del producto -->
        <cbc:ID>P001</cbc:ID>
      </cac:SellersItemIdentification>
      <cac:CommodityClassification>
        <!-- Codigo del producto SUNAT (Catálogo 25)-->
        <cbc:ItemClassificationCode
          listID="UNSPSC"
          listAgencyName="GS1 US"
          listName="Item Classification">44121618</cbc:ItemClassificationCode>
      </cac:CommodityClassification>
    </cac:Item>
    <cac:Price>
      <!-- Valor venta unitario -->
      <cbc:PriceAmount currencyID="PEN">50</cbc:PriceAmount>
    </cac:Price>
  </cac:InvoiceLine>
</Invoice>
```

> Hay algunos atributos en el XML que no son obligatorios, puedes ver esa versión [aquí](https://gist.github.com/giansalex/6cab789ed1d9ee838216c3847862a030)

Para saber que etiqueta del `XML` le corresponde a cada dato, tienes que dirigirte a [Reglas de Validación SUNAT](https://cpe.sunat.gob.pe/node/88#item-1), alli deberás descargar la versión más reciente, encontrarás en ese archivo Excel todos los comprobantes electrónicos disponibles, los datos que SUNAT espera recibir y en que etiquetas especificas del XML.  

## Catálogos

Como habrás notado, en el ejemplo hay varias indicaciones sobre `Catálogos`, existen varias listas de códigos que representan algún tipo de información, por ejemplo:

- Tipos de Comprobantes ⬅️ `Catalogo 01`
  - **01** - Factura
  - **03** - Boleta
  - etc
- Tipos de Documento de Identidad ⬅️ `Catalogo 06`
  - **0** - No domiciliado
  - **1** - DNI
  - **6** - RUC
  - etc
- etc

Para obtener las listas completas de los catálogos, puedes encontrarlo en el excel de [Reglas de validaciones de SUNAT](https://cpe.sunat.gob.pe/node/88#item-1).

:::tip Github

También puedes encontrar esta lista de catalogos en diferentes formatos [aquí](https://eliutimana.github.io/SunatCatalogos/).    
📖 _Colaboración de [@eliutimana](https://github.com/eliutimana/)_

:::

## Validación

Para comprobar que nuestros sean validos, existen 2 tipos de validaciones:
1. Validación de esquema (UBL 2.1 XSD)
2. Validación de contenido (Reglas de validación de SUNAT)

### Validación con XSD
Para verificar que el XML construido cumple con el esquema del estándar UBL, debemos primero contar con los XSD (`XML Schema Definition`), para el caso de SUNAT se puede descargar desde [aquí](https://github.com/thegreenter/ubl-validator/tree/master/src/xsd/2.1), y la verificación la podemos realizar con cualquier herramienta disponible.
> Para una factura, el XSD a utilizar debe ser: `maindoc/UBL-Invoice-2.1.xsd`.

- [Tutorial validar xml con notepad](https://www.3engine.net/wp/2017/03/validar-un-xml-mediante-notepad/) 


### Validación con las reglas de SUNAT
SUNAT también validará el contenido de nuestra factura, por ejemplo que la serie inicie con `F`, o que algún codigo de catálogo no se encuentre en la lista, aquí también se aplican validaciones de cálculo, como por ejemplo que el IGV este calculado correctamente o la suma de valor venta de los detalles sea igual al de la cabecera.

La forma mas fácil de validar esto es enviarlo al `webservice` de SUNAT, allí nos indicará los errores u observacionse que tengamos en el XML; aunque también se podria realizar utilizando los archivos `XSL` que sunat expone en este [enlace](https://cpe.sunat.gob.pe/sites/default/files/inline-files/XSL%20-%20UBL%202.1.zip), pero esta orientado a utilizar herramiente en el entorno de java.

:::info

Al enviar el XML a SUNAT, este realizará ambas validaciones, utilizando los XSD del `UBL` y las validaciones de contenido.  

:::