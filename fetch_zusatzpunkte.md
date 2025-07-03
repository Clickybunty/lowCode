
# ➕ Ergänzende Punkte zur fetch()-Erklärung

Diese Datei ergänzt dein bestehendes Cheat Sheet mit wichtigen Zusatzaspekten zu `fetch()`, Fehlerbehandlung, Authentifizierung und Best Practices.

---

## 🔹 1. E-Mail-Validierung verbessern
Prüfe zusätzlich, ob ein `@`-Zeichen enthalten ist:
```javascript
if (!email.includes('@')) {
  alert('Ungültige E-Mail-Adresse!');
  return;
}
```

---

## 🔹 2. JSON.stringify() bei POST verwenden
Wird benötigt, wenn Daten im Body gesendet werden:
```javascript
body: JSON.stringify({ email: email })
```
- **JSON.stringify()** wandelt ein JS-Objekt in einen JSON-String um.

---

## 🔹 3. Hinweis zu Netzwerkfehlern / Timeout
`fetch()` hat **kein eingebautes Timeout**. Beispiel mit Timeout:
```javascript
const controller = new AbortController();
setTimeout(() => controller.abort(), 5000); // nach 5 Sekunden abbrechen

fetch(url, { signal: controller.signal })
  .catch(error => {
    if (error.name === 'AbortError') {
      alert('Zeitüberschreitung!');
    }
  });
```

---

## 🔹 4. Authentifizierung: API-Token senden
Viele APIs erfordern einen Token im Header:
```javascript
headers: {
  'Authorization': 'Bearer DEIN_TOKEN',
  'Content-Type': 'application/json'
}
```

---

## 🔹 5. Was ist ein Promise?
Ein **Promise** ist ein Platzhalter für ein Ergebnis, das später eintritt.
```javascript
fetch(...).then(...).catch(...)
```
- `.then()` → bei Erfolg
- `.catch()` → bei Fehler

---

## 🔹 6. Kompatibilität: `fetch()` nicht in älteren IE-Versionen
Für ältere Browser muss ein **Polyfill** eingebunden werden, z. B.:
```html
<script src="https://cdn.jsdelivr.net/npm/whatwg-fetch@3.6.2/dist/fetch.umd.min.js"></script>
```

---

## 🔹 7. Alternative zu fetch: Axios
Axios bietet mehr Komfort:
```javascript
axios.get('/api/url')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

---

## 🔹 8. Unterschied: `.catch()` vs `.then(undefined, errorFn)`
```javascript
fetch(...).then(successFn, errorFn);
// ist gleichwertig zu:
fetch(...).then(successFn).catch(errorFn);
```

---

## 🔹 9. Mehrstufige Datenverarbeitung
Du kannst mehrere `.then()`-Blöcke nutzen:
```javascript
fetch(...)
  .then(response => response.json())
  .then(data => console.log(data))
  .then(() => console.log('Fertig'))
  .catch(error => console.error(error));
```

---

## 🔹 10. Ausgabe im DOM statt `alert()`
Besser als `alert()`:
```javascript
document.getElementById('ausgabe').textContent = 'Firma: ' + firma;
```
HTML dazu:
```html
<div id="ausgabe"></div>
```

---

> Diese Ergänzungen machen dein Verständnis von `fetch()` robuster und praxistauglich.
