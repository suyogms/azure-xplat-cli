// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate1875/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e6ac7548-de67-4ec0-9d13-c2cba5509e3f?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e6ac7548-de67-4ec0-9d13-c2cba5509e3f?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131066784942764495',
  'x-ms-request-id': 'e6ac7548-de67-4ec0-9d13-c2cba5509e3f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '3d4ca99a-2114-4c26-a247-fee5d03b0f0b',
  'x-ms-routing-request-id': 'WESTUS:20160503T052935Z:3d4ca99a-2114-4c26-a247-fee5d03b0f0b',
  date: 'Tue, 03 May 2016 05:29:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate1875/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e6ac7548-de67-4ec0-9d13-c2cba5509e3f?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e6ac7548-de67-4ec0-9d13-c2cba5509e3f?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131066784942764495',
  'x-ms-request-id': 'e6ac7548-de67-4ec0-9d13-c2cba5509e3f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '3d4ca99a-2114-4c26-a247-fee5d03b0f0b',
  'x-ms-routing-request-id': 'WESTUS:20160503T052935Z:3d4ca99a-2114-4c26-a247-fee5d03b0f0b',
  date: 'Tue, 03 May 2016 05:29:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e6ac7548-de67-4ec0-9d13-c2cba5509e3f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-05-03T05:29:34.6837071+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"e6ac7548-de67-4ec0-9d13-c2cba5509e3f\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131066784942764495',
  'x-ms-request-id': '45189a10-3de8-45cf-ae9a-47bba4e83809',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'dea6f6de-48e5-4c64-8359-ef6e0b79d795',
  'x-ms-routing-request-id': 'WESTUS:20160503T053006Z:dea6f6de-48e5-4c64-8359-ef6e0b79d795',
  date: 'Tue, 03 May 2016 05:30:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e6ac7548-de67-4ec0-9d13-c2cba5509e3f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-05-03T05:29:34.6837071+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"e6ac7548-de67-4ec0-9d13-c2cba5509e3f\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131066784942764495',
  'x-ms-request-id': '45189a10-3de8-45cf-ae9a-47bba4e83809',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'dea6f6de-48e5-4c64-8359-ef6e0b79d795',
  'x-ms-routing-request-id': 'WESTUS:20160503T053006Z:dea6f6de-48e5-4c64-8359-ef6e0b79d795',
  date: 'Tue, 03 May 2016 05:30:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e6ac7548-de67-4ec0-9d13-c2cba5509e3f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-05-03T05:29:34.6837071+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"e6ac7548-de67-4ec0-9d13-c2cba5509e3f\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131066784942764495',
  'x-ms-request-id': 'da252cce-4283-4df3-a826-fe24402c7998',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '6ae5b7b2-89e4-4949-b3bb-16ff80e279b1',
  'x-ms-routing-request-id': 'WESTUS:20160503T053037Z:6ae5b7b2-89e4-4949-b3bb-16ff80e279b1',
  date: 'Tue, 03 May 2016 05:30:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e6ac7548-de67-4ec0-9d13-c2cba5509e3f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-05-03T05:29:34.6837071+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"e6ac7548-de67-4ec0-9d13-c2cba5509e3f\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131066784942764495',
  'x-ms-request-id': 'da252cce-4283-4df3-a826-fe24402c7998',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '6ae5b7b2-89e4-4949-b3bb-16ff80e279b1',
  'x-ms-routing-request-id': 'WESTUS:20160503T053037Z:6ae5b7b2-89e4-4949-b3bb-16ff80e279b1',
  date: 'Tue, 03 May 2016 05:30:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e6ac7548-de67-4ec0-9d13-c2cba5509e3f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-05-03T05:29:34.6837071+00:00\",\r\n  \"endTime\": \"2016-05-03T05:31:07.6049288+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"e6ac7548-de67-4ec0-9d13-c2cba5509e3f\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131066784942764495',
  'x-ms-request-id': '72f18220-2a0b-4ac2-8927-a276d7121607',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'd65f00ab-e1ac-4867-8c76-68428bae6172',
  'x-ms-routing-request-id': 'CENTRALUS:20160503T053108Z:d65f00ab-e1ac-4867-8c76-68428bae6172',
  date: 'Tue, 03 May 2016 05:31:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e6ac7548-de67-4ec0-9d13-c2cba5509e3f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-05-03T05:29:34.6837071+00:00\",\r\n  \"endTime\": \"2016-05-03T05:31:07.6049288+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"e6ac7548-de67-4ec0-9d13-c2cba5509e3f\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131066784942764495',
  'x-ms-request-id': '72f18220-2a0b-4ac2-8927-a276d7121607',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'd65f00ab-e1ac-4867-8c76-68428bae6172',
  'x-ms-routing-request-id': 'CENTRALUS:20160503T053108Z:d65f00ab-e1ac-4867-8c76-68428bae6172',
  date: 'Tue, 03 May 2016 05:31:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate1875/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ebbf4801-5705-41e2-bfdb-a314437e52a0?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ebbf4801-5705-41e2-bfdb-a314437e52a0?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131066784942764495',
  'x-ms-request-id': 'ebbf4801-5705-41e2-bfdb-a314437e52a0',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '96ecd84b-ba94-4391-887b-22f64f65c130',
  'x-ms-routing-request-id': 'CENTRALUS:20160503T053110Z:96ecd84b-ba94-4391-887b-22f64f65c130',
  date: 'Tue, 03 May 2016 05:31:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate1875/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ebbf4801-5705-41e2-bfdb-a314437e52a0?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ebbf4801-5705-41e2-bfdb-a314437e52a0?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131066784942764495',
  'x-ms-request-id': 'ebbf4801-5705-41e2-bfdb-a314437e52a0',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '96ecd84b-ba94-4391-887b-22f64f65c130',
  'x-ms-routing-request-id': 'CENTRALUS:20160503T053110Z:96ecd84b-ba94-4391-887b-22f64f65c130',
  date: 'Tue, 03 May 2016 05:31:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ebbf4801-5705-41e2-bfdb-a314437e52a0?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-05-03T05:31:09.9799125+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"ebbf4801-5705-41e2-bfdb-a314437e52a0\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131066784942764495',
  'x-ms-request-id': '9e03642b-6a34-40dd-a830-3b42769b5460',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '8380a969-9ae1-43a7-a623-16e20acb6971',
  'x-ms-routing-request-id': 'CENTRALUS:20160503T053141Z:8380a969-9ae1-43a7-a623-16e20acb6971',
  date: 'Tue, 03 May 2016 05:31:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ebbf4801-5705-41e2-bfdb-a314437e52a0?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-05-03T05:31:09.9799125+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"ebbf4801-5705-41e2-bfdb-a314437e52a0\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131066784942764495',
  'x-ms-request-id': '9e03642b-6a34-40dd-a830-3b42769b5460',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '8380a969-9ae1-43a7-a623-16e20acb6971',
  'x-ms-routing-request-id': 'CENTRALUS:20160503T053141Z:8380a969-9ae1-43a7-a623-16e20acb6971',
  date: 'Tue, 03 May 2016 05:31:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ebbf4801-5705-41e2-bfdb-a314437e52a0?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-05-03T05:31:09.9799125+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"ebbf4801-5705-41e2-bfdb-a314437e52a0\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131066784942764495',
  'x-ms-request-id': 'c416ae44-ed96-4109-a61c-b2d815d8ccfb',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'aa5e35d9-1bea-4f04-9e20-8a84a9895d52',
  'x-ms-routing-request-id': 'CENTRALUS:20160503T053213Z:aa5e35d9-1bea-4f04-9e20-8a84a9895d52',
  date: 'Tue, 03 May 2016 05:32:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ebbf4801-5705-41e2-bfdb-a314437e52a0?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-05-03T05:31:09.9799125+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"ebbf4801-5705-41e2-bfdb-a314437e52a0\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131066784942764495',
  'x-ms-request-id': 'c416ae44-ed96-4109-a61c-b2d815d8ccfb',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'aa5e35d9-1bea-4f04-9e20-8a84a9895d52',
  'x-ms-routing-request-id': 'CENTRALUS:20160503T053213Z:aa5e35d9-1bea-4f04-9e20-8a84a9895d52',
  date: 'Tue, 03 May 2016 05:32:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ebbf4801-5705-41e2-bfdb-a314437e52a0?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-05-03T05:31:09.9799125+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"ebbf4801-5705-41e2-bfdb-a314437e52a0\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131066784942764495',
  'x-ms-request-id': '9493c980-3963-4257-8fc1-c3a087957947',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '47928950-996b-48a0-8b2d-9127c28b99b6',
  'x-ms-routing-request-id': 'CENTRALUS:20160503T053244Z:47928950-996b-48a0-8b2d-9127c28b99b6',
  date: 'Tue, 03 May 2016 05:32:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ebbf4801-5705-41e2-bfdb-a314437e52a0?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-05-03T05:31:09.9799125+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"ebbf4801-5705-41e2-bfdb-a314437e52a0\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131066784942764495',
  'x-ms-request-id': '9493c980-3963-4257-8fc1-c3a087957947',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '47928950-996b-48a0-8b2d-9127c28b99b6',
  'x-ms-routing-request-id': 'CENTRALUS:20160503T053244Z:47928950-996b-48a0-8b2d-9127c28b99b6',
  date: 'Tue, 03 May 2016 05:32:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ebbf4801-5705-41e2-bfdb-a314437e52a0?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-05-03T05:31:09.9799125+00:00\",\r\n  \"endTime\": \"2016-05-03T05:33:13.0104404+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"ebbf4801-5705-41e2-bfdb-a314437e52a0\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131066784942764495',
  'x-ms-request-id': 'ff1bbe92-b44a-482f-b3bb-f833a0ccb24f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '94a0a8c4-fa5e-4bed-ab91-b79e674ffa80',
  'x-ms-routing-request-id': 'WESTUS:20160503T053315Z:94a0a8c4-fa5e-4bed-ab91-b79e674ffa80',
  date: 'Tue, 03 May 2016 05:33:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/ebbf4801-5705-41e2-bfdb-a314437e52a0?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-05-03T05:31:09.9799125+00:00\",\r\n  \"endTime\": \"2016-05-03T05:33:13.0104404+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"ebbf4801-5705-41e2-bfdb-a314437e52a0\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131066784942764495',
  'x-ms-request-id': 'ff1bbe92-b44a-482f-b3bb-f833a0ccb24f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '94a0a8c4-fa5e-4bed-ab91-b79e674ffa80',
  'x-ms-routing-request-id': 'WESTUS:20160503T053315Z:94a0a8c4-fa5e-4bed-ab91-b79e674ffa80',
  date: 'Tue, 03 May 2016 05:33:14 GMT',
  connection: 'close' });
 return result; }]];