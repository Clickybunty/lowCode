
# 🧠 Low-Code ESM Developer – Cheat Sheet (Kommentiert)

## 1. 🟦 Low-Code JavaScript im ESM-Frontend

### Typische Aufgaben (Kurz erklärt):
- **Felder ein-/ausblenden**: Je nach Auswahl (z. B. Ticket-Typ) können Felder sichtbar oder unsichtbar geschaltet werden.
- **Pflichtfelder setzen**: Bestimmte Felder (z. B. Benutzer-ID) müssen ausgefüllt werden, bevor das Formular gespeichert werden darf.
- **Werte vorbelegen**: Felder können beim Laden des Formulars mit Standardwerten befüllt werden (z. B. "Priorität = hoch").
- **REST-Aufrufe bei Klick**: Beim Klick auf einen Button können APIs aufgerufen werden, um z. B. ein Ticket zu erstellen.

### Beispiel: Feld anzeigen/verstecken
```javascript
// Wenn der Tickettyp "hardware" ist, wird das Feld "hardwareDetails" angezeigt,
// andernfalls wird es ausgeblendet.
if (form.getValue("ticketType") === "hardware") {
    form.setVisible("hardwareDetails", true);
} else {
    form.setVisible("hardwareDetails", false);
}
```

### Beispiel: Pflichtfeld setzen
```javascript
// Das Feld "userId" muss zwingend ausgefüllt werden.
// Andernfalls erscheint eine Validierungsfehlermeldung beim Speichern.
form.setMandatory("userId", true);
```

### Beispiel: Wert vorbelegen
```javascript
// Setzt beim Laden des Formulars automatisch den Wert "hoch" für das Feld "priority".
form.setValue("priority", "hoch");
```

### Event-Trigger (Übersicht)

| Event             | Wann ausgelöst                              |
|-------------------|---------------------------------------------|
| `onLoad()`        | Beim Öffnen des Formulars                   |
| `onChange(field)` | Wenn der Benutzer den Wert eines Feldes ändert |
| `onClick(button)` | Wenn ein Button angeklickt wird             |

---

## 2. 🟧 REST-Verständnis & API-Kommunikation

### Methoden (Grundwissen)

| Methode | Zweck                          |
|---------|--------------------------------|
| GET     | Daten vom Server abfragen      |
| POST    | Neue Daten anlegen             |
| PUT     | Vorhandene Daten komplett ersetzen |
| PATCH   | Teilweise aktualisieren        |
| DELETE  | Daten löschen                  |

### Beispiel: REST-Aufruf via fetch
```javascript
// Erstellt ein neues Ticket via POST-Anfrage an die Klinik-API
fetch("https://api.klinik.de/tickets", {
  method: "POST", // HTTP-Methode
  headers: {
    "Content-Type": "application/json", // Der Body enthält JSON
    "Authorization": "Bearer abc123" // Authentifizierung mit Token
  },
  body: JSON.stringify({ // Umwandlung von JS-Objekt in JSON
    title: "Drucker defekt",
    userId: "u123"
  })
})
.then(response => response.json()) // Antwort wird in ein JS-Objekt umgewandelt
.then(data => {
  console.log("Ticket-ID:", data.id); // Die Rückmeldung der API wird genutzt
});
```

---

## 3. 🟩 PowerShell für Automatisierung

### Grundlagen (Kommentiert):

- `Get-Process`: Listet aktive Prozesse.
- `Get-Service`: Gibt Überblick über laufende Dienste.
- `Send-MailMessage`: Sendet eine E-Mail (z. B. bei Fehlern).
- `Invoke-RestMethod`: Macht HTTP-Requests ähnlich wie `fetch`.
- `Start-Process`: Startet ein Programm (z. B. Notepad, Skripte).

