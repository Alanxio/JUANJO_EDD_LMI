
# Activitat 3: Diferències entre RCS i Subversion

## Diferències entre RCS i Subversion

| Aspecte                  | RCS                             | Subversion (SVN)                     |
|--------------------------|---------------------------------|---------------------------------------|
| **Arquitectura**         | Sistema local. Cada fitxer és gestionat independentment. | Sistema centralitzat amb un repositori remot. |
| **Control de versions**  | Únicament per fitxers individuals. | Control de versions per tot el projecte. |
| **Col·laboració**        | Difícil de gestionar.           | Dissenyat per a equips i col·laboració remota. |
| **Historial**            | Historial local.                | Historial centralitzat i accessible per a tot l’equip. |
| **Gestió de branques**   | No té suport per branques.       | Suporta branques i etiquetes fàcilment. |

## Ordres específiques

### RCS:
1. **`co`**: Extreu una còpia del fitxer del repositori per treballar-hi:
   ```bash
   co -l fitxer.txt
   ```
2. **`ci`**: Desa els canvis del fitxer al repositori:
   ```bash
   ci -u fitxer.txt
   ```

### SVN:
1. **`svn co`**: Clona un repositori o una part d’aquest a una màquina local:
   ```bash
   svn co <repositori_url>
   ```
2. **`svn ci`**: Puja els canvis locals al repositori:
   ```bash
   svn ci -m "Missatge del commit"
   ```
3. **`svn st`**: Mostra l’estat dels fitxers (canviats, nous, eliminats).
4. **`svn add`**: Afegeix fitxers nous al control de versions:
   ```bash
   svn add fitxer_nou.txt
   ```
5. **`svn up`**: Actualitza el directori local amb els canvis del repositori remot:
   ```bash
   svn up
   ```

### Comparació de `co` i `ci`:
- **`co` en RCS**: Extreu un fitxer individual i el bloqueja per evitar canvis simultanis.
- **`svn co`**: Clona tot el projecte (o una branca concreta) a la màquina local.
- **`ci` en RCS**: Desa canvis en un fitxer i el desbloqueja.
- **`svn ci`**: Desa tots els canvis d’una còpia local al repositori central.

Les ordres tenen funcions similars però estan adaptades a les diferències entre els dos sistemes.
