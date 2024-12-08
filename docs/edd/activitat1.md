
# Activitat 1: Desenvolupament col·laboratiu

## Mecanismes recomanats
Per gestionar el treball col·laboratiu de Joan i Miquel, és recomanable utilitzar un Sistema de Control de Versions (SCV), preferiblement Git, per la seva flexibilitat i eficiència en treball col·laboratiu. Les eines com GitHub, GitLab o Bitbucket poden facilitar la col·laboració.

### Justificació:
1. **Historial de canvis**: Permet revisar l'historial de versions del codi.
2. **Treball en paral·lel**: Gràcies a les branques, cada desenvolupador pot treballar independentment sense interferir amb l'altre.
3. **Gestió de conflictes**: Ajuda a identificar i resoldre conflictes quan es fusionen els canvis.
4. **Col·laboració remota**: Les eines basades en Git permeten treballar en equips distribuïts.

## Procediment de treball
1. **Clonar el repositori:**
   Joan i Miquel haurien de clonar el repositori remot a la seva màquina local:
   ```bash
   git clone <url_del_repositori>
   ```

2. **Treball amb branques:**
   - Cada funcionalitat o tasca s’hauria de desenvolupar en una branca específica:
     ```bash
     git checkout -b <nom_de_la_branxa>
     ```
   - Per exemple, Joan podria treballar a `feature-autenticacio` i Miquel a `feature-carret`.

3. **Commit i sincronització:**
   - Fer commits regulars:
     ```bash
     git add .
     git commit -m "Descripció dels canvis"
     ```
   - Sincronitzar els canvis amb el repositori remot:
     ```bash
     git push origin <nom_de_la_branxa>
     ```

4. **Integració de canvis:**
   - Quan una branca estigui llesta, fer una fusió amb la branca principal:
     ```bash
     git checkout main
     git pull origin main
     git merge <nom_de_la_branxa>
     git push origin main
     ```

5. **Resolució de conflictes:**
   - Si hi ha conflictes, resoldre’ls manualment i tornar a fer commit i push.

Aquest procediment assegura que els dos desenvolupadors puguin treballar de forma independent i col·laborar eficaçment sense perdre informació ni interferir entre si.
