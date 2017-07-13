import Ember from 'ember';

const { Route, set } = Ember;

export default Route.extend({
  model() { //model hoock
    return this.store.findAll('ingrid'); //name of the model
  }
//
});
