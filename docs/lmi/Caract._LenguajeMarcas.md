
## **Característiques dels llenguatges de marques**

### **1. HTML (HyperText Markup Language)**
HTML és el llenguatge de marques estàndard per crear pàgines web i aplicacions web.

- **Finalitat**: Descripció de l'estructura de documents web.
- **Etiquetes**: Es basa en etiquetes predefinides (com `<p>`, `<div>`, `<h1>`, `<a>`, etc.) que representen elements del document.
- **Estructura**: Els documents HTML tenen una estructura jeràrquica basada en un arbre de nodes DOM (Document Object Model).
- **Enllaços i multimèdia**: Permet integrar enllaços hipertext, imatges, vídeos, i altres continguts multimèdia dins el document.
- **Estils i scripts**: Permet incrustar o enllaçar CSS (per donar estil) i JavaScript (per donar funcionalitat).
- **Versionat**: La versió més recent és HTML5, que introdueix noves etiquetes semàntiques (com `<article>`, `<section>`, `<header>`, etc.).
- **Extensions**: Pot treballar amb altres tecnologies web com SVG, MathML, o Web Components.

---

### **2. SVG (Scalable Vector Graphics)**
SVG és un llenguatge de marques per descriure gràfics vectorials escalables.

- **Finalitat**: Representació de gràfics vectorials en dos dimensions.
- **Format**: És un format XML, de manera que els gràfics SVG són també documents llegibles per màquina.
- **Estructura**: Es basa en etiquetes com `<circle>`, `<rect>`, `<path>`, `<polygon>`, entre d'altres, que defineixen formes gràfiques.
- **Escalabilitat**: Els gràfics són escalables sense pèrdua de qualitat, ja que es basen en vectors i no en píxels.
- **Interactivitat**: Permet incloure scripts (com JavaScript) per fer els gràfics interactius.
- **Estils**: Les formes es poden estilitzar mitjançant atributs de les etiquetes o amb CSS extern.
- **Animació**: Ofereix suports per animacions vectorials mitjançant elements com `<animate>`, `<animateTransform>`, etc.

---

### **3. XML (Extensible Markup Language)**
XML és un llenguatge de marques dissenyat per emmagatzemar i transportar dades de forma estructurada.

- **Finalitat**: Emmagatzematge i transport de dades en un format llegible tant per màquines com per humans.
- **Estructura**: És extensible i flexible, ja que permet definir etiquetes personalitzades.
- **Autocontingut**: Les etiquetes proporcionen informació tant sobre les dades com sobre l'estructura de les mateixes dades.
- **Validació**: Els documents XML poden ser validats mitjançant esquemes com DTD (Document Type Definition) o XSD (XML Schema Definition).
- **Universalitat**: Pot ser utilitzat en una gran varietat d'aplicacions, des de serveis web fins a formats de fitxers com RSS, SOAP, i més.
- **Suport per arbres jeràrquics**: Els documents es construeixen en un format d'arbre que conté elements niats.

---

### **4. XHTML (Extensible HyperText Markup Language)**
XHTML és una combinació d'HTML i XML, que ofereix les funcions d'HTML dins la rigorositat estructural d'XML.

- **Finalitat**: Millorar la interoperabilitat entre navegadors i eines XML.
- **Estructura**: Similar a HTML, però amb normes més estrictes, com la necessitat de tancar totes les etiquetes (`<br />`, `<img />`) i respectar la majúscula/minúscula.
- **Compatibilitat**: Els documents XHTML es poden processar tant com HTML com XML, depenent del context.
- **Estàndards**: Les versions modernes d'HTML poden incloure moltes de les característiques de XHTML.

---

### **5. MathML (Mathematical Markup Language)**
MathML és un llenguatge de marques per descriure notacions matemàtiques i el seu contingut.

- **Finalitat**: Representació de fórmules matemàtiques en documents web.
- **Etiquetes**: Conté etiquetes especialitzades com `<math>`, `<mfrac>`, `<msup>`, `<mi>`, etc., per estructurar les expressions matemàtiques.
- **Interoperabilitat**: Es pot integrar amb HTML o XML, permetent que les fórmules siguin visualitzades en pàgines web.
- **Estils**: Com a llenguatge XML, pot ser estilitzat amb CSS.
- **Precisió**: Està dissenyat per transmetre fórmules matemàtiques amb un alt grau de precisió.

---

### **6. YAML (YAML Ain't Markup Language)**
Encara que tècnicament no és un llenguatge de marques, YAML s'utilitza per la configuració de dades estructurades.

- **Finalitat**: Emmagatzemar dades de manera simple, principalment per a configuracions de programari.
- **Sintaxi**: Utilitza indentació en lloc d'etiquetes i és més llegible per humans.
- **Estructura**: Les dades s'organitzen en clau-valor, llistes i diccionaris.
- **Compatibilitat**: Pot ser convertit fàcilment a JSON, XML o altres formats de dades estructurades.
- **Simplicitat**: És més minimalista que XML o JSON i és molt utilitzat per fitxers de configuració com Docker o CI/CD.

---

Aquestes són algunes de les característiques essencials dels llenguatges de marques que es fan servir en diversos àmbits, des del web fins al processament de dades.
