const fs = require('fs');
const path = require('path');

// This script ensures that every instance of "Authorization" is sanitized, regardless of its position in the file.

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
                          .replace(/"token":\s*"[^"]*"/g, '"token": "REDACTED"')
                          .replace(/"Authorization":\s*"Bearer [^"]*"/g, '"Authorization": "Bearer REDACTED"')
                          .replace(/"Authorization":\s*"[^"]*"/g, '"Authorization": "REDACTED"');
  
  fs.writeFile(reportPath, sanitizedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing the sanitized report file:', err);
    } else {
      console.log('Report sanitized successfully.');
    }
  });
});
