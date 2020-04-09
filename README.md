
### Just a little playground
### converting ebics-xml to json-schema

#https://github.com/Mermade/jgeXml/blob/master/testxsd2j.js

echo "converting: ebics\*types_H0"
node ./lib/testxsd2j.js ./ebicsXML/ebics_types_H005.xsd ./json-schemas/ebics_types_H005.json
echo "converting: ebics_orders_H"
node ./lib/testxsd2j.js ./ebicsXML/ebics_orders_H005.xsd ./json-schemas/ebics_orders_H005.json
echo "converting: ebics_H005.xsd"
node ./lib/testxsd2j.js ./ebicsXML/ebics_keymgmt_request_H005.xsd ./json-schemas/keymgmt_request_H005.json
echo "converting: ebics_orders_H"
node ./lib/testxsd2j.js ./ebicsXML/ebics_orders_H005.xsd ./json-schemas/orders_H005.json
echo "converting: ebics_response"
node ./lib/testxsd2j.js ./ebicsXML/ebics_response_H005.xsd ./json-schemas/response_H005.json
echo "converting: ebics_types_H0"
node ./lib/testxsd2j.js ./ebicsXML/xmldsig-core-schema.xsd ./json-schemas/xmldsig-core-schema.xsd.json
echo "converting: ebics_hev.xsd "
node ./lib/testxsd2j.js ./ebicsXML/ebics_hev.xsd ./json-schemas/hev.json
echo "converting: ebics_keymgmt"
node ./lib/testxsd2j.js ./ebicsXML/ebics_keymgmt_response_H005.xsd ./json-schemas/keymgmt_response_H005.json
echo "converting: ebics_request"
node ./lib/testxsd2j.js ./ebicsXML/ebics_request_H005.xsd ./json-schemas/request_H005.json
echo "converting: ebics_signatur"
node ./lib/testxsd2j.js ./ebicsXML/ebics_signature_S002.xsd ./json-schemas/signature_S002.json
