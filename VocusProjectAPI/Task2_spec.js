var frisby = require('frisby');
frisby.create('Get Information for King Street')
  .get('https://testuser@vocus.com.au:vocus1234@api.vocus.net/0.0.0/availability/173%20King%20St,%20Sydney%20NSW%202000,%20Australia')
  .expectStatus(200)
  .expectBodyContains('173 King St')
  .expectMaxResponseTime(5000)
.toss()