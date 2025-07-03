
# 🌐 Übersicht: `fetch()` – HTTP-Methoden und API-Optionen

Die `fetch()`-API ist die moderne Methode, um HTTP-Anfragen in JavaScript zu senden.  
Hier sind die wichtigsten Einstellungen und Methoden im Kontext von `fetch`.

---

## ✅ Basis-Syntax von `fetch()`

```javascript
fetch(url, options)
```

- `url` – Zieladresse der REST-API.
- `options` – (optional) Objekt mit Einstellungen wie `method`, `headers`, `body`, etc.

---

## 📋 Häufige HTTP-Methoden (API-Verben)

| Methode  | Zweck / Beschreibung                                     |
|----------|-----------------------------------------------------------|
| `GET`    | Daten abfragen (Standardmethode bei `fetch`)              |
| `POST`   | Neue Daten an den Server senden (z. B. Formulare)         |
| `PUT`    | Vorhandene Daten **komplett ersetzen**                    |
| `PATCH`  | Vorhandene Daten **teilweise aktualisieren**              |
| `DELETE` | Daten vom Server löschen                                  |
| `HEAD`   | Nur Headerinformationen abrufen (ohne Body)               |
| `OPTIONS`| Prüft, welche Methoden/Optionen vom Server erlaubt sind   |

---

## 🛠️ Wichtige `options`-Felder im `fetch()`-Aufruf

| Feld        | Beschreibung                                                    |
|-------------|------------------------------------------------------------------|
| `method`    | HTTP-Methode wie `GET`, `POST`, etc.                            |
| `headers`   | Objekt mit HTTP-Headern (z. B. Content-Type, Authorization)     |
| `body`      | Inhalt der Anfrage (z. B. JSON-Daten als String)                |
| `mode`      | CORS-Handling (`cors`, `no-cors`, `same-origin`)                |
| `credentials` | Senden von Cookies: `omit`, `same-origin`, `include`         |
| `cache`     | Caching-Strategie: `default`, `no-store`, `reload`, etc.       |
| `redirect`  | Verhalten bei Redirects: `follow`, `error`, `manual`            |
| `referrer`  | Referrer-Header (z. B. `'client'`, `'no-referrer'`)            |
| `integrity` | Subresource Integrity Hash für Sicherheit                      |
| `keepalive` | `true`, um Request nach dem Entladen der Seite zu erlauben     |

---

## 📦 Beispiel: POST mit JSON-Body

```javascript
fetch('https://api.example.com/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Stevan',
    email: 'stevan@example.com'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Fehler:', error));
```

---

> Dieses Cheat Sheet zeigt dir alle gängigen Einstellungen und Methoden der `fetch()`-API, die du in ESM-Systemen brauchst.
