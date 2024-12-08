
# Activitat 2: Control de versions i model iteratiu

## Organització del repositori Subversion
Per treballar en un projecte seguint un model iteratiu i incremental amb Subversion (SVN), és recomanable utilitzar l'estructura estàndard de carpetes: `trunk`, `branches` i `tags`.

### Estructura proposada:
```
/projecte
   /trunk
   /branches
   /tags
```

### Justificació:
1. **`trunk`**: Conté la versió principal del codi, que es manté estable i actualitzada amb els canvis acceptats.
2. **`branches`**: Utilitzat per a treballar en funcionalitats específiques o correccions, sense afectar el codi principal.
3. **`tags`**: Guarda instantànies del projecte en punts específics (versions finals o lliuraments importants).

### Procediment:
1. **Inici del projecte:**
   - Crear la carpeta inicial de l’estructura:
     ```bash
     svn mkdir <repositori_url>/trunk
     svn mkdir <repositori_url>/branches
     svn mkdir <repositori_url>/tags
     svn commit -m "Configuració inicial del repositori"
     ```

2. **Treball iteratiu:**
   - Cada iteració es desenvolupa principalment al `trunk`.
   - Per funcionalitats grans o experimentals, es creen branques:
     ```bash
     svn copy <repositori_url>/trunk <repositori_url>/branches/<nom_branxa> -m "Creació de branca per funcionalitat X"
     ```

3. **Finalització de cada iteració:**
   - Al final de cada fase, es crea un tag de la versió estable:
     ```bash
     svn copy <repositori_url>/trunk <repositori_url>/tags/vX.Y -m "Versió X.Y"
     ```

4. **Manteniment i estabilització:**
   - Els canvis al `trunk` es validen i s’integren a partir de les branques quan estiguin llestes:
     ```bash
     svn merge <repositori_url>/branches/<nom_branxa> <repositori_local>/trunk
     svn commit -m "Integració de la branca <nom_branxa> al trunk"
     ```

Aquest enfocament garanteix un desenvolupament ordenat i un seguiment clar de les diferents iteracions i versions del projecte.
