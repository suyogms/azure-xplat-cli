// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadla3882.azuredatalakeanalytics.net:443')
  .get('/Jobs?api-version=2016-03-20-preview')
  .reply(200, "{\"value\":[{\"jobId\":\"b2a1acfd-53a6-4e16-8143-0e347c835338\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-04-28T18:53:58.4032058+00:00\",\"endTime\":\"2016-04-28T18:54:00.5594793+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\"},{\"jobId\":\"6781d22f-714c-4a36-9833-f49c37bac737\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-04-28T18:52:50.8713159+00:00\",\"startTime\":\"2016-04-28T18:53:30.715442+00:00\",\"endTime\":\"2016-04-28T18:53:36.9342564+00:00\",\"state\":\"Ended\",\"result\":\"Succeeded\"},{\"jobId\":\"ba6f57c8-e7a5-4209-853a-fad86348099a\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-04-28T18:52:48.8087978+00:00\",\"startTime\":\"2016-04-28T18:53:27.6216652+00:00\",\"endTime\":\"2016-04-28T18:53:33.8248483+00:00\",\"state\":\"Ended\",\"result\":\"Succeeded\"}]}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7dd9ea4b-7f48-4960-83e7-be8443dc28c9',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:54:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla3882.azuredatalakeanalytics.net:443')
  .get('/Jobs?api-version=2016-03-20-preview')
  .reply(200, "{\"value\":[{\"jobId\":\"b2a1acfd-53a6-4e16-8143-0e347c835338\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-04-28T18:53:58.4032058+00:00\",\"endTime\":\"2016-04-28T18:54:00.5594793+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\"},{\"jobId\":\"6781d22f-714c-4a36-9833-f49c37bac737\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-04-28T18:52:50.8713159+00:00\",\"startTime\":\"2016-04-28T18:53:30.715442+00:00\",\"endTime\":\"2016-04-28T18:53:36.9342564+00:00\",\"state\":\"Ended\",\"result\":\"Succeeded\"},{\"jobId\":\"ba6f57c8-e7a5-4209-853a-fad86348099a\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-04-28T18:52:48.8087978+00:00\",\"startTime\":\"2016-04-28T18:53:27.6216652+00:00\",\"endTime\":\"2016-04-28T18:53:33.8248483+00:00\",\"state\":\"Ended\",\"result\":\"Succeeded\"}]}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7dd9ea4b-7f48-4960-83e7-be8443dc28c9',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:54:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla3882.azuredatalakeanalytics.net:443')
  .get('/Jobs?$filter=submitTime%20ge%20datetimeoffset%272016-04-22%27&api-version=2016-03-20-preview')
  .reply(200, "{\"value\":[{\"jobId\":\"b2a1acfd-53a6-4e16-8143-0e347c835338\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-04-28T18:53:58.4032058+00:00\",\"endTime\":\"2016-04-28T18:54:00.5594793+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\"},{\"jobId\":\"6781d22f-714c-4a36-9833-f49c37bac737\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-04-28T18:52:50.8713159+00:00\",\"startTime\":\"2016-04-28T18:53:30.715442+00:00\",\"endTime\":\"2016-04-28T18:53:36.9342564+00:00\",\"state\":\"Ended\",\"result\":\"Succeeded\"},{\"jobId\":\"ba6f57c8-e7a5-4209-853a-fad86348099a\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-04-28T18:52:48.8087978+00:00\",\"startTime\":\"2016-04-28T18:53:27.6216652+00:00\",\"endTime\":\"2016-04-28T18:53:33.8248483+00:00\",\"state\":\"Ended\",\"result\":\"Succeeded\"}]}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '93fe6d51-9617-40a1-9e6b-2eccdee75eb6',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:54:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla3882.azuredatalakeanalytics.net:443')
  .get('/Jobs?$filter=submitTime%20ge%20datetimeoffset%272016-04-22%27&api-version=2016-03-20-preview')
  .reply(200, "{\"value\":[{\"jobId\":\"b2a1acfd-53a6-4e16-8143-0e347c835338\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-04-28T18:53:58.4032058+00:00\",\"endTime\":\"2016-04-28T18:54:00.5594793+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\"},{\"jobId\":\"6781d22f-714c-4a36-9833-f49c37bac737\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-04-28T18:52:50.8713159+00:00\",\"startTime\":\"2016-04-28T18:53:30.715442+00:00\",\"endTime\":\"2016-04-28T18:53:36.9342564+00:00\",\"state\":\"Ended\",\"result\":\"Succeeded\"},{\"jobId\":\"ba6f57c8-e7a5-4209-853a-fad86348099a\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-04-28T18:52:48.8087978+00:00\",\"startTime\":\"2016-04-28T18:53:27.6216652+00:00\",\"endTime\":\"2016-04-28T18:53:33.8248483+00:00\",\"state\":\"Ended\",\"result\":\"Succeeded\"}]}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '93fe6d51-9617-40a1-9e6b-2eccdee75eb6',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:54:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla3882.azuredatalakeanalytics.net:443')
  .get('/Jobs?$filter=submitTime%20lt%20datetimeoffset%272016-04-21%27&api-version=2016-03-20-preview')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '241573db-d2a0-44b8-a2fd-238c59729162',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:54:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla3882.azuredatalakeanalytics.net:443')
  .get('/Jobs?$filter=submitTime%20lt%20datetimeoffset%272016-04-21%27&api-version=2016-03-20-preview')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '241573db-d2a0-44b8-a2fd-238c59729162',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:54:04 GMT',
  connection: 'close' });
 return result; }]];