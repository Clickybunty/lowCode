
# 📘 JavaScript `fetch()` – return, response und Methodenübersicht

## ✅ Unterschied zwischen `return` im Funktionsblock und in `.then()`

### 🔹 `return` im Hauptfunktionsblock:
```javascript
if (!email) {
  alert('Bitte E-Mail eingeben.');
  return;
}
```
- Beendet **sofort** die gesamte Funktion `onClickCheckEmailProvider()`.
- Typischer Einsatz: Validierungen oder Abbrüche bei falscher Eingabe.

---

### 🔹 `return` in einem `.then()`-Block:
```javascript
fetch(...).then(response => {
  return response.json();
})
```
- Beendet **nicht** die Hauptfunktion.
- Übergibt stattdessen den Wert (ein Promise mit JSON-Daten) an die nächste `.then()`-Kette.

---

## ✅ Was ist `response` bei `fetch()`?

`response` ist das **Antwortobjekt der REST-API**. Es enthält:
- Statusinformationen
- Header
- Methoden zur Datenverarbeitung

---

## 📚 Eigenschaften von `response`

| Eigenschaft         | Beschreibung                                           |
|---------------------|--------------------------------------------------------|
| `response.ok`       | `true` bei HTTP-Status 200–299                         |
| `response.status`   | Gibt den HTTP-Statuscode zurück (z. B. 404)           |
| `response.statusText` | Gibt Text zum Status (z. B. "OK")                  |
| `response.headers`  | Objekt mit den Antwort-Headern                        |
| `response.url`      | Tatsächlich aufgerufene URL                          |
| `response.type`     | Typ der Antwort (z. B. "cors", "basic", "opaque")     |

---

## 📦 Methoden von `response` zur Datenverarbeitung

| Methode                | Beschreibung                                          |
|------------------------|-------------------------------------------------------|
| `response.json()`      | Wandelt die Antwort in ein JSON-Objekt um             |
| `response.text()`      | Liefert die Antwort als reinen Text                   |
| `response.blob()`      | Für Binärdaten (z. B. Bilder, Dateien)                |
| `response.arrayBuffer()` | Für rohe Binärdaten (Audio, Video, Streams)        |
| `response.formData()`  | Wandelt Antwort in Formulardaten um                  |

---

### ⚠️ Hinweis:
Du kannst **nur eine dieser Methoden pro Response verwenden**. Ein zweiter Zugriff löst einen Fehler aus:

```javascript
const data = await response.json(); // danach kein .text() oder .blob() mehr möglich
```

---

> Dieses Dokument ist dein Nachschlagewerk für `fetch`, `return`, `response` und den richtigen Einsatz in Low-Code-APIs.
