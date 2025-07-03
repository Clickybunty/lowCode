# 🧠 Low-Code ESM Developer – Cheat Sheet

## 1. 🟦 Low-Code JavaScript im ESM-Frontend

### Typische Aufgaben:
- Felder ein-/ausblenden
- Pflichtfelder setzen / entfernen
- Werte vorbelegen
- REST-Aufrufe bei Button-Click

### Beispiel: Feld anzeigen/verstecken
```javascript
if (form.getValue("ticketType") === "hardware") {
    form.setVisible("hardwareDetails", true);
} else {
    form.setVisible("hardwareDetails", false);
}
```

### Beispiel: Pflichtfeld setzen
```javascript
form.setMandatory("userId", true);
```

### Beispiel: Wert vorbelegen
```javascript
form.setValue("priority", "hoch");
```

### Event-Trigger
- `onLoad()` → beim Laden des Formulars
- `onChange(field)` → bei Feldänderung
- `onClick(button)` → bei Button-Klick

---

## 2. 🟧 REST-Verständnis & API-Kommunikation

### Methoden
- `GET` – Daten abfragen
- `POST` – Daten senden (z. B. neues Ticket)
- `PUT/PATCH` – Daten aktualisieren
- `DELETE` – Daten löschen

### Beispiel: REST-Aufruf via fetch
```javascript
fetch("https://api.klinik.de/tickets", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer abc123"
  },
  body: JSON.stringify({
    title: "Drucker defekt",
    userId: "u123"
  })
})
.then(response => response.json())
.then(data => {
  console.log("Ticket-ID:", data.id);
});
```

---

## 3. 🟩 PowerShell für Automatisierung

### Grundlagen
- `Get-Process`, `Get-Service` → Systeminfo
- `Send-MailMessage` → E-Mails senden
- `Invoke-RestMethod` → API-Aufrufe
- `Start-Process` → Programme starten

### Beispiel: REST-Call in PowerShell
```powershell
$body = @{
  title = "E-Mail geht nicht"
  userId = "u123"
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://api.klinik.de/tickets" `
  -Method POST `
  -Body $body `
  -ContentType "application/json"
```

### Beispiel: E-Mail versenden
```powershell
Send-MailMessage -To "admin@klinik.de" -Subject "Alarm" `
  -Body "Server down" -SmtpServer "smtp.klinik.de"
```

---

## 4. 🟥 Azure-Integration & Automatisierung

### Tools
- **Azure Automation** (PowerShell-Runbooks)
- **Azure Functions** (Serverless Scripts)
- **Logic Apps** (Low-Code-Flows)
- **REST Webhooks** (Trigger aus Formular)

### Beispiel: Azure-Runbook per Webhook auslösen
```powershell
Invoke-RestMethod -Method POST `
  -Uri "https://prod.azurewebsites.net/api/runbooktrigger?code=XYZ" `
  -Body (@{ userId = "u123"; action = "createUser" } | ConvertTo-Json) `
  -ContentType "application/json"
```

### Best Practices
- Logging via `Write-Output`, `Write-Error`
- Secrets in Azure Key Vault speichern
- Runbooks mit Zeitplan oder HTTP-Trigger starten
