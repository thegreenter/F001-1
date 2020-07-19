---
id: requirements
title: Requerimientos
sidebar_label: Requerimientos
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Es momento de empezar con los aspectos técnicos, para ello necesitamos cumplir algunos requisitos.

Contar con:
- Un certificado digital
- Clave SOL de un usuario secundario

:::note Nota

En entorno de desarrollo, podremos utilizar cualquier certificado de prueba, no necesitamos adquirir uno de momento, tambien contamos con una clave SOL de prueba:
- RUC: `20000000001` (o cualquier ruc)
- Usuario: `MODDATOS`
- Clave: `moddatos`

:::

## Certificado digital

Podemos crear un certificado digital de prueba utilizando herramientas como `openssl`, o también podemos descargar <a href={useBaseUrl('files/certificates.zip')}>este certificado</a> previamente generado.

Sigues estos pasos para crear tu certificado digital (solo para pruebas).

- Instalar `openssl`, puedes encontrarlo [aquí](https://www.openssl.org/source/).
- Generar la clave privada: `openssl genrsa 2048 > private.key`
- Generar el certificado autofirmado: `openssl req -x509 -days 3600 -new -key private.key -out public.cer`
- Si lo nesecitas en formato `PFX`, puedes hacerlo con: `openssl pkcs12 -export -in public.cer -inkey private.key -out cert.pfx -passout pass:12345678`, este certificado tendrá como contraseña: `12345678`.

Finalmente deberias contar con estos archivos.
```
/
|- private.key
|- public.cer
|- cert.pfx
```

:::tip

El archivo con extension `.cer`, es el certificado que se necesitará subir al portal de SUNAT, para luego poder enviar comprobantes reales a producción.

:::