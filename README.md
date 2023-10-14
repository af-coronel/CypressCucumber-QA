# Proyecto FCQ - README

Este es el README para el proyecto "Facultad de Ciencias Químicas (FCQ)".

## Índice

1. [Introducción](#introducción)
2. [Requisitos](#requisitos)
3. [Configuración](#configuración)
4. [Ejecución de Pruebas](#ejecución-de-pruebas)
   - [Escenario 1: Funcionamiento del botón scrollUp](#escenario-1-funcionamiento-del-botón-scrollup)
   - [Escenario 2: Verificar Textos del Footer](#escenario-2-verificar-textos-del-footer)
   - [Escenario 3: Verificar el Color de Fondo del Logo de la FCQ](#escenario-3-verificar-el-color-de-fondo-del-logo-de-la-fcq)
5. [Reportes](#reportes)
   - [Generación de Reportes](#generación-de-reportes)
   - [Visualización de Reportes](#visualización-de-reportes)
6. [Contribución](#contribución)
7. [Agradecimientos](#agradecimientos)



## 1. Introducción

Este proyecto se centra en la automatización de pruebas para la página web de la Facultad de Ciencias Químicas (FCQ). A continuación, se detallan los escenarios de prueba que se han implementado.

## 2. Requisitos

Asegúrate de tener instaladas las siguientes dependencias antes de comenzar:

- Node.js
- Cypress
- Cucumber
- ...

## 3. Configuración

Siga estos pasos para configurar el proyecto:

1. Clona este repositorio en tu máquina local.

2. Abre una terminal y navega hasta la carpeta del proyecto.

3. Ejecuta `npm install` para instalar las dependencias necesarias.

4. Asegúrate de que todas las dependencias estén correctamente instaladas y configuradas.

## 4. Ejecución de Pruebas

### 4.1. Escenario 1: Funcionamiento del botón scrollUp

- **Given** que un usuario está en la página de "FCQ"
- **When** hace scroll hacia abajo hasta el footer
- **Then** se hace visible el botón scrollUp
- **When** el usuario hace clic en el botón
- **Then** vuelve al encabezado de la página

### 4.2. Escenario 2: Verificar Textos del Footer

- **Given** que un usuario está en la página de "FCQ"
- **When** hace scroll hacia abajo hasta el footer
- **Then** el usuario visualiza el texto del footer

### 4.3. Escenario 3: Verificar el Color de Fondo del Logo de la FCQ

- **Given** que un usuario está en la página de "FCQ"
- **Then** el usuario debería ver la imagen del logo de la FCQ
- **And** el color de fondo del logo debería ser 'rgba(0, 0, 0, 0)'

### 4.4. Ejecutar Todos los Escenarios

Si deseas ejecutar todos los escenarios de prueba juntos, utiliza el siguiente comando:

```bash
- npm run cypress:run:fcq
```

## 5. Reportes

### 5.1. Generación de Reportes

Para generar reportes de las pruebas, sigue estos pasos:

1. Abre una terminal y navega hasta la carpeta del proyecto.

2. Ejecuta el siguiente comando para generar un reporte completo de todos los escenarios:

```bash
npm run generate:report
```

## 5.2. Visualización de Reportes

Para ver el informe generado, sigue estos pasos:

1. Abre el archivo HTML dentro de la carpeta reports con tu navegador web preferido.

## 6. Contribución

Agradezco a todos los contribuyentes que deseen participar en el desarrollo y mejora de este proyecto. Si deseas contribuir, sigue estos pasos:

1. Realiza un fork del repositorio en GitHub.

2. Crea una rama (branch) con un nombre descriptivo para tu contribución.

3. Realiza tus cambios y mejoras en la nueva rama.

4. Abre un Pull Request para que pueda revisar tus contribuciones.

5. Trabajaremos juntos para evaluar y fusionar tus cambios.

## 9. Agradecimientos

Agradezco a la profesora Agustina Edme Aliciardi por su dedicación y paciencia, y al equipo de Darwoft por la oportunidad que me dieron para aprender estos contenidos. Me comprometo a continuar repasando todas clases y a mejorar mis habilidades de automatización en el campo del testing QA.  