### Beispiel: REST-Call in PowerShell
```powershell
# Erstellt ein JSON-Objekt mit Ticketdaten
$body = @{
  title = "E-Mail geht nicht"
  userId = "u123"
} | ConvertTo-Json

# Sendet eine POST-Anfrage an die Ticket-API der Klinik
Invoke-RestMethod -Uri "https://api.klinik.de/tickets" `
  -Method POST `
  -Body $body `
  -ContentType "application/json"
```

### Beispiel: E-Mail versenden
```powershell
# Sendet eine E-Mail mit Betreff "Alarm" über den SMTP-Server der Klinik
Send-MailMessage -To "admin@klinik.de" -Subject "Alarm" `
  -Body "Server down" -SmtpServer "smtp.klinik.de"
```

---

## 4. 🟥 Azure-Integration & Automatisierung

### Tools (Einordnung)

| Tool              | Beschreibung |
|-------------------|--------------|
| Azure Automation  | PowerShell-Runbooks automatisieren wiederkehrende Aufgaben |
| Azure Functions   | Serverlose Scripts – ähnlich wie Mini-APIs |
| Logic Apps        | Visuelle Workflows – kein Code nötig |
| REST Webhooks     | Auslöser von außen, z. B. durch ein Formular-Event |

### Beispiel: Azure-Runbook per Webhook auslösen
```powershell
# Führt ein Azure Runbook über einen HTTP-WebHook aus
Invoke-RestMethod -Method POST `
  -Uri "https://prod.azurewebsites.net/api/runbooktrigger?code=XYZ" `
  -Body (@{ userId = "u123"; action = "createUser" } | ConvertTo-Json) `
  -ContentType "application/json"
```

### Best Practices

- **Logging via `Write-Output`, `Write-Error`**: Alle Schritte protokollieren – wichtig für Debugging.
- **Secrets in Azure Key Vault speichern**: Passwörter/API-Schlüssel niemals im Code.
- **Zeit- oder HTTP-Trigger verwenden**: Runbooks können nach Zeitplan oder per API-Aufruf starten.

### ESM-Systemen Beispiel:
```javascript
function onLoad() {
  // Feld "phone_number" verstecken
  g_form.setDisplay('phone_number', false);

  // Wert vorbelegen
  g_form.setValue('phone_number', '+49 123 456789');

  // Feld als Pflichtfeld setzen
  g_form.setMandatory('phone_number', true);
}
```

### Beispiel: onChange-Event in ServiceNow
```javascript
function onChange(control, oldValue, newValue, isLoading) {
  if (isLoading || newValue === '') {
    return; // Keine Aktion beim Laden oder leerem Wert
  }

  if (newValue === 'IT') {
    g_form.setDisplay('phone_number', true);
  } else {
    g_form.setDisplay('phone_number', false);
  }
}
```

# 🎁 Bonus: Cheat Sheet

## 📋 Standardmethoden (z. B. in ServiceNow `g_form`)

| Aktion                  | Methode                                     |
|-------------------------|---------------------------------------------|
| Wert setzen             | `g_form.setValue('feld', 'Wert')`           |
| Wert holen              | `g_form.getValue('feld')`                   |
| Feld ein-/ausblenden    | `g_form.setDisplay('feld', true/false)`     |
| Pflichtfeld setzen      | `g_form.setMandatory('feld', true/false)`   |
| Sichtbarkeit prüfen     | `g_form.isVisible('feld')`                  |

---

## 📋 Events

| Event     | Beschreibung                                      |
|-----------|---------------------------------------------------|
| `onLoad`  | Wird beim Laden des Formulars ausgeführt         |
| `onChange`| Wird bei Änderung eines Feldwerts ausgeführt     |
| `onClick` | Wird bei Klick auf Button ausgelöst              |

---

## 📋 REST-API mit `fetch`

```javascript
fetch('https://api.deinservice.com/route')
  .then(response => {
    if (!response.ok) throw new Error('Fehler');
    return response.json();
  })
  .then(data => {
    // Daten verarbeiten
  })
  .catch(error => {
    alert('Fehler: ' + error.message);
  });
