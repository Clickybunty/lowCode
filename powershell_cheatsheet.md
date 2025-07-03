# 💻 PowerShell Cheat Sheet für ESM & Automatisierung

## 🔹 Grundlagen

### 💡 Cmdlet-Syntax
```powershell
Verb-Noun -Parameter Wert
```
Beispiel:
```powershell
Get-Process -Name notepad
```

### 💡 Variablen
```powershell
$Name = "Stevan"
```

### 💡 Kommentare
```powershell
# Dies ist ein Kommentar
```

---

## 🔹 Wichtige Cmdlets

| Zweck            | Cmdlet                   | Beispiel                            |
|------------------|--------------------------|-------------------------------------|
| Prozesse         | `Get-Process`            | `Get-Process chrome`                |
| Dienste          | `Get-Service`            | `Get-Service -Name wuauserv`        |
| Dateien          | `Get-ChildItem`          | `Get-ChildItem C:\Users`           |
| Dateien lesen    | `Get-Content`            | `Get-Content .\log.txt`            |
| Dateien schreiben| `Out-File`               | `"Text" | Out-File .\output.txt`   |
| REST API         | `Invoke-RestMethod`      | Siehe unten                         |
| Mail senden      | `Send-MailMessage`       | Siehe unten                         |

---

## 🔹 REST API Kommunikation

### POST-Beispiel mit JSON
```powershell
$body = @{
    name = "Stevan"
    problem = "PC startet nicht"
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://api.klinik.de/tickets" `
                  -Method POST `
                  -Body $body `
                  -ContentType "application/json"
```

### GET-Beispiel
```powershell
$response = Invoke-RestMethod -Uri "https://api.klinik.de/tickets/123"
$response.title
```

---

## 🔹 E-Mail mit PowerShell

```powershell
Send-MailMessage -To "it@klinik.de" `
  -From "noreply@klinik.de" `
  -Subject "Warnung" `
  -Body "Der Server ist ausgefallen." `
  -SmtpServer "smtp.klinik.de"
```

---

## 🔹 Active Directory (nur bei AD-Modul!)

### Nutzer abfragen
```powershell
Get-ADUser -Filter * -Property DisplayName
```

### Neuer Benutzer
```powershell
New-ADUser -Name "Max Mustermann" `
  -GivenName "Max" `
  -Surname "Mustermann" `
  -SamAccountName "mmustermann" `
  -UserPrincipalName "mmustermann@domain.de"
```

---

## 🔹 Azure PowerShell (Az-Modul)

### Anmeldung bei Azure
```powershell
Connect-AzAccount
```

### Azure AD Nutzer abrufen
```powershell
Get-AzADUser -UserPrincipalName "stevan@domain.de"
```

---

## 🔹 Fehlerbehandlung

```powershell
try {
  # Problematischer Code
  Invoke-RestMethod -Uri "https://api" -Method GET
}
catch {
  Write-Error "Fehler beim Aufruf: $_"
}
```

---

## 🔹 Schleifen & Bedingungen

### If-Bedingung
```powershell
if ($status -eq "OK") {
  Write-Output "Alles gut"
} else {
  Write-Output "Fehler!"
}
```

### ForEach-Schleife
```powershell
$users = "Anna", "Bob", "Chris"
foreach ($u in $users) {
  Write-Output "Hallo $u"
}
```

---

## 🧠 Tipps

- `Get-Help <Cmdlet>` → Hilfe anzeigen
- `Get-Command *user*` → Cmdlets suchen
- `Start-Transcript` / `Stop-Transcript` → Sitzung mitschneiden
- Nutze `| Export-Csv` für Berichte

