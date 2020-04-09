const jgeXml = require('jgexml');
const x2j = require('./lib/xml2json');
const xsd = require('./lib/xsd2json');

const fs = require('fs');
const path = require('path');
const xmlSchemaFolder = './ebics_3.0_schema_H005FinalVersion07-08-2017';
const jsonOutFolder = './json-schemas/';
const files = ['ebics_types_H005.xsd']; // 'ebics_keymgmt_request_H005.xsd', 'ebics_orders_H005.xsd', 'ebics_response_H005.xsd', 'ebics_types_H005.xsd', 'ebics_hev.xsd', 'ebics_keymgmt_response_H005.xsd', 'ebics_request_H005.xsd', 'ebics_signature_S002.xsd', 'xmldsig-core-schema.xsd'];
// 'ebics_H005.xsd'

files.forEach((fileName) => {
  let fp = path.join(xmlSchemaFolder, fileName);
  fs.readFile(fp, 'utf-8', function (err, xml) {
    if (err) return console.log({ fileName, err: err.message });

    var obj = x2j.xml2json(xml, { attributePrefix: '@', valueProperty: 'simpleType', coerceTypes: false });
    //console.log(JSON.stringify(obj, null, 4));
    var json = xsd.getJsonSchema(obj, fp, '', -1, 'xs:');
    console.log('Same (should be false): ' + (obj == json));

    console.log(JSON.stringify(json, null, 4));
  });
});
