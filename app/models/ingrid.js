import Model from 'ember-data/model';
import DS from 'ember-data';

const {
  attr
 } = DS;

export default DS.Model.extend({
  result: attr(),
  userQuery: attr('string', { defaultValue: 'lets go' })
});
