# Activitat - Documentació de passos Github

## Pas 1: Iniciar el repositori
1. **Acció**: Crear un repositori nou a GitHub.
2. **Com fer-ho**:
   - Accedeix a GitHub.
   - Fes clic a "New Repository" i completa les dades.
3. **Resultat Esperat**: El repositori hauria de haverse creat correctament.

## Pas 2: Clonar el repositori localment
1. **Acció**: Clonar el repositori que acabem de crear al nostre ordinador.
2. **Com fer-ho**:
   - Obre la terminal.
   - Executa el comando:
     ```bash
     git clone https://github.com/usuari/repositori.git
     ```
3. **Resultat Esperat**: El repositori hauria de ser clònicament baixat al teu directori local.

## Pas 3: Realitzar canvis al repositori
1. **Acció**: Afegir un fitxer nou o editar un fitxer existent.
2. **Com fer-ho**:
   - Afegeix un nou fitxer o edita un existent.
   - Guarda els canvis.
3. **Resultat Esperat**: Els canvis s'han de realitzar correctament al repositori local.

## Pas 4: Commit i Push dels canvis
1. **Acció**: Realitzar un commit dels canvis i pujar-los al repositori remot.
2. **Com fer-ho**:
   - Executa les següents comandes:
     ```bash
     git add .
     git commit -m "Missatge del commit"
     git push origin main
     ```
3. **Resultat Esperat**: Els canvis s'han de reflectir al repositori remot a GitHub.

## Resultat de Git log i Git log --oneline

commit 9ed9bbe2f491758c21f6f7cb7f13ea84e959ad96 (HEAD -> master)
Author: alan <alan@huevo.com>
Date:   Tue Nov 12 09:09:53 2024 +0100

    Nuevos temas color

commit 6adc5f1e8148c525bcd20a1d31c3cb452c832822
Author: alan <alan@huevo.com>
Date:   Tue Nov 12 09:07:28 2024 +0100

    Nuevos temas

commit 8da70f56cab12feb06d429ebd9ff69ab1d2a0707 (origin/master)
Author: alan <alan@huevo.com>
Date:   Mon Nov 11 08:28:30 2024 +0100

    Altualización site

commit 05262d2d4b503ed7feb165efb1e2949f795663eb
Author: alan <alan@huevo.com>
Date:   Tue Nov 5 10:10:21 2024 +0100

    Primera versió del lloc de documentació
:...skipping...
commit 9ed9bbe2f491758c21f6f7cb7f13ea84e959ad96 (HEAD -> master)
Author: alan <alan@huevo.com>
Date:   Tue Nov 12 09:09:53 2024 +0100

    Nuevos temas color

commit 6adc5f1e8148c525bcd20a1d31c3cb452c832822
Author: alan <alan@huevo.com>
Date:   Tue Nov 12 09:07:28 2024 +0100

    Nuevos temas

commit 8da70f56cab12feb06d429ebd9ff69ab1d2a0707 (origin/master)
Author: alan <alan@huevo.com>
Date:   Mon Nov 11 08:28:30 2024 +0100

    Altualización site

commit 05262d2d4b503ed7feb165efb1e2949f795663eb
Author: alan <alan@huevo.com>
Date:   Tue Nov 5 10:10:21 2024 +0100

    Primera versió del lloc de documentació

![alt text](imgs/Captura%20de%20pantalla%202024-12-08%20114345.png)



