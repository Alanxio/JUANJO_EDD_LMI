
# Creación de un projecte Ant para una Calculadora en Java

Este documento describe los pasos para configurar un projecte **Ant** con los targets `clean`, `compile` y `run` utilizando una calculadora Java.

---

## 1. Preparar el entorno

### Requisitos previos
1. Tener instalado Java Development Kit (JDK).
2. Instalar Apache Ant y configurarlo en las variables de entorno.

### Estructura del proyecto
Organiza los archivos del proyecto de la siguiente manera:

```
proves/
├── src/com/alan/edd/Calculadora
│   └── Calculadora.java
├── build/
├── dist/
└── build.xml
```
---

## 2. Código fuente de la calculadora

Crea el archivo `Calculadora.java` dentro de la carpeta `src/com/alan/edd/Calculadora`:

---

## 3. Crear el archivo build.xml

En la raíz del proyecto (`proves/`), crea el archivo `build.xml` con el siguiente contenido:

```xml
<project name="CalculadoraAntAlan">
    <target name="clean">
        <delete dir="build" />
    </target>

    <target name="compile" depends="clean">
        <mkdir dir="build" />
        <javac includeantruntime="false" 
        srcdir="src/com/alan/edd/Calculadora" destdir="build" />
    </target>

    <target name="run" depends="compile">
        <property name="arg0" value=""/>
        <java classpath="build" classname="com.alan.edd.Calculadora.Calculadora">
            <arg value="${arg0}"/>
        </java>
    </target>
</project>
```

---

## 4. Ejecutar los targets de Ant

Desde la línea de comandos, navega hasta la carpeta raíz del proyecto (`proves/`) y ejecuta los siguientes comandos:

### Limpiar
Elimina los archivos compilados y directorios generados:
```
ant clean
```
![alt text](<imgs/Captura de pantalla 2024-12-08 111230.png>)

### Compilar
Compila el código fuente y genera los archivos `.class`:
```
ant compile
```
![alt text](<imgs/Captura de pantalla 2024-12-08 112345.png>)

### Ejecutar
Compila y ejecuta la calculadora:
```
ant run
```

![alt text](<imgs/Captura de pantalla 2024-12-08 111313.png>)

---

¡Y eso es todo! Ahora tienes un projecte Ant funcional para tu calculadora Java.
