
## 📘 Glossar – JavaScript & ESM-spezifische Begriffe

### Formular- & g_form-spezifisch (z. B. ServiceNow)

- **onLoad:** Event-Handler, der beim Laden des Formulars automatisch ausgeführt wird.
- **onChange:** Event, das ausgelöst wird, wenn sich der Wert eines Felds ändert.
- **onClick:** Event, das bei einem Klick auf ein Element (z. B. Button) ausgelöst wird.

- **g_form:** Globales Formularobjekt in ServiceNow zum Lesen, Schreiben und Steuern von Feldern.
- **getValue('feld'):** Gibt den aktuellen Wert eines Formularfeldes zurück.
- **setValue('feld', 'wert'):** Setzt den angegebenen Wert in ein Formularfeld.
- **setDisplay('feld', true/false):** Zeigt oder versteckt ein Formularfeld.
- **setMandatory('feld', true/false):** Markiert ein Feld als Pflichtfeld.
- **isVisible('feld'):** Gibt zurück, ob das Feld aktuell sichtbar ist.
- **clearValue('feld'):** Löscht den aktuellen Wert eines Feldes.

---

### JavaScript-Sprachfunktionen

- **function:** Schlüsselwort zur Definition einer Funktion.
- **var / let / const:** Schlüsselwörter zur Deklaration von Variablen.
- **if (Bedingung):** Kontrollstruktur für bedingte Ausführung.
- **return:** Beendet eine Funktion und gibt ggf. einen Wert zurück.
- **split('@'):** Trennt einen String an der Stelle des Zeichens `@` (liefert Array).
- **includes('x'):** Prüft, ob ein String eine Teilzeichenkette enthält.
- **alert('Text'):** Öffnet ein Popup mit dem angegebenen Text.
- **console.log(...):** Gibt eine Nachricht in der Entwicklerkonsole aus.
- **JSON.stringify(obj):** Wandelt ein JavaScript-Objekt in einen JSON-String um.
- **JSON.parse(json):** Wandelt einen JSON-String zurück in ein JavaScript-Objekt.

---

### fetch() und REST-API

- **fetch(URL, options):** Führt eine HTTP-Anfrage (z. B. GET, POST) an eine URL aus.
- **then():** Wird ausgeführt, wenn ein Promise erfolgreich erfüllt wurde.
- **catch():** Wird ausgeführt, wenn ein Fehler in fetch oder then() auftritt.
- **finally():** Wird am Ende der Promise-Kette ausgeführt, unabhängig vom Erfolg.
- **response.ok:** true, wenn HTTP-Status zwischen 200–299 liegt.
- **response.status:** Liefert den HTTP-Statuscode (z. B. 200, 404, 500).
- **response.statusText:** Text zum Statuscode (z. B. "OK", "Not Found").
- **response.json():** Wandelt den Body der Antwort in ein JSON-Objekt.
- **response.text():** Wandelt den Body der Antwort in reinen Text um.
- **response.blob():** Gibt Binärdaten zurück (z. B. Dateien, Bilder).
- **response.headers:** Objekt mit allen HTTP-Headern der Antwort.
- **response.url:** Zeigt die tatsächliche URL der Antwort.

---

### HTTP & API-spezifische Begriffe

- **GET:** Lesezugriff – ruft Daten vom Server ab.
- **POST:** Schreibzugriff – sendet neue Daten an den Server.
- **PUT:** Ersetzt vorhandene Daten vollständig.
- **PATCH:** Ändert vorhandene Daten teilweise.
- **DELETE:** Löscht Daten auf dem Server.
- **Header:** Metadaten, die mit einer Anfrage oder Antwort gesendet werden.
- **Body:** Der Hauptinhalt einer Anfrage (z. B. JSON-Daten).
- **Token:** Authentifizierungszeichen, oft über Header (`Authorization: Bearer ...`) gesendet.
- **CORS:** Cross-Origin Resource Sharing – Regelwerk für Anfragen über Domain-Grenzen hinweg.
