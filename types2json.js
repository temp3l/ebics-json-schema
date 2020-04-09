const fs = require('fs');
const path = require('path');
const sourceTypes = JSON.parse(fs.readFileSync('./json-schemas/ebics_types_H005.xsd.json'));

console.log(sourceTypes);
