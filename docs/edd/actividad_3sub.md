
# Activitat 3: Diferències entre sistemes de control de versions (SCV)

## Comparativa entre RCS i Subversion
| Característica            | RCS                             | Subversion (SVN)                  |
|---------------------------|----------------------------------|------------------------------------|
| **Model**                 | Local                           | Centralitzat                       |
| **Concurrència**          | Accés seqüencial               | Accés simultani                    |
| **Branques i etiquetes**  | No disponibles                 | Disponibles                        |
| **Historial**             | Limitat                        | Complet                            |
| **Ús principal**          | Fitxers individuals            | Projectes col·laboratius           |

## Ordres explicades
### RCS:
- `co`: Fa una còpia del fitxer des de l'historial.
- `ci`: Envia un fitxer modificat al sistema de control de versions.

### Subversion:
- `svn co`: Clona un repositori complet o una part d’aquest.
- `svn ci`: Fa un commit de canvis al repositori central.
- `svn st`: Mostra l’estat dels fitxers locals comparats amb el repositori.
- `svn add`: Afegix nous fitxers o carpetes al control de versions.
- `svn up`: Actualitza els fitxers locals amb l'última versió del repositori.

### Comparativa de co/ci:
- En RCS, `co` i `ci` treballen amb fitxers individuals i requereixen permisos exclusius.
- En SVN, aquestes ordres treballen amb tot el projecte i suporten treball col·laboratiu.
