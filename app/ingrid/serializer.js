import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType)  {
  // Customize my JSON payload for Ember-Data
  payload = { ingrid: payload };
  console.log(payload);
  return this._super(store, primaryModelClass, payload, id, requestType);
}
});
