const { google } = require('googleapis');
const { run } = require('./authflow');
const { search } = require('./search');

function exeapi(auth) {
  const sheets = google.sheets({ version: 'v4', auth });
  sheets.spreadsheets.values.get({
    spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
    range: 'Class Data!A2:E',
  }, (err, data) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = data.data.values;
    if (rows.length) {
      console.log(search(rows, "Maureen"));
    } else {
      console.log('No data found.');
    }
  });
}

run(exeapi);