import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.api.ai',
  namespace: 'v1', //query?v=20150910&sessionId=1234567890&lang=en&query=lets go',
  // namespace: 'v1/query?v=20150910',
  headers : {
  "Authorization": "Bearer " + '0f46317926264d0eb3d0eaf804b6831d'
  },
  pathForType() { // one of the method of DS.RESTAdapter specifies the actual path
      return 'query?v=20150910&sessionId=1234567890&lang=en&query=lets go';
    }
});
