
# Activitat 1: Desenvolupament col·laboratiu

## Mecanismes i Procediments
Per a garantir un desenvolupament col·laboratiu efectiu, Joan i Miquel haurien d'utilitzar un sistema de control de versions, com ara Subversion (SVN). Això els permetrà treballar de manera simultània al mateix projecte sense sobreescriure els canvis de l'altre.

### Mecanismes utilitzats:
1. **Repositori centralitzat**:
   - Subversion utilitza un repositori centralitzat on s'emmagatzema tot el codi font i les seves revisions.

2. **Branques i versions**:
   - Joan i Miquel poden crear branques per a treballar en funcionalitats separades i fusionar-les al repositori principal quan estiguin llestes.

3. **Control de conflictes**:
   - SVN detecta automàticament conflictes quan es treballa al mateix arxiu i requereix que es resolguin abans de fer una fusió.

### Procediment diari:
1. **Actualitzar el repositori local**:
   - Abans de començar a treballar, executar: `svn update`
   - Això assegura que treballen amb la versió més recent del codi.

2. **Treballar en el codi**:
   - Desenvolupar la funcionalitat assignada localment.

3. **Afegir nous fitxers (si cal)**:
   - Si es creen nous fitxers, afegir-los al control de versions: `svn add <fitxer>`

4. **Validar canvis localment**:
   - Comprovar que els canvis són correctes abans de pujar-los al repositori.

5. **Fer un commit dels canvis**:
   - Enviar els canvis al repositori central amb: `svn commit -m "Descripció dels canvis"`

6. **Gestionar conflictes**:
   - Si hi ha conflictes durant el commit, resoldre’ls i tornar a pujar els canvis.

---

Aquest procediment garanteix que Joan i Miquel poden treballar amb eficàcia i evitar problemes de sincronització.
