import Model from 'ember-data/model';
import DS from 'ember-data';

const {
  attr
 } = DS;

export default DS.Model.extend({
  timestamp: attr('string'),
  lang: attr('string'),
  result: attr()
});
