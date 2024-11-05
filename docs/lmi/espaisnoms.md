
## **Identificació dels espais de noms en documents XML**

### **Què és un espai de noms (namespace)?**
Un espai de noms en XML serveix per evitar conflictes d'etiquetes quan es fan servir diferents vocabularis o conjunts d'elements en un mateix document. S'identifiquen mitjançant URI (Uniform Resource Identifier) i es declaren habitualment en l'etiqueta arrel del document.

### **Com es defineixen els espais de noms?**
Els espais de noms es declaren amb l'atribut `xmlns` seguit d'un prefix opcional. Aquest atribut indica que tots els elements i atributs sota el document utilitzaran un espai de noms específic.

```xml
<elemento xmlns="http://exemple.com/namespace">
    <!-- El contingut utilitza l'espai de noms especificat -->
</elemento>
```

Els espais de noms amb prefix es defineixen així:

```xml
<elemento xmlns:prefix="http://exemple.com/namespace">
    <prefix:subelemento>Contingut</prefix:subelemento>
</elemento>
```

---

## **Espais de noms a `AndroidManifest.xml`**

En Android, l'`AndroidManifest.xml` defineix la informació bàsica d'una aplicació, i utilitza diversos espais de noms per a diferents conjunts d'atributs i elements.

### **Exemple bàsic d'un `AndroidManifest.xml`**

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.exemple.aplicacio">
    
    <application
        android:label="@string/app_name"
        android:icon="@mipmap/ic_launcher">
        
        <activity android:name=".MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
        
    </application>
    
</manifest>
```

### **Espais de noms utilitzats en AndroidManifest.xml**

1. **Espai de noms "android" (`xmlns:android`)**
   - **Declaració**: `xmlns:android="http://schemas.android.com/apk/res/android"`
   - **Funció**: S'utilitza per a tots els atributs relacionats amb Android, com ara `android:label`, `android:icon`, `android:name`, entre d'altres.
   - **Atributs comuns**:
     - `android:label`: Defineix el nom que es mostra per a l'aplicació.
     - `android:icon`: Defineix la icona de l'aplicació.
     - `android:name`: S'utilitza per definir el nom complet d'una activitat, servei, etc.

2. **Espai de noms per a altres biblioteques o frameworks**
   - Quan s'integren biblioteques de tercers o frameworks, es poden definir altres espais de noms per a aquestes extensions. Per exemple, si una aplicació fa servir el suport de la biblioteca `tools`, es podria declarar un espai de noms addicional.
   
   ```xml
   <manifest xmlns:tools="http://schemas.android.com/tools"
       xmlns:android="http://schemas.android.com/apk/res/android"
       package="com.exemple.aplicacio">
   
       <application
           android:label="@string/app_name"
           android:icon="@mipmap/ic_launcher"
           tools:ignore="UnusedAttribute">
           <!-- Configuració addicional -->
       </application>
   
   </manifest>
   ```
   - **Atributs comuns**:
     - `tools:ignore`: S'utilitza per ignorar avisos o errors que mostra el sistema d'eines d'Android.

3. **Espai de noms personalitzat (opcional)**
   - En alguns casos, es poden crear espais de noms personalitzats per a recursos o atributs especials. No és comú a l'`AndroidManifest.xml`, però podria utilitzar-se en altres fitxers XML que defineixen configuracions d'aplicacions.

### **Utilitat dels espais de noms en AndroidManifest.xml**

- **Distinció entre atributs d'Android i altres atributs**: Per exemple, l'atribut `android:name` dins d'una etiqueta `activity` indica que l'atribut pertany al conjunt d'atributs del sistema Android.
- **Compatibilitat i extensibilitat**: Permet afegir altres espais de noms per a biblioteques de tercers o extensions sense interferir amb els atributs natius d'Android.
- **Clarificació del context**: Els espais de noms asseguren que cada atribut s'interpreti correctament segons el seu context.

---

### **Conclusió**
Els espais de noms són una part essencial per gestionar documents XML en Android. En l'`AndroidManifest.xml`, el més comú és l'espai de noms `xmlns:android`, que s'utilitza per a tots els atributs natius d'Android. També es poden utilitzar altres espais de noms per a biblioteques de tercers o eines, com `xmlns:tools`.



