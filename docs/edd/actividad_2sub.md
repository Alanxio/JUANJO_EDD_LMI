
# Activitat 2: Control de versions i model iteratiu

## Proposta d'estructura del repositori SVN
En un projecte amb un model de desenvolupament iteratiu i incremental, és important tenir una estructura clara al repositori per a gestionar les diferents fases. Proposem utilitzar la següent estructura:

### Estructura del repositori:
```
/projecte
    /trunk       # Rama principal amb el codi estable
    /branches    # Branques per a desenvolupament paral·lel
        /fase1   # Branca per a la primera iteració
        /fase2   # Branca per a la segona iteració
        ...
    /tags        # Etiquetes per a versions específiques
        /v1.0    # Versió final de la fase 1
        /v2.0    # Versió final de la fase 2
        ...
```

### Procediment de treball:
1. **Desenvolupament inicial**:
   - El codi inicial es desenvolupa a la branca corresponent a la fase actual, per exemple: `/branches/fase1`.

2. **Fusionar a trunk**:
   - Una vegada completada la fase, els canvis es fusionen a `/trunk`.

3. **Crear etiquetes**:
   - Es crea una etiqueta a `/tags` per a guardar una versió congelada del codi, per exemple: `v1.0`.

4. **Repetir per cada fase**:
   - Es crea una nova branca per a la següent fase i es continua el desenvolupament iteratiu.

Aquest enfocament garanteix una gestió estructurada i permet treballar en múltiples funcionalitats simultàniament.
