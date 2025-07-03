function onChange(control, oldValue, newValue, isLoading) {
  if (isLoading || newValue === '') {
    return; // Keine Aktion beim Laden oder leerem Wert
  }

  if (newValue === 'HR') {
    g_form.setDisplay('customer_email', true);
  } else {
    g_form.setDisplay('customer_email', false);
  }
}

function onClickCheckData() {
    // Überprüfen, ob das Feld 'customer_email' sichtbar ist
    // g_form.getValue(...) liest den aktuellen Feldwert.
  var email = g_form.getValue('customer_email');

    // Überprüfen, ob das E-Mail-Feld leer ist
    // Die includes('@')-Prüfung ist eine einfache Validierung.
  if (!email.includes('@')) {
    // alert(...) zeigt eine Nachricht an den Benutzer an.
    alert('Bitte eine gültige E-Mail-Adresse eingeben!');
    // return false; bricht die Funktion ab, wenn die E-Mail ungültig ist
    return false;
  }

  alert('Daten sehen gut aus!');
  return true;
}

function onClickShowCategory(){
    // Hier wird die Kategorie angezeigt, wenn sie ausgewählt ist
    var category = g_form.getValue('category');
    
    if (category) {
        alert('Ausgewählte Kategorie: ' + category);
    } else {
        alert('Keine Kategorie ausgewählt.');
    }
}

function onClickCheckZip() {
  var plz = g_form.getValue('zip_code');

  if (!plz) {
    alert('Bitte PLZ eingeben.');
    return;
  }

    // Fetch API wird verwendet, um eine Anfrage an die Zippopotam API zu senden
  fetch('https://api.zippopotam.us/de/' + plz)
    // Die Antwort wird überprüft, ob sie erfolgreich ist
    .then(response => {
      if (!response.ok) {
        throw new Error('PLZ nicht gefunden.');
      }
      return response.json(); // Antwort wird in JSON umgewandelt
    })
    .then(data => {
      var ort = data.places[0]['place name'];
      alert('PLZ gehört zu: ' + ort);
    })
    // Fehlerbehandlung, falls die PLZ nicht gefunden wird oder ein anderer Fehler auftritt
    .catch(error => {
      alert('Fehler: ' + error.message);
    });
}

function onClickCheckEmailProvider(){
    var email = g_form.getValue('customer_email');
    var provider = email.split('@')[1];
    if (!email) {
        alert('Bitte E-Mail eingeben.');
        return;
    }

    alert('Email-Provider: ' + provider);
    fetch('https://api.example.com/domaininfo/' + provider)
        .then(response => {
            if (!response.ok) {
                throw new Error('Provider nicht gefunden.');
            }
            return response.json();
        })
        .then(data => {
            var firma = data.companyName;
            alert('Name der Firma: ' + firma);
        })      
        .catch(error => {
            alert('Fehler: ' + error.message);
        });
}
