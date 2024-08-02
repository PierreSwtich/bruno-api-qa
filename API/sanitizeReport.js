const fs = require('fs');
const path = require('path');

const reportPath = path.join(__dirname, 'results', 'index.html');
// const reportPath = path.join(__dirname, 'index.html');

fs.readFile(reportPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the report file:', err);
    return;
  }

  // Replace sensitive data
  let sanitizedData = data.replace(/"username":\s*"[^"]*"/g, '"username": "REDACTED"')
                          .replace(/"password":\s*"[^"]*"/g, '"password": "REDACTED"')
                          .replace(/"token":\s*"[^"]*"/g, '"token": "REDACTED"');

  fs.writeFile(reportPath, sanitizedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing the sanitized report file:', err);
    } else {
      console.log('Report sanitized successfully.');
    }
  });
});
