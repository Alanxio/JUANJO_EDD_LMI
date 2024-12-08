# Actividades - Creación y Configuración con Maven

## Actividad 1: Creación del Proyecto Maven

1. Usa el comando para iniciar un proyecto Maven interactivo:
    ```bash
    mvn archetype:generate
    ```
2. Selecciona la plantilla `maven-archetype-quickstart` e introduce:
   - **groupId**: `com.camarena.grau.alan`
   - **artifactId**: `Calculadora`
   - **package**: `com.camarena.grau.alan`

## Actividad 2: Edición del Archivo `pom.xml`

- Agrega configuraciones en el archivo `pom.xml`:
    ```xml
    <properties>
      <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
      <maven.compiler.release>17</maven.compiler.release>
    </properties>
    ```

## Actividad 3: Implementación del Código Java

1. Implementa una clase en `src/main/java/com/camarena/grau/alan/Calculadora.java`.
2. Usa las instrucciones del archivo base para su desarrollo.

![alt text](imgs/Captura%20de%20pantalla%202024-12-04%20173428.png)


## Actividad 4: Compilación y Ejecución

1. Compila el proyecto:
    ```bash
    mvn clean package
    ```
2. Ejecuta el archivo JAR generado:
    ```bash
    java -jar target/Calculadora-1.0-SNAPSHOT.jar
    ```

![alt text](imgs/Captura%20de%20pantalla%202024-12-04%20173515.png)

---
