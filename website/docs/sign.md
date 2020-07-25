---
id: sign
title: Firma Digital
sidebar_label: Firma Digital
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Una de las partes principales del proceso, es la firma digital utilizando un certificado que debe tener finalidad para firma de documentos.

Para archivos XML esto se conoce como firma envolvente (`enveloped-signature`), donde se firma una cadena de texto dentro del mismo documento XML.

## Herramientas.

Para realizar este procediminto, necesitamos algunas herramientas. . Esto incluye los siguientes ejecutables

- `xmllint`
- `openssl`

:::tip Windows

Puedes descargar estas herramientas en este <a href="https://github.com/thegreenter/F001-1/releases/download/v1.0/tools.zip" target="_blank">enlace</a>.

:::

## Certificado
Como vimos en [requerimientos](requirements.md), necesitamos un certificado digital, para este ejemplo puedes descargarlo desde <a href="https://github.com/thegreenter/F001-1/releases/download/v1.0/certificates.zip" target="_blank">aquí</a>.

## Canonicalización (c14n)

Necesitamos la representacion canónica del XML, esto permite preservar solo el contenido que puede variar en el XML, excluyendo cosas como comentarios o tipos de codificación del archivo.

> Para nuestro caso usaremos la [version c14n 1.0](https://www.w3.org/TR/2001/REC-xml-c14n-20010315)

Esto seria un resumen de los cosas que se tienen que tener en cuenta para satisfacer `c14n`.
- Archivos en format `UTF-8`
- Fin de linea `LF`
- Valores de atributos normalizados (por ejemplo quitar el salto de linae entre atributos).
- Se elimina `CDATA`, solo se mantiene el contenido.
- Se elimina la declaracion xml, al incio del documento: `<?xml version="1.0" encoding="utf-8"?>`.
- Se eliminan los comentarios.
- Se normalizan los espacios en blancos entre los elementos del documento.
- Los elementos vacíos se convierten en pares de etiquetas de inicio y fin: `<ab />` seria `<ab></ab>`.

Pero gracias a herramientas existentes podemos hacerlo ejecutando un solo comando; utilizaremos 
nuestro xml de la sección [anterior](factura.md) y con `xmllint` ejecutaremos:

```sh
xmllint --c14n 20123456789-01-F001-1.xml > 20123456789-01-F001-1_c14.xml
```

Con ello tendremos nuestro xml canónico, esto seria el contenido de `20123456789-01-F001-1_c14.xml`:

```xml
<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2">
  <ext:UBLExtensions>
    <ext:UBLExtension>
      <ext:ExtensionContent>
      </ext:ExtensionContent>
    </ext:UBLExtension>
  </ext:UBLExtensions>
  <cbc:UBLVersionID>2.1</cbc:UBLVersionID>
  <cbc:CustomizationID>2.0</cbc:CustomizationID>
  <cbc:ID>F001-1</cbc:ID>
  <cbc:IssueDate>2020-07-21</cbc:IssueDate>
  <cbc:InvoiceTypeCode listAgencyName="PE:SUNAT" listID="0101" listName="Tipo de Documento" listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo01">01</cbc:InvoiceTypeCode>
  <cbc:Note languageLocaleID="1000">CIENTO DIECIOCHO CON 00 /100 SOLES</cbc:Note>
  <cbc:DocumentCurrencyCode listAgencyName="United Nations Economic Commission for Europe" listID="ISO 4217 Alpha" listName="Currency">PEN</cbc:DocumentCurrencyCode>
  <cac:Signature>
    <cbc:ID>20123456789</cbc:ID>
    <cac:SignatoryParty>
      <cac:PartyIdentification>
        <cbc:ID>20123456789</cbc:ID>
      </cac:PartyIdentification>
      <cac:PartyName>
        <cbc:Name>MI EMPRESA S.A.C</cbc:Name>
      </cac:PartyName>
    </cac:SignatoryParty>
    <cac:DigitalSignatureAttachment>
      <cac:ExternalReference>
        <cbc:URI>#EMPRESA-SIGN</cbc:URI>
      </cac:ExternalReference>
    </cac:DigitalSignatureAttachment>
  </cac:Signature>
  <cac:AccountingSupplierParty>
    <cac:Party>
      <cac:PartyIdentification>
        <cbc:ID schemeAgencyName="PE:SUNAT" schemeID="6" schemeName="Documento de Identidad" schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">20123456789</cbc:ID>
      </cac:PartyIdentification>
      <cac:PartyName>
        <cbc:Name>MI EMPRESA</cbc:Name>
      </cac:PartyName>
      <cac:PartyLegalEntity>
        <cbc:RegistrationName>MI EMPRESA S.A.C</cbc:RegistrationName>
        <cac:RegistrationAddress>
          <cbc:ID schemeAgencyName="PE:INEI" schemeName="Ubigeos">150101</cbc:ID>
          <cbc:AddressTypeCode>0000</cbc:AddressTypeCode>
          <cbc:CitySubdivisionName>CASUARINAS</cbc:CitySubdivisionName>
          <cbc:CityName>LIMA</cbc:CityName>
          <cbc:CountrySubentity>LIMA</cbc:CountrySubentity>
          <cbc:District>LIMA</cbc:District>
          <cac:AddressLine>
            <cbc:Line>Av. Park 211</cbc:Line>
          </cac:AddressLine>
          <cac:Country>
            <cbc:IdentificationCode listAgencyName="United Nations Economic Commission for Europe" listID="ISO 3166-1" listName="Country">PE</cbc:IdentificationCode>
          </cac:Country>
        </cac:RegistrationAddress>
      </cac:PartyLegalEntity>
    </cac:Party>
  </cac:AccountingSupplierParty>
  <cac:AccountingCustomerParty>
    <cac:Party>
      <cac:PartyIdentification>
        <cbc:ID schemeAgencyName="PE:SUNAT" schemeID="6" schemeName="Documento de Identidad" schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">20603343710</cbc:ID>
      </cac:PartyIdentification>
      <cac:PartyLegalEntity>
        <cbc:RegistrationName>NEGOCIOS S.A.C.</cbc:RegistrationName>
        <cac:RegistrationAddress>
          <cbc:ID>150101</cbc:ID>
          <cac:AddressLine>
            <cbc:Line>AV. OLIVAR NRO. 425 </cbc:Line>
          </cac:AddressLine>
          <cac:Country>
            <cbc:IdentificationCode listAgencyName="United Nations Economic Commission for Europe" listID="ISO 3166-1" listName="Country">PE</cbc:IdentificationCode>
          </cac:Country>
        </cac:RegistrationAddress>
      </cac:PartyLegalEntity>
    </cac:Party>
  </cac:AccountingCustomerParty>
  <cac:TaxTotal>
    <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>
    <cac:TaxSubtotal>
      <cbc:TaxableAmount currencyID="PEN">100.00</cbc:TaxableAmount>
      <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>
      <cac:TaxCategory>
        <cac:TaxScheme>
          <cbc:ID schemeAgencyName="PE:SUNAT" schemeName="Codigo de tributos" schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo05">1000</cbc:ID>
          <cbc:Name>IGV</cbc:Name>
          <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>
        </cac:TaxScheme>
      </cac:TaxCategory>
    </cac:TaxSubtotal>
  </cac:TaxTotal>
  <cac:LegalMonetaryTotal>
    <cbc:LineExtensionAmount currencyID="PEN">100.00</cbc:LineExtensionAmount>
    <cbc:TaxInclusiveAmount currencyID="PEN">118.00</cbc:TaxInclusiveAmount>
    <cbc:PayableAmount currencyID="PEN">118.00</cbc:PayableAmount>
  </cac:LegalMonetaryTotal>
  <cac:InvoiceLine>
    <cbc:ID>1</cbc:ID>
    <cbc:InvoicedQuantity unitCode="NIU" unitCodeListAgencyName="United Nations Economic Commission for Europe" unitCodeListID="UN/ECE rec 20">2</cbc:InvoicedQuantity>
    <cbc:LineExtensionAmount currencyID="PEN">100.00</cbc:LineExtensionAmount>
    <cac:PricingReference>
      <cac:AlternativeConditionPrice>
        <cbc:PriceAmount currencyID="PEN">59</cbc:PriceAmount>
        <cbc:PriceTypeCode listAgencyName="PE:SUNAT" listName="Tipo de Precio" listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo16">01</cbc:PriceTypeCode>
      </cac:AlternativeConditionPrice>
    </cac:PricingReference>
    <cac:TaxTotal>
      <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>
      <cac:TaxSubtotal>
        <cbc:TaxableAmount currencyID="PEN">100.00</cbc:TaxableAmount>
        <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>
        <cac:TaxCategory>
          <cbc:Percent>18</cbc:Percent>
          <cbc:TaxExemptionReasonCode listAgencyName="PE:SUNAT" listName="Afectacion del IGV" listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo07">10</cbc:TaxExemptionReasonCode>
          <cac:TaxScheme>
            <cbc:ID schemeAgencyName="PE:SUNAT" schemeName="Codigo de tributos" schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo05">1000</cbc:ID>
            <cbc:Name>IGV</cbc:Name>
            <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>
          </cac:TaxScheme>
        </cac:TaxCategory>
      </cac:TaxSubtotal>
    </cac:TaxTotal>
    <cac:Item>
      <cbc:Description>TIJERAS - PRUEBA DE SISTEMAS</cbc:Description>
      <cac:SellersItemIdentification>
        <cbc:ID>P001</cbc:ID>
      </cac:SellersItemIdentification>
      <cac:CommodityClassification>
        <cbc:ItemClassificationCode listAgencyName="GS1 US" listID="UNSPSC" listName="Item Classification">44121618</cbc:ItemClassificationCode>
      </cac:CommodityClassification>
    </cac:Item>
    <cac:Price>
      <cbc:PriceAmount currencyID="PEN">50</cbc:PriceAmount>
    </cac:Price>
  </cac:InvoiceLine>
</Invoice>
```

## Valor Resumen

Es el hash generado a partir del contenido de nuestro XML canónico (`c14n`), utilizaremos el algoritmo `sha1`, y para obtener este resultado ejecutaremos con `openssl`:

```sh
openssl dgst -sha1 -binary 20123456789-01-F001-1_c14.xml  | openssl enc -base64
# output:
# Z5ohtioRKAsJTIote7n2BPYweik=
```

:::tip Representación impresa

Este es el valor que se incluiye en la parte inferior de la representación impresa y esta incluido en el código QR. 
_[Ver SUNAT - Anexo N. 6](http://www.sunat.gob.pe/legislacion/superin/2018/anexoA-113-2018.pdf)_

:::

## Valor de Firma

En este punto, se realizará la firma utilizando el certificado digital; definiremos el siguiente fragmento de XML `<ds:SignedInfo>`, aquí se define los algoritmos utilizados y además incluye el **Valor Resumen** generado en el paso anterior.

> Archivo: _sign-node.xml_

```xml {9}
<ds:SignedInfo xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2">
  <ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"></ds:CanonicalizationMethod>
  <ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"></ds:SignatureMethod>
  <ds:Reference URI="">
    <ds:Transforms>
      <ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"></ds:Transform>
    </ds:Transforms>
    <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod>
    <ds:DigestValue>Z5ohtioRKAsJTIote7n2BPYweik=</ds:DigestValue>
  </ds:Reference>
</ds:SignedInfo>
```

:::note

**Uri=""** en `<ds:Reference>` indica que se firmará todo el comprobante y no un nodo, y  en `<DigestMethod Algorithm="...">` ubicamos el algoritmo utilizado (`sha1`) para generar el valor resumen.

:::

Ahora utilizando el algoritmo `sha1` que se indica en `<SignatureMethod>`, procedemos a obtener el valor de la firma con `openssl`, codificado en `base64`.

```sh
openssl dgst -sha1 -sign private.key sign-node.xml | openssl enc -base64
# output:
# AsuimaYXwnrBFqftXUCDkh9e8Hkwl9ohB9Nj687rLYRwFzWQWHvg2V6u3YgUZLw6
# CyHo3wcDm2MIF2V923cjIeniGBIBeer1YnLA8nX1prRPODM+DfFmwZ1rR12jVqcH
# tydjB1yypi3h/fj6yBTOBenunFw2B1EEsn/9nuMuC0CMgcD/lxZXGgnWajDXcFaD
# vXJ2U8sXWJVZANyuzhBzZmE086e9F+v+aOEa2UUzD8ldZ6N0+Jwr8VqVkcUVIjst
# LP+Ond+OkyPdSxx2Hp4oNlwp2clf0fmC4NtQOrlXEEYcr3NPi5szfxZY//E+XITw
# Mo9NSFs/+bHaOR2EjPZrkg==
```

Ahora necesitamos incluir este resultado en el xml original, además incluiremos el certificado (`certificate.cer`), para que terceros pueden verificar la integridad del comprobante electrónico.

> Archivo: _20123456789-01-F001-1.xml_

```xml {18, 21}
<?xml version="1.0" encoding="utf-8"?>
<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2">
  <ext:UBLExtensions>
    <ext:UBLExtension>
      <ext:ExtensionContent>
      <ds:Signature Id="FePrimerSign">
<ds:SignedInfo>
  <ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"></ds:CanonicalizationMethod>
  <ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"></ds:SignatureMethod>
  <ds:Reference URI="">
    <ds:Transforms>
      <ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"></ds:Transform>
    </ds:Transforms>
    <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod>
    <ds:DigestValue>Z5ohtioRKAsJTIote7n2BPYweik=</ds:DigestValue>
  </ds:Reference>
</ds:SignedInfo>
<ds:SignatureValue>AsuimaYXwnrBFqftXUCDkh9e8Hkwl9ohB9Nj687rLYRwFzWQWHvg2V6u3YgUZLw6 CyHo3wcDm2MIF2V923cjIeniGBIBeer1YnLA8nX1prRPODM+DfFmwZ1rR12jVqcH tydjB1yypi3h/fj6yBTOBenunFw2B1EEsn/9nuMuC0CMgcD/lxZXGgnWajDXcFaD vXJ2U8sXWJVZANyuzhBzZmE086e9F+v+aOEa2UUzD8ldZ6N0+Jwr8VqVkcUVIjst LP+Ond+OkyPdSxx2Hp4oNlwp2clf0fmC4NtQOrlXEEYcr3NPi5szfxZY//E+XITw Mo9NSFs/+bHaOR2EjPZrkg==</ds:SignatureValue>
<ds:KeyInfo>
  <ds:X509Data>
    <ds:X509Certificate>MIID6zCCAtOgAwIBAgIUJB9kdlrtEuCWZW/hB+k6bt/FL7AwDQYJKoZIhvcNAQELBQAwgYQxCzAJBgNVBAYTAlBFMQ0wCwYDVQQIDARMSU1BMQ0wCwYDVQQHDARMSU1BMRgwFgYDVQQKDA9JTU0gQ09SUE9SQVRJT04xCzAJBgNVBAsMAklUMQwwCgYDVQQDDANJTU0xIjAgBgkqhkiG9w0BCQEWE2dpYW5zYWxleEBnbWFpbC5jb20wHhcNMjAwNzE5MjIwNDM2WhcNMzAwNTI4MjIwNDM2WjCBhDELMAkGA1UEBhMCUEUxDTALBgNVBAgMBExJTUExDTALBgNVBAcMBExJTUExGDAWBgNVBAoMD0lNTSBDT1JQT1JBVElPTjELMAkGA1UECwwCSVQxDDAKBgNVBAMMA0lNTTEiMCAGCSqGSIb3DQEJARYTZ2lhbnNhbGV4QGdtYWlsLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMjdt0KR5Bb/nIH1dGMKBkYlSHeScl5Go+KD4LEKDwi4hFcKvOI7XbNk1QoFmcKIPJuZvpBpqaadNRKidqAPxbrzMF+yxXI7QwlsVgweW+L64bXCtX4AlnRaCCIx0SrXYUrktVWWlQpaJGvF7n3Mbge+8P9jkyQ7XlAuVVRN2wk40G1UPWMYRVaVjas4JPh7eTft1B6R1d1njM5/dD3UJ0qSfgjw5b8FJae6Up5eEDAfcjkJihqVBtQHXI8yEHMRqx22OF8VsT+AsrylYGDpDesCz9WrF0cWpg3XNT1YUV5YfwqCNBK4vN++5qgA9Q+MYmE+KdZ0mFmMZxlm6NOeQfUCAwEAAaNTMFEwHQYDVR0OBBYEFLEP+8lmc8esD3bMYoSivwthb6gHMB8GA1UdIwQYMBaAFLEP+8lmc8esD3bMYoSivwthb6gHMA8GA1UdEwEB/wQFMAMBAf8wDQYJKoZIhvcNAQELBQADggEBACsrChqr7MpgEN0I+IqmgG4Kd4M5BBiz7jabnXMwcQfeduLL1RV7JkbI4EWF+SSpjpdojM35bxb8lyA43GpiFIaEAWa2frUJi/hXxvTn5eojwi6FU0zs7mHBHUSU+aOjBp/6TTnGR8LEemSJ1o7shaxHTaquNOHol/JV0QFTCn1hMPo44jpNwiDOngKDAc9TvQ3YUIURGrrE3j35c5KNGr4wDjjcjFky4OBhFRALU+9ff/Gergv03xyUDnfMtzYNomM15xO0jYou8FeQd7vzyh56ekJpI+EkX3YM/zABa/5NwXSpNK79gaWxS1SSuXrCZU4pqnVVy96V1zq5t1umbvA=</ds:X509Certificate>
  </ds:X509Data>
</ds:KeyInfo>
</ds:Signature></ext:ExtensionContent>
    </ext:UBLExtension>
  </ext:UBLExtensions>
  <cbc:UBLVersionID>2.1</cbc:UBLVersionID>
  <cbc:CustomizationID>2.0</cbc:CustomizationID>
  <cbc:ID>F001-1</cbc:ID>
  <cbc:IssueDate>2020-07-21</cbc:IssueDate>
  <cbc:InvoiceTypeCode
        listID="0101"
        listAgencyName="PE:SUNAT"
        listName="Tipo de Documento"
        listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo01">01</cbc:InvoiceTypeCode>
  <cbc:Note languageLocaleID="1000"><![CDATA[CIENTO DIECIOCHO CON 00 /100 SOLES]]></cbc:Note>
  <cbc:DocumentCurrencyCode
        listID="ISO 4217 Alpha"
        listName="Currency"
        listAgencyName="United Nations Economic Commission for Europe">PEN</cbc:DocumentCurrencyCode>
  <cac:Signature>
    <cbc:ID>20123456789</cbc:ID>
    <cac:SignatoryParty>
      <cac:PartyIdentification>
        <cbc:ID>20123456789</cbc:ID>
      </cac:PartyIdentification>
      <cac:PartyName>
        <cbc:Name><![CDATA[MI EMPRESA S.A.C]]></cbc:Name>
      </cac:PartyName>
    </cac:SignatoryParty>
    <cac:DigitalSignatureAttachment>
      <cac:ExternalReference>
        <cbc:URI>#EMPRESA-SIGN</cbc:URI>
      </cac:ExternalReference>
    </cac:DigitalSignatureAttachment>
  </cac:Signature>
  <cac:AccountingSupplierParty>
    <cac:Party>
      <cac:PartyIdentification>
        <cbc:ID
            schemeID="6"
            schemeName="Documento de Identidad"
            schemeAgencyName="PE:SUNAT"
            schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">20123456789</cbc:ID>
      </cac:PartyIdentification>
      <cac:PartyName>
        <cbc:Name><![CDATA[MI EMPRESA]]></cbc:Name>
      </cac:PartyName>
      <cac:PartyLegalEntity>
        <cbc:RegistrationName><![CDATA[MI EMPRESA S.A.C]]></cbc:RegistrationName>
        <cac:RegistrationAddress>
          <cbc:ID schemeName="Ubigeos"
                  schemeAgencyName="PE:INEI">150101</cbc:ID>
          <cbc:AddressTypeCode>0000</cbc:AddressTypeCode>
          <cbc:CitySubdivisionName>CASUARINAS</cbc:CitySubdivisionName>
          <cbc:CityName>LIMA</cbc:CityName>
          <cbc:CountrySubentity>LIMA</cbc:CountrySubentity>
          <cbc:District>LIMA</cbc:District>
          <cac:AddressLine>
            <cbc:Line><![CDATA[Av. Park 211]]></cbc:Line>
          </cac:AddressLine>
          <cac:Country>
            <cbc:IdentificationCode
                listID="ISO 3166-1"
                listName="Country"
                listAgencyName="United Nations Economic Commission for Europe">PE</cbc:IdentificationCode>
          </cac:Country>
        </cac:RegistrationAddress>
      </cac:PartyLegalEntity>
    </cac:Party>
  </cac:AccountingSupplierParty>
  <cac:AccountingCustomerParty>
    <cac:Party>
      <cac:PartyIdentification>
        <cbc:ID
            schemeID="6"
            schemeName="Documento de Identidad"
            schemeAgencyName="PE:SUNAT"
            schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">20603343710</cbc:ID>
      </cac:PartyIdentification>
      <cac:PartyLegalEntity>
        <cbc:RegistrationName><![CDATA[NEGOCIOS S.A.C.]]></cbc:RegistrationName>
        <cac:RegistrationAddress>
          <cbc:ID>150101</cbc:ID>
          <cac:AddressLine>
            <cbc:Line><![CDATA[AV. OLIVAR NRO. 425 ]]></cbc:Line>
          </cac:AddressLine>
          <cac:Country>
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
    <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>
    <cac:TaxSubtotal>
      <cbc:TaxableAmount currencyID="PEN">100.00</cbc:TaxableAmount>
      <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>
      <cac:TaxCategory>
        <cac:TaxScheme>
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
    <cbc:LineExtensionAmount currencyID="PEN">100.00</cbc:LineExtensionAmount>
    <cbc:TaxInclusiveAmount currencyID="PEN">118.00</cbc:TaxInclusiveAmount>
    <cbc:PayableAmount currencyID="PEN">118.00</cbc:PayableAmount>
  </cac:LegalMonetaryTotal>
  <cac:InvoiceLine>
    <cbc:ID>1</cbc:ID>
    <cbc:InvoicedQuantity
        unitCode="NIU"
        unitCodeListID="UN/ECE rec 20"
        unitCodeListAgencyName="United Nations Economic Commission for Europe">2</cbc:InvoicedQuantity>
    <cbc:LineExtensionAmount currencyID="PEN">100.00</cbc:LineExtensionAmount>
    <cac:PricingReference>
      <cac:AlternativeConditionPrice>
        <cbc:PriceAmount currencyID="PEN">59</cbc:PriceAmount>
        <cbc:PriceTypeCode
            listName="Tipo de Precio"
            listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo16"
            listAgencyName="PE:SUNAT">01</cbc:PriceTypeCode>
      </cac:AlternativeConditionPrice>
    </cac:PricingReference>
    <cac:TaxTotal>
      <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>
      <cac:TaxSubtotal>
        <cbc:TaxableAmount currencyID="PEN">100.00</cbc:TaxableAmount>
        <cbc:TaxAmount currencyID="PEN">18.00</cbc:TaxAmount>
        <cac:TaxCategory>
          <cbc:Percent>18</cbc:Percent>
          <cbc:TaxExemptionReasonCode
                listName="Afectacion del IGV"
                listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo07"
                listAgencyName="PE:SUNAT">10</cbc:TaxExemptionReasonCode>
          <cac:TaxScheme>
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
      <cbc:Description><![CDATA[TIJERAS - PRUEBA DE SISTEMAS]]></cbc:Description>
      <cac:SellersItemIdentification>
        <cbc:ID>P001</cbc:ID>
      </cac:SellersItemIdentification>
      <cac:CommodityClassification>
        <cbc:ItemClassificationCode
          listID="UNSPSC"
          listAgencyName="GS1 US"
          listName="Item Classification">44121618</cbc:ItemClassificationCode>
      </cac:CommodityClassification>
    </cac:Item>
    <cac:Price>
      <cbc:PriceAmount currencyID="PEN">50</cbc:PriceAmount>
    </cac:Price>
  </cac:InvoiceLine>
</Invoice>
```

## Verificación

Podemos verificar la firma, y con ello saber si un comprobante ha sido alterado, utilizando `xmlsec`, el comando seria el siguiente:

```sh
xmlsec verify 20123456789-01-F001-1.xml
```

## Comentarios

Esto puede ser un proceso complicado, para ello generalmente ya existen las librerias en cada lenguaje de programación, que ya hacen todo este proceso por defecto, y sin mayor intervención de nuestro lado.