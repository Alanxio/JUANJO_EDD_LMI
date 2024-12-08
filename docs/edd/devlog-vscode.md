
# Generació d'un projecte Maven amb Visual Studio Code

## Passos per configurar un projecte Maven amb VSCode

### 1. Instal·lació prèvia
- Assegura't que tens:
  - **Maven** instal·lat al teu sistema.
  - El **Java Extension Pack** instal·lat a VSCode.

### 2. Creació del projecte
1. Obre **Visual Studio Code**.
2. Ves al menú **View > Command Palette**
3. Cerca i selecciona l'opció: `Maven: Generate from Archetype`.
4. A la llista d'arquetips disponibles, tria `maven-archetype-quickstart`.
5. Introdueix els valors següents quan se't sol·liciti:
   - **GroupId:** com.camarena.grau.alan.
   - **ArtifactId:** Calculadora.

![alt text](imgs/Captura%20de%20pantalla%202024-12-05%20200934.png)

### 3. Modificar el codi font
- Navega al directori `src/main/java/com/camarena/grau/alan` al panell **Explorer**.
- Obre el fitxer `Calculadora.java` i edita el codi segons les teves necessitats.

### 4. Compilar i executar
1. Obre el terminal integrat de VSCode (`Ctrl+```) i executa les comandes següents:
   ```bash
   mvn compile
   mvn exec:java -Dexec.mainClass="com.camarena.grau.alan.Calculadora"
   ```


