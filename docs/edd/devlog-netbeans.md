
# Creació d'un projecte Maven amb NetBeans

## Passos per configurar un projecte Maven

### 1. Preparació prèvia
Assegura't de tenir instal·lat:
- **NetBeans IDE** (versió 12 o superior recomanada).
- El **JDK** (versió 8 o superior).
- La configuració de Maven integrada al NetBeans (ve de sèrie en versions recents).

### 2. Creació del projecte Maven
1. **Obre NetBeans:**
   - Llança el NetBeans IDE.



2. **Inicia un nou projecte Maven:**
   - Ves a **File > New Project**.
   - A la finestra de diàleg, selecciona:
     - **Categories:** Maven
     - **Projects:** Java Application
   - Fes clic a **Next**.

   ![alt text](<imgs/Captura de pantalla 2024-12-05 201928.png>)

3. **Configura el projecte:**
   - Introdueix els camps següents:
     - **GroupId:** com.grau.camarena.alan
     - **ArtifactId:** calculadora
     - **Version:** (deixa la predeterminada o introdueix-ne una personalitzada, com ara 1.0-SNAPSHOT).
   - Selecciona un directori on guardar el projecte.
   - Fes clic a **Finish**.

4. **Estructura del projecte:**
   - NetBeans genera automàticament l’estructura típica d’un projecte Maven, incloent-hi els directoris `src/main/java` i `src/test/java`.

### 3. Modificació del codi font
1. Navega al directori `src/main/java/com/camarena/grau/alan`.
2. Crea o obre la classe `Calculadora.java` i introdueix el següent codi:

   ```java
   package com.grau.camarena.alan;

   public class Calculadora {

       public int suma(int a, int b) {
           return a + b;
       }

       public int resta(int a, int b) {
           return a - b;
       }

       public int multiplicacio(int a, int b) {
           return a * b;
       }

       public double divisio(int a, int b) {
           if (b == 0) {
               throw new ArithmeticException("Divisió per zero no permesa.");
           }
           return (double) a / b;
       }
   }
   ```

### 4. Compilació i execució
1. Fes clic amb el botó dret al projecte al panell **Projects**.
2. Selecciona **Clean and Build** per compilar el projecte.
3. Per executar-lo:
   - Defineix una classe principal (amb un `main`) al directori corresponent si no existeix.
   - Executa el projecte des de NetBeans seleccionant **Run Project** (botó verd a la barra superior).

![alt text](<imgs/Captura de pantalla 2024-12-05 203020.png>)

