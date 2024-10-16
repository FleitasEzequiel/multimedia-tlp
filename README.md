# PRÁCTICA DE SUBIDA DE ARCHIVOS MULTIMEDIA

Proyecto realizado en el área de Taller de Lenguaje de Programación de la Tecnicatura de Desarrollo de Software MultiPlataforma del Instituto Politécnico Formosa.

# Instalación

1. Copiar el repositorio
```bash
   > git clone https://github.com/FleitasEzequiel/multimedia-tlp.git

```
2. Instalar las dependencias necesarias para el projecto con NPM Install

```bash
   > cd multimedia-tlp
   > npm i
```

## ¿CÓMO USAR ?

Enviar un objeto JSON que contenga la siguiente estructura :

```json
{
"name" (tipo Texto),
"description" (tipo Texto),
"price" (tipo Número),
"image" (una imágen PNG o JPG)
}
```
A alguna de las siguientes rutas:
<ul>
  
* Para utilizar Multer:
  ```bash
  "http://localhost:4000/products/multer/"
  ```

* Para utilizar Cloudinary:
```bash
 "http://localhost:4000/products/cloudinary/"
```
</ul>
