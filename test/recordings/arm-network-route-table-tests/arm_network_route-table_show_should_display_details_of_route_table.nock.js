// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"89bd2afd-0aa5-4b9d-bb80-4f41c7fee5ae\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"b18bfacb-8e86-4cdf-abc6-d696d915060b\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '540',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"89bd2afd-0aa5-4b9d-bb80-4f41c7fee5ae"',
  'x-ms-request-id': 'ac1db310-32dd-4e01-87a3-0ab69569e36b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': '117a903d-ebf2-443c-bc3e-0a6ee1b6ca07',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T095909Z:117a903d-ebf2-443c-bc3e-0a6ee1b6ca07',
  date: 'Fri, 29 Apr 2016 09:59:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"89bd2afd-0aa5-4b9d-bb80-4f41c7fee5ae\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"b18bfacb-8e86-4cdf-abc6-d696d915060b\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '540',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"89bd2afd-0aa5-4b9d-bb80-4f41c7fee5ae"',
  'x-ms-request-id': 'ac1db310-32dd-4e01-87a3-0ab69569e36b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': '117a903d-ebf2-443c-bc3e-0a6ee1b6ca07',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T095909Z:117a903d-ebf2-443c-bc3e-0a6ee1b6ca07',
  date: 'Fri, 29 Apr 2016 09:59:08 GMT',
  connection: 'close' });
 return result; }]];