const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();
const xmlSchemaFolder = './ebics_3.0_schema_H005FinalVersion07-08-2017';
const jsonOutFolder = './json-schemas/';
const files = ['ebics_types_H005.xsd', 'ebics_keymgmt_request_H005.xsd', 'ebics_orders_H005.xsd', 'ebics_response_H005.xsd', 'ebics_types_H005.xsd', 'ebics_hev.xsd', 'ebics_keymgmt_response_H005.xsd', 'ebics_request_H005.xsd', 'ebics_signature_S002.xsd', 'xmldsig-core-schema.xsd'];
// 'ebics_H005.xsd'

files.forEach((fileName) => {
  fs.readFile(path.join(xmlSchemaFolder, fileName), function (err, data) {
    if (err) return console.log({ fileName, err: err.message });
    parser.parseString(data, function (error, result) {
      if (error || !result) throw error;
      fs.writeFileSync(path.join(jsonOutFolder, `${fileName}.json`), JSON.stringify(result, null, 4));
    });
  });
});


