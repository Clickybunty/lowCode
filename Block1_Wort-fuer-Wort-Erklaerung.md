
# 🧠 Wort-für-Wort-Erklärung: `onClickCheckEmailProvider`

## 🔧 Funktion und Aufbau
```javascript
function onClickCheckEmailProvider() {
```
- **function** – Schlüsselwort zum Definieren einer Funktion.
- **onClickCheckEmailProvider** – Funktionsname, wird bei einem Button-Klick ausgeführt.
- **()** – Parameterliste (hier leer).
- **{** – Beginn des Funktionsblocks.

---

## 📥 E-Mail-Wert lesen
```javascript
var email = g_form.getValue('customer_email');
```
- **var** – Deklariert eine Variable.
- **email** – Name der Variable.
- **=** – Zuweisung.
- **g_form** – Objekt zur Formularmanipulation (z. B. in ServiceNow).
- **getValue(...)** – Methode zum Lesen eines Feldwerts.

---

## ✂️ Domain extrahieren
```javascript
var provider = email.split('@')[1];
```
- **split('@')** – Teilt den String an der Stelle des Zeichens `@`.
- **[1]** – Zugriff auf das zweite Element (Index 1).
- **provider** – enthält die Domain (z. B. `gmail.com`).

---

## 🛑 Leere Eingabe verhindern
```javascript
if (!email) {
  alert('Bitte E-Mail eingeben.');
  return;
}
```
- **if (!email)** – Prüft, ob die E-Mail leer ist.
- **alert(...)** – Zeigt ein Popup an.
- **return** – Bricht die Funktion an dieser Stelle ab.

---

## ℹ️ Provider anzeigen
```javascript
alert('Email-Provider: ' + provider);
```
- **+** – Verknüpft Strings.

---

## 🌐 REST-API aufrufen
```javascript
fetch('https://api.example.com/domaininfo/' + provider)
```
- **fetch(...)** – Startet einen API-Request (GET).
- **+ provider** – hängt die Domain an die URL.

---

## 🔁 Antwort verarbeiten
```javascript
.then(response => {
  if (!response.ok) {
    throw new Error('Provider nicht gefunden.');
  }
  return response.json();
})
```
- **then(...)** – wird bei Erfolg ausgeführt.
- **response** – Antwortobjekt der API.
- **response.ok** – true bei HTTP-Status 200–299.
- **throw new Error(...)** – erzeugt einen Fehler.
- **return response.json()** – wandelt die Antwort in JSON um (bricht nicht ab, sondern übergibt die Daten an den nächsten `.then()`).

---

## 📦 JSON weiterverarbeiten
```javascript
.then(data => {
  var firma = data.companyName;
  alert('Name der Firma: ' + firma);
})
```
- **data** – enthält das geparste JSON-Objekt.
- **data.companyName** – Zugriff auf ein Datenfeld.
- **alert(...)** – zeigt den Firmennamen an.

---

## 🛡️ Fehlerbehandlung
```javascript
.catch(error => {
  alert('Fehler: ' + error.message);
});
```
- **catch(...)** – fängt Fehler aus fetch/then ab.
- **error.message** – gibt den Fehlertext zurück.

---

## ✅ Unterscheidung `return`
- Das erste `return` (nach `if (!email)`) → bricht die Funktion ab.
- Das zweite `return` (`return response.json()`) → gibt Daten an die nächste `.then()`-Kette zurück, ohne die Hauptfunktion zu beenden.

---

## 📚 fetch: Sub-Methoden & Eigenschaften von `response`

| Eigenschaft / Methode   | Beschreibung                                     |
|--------------------------|--------------------------------------------------|
| `response.ok`            | true bei HTTP-Status 200–299                     |
| `response.status`        | HTTP-Statuscode (z. B. 404, 200, 500)            |
| `response.statusText`    | Textbeschreibung des Status (z. B. "OK", "Not Found") |
| `response.headers`       | Header-Informationen als Objekt                  |
| `response.url`           | Tatsächlich angeforderte URL                     |
| `response.type`          | Typ der Antwort (z. B. "basic", "cors")          |
| `response.json()`        | Antwort als JSON auslesen (Promise)             |
| `response.text()`        | Antwort als reinen Text                         |
| `response.blob()`        | Antwort als Blob (z. B. für Dateien)            |
| `response.formData()`    | Antwort als Formulardaten                       |
| `response.arrayBuffer()` | Antwort als ArrayBuffer (z. B. für Binärdaten)  |

---

> Du kannst diese Liste als Nachschlagewerk für deine Arbeit mit REST-APIs und fetch verwenden.
