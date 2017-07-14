import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType)  {
  // Customize my JSON payload for Ember-Data
  payload = { ingrid: payload };
  console.log(payload);
  // payload.posts.forEach((post) => {
  //   post.user = post.userId;
  //   delete post.userId;
  // });
  return this._super(store, primaryModelClass, payload, id, requestType);
}




});
